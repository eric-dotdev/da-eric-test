# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateUser, useUpdateUser, useCreateCourse, useCreateLesson, useEnrollUserInCourse, useUpdateEnrollmentProgress, useCompleteEnrollment, useMarkLessonComplete, useCreateQuiz, useRecordQuizAttempt } from '@repo/dataconnect-sdk/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateUser(createUserVars);

const { data, isPending, isSuccess, isError, error } = useUpdateUser(updateUserVars);

const { data, isPending, isSuccess, isError, error } = useCreateCourse(createCourseVars);

const { data, isPending, isSuccess, isError, error } = useCreateLesson(createLessonVars);

const { data, isPending, isSuccess, isError, error } = useEnrollUserInCourse(enrollUserInCourseVars);

const { data, isPending, isSuccess, isError, error } = useUpdateEnrollmentProgress(updateEnrollmentProgressVars);

const { data, isPending, isSuccess, isError, error } = useCompleteEnrollment(completeEnrollmentVars);

const { data, isPending, isSuccess, isError, error } = useMarkLessonComplete(markLessonCompleteVars);

const { data, isPending, isSuccess, isError, error } = useCreateQuiz(createQuizVars);

const { data, isPending, isSuccess, isError, error } = useRecordQuizAttempt(recordQuizAttemptVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUser, updateUser, createCourse, createLesson, enrollUserInCourse, updateEnrollmentProgress, completeEnrollment, markLessonComplete, createQuiz, recordQuizAttempt } from '@repo/dataconnect-sdk';


// Operation CreateUser:  For variables, look at type CreateUserVars in ../index.d.ts
const { data } = await CreateUser(dataConnect, createUserVars);

// Operation UpdateUser:  For variables, look at type UpdateUserVars in ../index.d.ts
const { data } = await UpdateUser(dataConnect, updateUserVars);

// Operation CreateCourse:  For variables, look at type CreateCourseVars in ../index.d.ts
const { data } = await CreateCourse(dataConnect, createCourseVars);

// Operation CreateLesson:  For variables, look at type CreateLessonVars in ../index.d.ts
const { data } = await CreateLesson(dataConnect, createLessonVars);

// Operation EnrollUserInCourse:  For variables, look at type EnrollUserInCourseVars in ../index.d.ts
const { data } = await EnrollUserInCourse(dataConnect, enrollUserInCourseVars);

// Operation UpdateEnrollmentProgress:  For variables, look at type UpdateEnrollmentProgressVars in ../index.d.ts
const { data } = await UpdateEnrollmentProgress(dataConnect, updateEnrollmentProgressVars);

// Operation CompleteEnrollment:  For variables, look at type CompleteEnrollmentVars in ../index.d.ts
const { data } = await CompleteEnrollment(dataConnect, completeEnrollmentVars);

// Operation MarkLessonComplete:  For variables, look at type MarkLessonCompleteVars in ../index.d.ts
const { data } = await MarkLessonComplete(dataConnect, markLessonCompleteVars);

// Operation CreateQuiz:  For variables, look at type CreateQuizVars in ../index.d.ts
const { data } = await CreateQuiz(dataConnect, createQuizVars);

// Operation RecordQuizAttempt:  For variables, look at type RecordQuizAttemptVars in ../index.d.ts
const { data } = await RecordQuizAttempt(dataConnect, recordQuizAttemptVars);


```