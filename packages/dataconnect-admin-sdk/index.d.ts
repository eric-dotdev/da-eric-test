import { ConnectorConfig, DataConnect, OperationOptions, ExecuteOperationResponse } from 'firebase-admin/data-connect';

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

/** Generated Node Admin SDK operation action function for the 'CreateUser' Mutation. Allow users to execute without passing in DataConnect. */
export function createUser(dc: DataConnect, vars: CreateUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateUserData>>;
/** Generated Node Admin SDK operation action function for the 'CreateUser' Mutation. Allow users to pass in custom DataConnect instances. */
export function createUser(vars: CreateUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateUserData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateUser' Mutation. Allow users to execute without passing in DataConnect. */
export function updateUser(dc: DataConnect, vars: UpdateUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateUserData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateUser' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateUser(vars: UpdateUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateUserData>>;

/** Generated Node Admin SDK operation action function for the 'CreateCourse' Mutation. Allow users to execute without passing in DataConnect. */
export function createCourse(dc: DataConnect, vars: CreateCourseVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateCourseData>>;
/** Generated Node Admin SDK operation action function for the 'CreateCourse' Mutation. Allow users to pass in custom DataConnect instances. */
export function createCourse(vars: CreateCourseVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateCourseData>>;

/** Generated Node Admin SDK operation action function for the 'CreateLesson' Mutation. Allow users to execute without passing in DataConnect. */
export function createLesson(dc: DataConnect, vars: CreateLessonVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateLessonData>>;
/** Generated Node Admin SDK operation action function for the 'CreateLesson' Mutation. Allow users to pass in custom DataConnect instances. */
export function createLesson(vars: CreateLessonVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateLessonData>>;

/** Generated Node Admin SDK operation action function for the 'EnrollUserInCourse' Mutation. Allow users to execute without passing in DataConnect. */
export function enrollUserInCourse(dc: DataConnect, vars: EnrollUserInCourseVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<EnrollUserInCourseData>>;
/** Generated Node Admin SDK operation action function for the 'EnrollUserInCourse' Mutation. Allow users to pass in custom DataConnect instances. */
export function enrollUserInCourse(vars: EnrollUserInCourseVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<EnrollUserInCourseData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateEnrollmentProgress' Mutation. Allow users to execute without passing in DataConnect. */
export function updateEnrollmentProgress(dc: DataConnect, vars: UpdateEnrollmentProgressVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateEnrollmentProgressData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateEnrollmentProgress' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateEnrollmentProgress(vars: UpdateEnrollmentProgressVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateEnrollmentProgressData>>;

/** Generated Node Admin SDK operation action function for the 'CompleteEnrollment' Mutation. Allow users to execute without passing in DataConnect. */
export function completeEnrollment(dc: DataConnect, vars: CompleteEnrollmentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CompleteEnrollmentData>>;
/** Generated Node Admin SDK operation action function for the 'CompleteEnrollment' Mutation. Allow users to pass in custom DataConnect instances. */
export function completeEnrollment(vars: CompleteEnrollmentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CompleteEnrollmentData>>;

/** Generated Node Admin SDK operation action function for the 'MarkLessonComplete' Mutation. Allow users to execute without passing in DataConnect. */
export function markLessonComplete(dc: DataConnect, vars: MarkLessonCompleteVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<MarkLessonCompleteData>>;
/** Generated Node Admin SDK operation action function for the 'MarkLessonComplete' Mutation. Allow users to pass in custom DataConnect instances. */
export function markLessonComplete(vars: MarkLessonCompleteVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<MarkLessonCompleteData>>;

/** Generated Node Admin SDK operation action function for the 'CreateQuiz' Mutation. Allow users to execute without passing in DataConnect. */
export function createQuiz(dc: DataConnect, vars: CreateQuizVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateQuizData>>;
/** Generated Node Admin SDK operation action function for the 'CreateQuiz' Mutation. Allow users to pass in custom DataConnect instances. */
export function createQuiz(vars: CreateQuizVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateQuizData>>;

/** Generated Node Admin SDK operation action function for the 'RecordQuizAttempt' Mutation. Allow users to execute without passing in DataConnect. */
export function recordQuizAttempt(dc: DataConnect, vars: RecordQuizAttemptVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<RecordQuizAttemptData>>;
/** Generated Node Admin SDK operation action function for the 'RecordQuizAttempt' Mutation. Allow users to pass in custom DataConnect instances. */
export function recordQuizAttempt(vars: RecordQuizAttemptVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<RecordQuizAttemptData>>;

/** Generated Node Admin SDK operation action function for the 'GetUser' Query. Allow users to execute without passing in DataConnect. */
export function getUser(dc: DataConnect, vars: GetUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetUserData>>;
/** Generated Node Admin SDK operation action function for the 'GetUser' Query. Allow users to pass in custom DataConnect instances. */
export function getUser(vars: GetUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetUserData>>;

/** Generated Node Admin SDK operation action function for the 'GetUserByEmail' Query. Allow users to execute without passing in DataConnect. */
export function getUserByEmail(dc: DataConnect, vars: GetUserByEmailVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetUserByEmailData>>;
/** Generated Node Admin SDK operation action function for the 'GetUserByEmail' Query. Allow users to pass in custom DataConnect instances. */
export function getUserByEmail(vars: GetUserByEmailVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetUserByEmailData>>;

/** Generated Node Admin SDK operation action function for the 'ListCourses' Query. Allow users to execute without passing in DataConnect. */
export function listCourses(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListCoursesData>>;
/** Generated Node Admin SDK operation action function for the 'ListCourses' Query. Allow users to pass in custom DataConnect instances. */
export function listCourses(options?: OperationOptions): Promise<ExecuteOperationResponse<ListCoursesData>>;

/** Generated Node Admin SDK operation action function for the 'GetCourse' Query. Allow users to execute without passing in DataConnect. */
export function getCourse(dc: DataConnect, vars: GetCourseVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetCourseData>>;
/** Generated Node Admin SDK operation action function for the 'GetCourse' Query. Allow users to pass in custom DataConnect instances. */
export function getCourse(vars: GetCourseVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetCourseData>>;

/** Generated Node Admin SDK operation action function for the 'GetCourseWithLessons' Query. Allow users to execute without passing in DataConnect. */
export function getCourseWithLessons(dc: DataConnect, vars: GetCourseWithLessonsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetCourseWithLessonsData>>;
/** Generated Node Admin SDK operation action function for the 'GetCourseWithLessons' Query. Allow users to pass in custom DataConnect instances. */
export function getCourseWithLessons(vars: GetCourseWithLessonsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetCourseWithLessonsData>>;

/** Generated Node Admin SDK operation action function for the 'GetUserEnrollments' Query. Allow users to execute without passing in DataConnect. */
export function getUserEnrollments(dc: DataConnect, vars: GetUserEnrollmentsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetUserEnrollmentsData>>;
/** Generated Node Admin SDK operation action function for the 'GetUserEnrollments' Query. Allow users to pass in custom DataConnect instances. */
export function getUserEnrollments(vars: GetUserEnrollmentsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetUserEnrollmentsData>>;

/** Generated Node Admin SDK operation action function for the 'GetLesson' Query. Allow users to execute without passing in DataConnect. */
export function getLesson(dc: DataConnect, vars: GetLessonVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetLessonData>>;
/** Generated Node Admin SDK operation action function for the 'GetLesson' Query. Allow users to pass in custom DataConnect instances. */
export function getLesson(vars: GetLessonVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetLessonData>>;

/** Generated Node Admin SDK operation action function for the 'GetLessonsForCourse' Query. Allow users to execute without passing in DataConnect. */
export function getLessonsForCourse(dc: DataConnect, vars: GetLessonsForCourseVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetLessonsForCourseData>>;
/** Generated Node Admin SDK operation action function for the 'GetLessonsForCourse' Query. Allow users to pass in custom DataConnect instances. */
export function getLessonsForCourse(vars: GetLessonsForCourseVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetLessonsForCourseData>>;

