# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-sdk/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetUser*](#getuser)
  - [*GetUserByEmail*](#getuserbyemail)
  - [*ListCourses*](#listcourses)
  - [*GetCourse*](#getcourse)
  - [*GetCourseWithLessons*](#getcoursewithlessons)
  - [*GetUserEnrollments*](#getuserenrollments)
  - [*GetLesson*](#getlesson)
  - [*GetLessonsForCourse*](#getlessonsforcourse)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*UpdateUser*](#updateuser)
  - [*CreateCourse*](#createcourse)
  - [*CreateLesson*](#createlesson)
  - [*EnrollUserInCourse*](#enrolluserincourse)
  - [*UpdateEnrollmentProgress*](#updateenrollmentprogress)
  - [*CompleteEnrollment*](#completeenrollment)
  - [*MarkLessonComplete*](#marklessoncomplete)
  - [*CreateQuiz*](#createquiz)
  - [*RecordQuizAttempt*](#recordquizattempt)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@repo/dataconnect-sdk` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@repo/dataconnect-sdk';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@repo/dataconnect-sdk';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetUser
You can execute the `GetUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
getUser(vars: GetUserVariables): QueryPromise<GetUserData, GetUserVariables>;

interface GetUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
}
export const getUserRef: GetUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUser(dc: DataConnect, vars: GetUserVariables): QueryPromise<GetUserData, GetUserVariables>;

interface GetUserRef {
  ...
  (dc: DataConnect, vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
}
export const getUserRef: GetUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserRef:
```typescript
const name = getUserRef.operationName;
console.log(name);
```

### Variables
The `GetUser` query requires an argument of type `GetUserVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserVariables {
  id: User_Key;
}
```
### Return Type
Recall that executing the `GetUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserData {
  user?: {
    id: UUIDString;
    displayName: string;
    email: string;
    photoUrl?: string | null;
    createdAt: TimestampString;
  } & User_Key;
}
```
### Using `GetUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUser, GetUserVariables } from '@repo/dataconnect-sdk';

// The `GetUser` query requires an argument of type `GetUserVariables`:
const getUserVars: GetUserVariables = {
  id: ..., 
};

// Call the `getUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUser(getUserVars);
// Variables can be defined inline as well.
const { data } = await getUser({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUser(dataConnect, getUserVars);

console.log(data.user);

// Or, you can use the `Promise` API.
getUser(getUserVars).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserRef, GetUserVariables } from '@repo/dataconnect-sdk';

// The `GetUser` query requires an argument of type `GetUserVariables`:
const getUserVars: GetUserVariables = {
  id: ..., 
};

// Call the `getUserRef()` function to get a reference to the query.
const ref = getUserRef(getUserVars);
// Variables can be defined inline as well.
const ref = getUserRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserRef(dataConnect, getUserVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## GetUserByEmail
You can execute the `GetUserByEmail` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
getUserByEmail(vars: GetUserByEmailVariables): QueryPromise<GetUserByEmailData, GetUserByEmailVariables>;

interface GetUserByEmailRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserByEmailVariables): QueryRef<GetUserByEmailData, GetUserByEmailVariables>;
}
export const getUserByEmailRef: GetUserByEmailRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserByEmail(dc: DataConnect, vars: GetUserByEmailVariables): QueryPromise<GetUserByEmailData, GetUserByEmailVariables>;

interface GetUserByEmailRef {
  ...
  (dc: DataConnect, vars: GetUserByEmailVariables): QueryRef<GetUserByEmailData, GetUserByEmailVariables>;
}
export const getUserByEmailRef: GetUserByEmailRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserByEmailRef:
```typescript
const name = getUserByEmailRef.operationName;
console.log(name);
```

### Variables
The `GetUserByEmail` query requires an argument of type `GetUserByEmailVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserByEmailVariables {
  email: string;
}
```
### Return Type
Recall that executing the `GetUserByEmail` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserByEmailData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserByEmailData {
  users: ({
    id: UUIDString;
    displayName: string;
    email: string;
    photoUrl?: string | null;
    createdAt: TimestampString;
  } & User_Key)[];
}
```
### Using `GetUserByEmail`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserByEmail, GetUserByEmailVariables } from '@repo/dataconnect-sdk';

// The `GetUserByEmail` query requires an argument of type `GetUserByEmailVariables`:
const getUserByEmailVars: GetUserByEmailVariables = {
  email: ..., 
};

// Call the `getUserByEmail()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserByEmail(getUserByEmailVars);
// Variables can be defined inline as well.
const { data } = await getUserByEmail({ email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserByEmail(dataConnect, getUserByEmailVars);

console.log(data.users);

// Or, you can use the `Promise` API.
getUserByEmail(getUserByEmailVars).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `GetUserByEmail`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserByEmailRef, GetUserByEmailVariables } from '@repo/dataconnect-sdk';

// The `GetUserByEmail` query requires an argument of type `GetUserByEmailVariables`:
const getUserByEmailVars: GetUserByEmailVariables = {
  email: ..., 
};

// Call the `getUserByEmailRef()` function to get a reference to the query.
const ref = getUserByEmailRef(getUserByEmailVars);
// Variables can be defined inline as well.
const ref = getUserByEmailRef({ email: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserByEmailRef(dataConnect, getUserByEmailVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## ListCourses
You can execute the `ListCourses` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
listCourses(): QueryPromise<ListCoursesData, undefined>;

interface ListCoursesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCoursesData, undefined>;
}
export const listCoursesRef: ListCoursesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listCourses(dc: DataConnect): QueryPromise<ListCoursesData, undefined>;

interface ListCoursesRef {
  ...
  (dc: DataConnect): QueryRef<ListCoursesData, undefined>;
}
export const listCoursesRef: ListCoursesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listCoursesRef:
```typescript
const name = listCoursesRef.operationName;
console.log(name);
```

### Variables
The `ListCourses` query has no variables.
### Return Type
Recall that executing the `ListCourses` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListCoursesData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListCoursesData {
  courses: ({
    id: UUIDString;
    title: string;
    description: string;
    estimatedCompletionTime: string;
    imageUrl?: string | null;
    createdAt: TimestampString;
  } & Course_Key)[];
}
```
### Using `ListCourses`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listCourses } from '@repo/dataconnect-sdk';


// Call the `listCourses()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listCourses();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listCourses(dataConnect);

console.log(data.courses);

// Or, you can use the `Promise` API.
listCourses().then((response) => {
  const data = response.data;
  console.log(data.courses);
});
```

### Using `ListCourses`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listCoursesRef } from '@repo/dataconnect-sdk';


// Call the `listCoursesRef()` function to get a reference to the query.
const ref = listCoursesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listCoursesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.courses);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.courses);
});
```

## GetCourse
You can execute the `GetCourse` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
getCourse(vars: GetCourseVariables): QueryPromise<GetCourseData, GetCourseVariables>;

interface GetCourseRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCourseVariables): QueryRef<GetCourseData, GetCourseVariables>;
}
export const getCourseRef: GetCourseRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCourse(dc: DataConnect, vars: GetCourseVariables): QueryPromise<GetCourseData, GetCourseVariables>;

interface GetCourseRef {
  ...
  (dc: DataConnect, vars: GetCourseVariables): QueryRef<GetCourseData, GetCourseVariables>;
}
export const getCourseRef: GetCourseRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCourseRef:
```typescript
const name = getCourseRef.operationName;
console.log(name);
```

### Variables
The `GetCourse` query requires an argument of type `GetCourseVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetCourseVariables {
  id: Course_Key;
}
```
### Return Type
Recall that executing the `GetCourse` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCourseData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCourseData {
  course?: {
    id: UUIDString;
    title: string;
    description: string;
    estimatedCompletionTime: string;
    imageUrl?: string | null;
    createdAt: TimestampString;
  } & Course_Key;
}
```
### Using `GetCourse`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCourse, GetCourseVariables } from '@repo/dataconnect-sdk';

// The `GetCourse` query requires an argument of type `GetCourseVariables`:
const getCourseVars: GetCourseVariables = {
  id: ..., 
};

// Call the `getCourse()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCourse(getCourseVars);
// Variables can be defined inline as well.
const { data } = await getCourse({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCourse(dataConnect, getCourseVars);

console.log(data.course);

// Or, you can use the `Promise` API.
getCourse(getCourseVars).then((response) => {
  const data = response.data;
  console.log(data.course);
});
```

### Using `GetCourse`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCourseRef, GetCourseVariables } from '@repo/dataconnect-sdk';

// The `GetCourse` query requires an argument of type `GetCourseVariables`:
const getCourseVars: GetCourseVariables = {
  id: ..., 
};

// Call the `getCourseRef()` function to get a reference to the query.
const ref = getCourseRef(getCourseVars);
// Variables can be defined inline as well.
const ref = getCourseRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCourseRef(dataConnect, getCourseVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.course);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.course);
});
```

## GetCourseWithLessons
You can execute the `GetCourseWithLessons` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
getCourseWithLessons(vars: GetCourseWithLessonsVariables): QueryPromise<GetCourseWithLessonsData, GetCourseWithLessonsVariables>;

interface GetCourseWithLessonsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCourseWithLessonsVariables): QueryRef<GetCourseWithLessonsData, GetCourseWithLessonsVariables>;
}
export const getCourseWithLessonsRef: GetCourseWithLessonsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCourseWithLessons(dc: DataConnect, vars: GetCourseWithLessonsVariables): QueryPromise<GetCourseWithLessonsData, GetCourseWithLessonsVariables>;

interface GetCourseWithLessonsRef {
  ...
  (dc: DataConnect, vars: GetCourseWithLessonsVariables): QueryRef<GetCourseWithLessonsData, GetCourseWithLessonsVariables>;
}
export const getCourseWithLessonsRef: GetCourseWithLessonsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCourseWithLessonsRef:
```typescript
const name = getCourseWithLessonsRef.operationName;
console.log(name);
```

### Variables
The `GetCourseWithLessons` query requires an argument of type `GetCourseWithLessonsVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetCourseWithLessonsVariables {
  id: Course_Key;
}
```
### Return Type
Recall that executing the `GetCourseWithLessons` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCourseWithLessonsData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCourseWithLessonsData {
  course?: {
    id: UUIDString;
    title: string;
    description: string;
    estimatedCompletionTime: string;
    imageUrl?: string | null;
    lessons_on_course: ({
      id: UUIDString;
      title: string;
      content: string;
      order: number;
      videoUrl?: string | null;
      documentUrl?: string | null;
    } & Lesson_Key)[];
  } & Course_Key;
}
```
### Using `GetCourseWithLessons`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCourseWithLessons, GetCourseWithLessonsVariables } from '@repo/dataconnect-sdk';

// The `GetCourseWithLessons` query requires an argument of type `GetCourseWithLessonsVariables`:
const getCourseWithLessonsVars: GetCourseWithLessonsVariables = {
  id: ..., 
};

// Call the `getCourseWithLessons()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCourseWithLessons(getCourseWithLessonsVars);
// Variables can be defined inline as well.
const { data } = await getCourseWithLessons({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCourseWithLessons(dataConnect, getCourseWithLessonsVars);

console.log(data.course);

// Or, you can use the `Promise` API.
getCourseWithLessons(getCourseWithLessonsVars).then((response) => {
  const data = response.data;
  console.log(data.course);
});
```

### Using `GetCourseWithLessons`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCourseWithLessonsRef, GetCourseWithLessonsVariables } from '@repo/dataconnect-sdk';

// The `GetCourseWithLessons` query requires an argument of type `GetCourseWithLessonsVariables`:
const getCourseWithLessonsVars: GetCourseWithLessonsVariables = {
  id: ..., 
};

// Call the `getCourseWithLessonsRef()` function to get a reference to the query.
const ref = getCourseWithLessonsRef(getCourseWithLessonsVars);
// Variables can be defined inline as well.
const ref = getCourseWithLessonsRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCourseWithLessonsRef(dataConnect, getCourseWithLessonsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.course);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.course);
});
```

## GetUserEnrollments
You can execute the `GetUserEnrollments` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
getUserEnrollments(vars: GetUserEnrollmentsVariables): QueryPromise<GetUserEnrollmentsData, GetUserEnrollmentsVariables>;

interface GetUserEnrollmentsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserEnrollmentsVariables): QueryRef<GetUserEnrollmentsData, GetUserEnrollmentsVariables>;
}
export const getUserEnrollmentsRef: GetUserEnrollmentsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserEnrollments(dc: DataConnect, vars: GetUserEnrollmentsVariables): QueryPromise<GetUserEnrollmentsData, GetUserEnrollmentsVariables>;

interface GetUserEnrollmentsRef {
  ...
  (dc: DataConnect, vars: GetUserEnrollmentsVariables): QueryRef<GetUserEnrollmentsData, GetUserEnrollmentsVariables>;
}
export const getUserEnrollmentsRef: GetUserEnrollmentsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserEnrollmentsRef:
```typescript
const name = getUserEnrollmentsRef.operationName;
console.log(name);
```

### Variables
The `GetUserEnrollments` query requires an argument of type `GetUserEnrollmentsVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserEnrollmentsVariables {
  userId: User_Key;
}
```
### Return Type
Recall that executing the `GetUserEnrollments` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserEnrollmentsData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserEnrollmentsData {
  user?: {
    id: UUIDString;
    displayName: string;
    enrollments_on_user: ({
      course: {
        id: UUIDString;
        title: string;
        description: string;
        imageUrl?: string | null;
      } & Course_Key;
        enrolledAt: TimestampString;
        progressPercentage: number;
        completedAt?: TimestampString | null;
    })[];
  } & User_Key;
}
```
### Using `GetUserEnrollments`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserEnrollments, GetUserEnrollmentsVariables } from '@repo/dataconnect-sdk';

// The `GetUserEnrollments` query requires an argument of type `GetUserEnrollmentsVariables`:
const getUserEnrollmentsVars: GetUserEnrollmentsVariables = {
  userId: ..., 
};

// Call the `getUserEnrollments()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserEnrollments(getUserEnrollmentsVars);
// Variables can be defined inline as well.
const { data } = await getUserEnrollments({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserEnrollments(dataConnect, getUserEnrollmentsVars);

console.log(data.user);

// Or, you can use the `Promise` API.
getUserEnrollments(getUserEnrollmentsVars).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUserEnrollments`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserEnrollmentsRef, GetUserEnrollmentsVariables } from '@repo/dataconnect-sdk';

// The `GetUserEnrollments` query requires an argument of type `GetUserEnrollmentsVariables`:
const getUserEnrollmentsVars: GetUserEnrollmentsVariables = {
  userId: ..., 
};

// Call the `getUserEnrollmentsRef()` function to get a reference to the query.
const ref = getUserEnrollmentsRef(getUserEnrollmentsVars);
// Variables can be defined inline as well.
const ref = getUserEnrollmentsRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserEnrollmentsRef(dataConnect, getUserEnrollmentsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## GetLesson
You can execute the `GetLesson` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
getLesson(vars: GetLessonVariables): QueryPromise<GetLessonData, GetLessonVariables>;

interface GetLessonRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetLessonVariables): QueryRef<GetLessonData, GetLessonVariables>;
}
export const getLessonRef: GetLessonRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getLesson(dc: DataConnect, vars: GetLessonVariables): QueryPromise<GetLessonData, GetLessonVariables>;

interface GetLessonRef {
  ...
  (dc: DataConnect, vars: GetLessonVariables): QueryRef<GetLessonData, GetLessonVariables>;
}
export const getLessonRef: GetLessonRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getLessonRef:
```typescript
const name = getLessonRef.operationName;
console.log(name);
```

### Variables
The `GetLesson` query requires an argument of type `GetLessonVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetLessonVariables {
  id: Lesson_Key;
}
```
### Return Type
Recall that executing the `GetLesson` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetLessonData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetLessonData {
  lesson?: {
    id: UUIDString;
    title: string;
    content: string;
    order: number;
    videoUrl?: string | null;
    documentUrl?: string | null;
    createdAt: TimestampString;
  } & Lesson_Key;
}
```
### Using `GetLesson`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getLesson, GetLessonVariables } from '@repo/dataconnect-sdk';

// The `GetLesson` query requires an argument of type `GetLessonVariables`:
const getLessonVars: GetLessonVariables = {
  id: ..., 
};

// Call the `getLesson()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getLesson(getLessonVars);
// Variables can be defined inline as well.
const { data } = await getLesson({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getLesson(dataConnect, getLessonVars);

console.log(data.lesson);

// Or, you can use the `Promise` API.
getLesson(getLessonVars).then((response) => {
  const data = response.data;
  console.log(data.lesson);
});
```

### Using `GetLesson`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getLessonRef, GetLessonVariables } from '@repo/dataconnect-sdk';

// The `GetLesson` query requires an argument of type `GetLessonVariables`:
const getLessonVars: GetLessonVariables = {
  id: ..., 
};

// Call the `getLessonRef()` function to get a reference to the query.
const ref = getLessonRef(getLessonVars);
// Variables can be defined inline as well.
const ref = getLessonRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getLessonRef(dataConnect, getLessonVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.lesson);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.lesson);
});
```

## GetLessonsForCourse
You can execute the `GetLessonsForCourse` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
getLessonsForCourse(vars: GetLessonsForCourseVariables): QueryPromise<GetLessonsForCourseData, GetLessonsForCourseVariables>;

interface GetLessonsForCourseRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetLessonsForCourseVariables): QueryRef<GetLessonsForCourseData, GetLessonsForCourseVariables>;
}
export const getLessonsForCourseRef: GetLessonsForCourseRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getLessonsForCourse(dc: DataConnect, vars: GetLessonsForCourseVariables): QueryPromise<GetLessonsForCourseData, GetLessonsForCourseVariables>;

interface GetLessonsForCourseRef {
  ...
  (dc: DataConnect, vars: GetLessonsForCourseVariables): QueryRef<GetLessonsForCourseData, GetLessonsForCourseVariables>;
}
export const getLessonsForCourseRef: GetLessonsForCourseRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getLessonsForCourseRef:
```typescript
const name = getLessonsForCourseRef.operationName;
console.log(name);
```

### Variables
The `GetLessonsForCourse` query requires an argument of type `GetLessonsForCourseVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetLessonsForCourseVariables {
  courseId: UUIDString;
}
```
### Return Type
Recall that executing the `GetLessonsForCourse` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetLessonsForCourseData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetLessonsForCourseData {
  lessons: ({
    id: UUIDString;
    title: string;
    content: string;
    order: number;
    videoUrl?: string | null;
    documentUrl?: string | null;
  } & Lesson_Key)[];
}
```
### Using `GetLessonsForCourse`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getLessonsForCourse, GetLessonsForCourseVariables } from '@repo/dataconnect-sdk';

// The `GetLessonsForCourse` query requires an argument of type `GetLessonsForCourseVariables`:
const getLessonsForCourseVars: GetLessonsForCourseVariables = {
  courseId: ..., 
};

// Call the `getLessonsForCourse()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getLessonsForCourse(getLessonsForCourseVars);
// Variables can be defined inline as well.
const { data } = await getLessonsForCourse({ courseId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getLessonsForCourse(dataConnect, getLessonsForCourseVars);

console.log(data.lessons);

// Or, you can use the `Promise` API.
getLessonsForCourse(getLessonsForCourseVars).then((response) => {
  const data = response.data;
  console.log(data.lessons);
});
```

### Using `GetLessonsForCourse`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getLessonsForCourseRef, GetLessonsForCourseVariables } from '@repo/dataconnect-sdk';

// The `GetLessonsForCourse` query requires an argument of type `GetLessonsForCourseVariables`:
const getLessonsForCourseVars: GetLessonsForCourseVariables = {
  courseId: ..., 
};

// Call the `getLessonsForCourseRef()` function to get a reference to the query.
const ref = getLessonsForCourseRef(getLessonsForCourseVars);
// Variables can be defined inline as well.
const ref = getLessonsForCourseRef({ courseId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getLessonsForCourseRef(dataConnect, getLessonsForCourseVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.lessons);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.lessons);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation requires an argument of type `CreateUserVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserVariables {
  displayName: string;
  email: string;
  photoUrl?: string | null;
}
```
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser, CreateUserVariables } from '@repo/dataconnect-sdk';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  displayName: ..., 
  email: ..., 
  photoUrl: ..., // optional
};

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ displayName: ..., email: ..., photoUrl: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect, createUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@repo/dataconnect-sdk';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  displayName: ..., 
  email: ..., 
  photoUrl: ..., // optional
};

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ displayName: ..., email: ..., photoUrl: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect, createUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateUser
You can execute the `UpdateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
updateUser(vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUser(dc: DataConnect, vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  (dc: DataConnect, vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserRef:
```typescript
const name = updateUserRef.operationName;
console.log(name);
```

### Variables
The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserVariables {
  id: User_Key;
  displayName?: string | null;
  photoUrl?: string | null;
}
```
### Return Type
Recall that executing the `UpdateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUser, UpdateUserVariables } from '@repo/dataconnect-sdk';

// The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  id: ..., 
  displayName: ..., // optional
  photoUrl: ..., // optional
};

// Call the `updateUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUser(updateUserVars);
// Variables can be defined inline as well.
const { data } = await updateUser({ id: ..., displayName: ..., photoUrl: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUser(dataConnect, updateUserVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUser(updateUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserRef, UpdateUserVariables } from '@repo/dataconnect-sdk';

// The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  id: ..., 
  displayName: ..., // optional
  photoUrl: ..., // optional
};

// Call the `updateUserRef()` function to get a reference to the mutation.
const ref = updateUserRef(updateUserVars);
// Variables can be defined inline as well.
const ref = updateUserRef({ id: ..., displayName: ..., photoUrl: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserRef(dataConnect, updateUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## CreateCourse
You can execute the `CreateCourse` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
createCourse(vars: CreateCourseVariables): MutationPromise<CreateCourseData, CreateCourseVariables>;

interface CreateCourseRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCourseVariables): MutationRef<CreateCourseData, CreateCourseVariables>;
}
export const createCourseRef: CreateCourseRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createCourse(dc: DataConnect, vars: CreateCourseVariables): MutationPromise<CreateCourseData, CreateCourseVariables>;

interface CreateCourseRef {
  ...
  (dc: DataConnect, vars: CreateCourseVariables): MutationRef<CreateCourseData, CreateCourseVariables>;
}
export const createCourseRef: CreateCourseRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createCourseRef:
```typescript
const name = createCourseRef.operationName;
console.log(name);
```

### Variables
The `CreateCourse` mutation requires an argument of type `CreateCourseVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateCourseVariables {
  title: string;
  description: string;
  estimatedCompletionTime: string;
  imageUrl?: string | null;
}
```
### Return Type
Recall that executing the `CreateCourse` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateCourseData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateCourseData {
  course_insert: Course_Key;
}
```
### Using `CreateCourse`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createCourse, CreateCourseVariables } from '@repo/dataconnect-sdk';

// The `CreateCourse` mutation requires an argument of type `CreateCourseVariables`:
const createCourseVars: CreateCourseVariables = {
  title: ..., 
  description: ..., 
  estimatedCompletionTime: ..., 
  imageUrl: ..., // optional
};

// Call the `createCourse()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createCourse(createCourseVars);
// Variables can be defined inline as well.
const { data } = await createCourse({ title: ..., description: ..., estimatedCompletionTime: ..., imageUrl: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createCourse(dataConnect, createCourseVars);

console.log(data.course_insert);

// Or, you can use the `Promise` API.
createCourse(createCourseVars).then((response) => {
  const data = response.data;
  console.log(data.course_insert);
});
```

### Using `CreateCourse`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createCourseRef, CreateCourseVariables } from '@repo/dataconnect-sdk';

// The `CreateCourse` mutation requires an argument of type `CreateCourseVariables`:
const createCourseVars: CreateCourseVariables = {
  title: ..., 
  description: ..., 
  estimatedCompletionTime: ..., 
  imageUrl: ..., // optional
};

// Call the `createCourseRef()` function to get a reference to the mutation.
const ref = createCourseRef(createCourseVars);
// Variables can be defined inline as well.
const ref = createCourseRef({ title: ..., description: ..., estimatedCompletionTime: ..., imageUrl: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createCourseRef(dataConnect, createCourseVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.course_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.course_insert);
});
```

## CreateLesson
You can execute the `CreateLesson` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
createLesson(vars: CreateLessonVariables): MutationPromise<CreateLessonData, CreateLessonVariables>;

interface CreateLessonRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateLessonVariables): MutationRef<CreateLessonData, CreateLessonVariables>;
}
export const createLessonRef: CreateLessonRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createLesson(dc: DataConnect, vars: CreateLessonVariables): MutationPromise<CreateLessonData, CreateLessonVariables>;

interface CreateLessonRef {
  ...
  (dc: DataConnect, vars: CreateLessonVariables): MutationRef<CreateLessonData, CreateLessonVariables>;
}
export const createLessonRef: CreateLessonRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createLessonRef:
```typescript
const name = createLessonRef.operationName;
console.log(name);
```

### Variables
The `CreateLesson` mutation requires an argument of type `CreateLessonVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateLessonVariables {
  courseId: Course_Key;
  title: string;
  content: string;
  order: number;
  videoUrl?: string | null;
  documentUrl?: string | null;
}
```
### Return Type
Recall that executing the `CreateLesson` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateLessonData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateLessonData {
  lesson_insert: Lesson_Key;
}
```
### Using `CreateLesson`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createLesson, CreateLessonVariables } from '@repo/dataconnect-sdk';

// The `CreateLesson` mutation requires an argument of type `CreateLessonVariables`:
const createLessonVars: CreateLessonVariables = {
  courseId: ..., 
  title: ..., 
  content: ..., 
  order: ..., 
  videoUrl: ..., // optional
  documentUrl: ..., // optional
};

// Call the `createLesson()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createLesson(createLessonVars);
// Variables can be defined inline as well.
const { data } = await createLesson({ courseId: ..., title: ..., content: ..., order: ..., videoUrl: ..., documentUrl: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createLesson(dataConnect, createLessonVars);

console.log(data.lesson_insert);

// Or, you can use the `Promise` API.
createLesson(createLessonVars).then((response) => {
  const data = response.data;
  console.log(data.lesson_insert);
});
```

### Using `CreateLesson`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createLessonRef, CreateLessonVariables } from '@repo/dataconnect-sdk';

// The `CreateLesson` mutation requires an argument of type `CreateLessonVariables`:
const createLessonVars: CreateLessonVariables = {
  courseId: ..., 
  title: ..., 
  content: ..., 
  order: ..., 
  videoUrl: ..., // optional
  documentUrl: ..., // optional
};

// Call the `createLessonRef()` function to get a reference to the mutation.
const ref = createLessonRef(createLessonVars);
// Variables can be defined inline as well.
const ref = createLessonRef({ courseId: ..., title: ..., content: ..., order: ..., videoUrl: ..., documentUrl: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createLessonRef(dataConnect, createLessonVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.lesson_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.lesson_insert);
});
```

## EnrollUserInCourse
You can execute the `EnrollUserInCourse` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
enrollUserInCourse(vars: EnrollUserInCourseVariables): MutationPromise<EnrollUserInCourseData, EnrollUserInCourseVariables>;

interface EnrollUserInCourseRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: EnrollUserInCourseVariables): MutationRef<EnrollUserInCourseData, EnrollUserInCourseVariables>;
}
export const enrollUserInCourseRef: EnrollUserInCourseRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
enrollUserInCourse(dc: DataConnect, vars: EnrollUserInCourseVariables): MutationPromise<EnrollUserInCourseData, EnrollUserInCourseVariables>;

interface EnrollUserInCourseRef {
  ...
  (dc: DataConnect, vars: EnrollUserInCourseVariables): MutationRef<EnrollUserInCourseData, EnrollUserInCourseVariables>;
}
export const enrollUserInCourseRef: EnrollUserInCourseRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the enrollUserInCourseRef:
```typescript
const name = enrollUserInCourseRef.operationName;
console.log(name);
```

### Variables
The `EnrollUserInCourse` mutation requires an argument of type `EnrollUserInCourseVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface EnrollUserInCourseVariables {
  userId: User_Key;
  courseId: Course_Key;
}
```
### Return Type
Recall that executing the `EnrollUserInCourse` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `EnrollUserInCourseData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface EnrollUserInCourseData {
  enrollment_insert: Enrollment_Key;
}
```
### Using `EnrollUserInCourse`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, enrollUserInCourse, EnrollUserInCourseVariables } from '@repo/dataconnect-sdk';

// The `EnrollUserInCourse` mutation requires an argument of type `EnrollUserInCourseVariables`:
const enrollUserInCourseVars: EnrollUserInCourseVariables = {
  userId: ..., 
  courseId: ..., 
};

// Call the `enrollUserInCourse()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await enrollUserInCourse(enrollUserInCourseVars);
// Variables can be defined inline as well.
const { data } = await enrollUserInCourse({ userId: ..., courseId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await enrollUserInCourse(dataConnect, enrollUserInCourseVars);

console.log(data.enrollment_insert);

// Or, you can use the `Promise` API.
enrollUserInCourse(enrollUserInCourseVars).then((response) => {
  const data = response.data;
  console.log(data.enrollment_insert);
});
```

### Using `EnrollUserInCourse`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, enrollUserInCourseRef, EnrollUserInCourseVariables } from '@repo/dataconnect-sdk';

// The `EnrollUserInCourse` mutation requires an argument of type `EnrollUserInCourseVariables`:
const enrollUserInCourseVars: EnrollUserInCourseVariables = {
  userId: ..., 
  courseId: ..., 
};

// Call the `enrollUserInCourseRef()` function to get a reference to the mutation.
const ref = enrollUserInCourseRef(enrollUserInCourseVars);
// Variables can be defined inline as well.
const ref = enrollUserInCourseRef({ userId: ..., courseId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = enrollUserInCourseRef(dataConnect, enrollUserInCourseVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.enrollment_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.enrollment_insert);
});
```

## UpdateEnrollmentProgress
You can execute the `UpdateEnrollmentProgress` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
updateEnrollmentProgress(vars: UpdateEnrollmentProgressVariables): MutationPromise<UpdateEnrollmentProgressData, UpdateEnrollmentProgressVariables>;

interface UpdateEnrollmentProgressRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateEnrollmentProgressVariables): MutationRef<UpdateEnrollmentProgressData, UpdateEnrollmentProgressVariables>;
}
export const updateEnrollmentProgressRef: UpdateEnrollmentProgressRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateEnrollmentProgress(dc: DataConnect, vars: UpdateEnrollmentProgressVariables): MutationPromise<UpdateEnrollmentProgressData, UpdateEnrollmentProgressVariables>;

interface UpdateEnrollmentProgressRef {
  ...
  (dc: DataConnect, vars: UpdateEnrollmentProgressVariables): MutationRef<UpdateEnrollmentProgressData, UpdateEnrollmentProgressVariables>;
}
export const updateEnrollmentProgressRef: UpdateEnrollmentProgressRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateEnrollmentProgressRef:
```typescript
const name = updateEnrollmentProgressRef.operationName;
console.log(name);
```

### Variables
The `UpdateEnrollmentProgress` mutation requires an argument of type `UpdateEnrollmentProgressVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateEnrollmentProgressVariables {
  userId: UUIDString;
  courseId: UUIDString;
  progressPercentage: number;
}
```
### Return Type
Recall that executing the `UpdateEnrollmentProgress` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateEnrollmentProgressData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateEnrollmentProgressData {
  enrollment_update?: Enrollment_Key | null;
}
```
### Using `UpdateEnrollmentProgress`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateEnrollmentProgress, UpdateEnrollmentProgressVariables } from '@repo/dataconnect-sdk';

// The `UpdateEnrollmentProgress` mutation requires an argument of type `UpdateEnrollmentProgressVariables`:
const updateEnrollmentProgressVars: UpdateEnrollmentProgressVariables = {
  userId: ..., 
  courseId: ..., 
  progressPercentage: ..., 
};

// Call the `updateEnrollmentProgress()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateEnrollmentProgress(updateEnrollmentProgressVars);
// Variables can be defined inline as well.
const { data } = await updateEnrollmentProgress({ userId: ..., courseId: ..., progressPercentage: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateEnrollmentProgress(dataConnect, updateEnrollmentProgressVars);

console.log(data.enrollment_update);

// Or, you can use the `Promise` API.
updateEnrollmentProgress(updateEnrollmentProgressVars).then((response) => {
  const data = response.data;
  console.log(data.enrollment_update);
});
```

### Using `UpdateEnrollmentProgress`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateEnrollmentProgressRef, UpdateEnrollmentProgressVariables } from '@repo/dataconnect-sdk';

// The `UpdateEnrollmentProgress` mutation requires an argument of type `UpdateEnrollmentProgressVariables`:
const updateEnrollmentProgressVars: UpdateEnrollmentProgressVariables = {
  userId: ..., 
  courseId: ..., 
  progressPercentage: ..., 
};

// Call the `updateEnrollmentProgressRef()` function to get a reference to the mutation.
const ref = updateEnrollmentProgressRef(updateEnrollmentProgressVars);
// Variables can be defined inline as well.
const ref = updateEnrollmentProgressRef({ userId: ..., courseId: ..., progressPercentage: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateEnrollmentProgressRef(dataConnect, updateEnrollmentProgressVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.enrollment_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.enrollment_update);
});
```

## CompleteEnrollment
You can execute the `CompleteEnrollment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
completeEnrollment(vars: CompleteEnrollmentVariables): MutationPromise<CompleteEnrollmentData, CompleteEnrollmentVariables>;

interface CompleteEnrollmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CompleteEnrollmentVariables): MutationRef<CompleteEnrollmentData, CompleteEnrollmentVariables>;
}
export const completeEnrollmentRef: CompleteEnrollmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
completeEnrollment(dc: DataConnect, vars: CompleteEnrollmentVariables): MutationPromise<CompleteEnrollmentData, CompleteEnrollmentVariables>;

interface CompleteEnrollmentRef {
  ...
  (dc: DataConnect, vars: CompleteEnrollmentVariables): MutationRef<CompleteEnrollmentData, CompleteEnrollmentVariables>;
}
export const completeEnrollmentRef: CompleteEnrollmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the completeEnrollmentRef:
```typescript
const name = completeEnrollmentRef.operationName;
console.log(name);
```

### Variables
The `CompleteEnrollment` mutation requires an argument of type `CompleteEnrollmentVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CompleteEnrollmentVariables {
  userId: UUIDString;
  courseId: UUIDString;
}
```
### Return Type
Recall that executing the `CompleteEnrollment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CompleteEnrollmentData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CompleteEnrollmentData {
  enrollment_update?: Enrollment_Key | null;
}
```
### Using `CompleteEnrollment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, completeEnrollment, CompleteEnrollmentVariables } from '@repo/dataconnect-sdk';

// The `CompleteEnrollment` mutation requires an argument of type `CompleteEnrollmentVariables`:
const completeEnrollmentVars: CompleteEnrollmentVariables = {
  userId: ..., 
  courseId: ..., 
};

// Call the `completeEnrollment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await completeEnrollment(completeEnrollmentVars);
// Variables can be defined inline as well.
const { data } = await completeEnrollment({ userId: ..., courseId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await completeEnrollment(dataConnect, completeEnrollmentVars);

console.log(data.enrollment_update);

// Or, you can use the `Promise` API.
completeEnrollment(completeEnrollmentVars).then((response) => {
  const data = response.data;
  console.log(data.enrollment_update);
});
```

### Using `CompleteEnrollment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, completeEnrollmentRef, CompleteEnrollmentVariables } from '@repo/dataconnect-sdk';

// The `CompleteEnrollment` mutation requires an argument of type `CompleteEnrollmentVariables`:
const completeEnrollmentVars: CompleteEnrollmentVariables = {
  userId: ..., 
  courseId: ..., 
};

// Call the `completeEnrollmentRef()` function to get a reference to the mutation.
const ref = completeEnrollmentRef(completeEnrollmentVars);
// Variables can be defined inline as well.
const ref = completeEnrollmentRef({ userId: ..., courseId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = completeEnrollmentRef(dataConnect, completeEnrollmentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.enrollment_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.enrollment_update);
});
```

## MarkLessonComplete
You can execute the `MarkLessonComplete` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
markLessonComplete(vars: MarkLessonCompleteVariables): MutationPromise<MarkLessonCompleteData, MarkLessonCompleteVariables>;

interface MarkLessonCompleteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: MarkLessonCompleteVariables): MutationRef<MarkLessonCompleteData, MarkLessonCompleteVariables>;
}
export const markLessonCompleteRef: MarkLessonCompleteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
markLessonComplete(dc: DataConnect, vars: MarkLessonCompleteVariables): MutationPromise<MarkLessonCompleteData, MarkLessonCompleteVariables>;

interface MarkLessonCompleteRef {
  ...
  (dc: DataConnect, vars: MarkLessonCompleteVariables): MutationRef<MarkLessonCompleteData, MarkLessonCompleteVariables>;
}
export const markLessonCompleteRef: MarkLessonCompleteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the markLessonCompleteRef:
```typescript
const name = markLessonCompleteRef.operationName;
console.log(name);
```

### Variables
The `MarkLessonComplete` mutation requires an argument of type `MarkLessonCompleteVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface MarkLessonCompleteVariables {
  userId: UUIDString;
  courseId: UUIDString;
  lessonId: Lesson_Key;
}
```
### Return Type
Recall that executing the `MarkLessonComplete` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `MarkLessonCompleteData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface MarkLessonCompleteData {
  lessonProgress_insert: LessonProgress_Key;
}
```
### Using `MarkLessonComplete`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, markLessonComplete, MarkLessonCompleteVariables } from '@repo/dataconnect-sdk';

// The `MarkLessonComplete` mutation requires an argument of type `MarkLessonCompleteVariables`:
const markLessonCompleteVars: MarkLessonCompleteVariables = {
  userId: ..., 
  courseId: ..., 
  lessonId: ..., 
};

// Call the `markLessonComplete()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await markLessonComplete(markLessonCompleteVars);
// Variables can be defined inline as well.
const { data } = await markLessonComplete({ userId: ..., courseId: ..., lessonId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await markLessonComplete(dataConnect, markLessonCompleteVars);

console.log(data.lessonProgress_insert);

// Or, you can use the `Promise` API.
markLessonComplete(markLessonCompleteVars).then((response) => {
  const data = response.data;
  console.log(data.lessonProgress_insert);
});
```

### Using `MarkLessonComplete`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, markLessonCompleteRef, MarkLessonCompleteVariables } from '@repo/dataconnect-sdk';

// The `MarkLessonComplete` mutation requires an argument of type `MarkLessonCompleteVariables`:
const markLessonCompleteVars: MarkLessonCompleteVariables = {
  userId: ..., 
  courseId: ..., 
  lessonId: ..., 
};

// Call the `markLessonCompleteRef()` function to get a reference to the mutation.
const ref = markLessonCompleteRef(markLessonCompleteVars);
// Variables can be defined inline as well.
const ref = markLessonCompleteRef({ userId: ..., courseId: ..., lessonId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = markLessonCompleteRef(dataConnect, markLessonCompleteVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.lessonProgress_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.lessonProgress_insert);
});
```

## CreateQuiz
You can execute the `CreateQuiz` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
createQuiz(vars: CreateQuizVariables): MutationPromise<CreateQuizData, CreateQuizVariables>;

interface CreateQuizRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateQuizVariables): MutationRef<CreateQuizData, CreateQuizVariables>;
}
export const createQuizRef: CreateQuizRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createQuiz(dc: DataConnect, vars: CreateQuizVariables): MutationPromise<CreateQuizData, CreateQuizVariables>;

interface CreateQuizRef {
  ...
  (dc: DataConnect, vars: CreateQuizVariables): MutationRef<CreateQuizData, CreateQuizVariables>;
}
export const createQuizRef: CreateQuizRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createQuizRef:
```typescript
const name = createQuizRef.operationName;
console.log(name);
```

### Variables
The `CreateQuiz` mutation requires an argument of type `CreateQuizVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateQuizVariables {
  lessonId: Lesson_Key;
  title: string;
}
```
### Return Type
Recall that executing the `CreateQuiz` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateQuizData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateQuizData {
  quiz_insert: Quiz_Key;
}
```
### Using `CreateQuiz`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createQuiz, CreateQuizVariables } from '@repo/dataconnect-sdk';

// The `CreateQuiz` mutation requires an argument of type `CreateQuizVariables`:
const createQuizVars: CreateQuizVariables = {
  lessonId: ..., 
  title: ..., 
};

// Call the `createQuiz()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createQuiz(createQuizVars);
// Variables can be defined inline as well.
const { data } = await createQuiz({ lessonId: ..., title: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createQuiz(dataConnect, createQuizVars);

console.log(data.quiz_insert);

// Or, you can use the `Promise` API.
createQuiz(createQuizVars).then((response) => {
  const data = response.data;
  console.log(data.quiz_insert);
});
```

### Using `CreateQuiz`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createQuizRef, CreateQuizVariables } from '@repo/dataconnect-sdk';

// The `CreateQuiz` mutation requires an argument of type `CreateQuizVariables`:
const createQuizVars: CreateQuizVariables = {
  lessonId: ..., 
  title: ..., 
};

// Call the `createQuizRef()` function to get a reference to the mutation.
const ref = createQuizRef(createQuizVars);
// Variables can be defined inline as well.
const ref = createQuizRef({ lessonId: ..., title: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createQuizRef(dataConnect, createQuizVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.quiz_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.quiz_insert);
});
```

## RecordQuizAttempt
You can execute the `RecordQuizAttempt` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-sdk/index.d.ts](./index.d.ts):
```typescript
recordQuizAttempt(vars: RecordQuizAttemptVariables): MutationPromise<RecordQuizAttemptData, RecordQuizAttemptVariables>;

interface RecordQuizAttemptRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: RecordQuizAttemptVariables): MutationRef<RecordQuizAttemptData, RecordQuizAttemptVariables>;
}
export const recordQuizAttemptRef: RecordQuizAttemptRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
recordQuizAttempt(dc: DataConnect, vars: RecordQuizAttemptVariables): MutationPromise<RecordQuizAttemptData, RecordQuizAttemptVariables>;

interface RecordQuizAttemptRef {
  ...
  (dc: DataConnect, vars: RecordQuizAttemptVariables): MutationRef<RecordQuizAttemptData, RecordQuizAttemptVariables>;
}
export const recordQuizAttemptRef: RecordQuizAttemptRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the recordQuizAttemptRef:
```typescript
const name = recordQuizAttemptRef.operationName;
console.log(name);
```

### Variables
The `RecordQuizAttempt` mutation requires an argument of type `RecordQuizAttemptVariables`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface RecordQuizAttemptVariables {
  userId: User_Key;
  quizId: Quiz_Key;
  score: number;
}
```
### Return Type
Recall that executing the `RecordQuizAttempt` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `RecordQuizAttemptData`, which is defined in [dataconnect-sdk/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface RecordQuizAttemptData {
  quizAttempt_upsert: QuizAttempt_Key;
}
```
### Using `RecordQuizAttempt`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, recordQuizAttempt, RecordQuizAttemptVariables } from '@repo/dataconnect-sdk';

// The `RecordQuizAttempt` mutation requires an argument of type `RecordQuizAttemptVariables`:
const recordQuizAttemptVars: RecordQuizAttemptVariables = {
  userId: ..., 
  quizId: ..., 
  score: ..., 
};

// Call the `recordQuizAttempt()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await recordQuizAttempt(recordQuizAttemptVars);
// Variables can be defined inline as well.
const { data } = await recordQuizAttempt({ userId: ..., quizId: ..., score: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await recordQuizAttempt(dataConnect, recordQuizAttemptVars);

console.log(data.quizAttempt_upsert);

// Or, you can use the `Promise` API.
recordQuizAttempt(recordQuizAttemptVars).then((response) => {
  const data = response.data;
  console.log(data.quizAttempt_upsert);
});
```

### Using `RecordQuizAttempt`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, recordQuizAttemptRef, RecordQuizAttemptVariables } from '@repo/dataconnect-sdk';

// The `RecordQuizAttempt` mutation requires an argument of type `RecordQuizAttemptVariables`:
const recordQuizAttemptVars: RecordQuizAttemptVariables = {
  userId: ..., 
  quizId: ..., 
  score: ..., 
};

// Call the `recordQuizAttemptRef()` function to get a reference to the mutation.
const ref = recordQuizAttemptRef(recordQuizAttemptVars);
// Variables can be defined inline as well.
const ref = recordQuizAttemptRef({ userId: ..., quizId: ..., score: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = recordQuizAttemptRef(dataConnect, recordQuizAttemptVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.quizAttempt_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.quizAttempt_upsert);
});
```

