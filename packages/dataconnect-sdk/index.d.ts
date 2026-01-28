import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CompleteEnrollmentData {
  enrollment_update?: Enrollment_Key | null;
}

export interface CompleteEnrollmentVariables {
  userId: UUIDString;
  courseId: UUIDString;
}

export interface Course_Key {
  id: UUIDString;
  __typename?: 'Course_Key';
}

export interface CreateCourseData {
  course_insert: Course_Key;
}

export interface CreateCourseVariables {
  title: string;
  description: string;
  estimatedCompletionTime: string;
  imageUrl?: string | null;
}

export interface CreateLessonData {
  lesson_insert: Lesson_Key;
}

export interface CreateLessonVariables {
  courseId: Course_Key;
  title: string;
  content: string;
  order: number;
  videoUrl?: string | null;
  documentUrl?: string | null;
}

export interface CreateQuizData {
  quiz_insert: Quiz_Key;
}

export interface CreateQuizVariables {
  lessonId: Lesson_Key;
  title: string;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  displayName: string;
  email: string;
  photoUrl?: string | null;
}

export interface EnrollUserInCourseData {
  enrollment_insert: Enrollment_Key;
}

export interface EnrollUserInCourseVariables {
  userId: User_Key;
  courseId: Course_Key;
}

export interface Enrollment_Key {
  userId: UUIDString;
  courseId: UUIDString;
  __typename?: 'Enrollment_Key';
}

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

export interface GetCourseVariables {
  id: Course_Key;
}

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

export interface GetCourseWithLessonsVariables {
  id: Course_Key;
}

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

export interface GetLessonVariables {
  id: Lesson_Key;
}

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

export interface GetLessonsForCourseVariables {
  courseId: UUIDString;
}

export interface GetUserByEmailData {
  users: ({
    id: UUIDString;
    displayName: string;
    email: string;
    photoUrl?: string | null;
    createdAt: TimestampString;
  } & User_Key)[];
}

export interface GetUserByEmailVariables {
  email: string;
}

export interface GetUserData {
  user?: {
    id: UUIDString;
    displayName: string;
    email: string;
    photoUrl?: string | null;
    createdAt: TimestampString;
  } & User_Key;
}

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

export interface GetUserEnrollmentsVariables {
  userId: User_Key;
}

export interface GetUserVariables {
  id: User_Key;
}

export interface LessonProgress_Key {
  enrollmentUserId: UUIDString;
  enrollmentCourseId: UUIDString;
  lessonId: UUIDString;
  __typename?: 'LessonProgress_Key';
}

export interface Lesson_Key {
  id: UUIDString;
  __typename?: 'Lesson_Key';
}

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

export interface MarkLessonCompleteData {
  lessonProgress_insert: LessonProgress_Key;
}

export interface MarkLessonCompleteVariables {
  userId: UUIDString;
  courseId: UUIDString;
  lessonId: Lesson_Key;
}

export interface QuizAttempt_Key {
  userId: UUIDString;
  quizId: UUIDString;
  __typename?: 'QuizAttempt_Key';
}

export interface Quiz_Key {
  id: UUIDString;
  __typename?: 'Quiz_Key';
}

export interface RecordQuizAttemptData {
  quizAttempt_upsert: QuizAttempt_Key;
}

export interface RecordQuizAttemptVariables {
  userId: User_Key;
  quizId: Quiz_Key;
  score: number;
}

export interface UpdateEnrollmentProgressData {
  enrollment_update?: Enrollment_Key | null;
}

export interface UpdateEnrollmentProgressVariables {
  userId: UUIDString;
  courseId: UUIDString;
  progressPercentage: number;
}

export interface UpdateUserData {
  user_update?: User_Key | null;
}

export interface UpdateUserVariables {
  id: User_Key;
  displayName?: string | null;
  photoUrl?: string | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface UpdateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  operationName: string;
}
export const updateUserRef: UpdateUserRef;

export function updateUser(vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;
export function updateUser(dc: DataConnect, vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface CreateCourseRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCourseVariables): MutationRef<CreateCourseData, CreateCourseVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCourseVariables): MutationRef<CreateCourseData, CreateCourseVariables>;
  operationName: string;
}
export const createCourseRef: CreateCourseRef;

export function createCourse(vars: CreateCourseVariables): MutationPromise<CreateCourseData, CreateCourseVariables>;
export function createCourse(dc: DataConnect, vars: CreateCourseVariables): MutationPromise<CreateCourseData, CreateCourseVariables>;

