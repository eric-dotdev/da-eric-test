const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'data-connect-learning',
  location: 'australia-southeast1'
};
exports.connectorConfig = connectorConfig;

const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
};

const updateUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUser', inputVars);
}
updateUserRef.operationName = 'UpdateUser';
exports.updateUserRef = updateUserRef;

exports.updateUser = function updateUser(dcOrVars, vars) {
  return executeMutation(updateUserRef(dcOrVars, vars));
};

const createCourseRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCourse', inputVars);
}
createCourseRef.operationName = 'CreateCourse';
exports.createCourseRef = createCourseRef;

exports.createCourse = function createCourse(dcOrVars, vars) {
  return executeMutation(createCourseRef(dcOrVars, vars));
};

const createLessonRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateLesson', inputVars);
}
createLessonRef.operationName = 'CreateLesson';
exports.createLessonRef = createLessonRef;

exports.createLesson = function createLesson(dcOrVars, vars) {
  return executeMutation(createLessonRef(dcOrVars, vars));
};

const enrollUserInCourseRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'EnrollUserInCourse', inputVars);
}
enrollUserInCourseRef.operationName = 'EnrollUserInCourse';
exports.enrollUserInCourseRef = enrollUserInCourseRef;

exports.enrollUserInCourse = function enrollUserInCourse(dcOrVars, vars) {
  return executeMutation(enrollUserInCourseRef(dcOrVars, vars));
};

const updateEnrollmentProgressRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateEnrollmentProgress', inputVars);
}
updateEnrollmentProgressRef.operationName = 'UpdateEnrollmentProgress';
exports.updateEnrollmentProgressRef = updateEnrollmentProgressRef;

exports.updateEnrollmentProgress = function updateEnrollmentProgress(dcOrVars, vars) {
  return executeMutation(updateEnrollmentProgressRef(dcOrVars, vars));
};

const completeEnrollmentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CompleteEnrollment', inputVars);
}
completeEnrollmentRef.operationName = 'CompleteEnrollment';
exports.completeEnrollmentRef = completeEnrollmentRef;

exports.completeEnrollment = function completeEnrollment(dcOrVars, vars) {
  return executeMutation(completeEnrollmentRef(dcOrVars, vars));
};

const markLessonCompleteRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'MarkLessonComplete', inputVars);
}
markLessonCompleteRef.operationName = 'MarkLessonComplete';
exports.markLessonCompleteRef = markLessonCompleteRef;

exports.markLessonComplete = function markLessonComplete(dcOrVars, vars) {
  return executeMutation(markLessonCompleteRef(dcOrVars, vars));
};

const createQuizRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateQuiz', inputVars);
}
createQuizRef.operationName = 'CreateQuiz';
exports.createQuizRef = createQuizRef;

exports.createQuiz = function createQuiz(dcOrVars, vars) {
  return executeMutation(createQuizRef(dcOrVars, vars));
};

const recordQuizAttemptRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RecordQuizAttempt', inputVars);
}
recordQuizAttemptRef.operationName = 'RecordQuizAttempt';
exports.recordQuizAttemptRef = recordQuizAttemptRef;

exports.recordQuizAttempt = function recordQuizAttempt(dcOrVars, vars) {
  return executeMutation(recordQuizAttemptRef(dcOrVars, vars));
};

const getUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUser', inputVars);
}
getUserRef.operationName = 'GetUser';
exports.getUserRef = getUserRef;

exports.getUser = function getUser(dcOrVars, vars) {
  return executeQuery(getUserRef(dcOrVars, vars));
};

const getUserByEmailRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserByEmail', inputVars);
}
getUserByEmailRef.operationName = 'GetUserByEmail';
exports.getUserByEmailRef = getUserByEmailRef;

exports.getUserByEmail = function getUserByEmail(dcOrVars, vars) {
  return executeQuery(getUserByEmailRef(dcOrVars, vars));
};

const listCoursesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCourses');
}
listCoursesRef.operationName = 'ListCourses';
exports.listCoursesRef = listCoursesRef;

exports.listCourses = function listCourses(dc) {
  return executeQuery(listCoursesRef(dc));
};

const getCourseRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCourse', inputVars);
}
getCourseRef.operationName = 'GetCourse';
exports.getCourseRef = getCourseRef;

exports.getCourse = function getCourse(dcOrVars, vars) {
  return executeQuery(getCourseRef(dcOrVars, vars));
};

const getCourseWithLessonsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCourseWithLessons', inputVars);
}
getCourseWithLessonsRef.operationName = 'GetCourseWithLessons';
exports.getCourseWithLessonsRef = getCourseWithLessonsRef;

exports.getCourseWithLessons = function getCourseWithLessons(dcOrVars, vars) {
  return executeQuery(getCourseWithLessonsRef(dcOrVars, vars));
};

const getUserEnrollmentsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserEnrollments', inputVars);
}
getUserEnrollmentsRef.operationName = 'GetUserEnrollments';
exports.getUserEnrollmentsRef = getUserEnrollmentsRef;

exports.getUserEnrollments = function getUserEnrollments(dcOrVars, vars) {
  return executeQuery(getUserEnrollmentsRef(dcOrVars, vars));
};

const getLessonRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetLesson', inputVars);
}
getLessonRef.operationName = 'GetLesson';
exports.getLessonRef = getLessonRef;

exports.getLesson = function getLesson(dcOrVars, vars) {
  return executeQuery(getLessonRef(dcOrVars, vars));
};

const getLessonsForCourseRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetLessonsForCourse', inputVars);
}
getLessonsForCourseRef.operationName = 'GetLessonsForCourse';
exports.getLessonsForCourseRef = getLessonsForCourseRef;

exports.getLessonsForCourse = function getLessonsForCourse(dcOrVars, vars) {
  return executeQuery(getLessonsForCourseRef(dcOrVars, vars));
};
