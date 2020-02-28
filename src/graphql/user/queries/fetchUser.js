import gql from 'graphql-tag'

const FETCH_USERS = gql`
  query {
    fetchUsers {
      id
      fullName
    }
  }
`

export { FETCH_USERS }