interface CreateLessonRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateLessonVariables): MutationRef<CreateLessonData, CreateLessonVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateLessonVariables): MutationRef<CreateLessonData, CreateLessonVariables>;
  operationName: string;
}
export const createLessonRef: CreateLessonRef;

export function createLesson(vars: CreateLessonVariables): MutationPromise<CreateLessonData, CreateLessonVariables>;
export function createLesson(dc: DataConnect, vars: CreateLessonVariables): MutationPromise<CreateLessonData, CreateLessonVariables>;

interface EnrollUserInCourseRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: EnrollUserInCourseVariables): MutationRef<EnrollUserInCourseData, EnrollUserInCourseVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: EnrollUserInCourseVariables): MutationRef<EnrollUserInCourseData, EnrollUserInCourseVariables>;
  operationName: string;
}
export const enrollUserInCourseRef: EnrollUserInCourseRef;

export function enrollUserInCourse(vars: EnrollUserInCourseVariables): MutationPromise<EnrollUserInCourseData, EnrollUserInCourseVariables>;
export function enrollUserInCourse(dc: DataConnect, vars: EnrollUserInCourseVariables): MutationPromise<EnrollUserInCourseData, EnrollUserInCourseVariables>;

interface UpdateEnrollmentProgressRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateEnrollmentProgressVariables): MutationRef<UpdateEnrollmentProgressData, UpdateEnrollmentProgressVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateEnrollmentProgressVariables): MutationRef<UpdateEnrollmentProgressData, UpdateEnrollmentProgressVariables>;
  operationName: string;
}
export const updateEnrollmentProgressRef: UpdateEnrollmentProgressRef;

export function updateEnrollmentProgress(vars: UpdateEnrollmentProgressVariables): MutationPromise<UpdateEnrollmentProgressData, UpdateEnrollmentProgressVariables>;
export function updateEnrollmentProgress(dc: DataConnect, vars: UpdateEnrollmentProgressVariables): MutationPromise<UpdateEnrollmentProgressData, UpdateEnrollmentProgressVariables>;

interface CompleteEnrollmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CompleteEnrollmentVariables): MutationRef<CompleteEnrollmentData, CompleteEnrollmentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CompleteEnrollmentVariables): MutationRef<CompleteEnrollmentData, CompleteEnrollmentVariables>;
  operationName: string;
}
export const completeEnrollmentRef: CompleteEnrollmentRef;

export function completeEnrollment(vars: CompleteEnrollmentVariables): MutationPromise<CompleteEnrollmentData, CompleteEnrollmentVariables>;
export function completeEnrollment(dc: DataConnect, vars: CompleteEnrollmentVariables): MutationPromise<CompleteEnrollmentData, CompleteEnrollmentVariables>;

interface MarkLessonCompleteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: MarkLessonCompleteVariables): MutationRef<MarkLessonCompleteData, MarkLessonCompleteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: MarkLessonCompleteVariables): MutationRef<MarkLessonCompleteData, MarkLessonCompleteVariables>;
  operationName: string;
}
export const markLessonCompleteRef: MarkLessonCompleteRef;

export function markLessonComplete(vars: MarkLessonCompleteVariables): MutationPromise<MarkLessonCompleteData, MarkLessonCompleteVariables>;
export function markLessonComplete(dc: DataConnect, vars: MarkLessonCompleteVariables): MutationPromise<MarkLessonCompleteData, MarkLessonCompleteVariables>;

interface CreateQuizRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateQuizVariables): MutationRef<CreateQuizData, CreateQuizVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateQuizVariables): MutationRef<CreateQuizData, CreateQuizVariables>;
  operationName: string;
}
export const createQuizRef: CreateQuizRef;

export function createQuiz(vars: CreateQuizVariables): MutationPromise<CreateQuizData, CreateQuizVariables>;
export function createQuiz(dc: DataConnect, vars: CreateQuizVariables): MutationPromise<CreateQuizData, CreateQuizVariables>;

interface RecordQuizAttemptRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: RecordQuizAttemptVariables): MutationRef<RecordQuizAttemptData, RecordQuizAttemptVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: RecordQuizAttemptVariables): MutationRef<RecordQuizAttemptData, RecordQuizAttemptVariables>;
  operationName: string;
}
export const recordQuizAttemptRef: RecordQuizAttemptRef;

