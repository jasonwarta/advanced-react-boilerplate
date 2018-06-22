import gql from 'graphql-tag';

export const SINGLE_EMPLOYEE = gql`
query employee($id: ID!) {
  employee(id: $id) {
    name
  }
}
`;

export const ALL_EMPLOYEES = gql`
query {
  allEmployees {
    id
    name
  }
}
`;
