# Generated React README
This README will guide you through the process of using the generated React SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `JavaScript README`, you can find it at [`dataconnect-sdk/README.md`](../README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@repo/dataconnect-sdk/react` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#react).

# Table of Contents
- [**Overview**](#generated-react-readme)
- [**TanStack Query Firebase & TanStack React Query**](#tanstack-query-firebase-tanstack-react-query)
  - [*Package Installation*](#installing-tanstack-query-firebase-and-tanstack-react-query-packages)
  - [*Configuring TanStack Query*](#configuring-tanstack-query)
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

# TanStack Query Firebase & TanStack React Query
This SDK provides [React](https://react.dev/) hooks generated specific to your application, for the operations found in the connector `example`. These hooks are generated using [TanStack Query Firebase](https://react-query-firebase.invertase.dev/) by our partners at Invertase, a library built on top of [TanStack React Query v5](https://tanstack.com/query/v5/docs/framework/react/overview).

***You do not need to be familiar with Tanstack Query or Tanstack Query Firebase to use this SDK.*** However, you may find it useful to learn more about them, as they will empower you as a user of this Generated React SDK.

## Installing TanStack Query Firebase and TanStack React Query Packages
In order to use the React generated SDK, you must install the `TanStack React Query` and `TanStack Query Firebase` packages.
```bash
npm i --save @tanstack/react-query @tanstack-query-firebase/react
```
```bash
npm i --save firebase@latest # Note: React has a peer dependency on ^11.3.0
```

You can also follow the installation instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#tanstack-install), or the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react) and [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/installation).

## Configuring TanStack Query
In order to use the React generated SDK in your application, you must wrap your application's component tree in a `QueryClientProvider` component from TanStack React Query. None of your generated React SDK hooks will work without this provider.

```javascript
import { QueryClientProvider } from '@tanstack/react-query';

// Create a TanStack Query client instance
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <MyApplication />
    </QueryClientProvider>
  )
}
```

To learn more about `QueryClientProvider`, see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/quick-start) and the [TanStack Query Firebase documentation](https://invertase.docs.page/tanstack-query-firebase/react#usage).

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@repo/dataconnect-sdk';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#emulator-react-angular).

```javascript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@repo/dataconnect-sdk';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) using the hooks provided from your generated React SDK.

# Queries

The React generated SDK provides Query hook functions that call and return [`useDataConnectQuery`](https://react-query-firebase.invertase.dev/react/data-connect/querying) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and the most recent data returned by the Query, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/querying).

TanStack React Query caches the results of your Queries, so using the same Query hook function in multiple places in your application allows the entire application to automatically see updates to that Query's data.

Query hooks execute their Queries automatically when called, and periodically refresh, unless you change the `queryOptions` for the Query. To learn how to stop a Query from automatically executing, including how to make a query "lazy", see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/guides/disabling-queries).

To learn more about TanStack React Query's Queries, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/queries).

## Using Query Hooks
Here's a general overview of how to use the generated Query hooks in your code:

