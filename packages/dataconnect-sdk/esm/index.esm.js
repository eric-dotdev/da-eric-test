import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'data-connect-learning',
  location: 'australia-southeast1'
};

export const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';

export function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
}

export const updateUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUser', inputVars);
}
updateUserRef.operationName = 'UpdateUser';

export function updateUser(dcOrVars, vars) {
  return executeMutation(updateUserRef(dcOrVars, vars));
}

export const createCourseRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCourse', inputVars);
}
createCourseRef.operationName = 'CreateCourse';

export function createCourse(dcOrVars, vars) {
  return executeMutation(createCourseRef(dcOrVars, vars));
}

export const createLessonRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateLesson', inputVars);
}
createLessonRef.operationName = 'CreateLesson';

export function createLesson(dcOrVars, vars) {
  return executeMutation(createLessonRef(dcOrVars, vars));
}

export const enrollUserInCourseRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'EnrollUserInCourse', inputVars);
}
enrollUserInCourseRef.operationName = 'EnrollUserInCourse';

export function enrollUserInCourse(dcOrVars, vars) {
  return executeMutation(enrollUserInCourseRef(dcOrVars, vars));
}

export const updateEnrollmentProgressRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateEnrollmentProgress', inputVars);
}
updateEnrollmentProgressRef.operationName = 'UpdateEnrollmentProgress';

export function updateEnrollmentProgress(dcOrVars, vars) {
  return executeMutation(updateEnrollmentProgressRef(dcOrVars, vars));
}

export const completeEnrollmentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CompleteEnrollment', inputVars);
}
completeEnrollmentRef.operationName = 'CompleteEnrollment';

export function completeEnrollment(dcOrVars, vars) {
  return executeMutation(completeEnrollmentRef(dcOrVars, vars));
}

export const markLessonCompleteRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'MarkLessonComplete', inputVars);
}
markLessonCompleteRef.operationName = 'MarkLessonComplete';

export function markLessonComplete(dcOrVars, vars) {
  return executeMutation(markLessonCompleteRef(dcOrVars, vars));
}

export const createQuizRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateQuiz', inputVars);
}
createQuizRef.operationName = 'CreateQuiz';

export function createQuiz(dcOrVars, vars) {
  return executeMutation(createQuizRef(dcOrVars, vars));
}

export const recordQuizAttemptRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RecordQuizAttempt', inputVars);
}
recordQuizAttemptRef.operationName = 'RecordQuizAttempt';

export function recordQuizAttempt(dcOrVars, vars) {
  return executeMutation(recordQuizAttemptRef(dcOrVars, vars));
}

export const getUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUser', inputVars);
}
getUserRef.operationName = 'GetUser';

export function getUser(dcOrVars, vars) {
  return executeQuery(getUserRef(dcOrVars, vars));
}

export const getUserByEmailRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserByEmail', inputVars);
}
getUserByEmailRef.operationName = 'GetUserByEmail';

export function getUserByEmail(dcOrVars, vars) {
  return executeQuery(getUserByEmailRef(dcOrVars, vars));
}

export const listCoursesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCourses');
}
listCoursesRef.operationName = 'ListCourses';

export function listCourses(dc) {
  return executeQuery(listCoursesRef(dc));
}

export const getCourseRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCourse', inputVars);
}
getCourseRef.operationName = 'GetCourse';

export function getCourse(dcOrVars, vars) {
  return executeQuery(getCourseRef(dcOrVars, vars));
}

export const getCourseWithLessonsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCourseWithLessons', inputVars);
}
getCourseWithLessonsRef.operationName = 'GetCourseWithLessons';

export function getCourseWithLessons(dcOrVars, vars) {
  return executeQuery(getCourseWithLessonsRef(dcOrVars, vars));
}

export const getUserEnrollmentsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserEnrollments', inputVars);
}
getUserEnrollmentsRef.operationName = 'GetUserEnrollments';

export function getUserEnrollments(dcOrVars, vars) {
  return executeQuery(getUserEnrollmentsRef(dcOrVars, vars));
}

export const getLessonRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetLesson', inputVars);
}
getLessonRef.operationName = 'GetLesson';

export function getLesson(dcOrVars, vars) {
  return executeQuery(getLessonRef(dcOrVars, vars));
}

export const getLessonsForCourseRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetLessonsForCourse', inputVars);
}
getLessonsForCourseRef.operationName = 'GetLessonsForCourse';

export function getLessonsForCourse(dcOrVars, vars) {
  return executeQuery(getLessonsForCourseRef(dcOrVars, vars));
}

