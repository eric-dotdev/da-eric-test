import { CreateUserData, CreateUserVariables, UpdateUserData, UpdateUserVariables, CreateCourseData, CreateCourseVariables, CreateLessonData, CreateLessonVariables, EnrollUserInCourseData, EnrollUserInCourseVariables, UpdateEnrollmentProgressData, UpdateEnrollmentProgressVariables, CompleteEnrollmentData, CompleteEnrollmentVariables, MarkLessonCompleteData, MarkLessonCompleteVariables, CreateQuizData, CreateQuizVariables, RecordQuizAttemptData, RecordQuizAttemptVariables, GetUserData, GetUserVariables, GetUserByEmailData, GetUserByEmailVariables, ListCoursesData, GetCourseData, GetCourseVariables, GetCourseWithLessonsData, GetCourseWithLessonsVariables, GetUserEnrollmentsData, GetUserEnrollmentsVariables, GetLessonData, GetLessonVariables, GetLessonsForCourseData, GetLessonsForCourseVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;

export function useUpdateUser(options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;
export function useUpdateUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;

export function useCreateCourse(options?: useDataConnectMutationOptions<CreateCourseData, FirebaseError, CreateCourseVariables>): UseDataConnectMutationResult<CreateCourseData, CreateCourseVariables>;
export function useCreateCourse(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCourseData, FirebaseError, CreateCourseVariables>): UseDataConnectMutationResult<CreateCourseData, CreateCourseVariables>;

export function useCreateLesson(options?: useDataConnectMutationOptions<CreateLessonData, FirebaseError, CreateLessonVariables>): UseDataConnectMutationResult<CreateLessonData, CreateLessonVariables>;
export function useCreateLesson(dc: DataConnect, options?: useDataConnectMutationOptions<CreateLessonData, FirebaseError, CreateLessonVariables>): UseDataConnectMutationResult<CreateLessonData, CreateLessonVariables>;

export function useEnrollUserInCourse(options?: useDataConnectMutationOptions<EnrollUserInCourseData, FirebaseError, EnrollUserInCourseVariables>): UseDataConnectMutationResult<EnrollUserInCourseData, EnrollUserInCourseVariables>;
export function useEnrollUserInCourse(dc: DataConnect, options?: useDataConnectMutationOptions<EnrollUserInCourseData, FirebaseError, EnrollUserInCourseVariables>): UseDataConnectMutationResult<EnrollUserInCourseData, EnrollUserInCourseVariables>;

export function useUpdateEnrollmentProgress(options?: useDataConnectMutationOptions<UpdateEnrollmentProgressData, FirebaseError, UpdateEnrollmentProgressVariables>): UseDataConnectMutationResult<UpdateEnrollmentProgressData, UpdateEnrollmentProgressVariables>;
export function useUpdateEnrollmentProgress(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateEnrollmentProgressData, FirebaseError, UpdateEnrollmentProgressVariables>): UseDataConnectMutationResult<UpdateEnrollmentProgressData, UpdateEnrollmentProgressVariables>;

export function useCompleteEnrollment(options?: useDataConnectMutationOptions<CompleteEnrollmentData, FirebaseError, CompleteEnrollmentVariables>): UseDataConnectMutationResult<CompleteEnrollmentData, CompleteEnrollmentVariables>;
export function useCompleteEnrollment(dc: DataConnect, options?: useDataConnectMutationOptions<CompleteEnrollmentData, FirebaseError, CompleteEnrollmentVariables>): UseDataConnectMutationResult<CompleteEnrollmentData, CompleteEnrollmentVariables>;

export function useMarkLessonComplete(options?: useDataConnectMutationOptions<MarkLessonCompleteData, FirebaseError, MarkLessonCompleteVariables>): UseDataConnectMutationResult<MarkLessonCompleteData, MarkLessonCompleteVariables>;
export function useMarkLessonComplete(dc: DataConnect, options?: useDataConnectMutationOptions<MarkLessonCompleteData, FirebaseError, MarkLessonCompleteVariables>): UseDataConnectMutationResult<MarkLessonCompleteData, MarkLessonCompleteVariables>;

export function useCreateQuiz(options?: useDataConnectMutationOptions<CreateQuizData, FirebaseError, CreateQuizVariables>): UseDataConnectMutationResult<CreateQuizData, CreateQuizVariables>;
export function useCreateQuiz(dc: DataConnect, options?: useDataConnectMutationOptions<CreateQuizData, FirebaseError, CreateQuizVariables>): UseDataConnectMutationResult<CreateQuizData, CreateQuizVariables>;

export function useRecordQuizAttempt(options?: useDataConnectMutationOptions<RecordQuizAttemptData, FirebaseError, RecordQuizAttemptVariables>): UseDataConnectMutationResult<RecordQuizAttemptData, RecordQuizAttemptVariables>;
export function useRecordQuizAttempt(dc: DataConnect, options?: useDataConnectMutationOptions<RecordQuizAttemptData, FirebaseError, RecordQuizAttemptVariables>): UseDataConnectMutationResult<RecordQuizAttemptData, RecordQuizAttemptVariables>;

export function useGetUser(vars: GetUserVariables, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, GetUserVariables>;
export function useGetUser(dc: DataConnect, vars: GetUserVariables, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, GetUserVariables>;

export function useGetUserByEmail(vars: GetUserByEmailVariables, options?: useDataConnectQueryOptions<GetUserByEmailData>): UseDataConnectQueryResult<GetUserByEmailData, GetUserByEmailVariables>;
export function useGetUserByEmail(dc: DataConnect, vars: GetUserByEmailVariables, options?: useDataConnectQueryOptions<GetUserByEmailData>): UseDataConnectQueryResult<GetUserByEmailData, GetUserByEmailVariables>;

export function useListCourses(options?: useDataConnectQueryOptions<ListCoursesData>): UseDataConnectQueryResult<ListCoursesData, undefined>;
export function useListCourses(dc: DataConnect, options?: useDataConnectQueryOptions<ListCoursesData>): UseDataConnectQueryResult<ListCoursesData, undefined>;

export function useGetCourse(vars: GetCourseVariables, options?: useDataConnectQueryOptions<GetCourseData>): UseDataConnectQueryResult<GetCourseData, GetCourseVariables>;
export function useGetCourse(dc: DataConnect, vars: GetCourseVariables, options?: useDataConnectQueryOptions<GetCourseData>): UseDataConnectQueryResult<GetCourseData, GetCourseVariables>;

export function useGetCourseWithLessons(vars: GetCourseWithLessonsVariables, options?: useDataConnectQueryOptions<GetCourseWithLessonsData>): UseDataConnectQueryResult<GetCourseWithLessonsData, GetCourseWithLessonsVariables>;
export function useGetCourseWithLessons(dc: DataConnect, vars: GetCourseWithLessonsVariables, options?: useDataConnectQueryOptions<GetCourseWithLessonsData>): UseDataConnectQueryResult<GetCourseWithLessonsData, GetCourseWithLessonsVariables>;

export function useGetUserEnrollments(vars: GetUserEnrollmentsVariables, options?: useDataConnectQueryOptions<GetUserEnrollmentsData>): UseDataConnectQueryResult<GetUserEnrollmentsData, GetUserEnrollmentsVariables>;
export function useGetUserEnrollments(dc: DataConnect, vars: GetUserEnrollmentsVariables, options?: useDataConnectQueryOptions<GetUserEnrollmentsData>): UseDataConnectQueryResult<GetUserEnrollmentsData, GetUserEnrollmentsVariables>;

export function useGetLesson(vars: GetLessonVariables, options?: useDataConnectQueryOptions<GetLessonData>): UseDataConnectQueryResult<GetLessonData, GetLessonVariables>;
export function useGetLesson(dc: DataConnect, vars: GetLessonVariables, options?: useDataConnectQueryOptions<GetLessonData>): UseDataConnectQueryResult<GetLessonData, GetLessonVariables>;

export function useGetLessonsForCourse(vars: GetLessonsForCourseVariables, options?: useDataConnectQueryOptions<GetLessonsForCourseData>): UseDataConnectQueryResult<GetLessonsForCourseData, GetLessonsForCourseVariables>;
export function useGetLessonsForCourse(dc: DataConnect, vars: GetLessonsForCourseVariables, options?: useDataConnectQueryOptions<GetLessonsForCourseData>): UseDataConnectQueryResult<GetLessonsForCourseData, GetLessonsForCourseVariables>;
