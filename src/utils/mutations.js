import gql from 'graphql-tag';

export const LOGIN = gql`
mutation login($username: String!, $password: String!) {
  login(input: {
    username: $username,
    password: $password
  }) {
    token
    user_id
  }
}
`;

export const CREATE_USER = gql`
mutation createUser($username: String!, $password: String!) {
  createUser(input: {
    username: $username,
    password: $password
  }) {
    id
    username
  }
}
`;
