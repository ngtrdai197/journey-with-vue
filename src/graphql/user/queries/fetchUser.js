import gql from 'graphql-tag'

const fetchUsers = (limit = 5, skip = 0) => ({
  query: gql`
    query fetchUsers($limit: Int!, $skip: Int!) {
      users: fetchUsers(limit: $limit, skip: $skip) {
        total
        results {
          id
          fullName
        }
      }
    }
  `,
  variables: {
    limit,
    skip,
  },
})

export { fetchUsers }
