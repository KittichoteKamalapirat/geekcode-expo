import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Aud = {
  __typename?: 'Aud';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isStatic: Scalars['Boolean'];
  messages: Array<Message>;
  pronoun: Scalars['String'];
  role: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type BooleanResponse = {
  __typename?: 'BooleanResponse';
  errors?: Maybe<Array<FieldError>>;
  value?: Maybe<Scalars['Boolean']>;
};

export type CreateLessonGqlInput = {
  country: Scalars['String'];
  pronoun: Scalars['String'];
  tabName: Scalars['String'];
  userId: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  photoUrl?: InputMaybe<Scalars['String']>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type GoogleLoginInput = {
  email: Scalars['String'];
  photoUrl?: InputMaybe<Scalars['String']>;
};

export type Lesson = {
  __typename?: 'Lesson';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  isComplete: Scalars['Boolean'];
  messages: Array<Message>;
  tabName: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type LessonOverview = {
  __typename?: 'LessonOverview';
  description: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  isComplete: Scalars['Boolean'];
  isCreated: Scalars['Boolean'];
  tab: Scalars['String'];
  title: Scalars['String'];
};

export type LessonResponse = {
  __typename?: 'LessonResponse';
  errors?: Maybe<Array<FieldError>>;
  lesson?: Maybe<Lesson>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  aud: Aud;
  audId: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isStatic: Scalars['Boolean'];
  jsonContent: Array<Sentence>;
  lang: Scalars['String'];
  lesson: Lesson;
  lessonId: Scalars['String'];
  order: Scalars['Int'];
  pronoun: Scalars['String'];
  role: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  appleLogIn: UserResponse;
  createLesson: LessonResponse;
  deleteUser: BooleanResponse;
  googleLogIn: UserResponse;
  guestLogin: UserResponse;
  login: UserResponse;
  logout: BooleanResponse;
  markLessonComplete: LessonResponse;
  register: UserResponse;
  removeMessage: Message;
};


export type MutationAppleLogInArgs = {
  token: Scalars['String'];
};


export type MutationCreateLessonArgs = {
  input: CreateLessonGqlInput;
};


export type MutationGoogleLogInArgs = {
  input: GoogleLoginInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationMarkLessonCompleteArgs = {
  id: Scalars['String'];
};


export type MutationRegisterArgs = {
  input: CreateUserInput;
};


export type MutationRemoveMessageArgs = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getAllTabsFromGoogleSheets: Array<SheetRow>;
  getSheetNames: Array<Scalars['String']>;
  lesson: Lesson;
  lessonsWithMyStatus: Array<LessonOverview>;
  me?: Maybe<User>;
  message: Message;
  myLessons: Array<Lesson>;
  uploadLocalFileToCloudStorage: Scalars['Boolean'];
  user: User;
  users: Array<User>;
};


export type QueryLessonArgs = {
  id: Scalars['String'];
};


export type QueryLessonsWithMyStatusArgs = {
  userId: Scalars['String'];
};


export type QueryMessageArgs = {
  id: Scalars['Int'];
};


export type QueryMyLessonsArgs = {
  userId: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type Sentence = {
  __typename?: 'Sentence';
  lang: Scalars['String'];
  text: Scalars['String'];
};

export type SheetRow = {
  __typename?: 'SheetRow';
  Lang: Scalars['String'];
  Order: Scalars['String'];
  Speaker: Scalars['String'];
  Text: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  isGuest: Scalars['Boolean'];
  membership: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  photoUrl: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type GuestLoginMutationVariables = Exact<{ [key: string]: never; }>;


export type GuestLoginMutation = { __typename?: 'Mutation', guestLogin: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, email: string, photoUrl: string, isGuest: boolean, createdAt: any } | null } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, email: string, photoUrl: string, isGuest: boolean, createdAt: any } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'BooleanResponse', value?: boolean | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email: string, photoUrl: string, isGuest: boolean, createdAt: any } | null };

export type RegisterMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, email: string, photoUrl: string, isGuest: boolean, createdAt: any } | null } };

export type RegularErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type RegularUserFragment = { __typename?: 'User', id: string, email: string, photoUrl: string, isGuest: boolean, createdAt: any };

export type RegularUserResponseFragment = { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, email: string, photoUrl: string, isGuest: boolean, createdAt: any } | null };

export type CreateLessonMutationVariables = Exact<{
  input: CreateLessonGqlInput;
}>;


export type CreateLessonMutation = { __typename?: 'Mutation', createLesson: { __typename?: 'LessonResponse', lesson?: { __typename?: 'Lesson', id: string } | null, errors?: Array<{ __typename?: 'FieldError', message: string }> | null } };

export type LessonQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type LessonQuery = { __typename?: 'Query', lesson: { __typename?: 'Lesson', id: string, title: string, description: string, tabName: string, isComplete: boolean, userId: string, messages: Array<{ __typename?: 'Message', id: string, order: number, role: string, lang: string, pronoun: string, isStatic: boolean, content: string, aud: { __typename?: 'Aud', url: string } }> } };

