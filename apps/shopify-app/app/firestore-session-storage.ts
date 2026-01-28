import { Session } from "@shopify/shopify-api";
import type { SessionStorage } from "@shopify/shopify-app-session-storage";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, cert } from "firebase-admin/app";

const COLLECTION_NAME = "shopify_sessions";

function getDb() {
  if (getApps().length === 0) {
    const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    if (serviceAccount) {
      initializeApp({ credential: cert(serviceAccount) });
    } else {
      // On Firebase App Hosting, default credentials are available automatically
      initializeApp();
    }
  }
  return getFirestore();
}

export class FirestoreSessionStorage implements SessionStorage {
  private get collection() {
    return getDb().collection(COLLECTION_NAME);
  }

  async storeSession(session: Session): Promise<boolean> {
    await this.collection.doc(session.id).set(session.toObject());
    return true;
  }

  async loadSession(id: string): Promise<Session | undefined> {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) return undefined;
    const data = doc.data();
    if (!data) return undefined;
    return Session.fromPropertyArray(Object.entries(data));
  }

  async deleteSession(id: string): Promise<boolean> {
    await this.collection.doc(id).delete();
    return true;
  }

  async deleteSessions(ids: string[]): Promise<boolean> {
    const batch = getDb().batch();
    for (const id of ids) {
      batch.delete(this.collection.doc(id));
    }
    await batch.commit();
    return true;
  }

  async findSessionsByShop(shop: string): Promise<Session[]> {
    const snapshot = await this.collection
      .where("shop", "==", shop)
      .get();
    return snapshot.docs
      .map((doc) => {
        const data = doc.data();
        return data ? Session.fromPropertyArray(Object.entries(data)) : null;
      })
      .filter((s): s is Session => s !== null);
  }
}