- If the Query has no variables, the Query hook function does not require arguments.
- If the Query has any required variables, the Query hook function will require at least one argument: an object that contains all the required variables for the Query.
- If the Query has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Query's variables are optional, the Query hook function does not require any arguments.
- Query hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Query hooks functions can be called with or without passing in an `options` argument of type `useDataConnectQueryOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/query-options).
  - ***Special case:***  If the Query has all optional variables and you would like to provide an `options` argument to the Query hook function without providing any variables, you must pass `undefined` where you would normally pass the Query's variables, and then may provide the `options` argument.

Below are examples of how to use the `example` connector's generated Query hook functions to execute each Query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## GetUser
You can execute the `GetUser` Query using the following Query hook function, which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts):

```javascript
useGetUser(dc: DataConnect, vars: GetUserVariables, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, GetUserVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetUser(vars: GetUserVariables, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, GetUserVariables>;
```

### Variables
The `GetUser` Query requires an argument of type `GetUserVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetUserVariables {
  id: User_Key;
}
```
### Return Type
Recall that calling the `GetUser` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetUser` Query is of type `GetUserData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetUser`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetUserVariables } from '@repo/dataconnect-sdk';
import { useGetUser } from '@repo/dataconnect-sdk/react'

export default function GetUserComponent() {
  // The `useGetUser` Query hook requires an argument of type `GetUserVariables`:
  const getUserVars: GetUserVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetUser(getUserVars);
  // Variables can be defined inline as well.
  const query = useGetUser({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetUser(dataConnect, getUserVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetUser(getUserVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetUser(dataConnect, getUserVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.user);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetUserByEmail
You can execute the `GetUserByEmail` Query using the following Query hook function, which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts):

```javascript
useGetUserByEmail(dc: DataConnect, vars: GetUserByEmailVariables, options?: useDataConnectQueryOptions<GetUserByEmailData>): UseDataConnectQueryResult<GetUserByEmailData, GetUserByEmailVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetUserByEmail(vars: GetUserByEmailVariables, options?: useDataConnectQueryOptions<GetUserByEmailData>): UseDataConnectQueryResult<GetUserByEmailData, GetUserByEmailVariables>;
```

### Variables
The `GetUserByEmail` Query requires an argument of type `GetUserByEmailVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetUserByEmailVariables {
  email: string;
}
```
### Return Type
Recall that calling the `GetUserByEmail` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetUserByEmail` Query is of type `GetUserByEmailData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetUserByEmail`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetUserByEmailVariables } from '@repo/dataconnect-sdk';
import { useGetUserByEmail } from '@repo/dataconnect-sdk/react'

export default function GetUserByEmailComponent() {
  // The `useGetUserByEmail` Query hook requires an argument of type `GetUserByEmailVariables`:
  const getUserByEmailVars: GetUserByEmailVariables = {
    email: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetUserByEmail(getUserByEmailVars);
  // Variables can be defined inline as well.
  const query = useGetUserByEmail({ email: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetUserByEmail(dataConnect, getUserByEmailVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetUserByEmail(getUserByEmailVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetUserByEmail(dataConnect, getUserByEmailVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.users);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListCourses
You can execute the `ListCourses` Query using the following Query hook function, which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts):

```javascript
useListCourses(dc: DataConnect, options?: useDataConnectQueryOptions<ListCoursesData>): UseDataConnectQueryResult<ListCoursesData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListCourses(options?: useDataConnectQueryOptions<ListCoursesData>): UseDataConnectQueryResult<ListCoursesData, undefined>;
```

### Variables
The `ListCourses` Query has no variables.
### Return Type
Recall that calling the `ListCourses` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListCourses` Query is of type `ListCoursesData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListCourses`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@repo/dataconnect-sdk';
import { useListCourses } from '@repo/dataconnect-sdk/react'

export default function ListCoursesComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListCourses();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListCourses(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListCourses(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListCourses(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.courses);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetCourse
You can execute the `GetCourse` Query using the following Query hook function, which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts):

```javascript
useGetCourse(dc: DataConnect, vars: GetCourseVariables, options?: useDataConnectQueryOptions<GetCourseData>): UseDataConnectQueryResult<GetCourseData, GetCourseVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetCourse(vars: GetCourseVariables, options?: useDataConnectQueryOptions<GetCourseData>): UseDataConnectQueryResult<GetCourseData, GetCourseVariables>;
```

### Variables
The `GetCourse` Query requires an argument of type `GetCourseVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetCourseVariables {
  id: Course_Key;
}
```
### Return Type
Recall that calling the `GetCourse` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetCourse` Query is of type `GetCourseData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetCourse`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetCourseVariables } from '@repo/dataconnect-sdk';
import { useGetCourse } from '@repo/dataconnect-sdk/react'

export default function GetCourseComponent() {
  // The `useGetCourse` Query hook requires an argument of type `GetCourseVariables`:
  const getCourseVars: GetCourseVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetCourse(getCourseVars);
  // Variables can be defined inline as well.
  const query = useGetCourse({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetCourse(dataConnect, getCourseVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetCourse(getCourseVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetCourse(dataConnect, getCourseVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.course);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetCourseWithLessons
You can execute the `GetCourseWithLessons` Query using the following Query hook function, which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts):

```javascript
useGetCourseWithLessons(dc: DataConnect, vars: GetCourseWithLessonsVariables, options?: useDataConnectQueryOptions<GetCourseWithLessonsData>): UseDataConnectQueryResult<GetCourseWithLessonsData, GetCourseWithLessonsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetCourseWithLessons(vars: GetCourseWithLessonsVariables, options?: useDataConnectQueryOptions<GetCourseWithLessonsData>): UseDataConnectQueryResult<GetCourseWithLessonsData, GetCourseWithLessonsVariables>;
```

### Variables
The `GetCourseWithLessons` Query requires an argument of type `GetCourseWithLessonsVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetCourseWithLessonsVariables {
  id: Course_Key;
}
```
### Return Type
Recall that calling the `GetCourseWithLessons` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetCourseWithLessons` Query is of type `GetCourseWithLessonsData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetCourseWithLessons`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetCourseWithLessonsVariables } from '@repo/dataconnect-sdk';
import { useGetCourseWithLessons } from '@repo/dataconnect-sdk/react'

export default function GetCourseWithLessonsComponent() {
  // The `useGetCourseWithLessons` Query hook requires an argument of type `GetCourseWithLessonsVariables`:
  const getCourseWithLessonsVars: GetCourseWithLessonsVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetCourseWithLessons(getCourseWithLessonsVars);
  // Variables can be defined inline as well.
  const query = useGetCourseWithLessons({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetCourseWithLessons(dataConnect, getCourseWithLessonsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetCourseWithLessons(getCourseWithLessonsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetCourseWithLessons(dataConnect, getCourseWithLessonsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.course);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetUserEnrollments
You can execute the `GetUserEnrollments` Query using the following Query hook function, which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts):

```javascript
useGetUserEnrollments(dc: DataConnect, vars: GetUserEnrollmentsVariables, options?: useDataConnectQueryOptions<GetUserEnrollmentsData>): UseDataConnectQueryResult<GetUserEnrollmentsData, GetUserEnrollmentsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetUserEnrollments(vars: GetUserEnrollmentsVariables, options?: useDataConnectQueryOptions<GetUserEnrollmentsData>): UseDataConnectQueryResult<GetUserEnrollmentsData, GetUserEnrollmentsVariables>;
```

### Variables
The `GetUserEnrollments` Query requires an argument of type `GetUserEnrollmentsVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetUserEnrollmentsVariables {
  userId: User_Key;
}
```
### Return Type
Recall that calling the `GetUserEnrollments` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetUserEnrollments` Query is of type `GetUserEnrollmentsData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetUserEnrollments`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetUserEnrollmentsVariables } from '@repo/dataconnect-sdk';
import { useGetUserEnrollments } from '@repo/dataconnect-sdk/react'

export default function GetUserEnrollmentsComponent() {
  // The `useGetUserEnrollments` Query hook requires an argument of type `GetUserEnrollmentsVariables`:
  const getUserEnrollmentsVars: GetUserEnrollmentsVariables = {
    userId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetUserEnrollments(getUserEnrollmentsVars);
  // Variables can be defined inline as well.
  const query = useGetUserEnrollments({ userId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetUserEnrollments(dataConnect, getUserEnrollmentsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetUserEnrollments(getUserEnrollmentsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetUserEnrollments(dataConnect, getUserEnrollmentsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.user);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetLesson
You can execute the `GetLesson` Query using the following Query hook function, which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts):

```javascript
useGetLesson(dc: DataConnect, vars: GetLessonVariables, options?: useDataConnectQueryOptions<GetLessonData>): UseDataConnectQueryResult<GetLessonData, GetLessonVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetLesson(vars: GetLessonVariables, options?: useDataConnectQueryOptions<GetLessonData>): UseDataConnectQueryResult<GetLessonData, GetLessonVariables>;
```

### Variables
The `GetLesson` Query requires an argument of type `GetLessonVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetLessonVariables {
  id: Lesson_Key;
}
```
### Return Type
Recall that calling the `GetLesson` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetLesson` Query is of type `GetLessonData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetLesson`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetLessonVariables } from '@repo/dataconnect-sdk';
import { useGetLesson } from '@repo/dataconnect-sdk/react'

export default function GetLessonComponent() {
  // The `useGetLesson` Query hook requires an argument of type `GetLessonVariables`:
  const getLessonVars: GetLessonVariables = {
    id: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetLesson(getLessonVars);
  // Variables can be defined inline as well.
  const query = useGetLesson({ id: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetLesson(dataConnect, getLessonVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetLesson(getLessonVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetLesson(dataConnect, getLessonVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.lesson);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetLessonsForCourse
You can execute the `GetLessonsForCourse` Query using the following Query hook function, which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts):

```javascript
useGetLessonsForCourse(dc: DataConnect, vars: GetLessonsForCourseVariables, options?: useDataConnectQueryOptions<GetLessonsForCourseData>): UseDataConnectQueryResult<GetLessonsForCourseData, GetLessonsForCourseVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetLessonsForCourse(vars: GetLessonsForCourseVariables, options?: useDataConnectQueryOptions<GetLessonsForCourseData>): UseDataConnectQueryResult<GetLessonsForCourseData, GetLessonsForCourseVariables>;
```

### Variables
The `GetLessonsForCourse` Query requires an argument of type `GetLessonsForCourseVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetLessonsForCourseVariables {
  courseId: UUIDString;
}
```
### Return Type
Recall that calling the `GetLessonsForCourse` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetLessonsForCourse` Query is of type `GetLessonsForCourseData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetLessonsForCourse`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetLessonsForCourseVariables } from '@repo/dataconnect-sdk';
import { useGetLessonsForCourse } from '@repo/dataconnect-sdk/react'

export default function GetLessonsForCourseComponent() {
  // The `useGetLessonsForCourse` Query hook requires an argument of type `GetLessonsForCourseVariables`:
  const getLessonsForCourseVars: GetLessonsForCourseVariables = {
    courseId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetLessonsForCourse(getLessonsForCourseVars);
  // Variables can be defined inline as well.
  const query = useGetLessonsForCourse({ courseId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetLessonsForCourse(dataConnect, getLessonsForCourseVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetLessonsForCourse(getLessonsForCourseVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetLessonsForCourse(dataConnect, getLessonsForCourseVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.lessons);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

# Mutations

The React generated SDK provides Mutations hook functions that call and return [`useDataConnectMutation`](https://react-query-firebase.invertase.dev/react/data-connect/mutations) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, and the most recent data returned by the Mutation, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/mutations).

Mutation hooks do not execute their Mutations automatically when called. Rather, after calling the Mutation hook function and getting a `UseMutationResult` object, you must call the `UseMutationResult.mutate()` function to execute the Mutation.

To learn more about TanStack React Query's Mutations, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations).

## Using Mutation Hooks
Here's a general overview of how to use the generated Mutation hooks in your code:

- Mutation hook functions are not called with the arguments to the Mutation. Instead, arguments are passed to `UseMutationResult.mutate()`.
- If the Mutation has no variables, the `mutate()` function does not require arguments.
- If the Mutation has any required variables, the `mutate()` function will require at least one argument: an object that contains all the required variables for the Mutation.
- If the Mutation has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Mutation's variables are optional, the Mutation hook function does not require any arguments.
- Mutation hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Mutation hooks also accept an `options` argument of type `useDataConnectMutationOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations#mutation-side-effects).
  - `UseMutationResult.mutate()` also accepts an `options` argument of type `useDataConnectMutationOptions`.
  - ***Special case:*** If the Mutation has no arguments (or all optional arguments and you wish to provide none), and you want to pass `options` to `UseMutationResult.mutate()`, you must pass `undefined` where you would normally pass the Mutation's arguments, and then may provide the options argument.

Below are examples of how to use the `example` connector's generated Mutation hook functions to execute each Mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## CreateUser
You can execute the `CreateUser` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts)):
```javascript
useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
```

### Variables
The `CreateUser` Mutation requires an argument of type `CreateUserVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateUserVariables {
  displayName: string;
  email: string;
  photoUrl?: string | null;
}
```
### Return Type
Recall that calling the `CreateUser` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateUser` Mutation is of type `CreateUserData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateUserData {
  user_insert: User_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateUser`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateUserVariables } from '@repo/dataconnect-sdk';
import { useCreateUser } from '@repo/dataconnect-sdk/react'

export default function CreateUserComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateUser();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateUser(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateUser(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateUser(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateUser` Mutation requires an argument of type `CreateUserVariables`:
  const createUserVars: CreateUserVariables = {
    displayName: ..., 
    email: ..., 
    photoUrl: ..., // optional
  };
  mutation.mutate(createUserVars);
  // Variables can be defined inline as well.
  mutation.mutate({ displayName: ..., email: ..., photoUrl: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createUserVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.user_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateUser
You can execute the `UpdateUser` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateUser(options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;
```

### Variables
The `UpdateUser` Mutation requires an argument of type `UpdateUserVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateUserVariables {
  id: User_Key;
  displayName?: string | null;
  photoUrl?: string | null;
}
```
### Return Type
Recall that calling the `UpdateUser` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateUser` Mutation is of type `UpdateUserData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateUserData {
  user_update?: User_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateUser`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateUserVariables } from '@repo/dataconnect-sdk';
import { useUpdateUser } from '@repo/dataconnect-sdk/react'

export default function UpdateUserComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateUser();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateUser(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateUser(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateUser(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateUser` Mutation requires an argument of type `UpdateUserVariables`:
  const updateUserVars: UpdateUserVariables = {
    id: ..., 
    displayName: ..., // optional
    photoUrl: ..., // optional
  };
  mutation.mutate(updateUserVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., displayName: ..., photoUrl: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateUserVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.user_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateCourse
You can execute the `CreateCourse` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts)):
```javascript
useCreateCourse(options?: useDataConnectMutationOptions<CreateCourseData, FirebaseError, CreateCourseVariables>): UseDataConnectMutationResult<CreateCourseData, CreateCourseVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateCourse(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCourseData, FirebaseError, CreateCourseVariables>): UseDataConnectMutationResult<CreateCourseData, CreateCourseVariables>;
```

### Variables
The `CreateCourse` Mutation requires an argument of type `CreateCourseVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateCourseVariables {
  title: string;
  description: string;
  estimatedCompletionTime: string;
  imageUrl?: string | null;
}
```
### Return Type
Recall that calling the `CreateCourse` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateCourse` Mutation is of type `CreateCourseData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateCourseData {
  course_insert: Course_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateCourse`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateCourseVariables } from '@repo/dataconnect-sdk';
import { useCreateCourse } from '@repo/dataconnect-sdk/react'

export default function CreateCourseComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateCourse();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateCourse(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateCourse(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateCourse(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateCourse` Mutation requires an argument of type `CreateCourseVariables`:
  const createCourseVars: CreateCourseVariables = {
    title: ..., 
    description: ..., 
    estimatedCompletionTime: ..., 
    imageUrl: ..., // optional
  };
  mutation.mutate(createCourseVars);
  // Variables can be defined inline as well.
  mutation.mutate({ title: ..., description: ..., estimatedCompletionTime: ..., imageUrl: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createCourseVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.course_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateLesson
You can execute the `CreateLesson` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts)):
```javascript
useCreateLesson(options?: useDataConnectMutationOptions<CreateLessonData, FirebaseError, CreateLessonVariables>): UseDataConnectMutationResult<CreateLessonData, CreateLessonVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateLesson(dc: DataConnect, options?: useDataConnectMutationOptions<CreateLessonData, FirebaseError, CreateLessonVariables>): UseDataConnectMutationResult<CreateLessonData, CreateLessonVariables>;
```

### Variables
The `CreateLesson` Mutation requires an argument of type `CreateLessonVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
Recall that calling the `CreateLesson` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateLesson` Mutation is of type `CreateLessonData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateLessonData {
  lesson_insert: Lesson_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateLesson`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateLessonVariables } from '@repo/dataconnect-sdk';
import { useCreateLesson } from '@repo/dataconnect-sdk/react'

export default function CreateLessonComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateLesson();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateLesson(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateLesson(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateLesson(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateLesson` Mutation requires an argument of type `CreateLessonVariables`:
  const createLessonVars: CreateLessonVariables = {
    courseId: ..., 
    title: ..., 
    content: ..., 
    order: ..., 
    videoUrl: ..., // optional
    documentUrl: ..., // optional
  };
  mutation.mutate(createLessonVars);
  // Variables can be defined inline as well.
  mutation.mutate({ courseId: ..., title: ..., content: ..., order: ..., videoUrl: ..., documentUrl: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createLessonVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.lesson_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## EnrollUserInCourse
You can execute the `EnrollUserInCourse` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts)):
```javascript
useEnrollUserInCourse(options?: useDataConnectMutationOptions<EnrollUserInCourseData, FirebaseError, EnrollUserInCourseVariables>): UseDataConnectMutationResult<EnrollUserInCourseData, EnrollUserInCourseVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useEnrollUserInCourse(dc: DataConnect, options?: useDataConnectMutationOptions<EnrollUserInCourseData, FirebaseError, EnrollUserInCourseVariables>): UseDataConnectMutationResult<EnrollUserInCourseData, EnrollUserInCourseVariables>;
```

### Variables
The `EnrollUserInCourse` Mutation requires an argument of type `EnrollUserInCourseVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface EnrollUserInCourseVariables {
  userId: User_Key;
  courseId: Course_Key;
}
```
### Return Type
Recall that calling the `EnrollUserInCourse` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `EnrollUserInCourse` Mutation is of type `EnrollUserInCourseData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface EnrollUserInCourseData {
  enrollment_insert: Enrollment_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `EnrollUserInCourse`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, EnrollUserInCourseVariables } from '@repo/dataconnect-sdk';
import { useEnrollUserInCourse } from '@repo/dataconnect-sdk/react'

export default function EnrollUserInCourseComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useEnrollUserInCourse();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useEnrollUserInCourse(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useEnrollUserInCourse(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useEnrollUserInCourse(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useEnrollUserInCourse` Mutation requires an argument of type `EnrollUserInCourseVariables`:
  const enrollUserInCourseVars: EnrollUserInCourseVariables = {
    userId: ..., 
    courseId: ..., 
  };
  mutation.mutate(enrollUserInCourseVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userId: ..., courseId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(enrollUserInCourseVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.enrollment_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateEnrollmentProgress
You can execute the `UpdateEnrollmentProgress` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateEnrollmentProgress(options?: useDataConnectMutationOptions<UpdateEnrollmentProgressData, FirebaseError, UpdateEnrollmentProgressVariables>): UseDataConnectMutationResult<UpdateEnrollmentProgressData, UpdateEnrollmentProgressVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateEnrollmentProgress(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateEnrollmentProgressData, FirebaseError, UpdateEnrollmentProgressVariables>): UseDataConnectMutationResult<UpdateEnrollmentProgressData, UpdateEnrollmentProgressVariables>;
```

### Variables
The `UpdateEnrollmentProgress` Mutation requires an argument of type `UpdateEnrollmentProgressVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateEnrollmentProgressVariables {
  userId: UUIDString;
  courseId: UUIDString;
  progressPercentage: number;
}
```
### Return Type
Recall that calling the `UpdateEnrollmentProgress` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateEnrollmentProgress` Mutation is of type `UpdateEnrollmentProgressData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateEnrollmentProgressData {
  enrollment_update?: Enrollment_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateEnrollmentProgress`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateEnrollmentProgressVariables } from '@repo/dataconnect-sdk';
import { useUpdateEnrollmentProgress } from '@repo/dataconnect-sdk/react'

export default function UpdateEnrollmentProgressComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateEnrollmentProgress();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateEnrollmentProgress(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateEnrollmentProgress(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateEnrollmentProgress(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateEnrollmentProgress` Mutation requires an argument of type `UpdateEnrollmentProgressVariables`:
  const updateEnrollmentProgressVars: UpdateEnrollmentProgressVariables = {
    userId: ..., 
    courseId: ..., 
    progressPercentage: ..., 
  };
  mutation.mutate(updateEnrollmentProgressVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userId: ..., courseId: ..., progressPercentage: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateEnrollmentProgressVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.enrollment_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CompleteEnrollment
You can execute the `CompleteEnrollment` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts)):
```javascript
useCompleteEnrollment(options?: useDataConnectMutationOptions<CompleteEnrollmentData, FirebaseError, CompleteEnrollmentVariables>): UseDataConnectMutationResult<CompleteEnrollmentData, CompleteEnrollmentVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCompleteEnrollment(dc: DataConnect, options?: useDataConnectMutationOptions<CompleteEnrollmentData, FirebaseError, CompleteEnrollmentVariables>): UseDataConnectMutationResult<CompleteEnrollmentData, CompleteEnrollmentVariables>;
```

### Variables
The `CompleteEnrollment` Mutation requires an argument of type `CompleteEnrollmentVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CompleteEnrollmentVariables {
  userId: UUIDString;
  courseId: UUIDString;
}
```
### Return Type
Recall that calling the `CompleteEnrollment` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CompleteEnrollment` Mutation is of type `CompleteEnrollmentData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CompleteEnrollmentData {
  enrollment_update?: Enrollment_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CompleteEnrollment`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CompleteEnrollmentVariables } from '@repo/dataconnect-sdk';
import { useCompleteEnrollment } from '@repo/dataconnect-sdk/react'

export default function CompleteEnrollmentComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCompleteEnrollment();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCompleteEnrollment(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCompleteEnrollment(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCompleteEnrollment(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCompleteEnrollment` Mutation requires an argument of type `CompleteEnrollmentVariables`:
  const completeEnrollmentVars: CompleteEnrollmentVariables = {
    userId: ..., 
    courseId: ..., 
  };
  mutation.mutate(completeEnrollmentVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userId: ..., courseId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(completeEnrollmentVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.enrollment_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## MarkLessonComplete
You can execute the `MarkLessonComplete` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts)):
```javascript
useMarkLessonComplete(options?: useDataConnectMutationOptions<MarkLessonCompleteData, FirebaseError, MarkLessonCompleteVariables>): UseDataConnectMutationResult<MarkLessonCompleteData, MarkLessonCompleteVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useMarkLessonComplete(dc: DataConnect, options?: useDataConnectMutationOptions<MarkLessonCompleteData, FirebaseError, MarkLessonCompleteVariables>): UseDataConnectMutationResult<MarkLessonCompleteData, MarkLessonCompleteVariables>;
```

### Variables
The `MarkLessonComplete` Mutation requires an argument of type `MarkLessonCompleteVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface MarkLessonCompleteVariables {
  userId: UUIDString;
  courseId: UUIDString;
  lessonId: Lesson_Key;
}
```
### Return Type
Recall that calling the `MarkLessonComplete` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `MarkLessonComplete` Mutation is of type `MarkLessonCompleteData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface MarkLessonCompleteData {
  lessonProgress_insert: LessonProgress_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `MarkLessonComplete`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, MarkLessonCompleteVariables } from '@repo/dataconnect-sdk';
import { useMarkLessonComplete } from '@repo/dataconnect-sdk/react'

export default function MarkLessonCompleteComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useMarkLessonComplete();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useMarkLessonComplete(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useMarkLessonComplete(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useMarkLessonComplete(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useMarkLessonComplete` Mutation requires an argument of type `MarkLessonCompleteVariables`:
  const markLessonCompleteVars: MarkLessonCompleteVariables = {
    userId: ..., 
    courseId: ..., 
    lessonId: ..., 
  };
  mutation.mutate(markLessonCompleteVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userId: ..., courseId: ..., lessonId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(markLessonCompleteVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.lessonProgress_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateQuiz
You can execute the `CreateQuiz` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts)):
```javascript
useCreateQuiz(options?: useDataConnectMutationOptions<CreateQuizData, FirebaseError, CreateQuizVariables>): UseDataConnectMutationResult<CreateQuizData, CreateQuizVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateQuiz(dc: DataConnect, options?: useDataConnectMutationOptions<CreateQuizData, FirebaseError, CreateQuizVariables>): UseDataConnectMutationResult<CreateQuizData, CreateQuizVariables>;
```

### Variables
The `CreateQuiz` Mutation requires an argument of type `CreateQuizVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateQuizVariables {
  lessonId: Lesson_Key;
  title: string;
}
```
### Return Type
Recall that calling the `CreateQuiz` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateQuiz` Mutation is of type `CreateQuizData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateQuizData {
  quiz_insert: Quiz_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateQuiz`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateQuizVariables } from '@repo/dataconnect-sdk';
import { useCreateQuiz } from '@repo/dataconnect-sdk/react'

export default function CreateQuizComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateQuiz();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateQuiz(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateQuiz(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateQuiz(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateQuiz` Mutation requires an argument of type `CreateQuizVariables`:
  const createQuizVars: CreateQuizVariables = {
    lessonId: ..., 
    title: ..., 
  };
  mutation.mutate(createQuizVars);
  // Variables can be defined inline as well.
  mutation.mutate({ lessonId: ..., title: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createQuizVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.quiz_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## RecordQuizAttempt
You can execute the `RecordQuizAttempt` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-sdk/react/index.d.ts](./index.d.ts)):
```javascript
useRecordQuizAttempt(options?: useDataConnectMutationOptions<RecordQuizAttemptData, FirebaseError, RecordQuizAttemptVariables>): UseDataConnectMutationResult<RecordQuizAttemptData, RecordQuizAttemptVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useRecordQuizAttempt(dc: DataConnect, options?: useDataConnectMutationOptions<RecordQuizAttemptData, FirebaseError, RecordQuizAttemptVariables>): UseDataConnectMutationResult<RecordQuizAttemptData, RecordQuizAttemptVariables>;
```

### Variables
The `RecordQuizAttempt` Mutation requires an argument of type `RecordQuizAttemptVariables`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface RecordQuizAttemptVariables {
  userId: User_Key;
  quizId: Quiz_Key;
  score: number;
}
```
### Return Type
Recall that calling the `RecordQuizAttempt` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `RecordQuizAttempt` Mutation is of type `RecordQuizAttemptData`, which is defined in [dataconnect-sdk/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface RecordQuizAttemptData {
  quizAttempt_upsert: QuizAttempt_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `RecordQuizAttempt`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, RecordQuizAttemptVariables } from '@repo/dataconnect-sdk';
import { useRecordQuizAttempt } from '@repo/dataconnect-sdk/react'

export default function RecordQuizAttemptComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useRecordQuizAttempt();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useRecordQuizAttempt(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useRecordQuizAttempt(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useRecordQuizAttempt(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useRecordQuizAttempt` Mutation requires an argument of type `RecordQuizAttemptVariables`:
  const recordQuizAttemptVars: RecordQuizAttemptVariables = {
    userId: ..., 
    quizId: ..., 
    score: ..., 
  };
  mutation.mutate(recordQuizAttemptVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userId: ..., quizId: ..., score: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(recordQuizAttemptVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.quizAttempt_upsert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