export function recordQuizAttempt(vars: RecordQuizAttemptVariables): MutationPromise<RecordQuizAttemptData, RecordQuizAttemptVariables>;
export function recordQuizAttempt(dc: DataConnect, vars: RecordQuizAttemptVariables): MutationPromise<RecordQuizAttemptData, RecordQuizAttemptVariables>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(vars: GetUserVariables): QueryPromise<GetUserData, GetUserVariables>;
export function getUser(dc: DataConnect, vars: GetUserVariables): QueryPromise<GetUserData, GetUserVariables>;

interface GetUserByEmailRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserByEmailVariables): QueryRef<GetUserByEmailData, GetUserByEmailVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserByEmailVariables): QueryRef<GetUserByEmailData, GetUserByEmailVariables>;
  operationName: string;
}
export const getUserByEmailRef: GetUserByEmailRef;

export function getUserByEmail(vars: GetUserByEmailVariables): QueryPromise<GetUserByEmailData, GetUserByEmailVariables>;
export function getUserByEmail(dc: DataConnect, vars: GetUserByEmailVariables): QueryPromise<GetUserByEmailData, GetUserByEmailVariables>;

interface ListCoursesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCoursesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListCoursesData, undefined>;
  operationName: string;
}
export const listCoursesRef: ListCoursesRef;

export function listCourses(): QueryPromise<ListCoursesData, undefined>;
export function listCourses(dc: DataConnect): QueryPromise<ListCoursesData, undefined>;

interface GetCourseRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCourseVariables): QueryRef<GetCourseData, GetCourseVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetCourseVariables): QueryRef<GetCourseData, GetCourseVariables>;
  operationName: string;
}
export const getCourseRef: GetCourseRef;

export function getCourse(vars: GetCourseVariables): QueryPromise<GetCourseData, GetCourseVariables>;
export function getCourse(dc: DataConnect, vars: GetCourseVariables): QueryPromise<GetCourseData, GetCourseVariables>;

interface GetCourseWithLessonsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCourseWithLessonsVariables): QueryRef<GetCourseWithLessonsData, GetCourseWithLessonsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetCourseWithLessonsVariables): QueryRef<GetCourseWithLessonsData, GetCourseWithLessonsVariables>;
  operationName: string;
}
export const getCourseWithLessonsRef: GetCourseWithLessonsRef;

export function getCourseWithLessons(vars: GetCourseWithLessonsVariables): QueryPromise<GetCourseWithLessonsData, GetCourseWithLessonsVariables>;
export function getCourseWithLessons(dc: DataConnect, vars: GetCourseWithLessonsVariables): QueryPromise<GetCourseWithLessonsData, GetCourseWithLessonsVariables>;

interface GetUserEnrollmentsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserEnrollmentsVariables): QueryRef<GetUserEnrollmentsData, GetUserEnrollmentsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserEnrollmentsVariables): QueryRef<GetUserEnrollmentsData, GetUserEnrollmentsVariables>;
  operationName: string;
}
export const getUserEnrollmentsRef: GetUserEnrollmentsRef;

export function getUserEnrollments(vars: GetUserEnrollmentsVariables): QueryPromise<GetUserEnrollmentsData, GetUserEnrollmentsVariables>;
export function getUserEnrollments(dc: DataConnect, vars: GetUserEnrollmentsVariables): QueryPromise<GetUserEnrollmentsData, GetUserEnrollmentsVariables>;

interface GetLessonRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetLessonVariables): QueryRef<GetLessonData, GetLessonVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetLessonVariables): QueryRef<GetLessonData, GetLessonVariables>;
  operationName: string;
}
export const getLessonRef: GetLessonRef;

export function getLesson(vars: GetLessonVariables): QueryPromise<GetLessonData, GetLessonVariables>;
export function getLesson(dc: DataConnect, vars: GetLessonVariables): QueryPromise<GetLessonData, GetLessonVariables>;

interface GetLessonsForCourseRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetLessonsForCourseVariables): QueryRef<GetLessonsForCourseData, GetLessonsForCourseVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetLessonsForCourseVariables): QueryRef<GetLessonsForCourseData, GetLessonsForCourseVariables>;
  operationName: string;
}
export const getLessonsForCourseRef: GetLessonsForCourseRef;

export function getLessonsForCourse(vars: GetLessonsForCourseVariables): QueryPromise<GetLessonsForCourseData, GetLessonsForCourseVariables>;
export function getLessonsForCourse(dc: DataConnect, vars: GetLessonsForCourseVariables): QueryPromise<GetLessonsForCourseData, GetLessonsForCourseVariables>;