export type LessonsWithMyStatusQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type LessonsWithMyStatusQuery = { __typename?: 'Query', lessonsWithMyStatus: Array<{ __typename?: 'LessonOverview', id?: string | null, title: string, description: string, tab: string, isCreated: boolean, isComplete: boolean }> };

export type DeleteUserMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'BooleanResponse', value?: boolean | null, errors?: Array<{ __typename?: 'FieldError', field: string }> | null } };

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  email
  photoUrl
  isGuest
  createdAt
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const GuestLoginDocument = gql`
    mutation GuestLogin {
  guestLogin {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type GuestLoginMutationFn = Apollo.MutationFunction<GuestLoginMutation, GuestLoginMutationVariables>;

/**
 * __useGuestLoginMutation__
 *
 * To run a mutation, you first call `useGuestLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGuestLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [guestLoginMutation, { data, loading, error }] = useGuestLoginMutation({
 *   variables: {
 *   },
 * });
 */
export function useGuestLoginMutation(baseOptions?: Apollo.MutationHookOptions<GuestLoginMutation, GuestLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GuestLoginMutation, GuestLoginMutationVariables>(GuestLoginDocument, options);
      }
export type GuestLoginMutationHookResult = ReturnType<typeof useGuestLoginMutation>;
export type GuestLoginMutationResult = Apollo.MutationResult<GuestLoginMutation>;
export type GuestLoginMutationOptions = Apollo.BaseMutationOptions<GuestLoginMutation, GuestLoginMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    value
    errors {
      field
      message
    }
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($input: CreateUserInput!) {
  register(input: $input) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CreateLessonDocument = gql`
    mutation CreateLesson($input: CreateLessonGqlInput!) {
  createLesson(input: $input) {
    lesson {
      id
    }
    errors {
      message
    }
  }
}
    `;
export type CreateLessonMutationFn = Apollo.MutationFunction<CreateLessonMutation, CreateLessonMutationVariables>;

/**
 * __useCreateLessonMutation__
 *
 * To run a mutation, you first call `useCreateLessonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLessonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLessonMutation, { data, loading, error }] = useCreateLessonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLessonMutation(baseOptions?: Apollo.MutationHookOptions<CreateLessonMutation, CreateLessonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLessonMutation, CreateLessonMutationVariables>(CreateLessonDocument, options);
      }
export type CreateLessonMutationHookResult = ReturnType<typeof useCreateLessonMutation>;
export type CreateLessonMutationResult = Apollo.MutationResult<CreateLessonMutation>;
export type CreateLessonMutationOptions = Apollo.BaseMutationOptions<CreateLessonMutation, CreateLessonMutationVariables>;
export const LessonDocument = gql`
    query Lesson($id: String!) {
  lesson(id: $id) {
    id
    title
    description
    tabName
    isComplete
    userId
    messages {
      id
      order
      role
      lang
      pronoun
      isStatic
      content
      aud {
        url
      }
    }
  }
}
    `;

/**
 * __useLessonQuery__
 *
 * To run a query within a React component, call `useLessonQuery` and pass it any options that fit your needs.
 * When your component renders, `useLessonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLessonQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLessonQuery(baseOptions: Apollo.QueryHookOptions<LessonQuery, LessonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LessonQuery, LessonQueryVariables>(LessonDocument, options);
      }
export function useLessonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LessonQuery, LessonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LessonQuery, LessonQueryVariables>(LessonDocument, options);
        }
export type LessonQueryHookResult = ReturnType<typeof useLessonQuery>;
export type LessonLazyQueryHookResult = ReturnType<typeof useLessonLazyQuery>;
export type LessonQueryResult = Apollo.QueryResult<LessonQuery, LessonQueryVariables>;
export const LessonsWithMyStatusDocument = gql`
    query LessonsWithMyStatus($userId: String!) {
  lessonsWithMyStatus(userId: $userId) {
    id
    title
    description
    tab
    isCreated
    isComplete
  }
}
    `;

/**
 * __useLessonsWithMyStatusQuery__
 *
 * To run a query within a React component, call `useLessonsWithMyStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useLessonsWithMyStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLessonsWithMyStatusQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useLessonsWithMyStatusQuery(baseOptions: Apollo.QueryHookOptions<LessonsWithMyStatusQuery, LessonsWithMyStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LessonsWithMyStatusQuery, LessonsWithMyStatusQueryVariables>(LessonsWithMyStatusDocument, options);
      }
export function useLessonsWithMyStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LessonsWithMyStatusQuery, LessonsWithMyStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LessonsWithMyStatusQuery, LessonsWithMyStatusQueryVariables>(LessonsWithMyStatusDocument, options);
        }
export type LessonsWithMyStatusQueryHookResult = ReturnType<typeof useLessonsWithMyStatusQuery>;
export type LessonsWithMyStatusLazyQueryHookResult = ReturnType<typeof useLessonsWithMyStatusLazyQuery>;
export type LessonsWithMyStatusQueryResult = Apollo.QueryResult<LessonsWithMyStatusQuery, LessonsWithMyStatusQueryVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser {
  deleteUser {
    value
    errors {
      field
    }
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;