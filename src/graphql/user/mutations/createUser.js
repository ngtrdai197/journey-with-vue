import gql from 'graphql-tag'
import { fetchUsers } from '../queries/fetchUser'

export const createUserMutation = (username, fullName, password) => ({
  mutation: gql`
    mutation($username: String!, $fullName: String!, $password: String!) {
      createNewUser(
        newUser: {
          username: $username
          fullName: $fullName
          password: $password
        }
      ) {
        id
        fullName
      }
    }
  `,
  variables: {
    username,
    fullName,
    password,
  },
  optimisticResponse: {
    __typename: 'Mutation',
    createNewUser: {
      __typename: 'User',
      id: -1,
      fullName,
    },
  },
  update: (store, { data }) => {
    const { createNewUser } = data
    const dataCache = store.readQuery({
      query: fetchUsers,
    })
    ;(dataCache.fetchUsers || []).push(createNewUser)
    store.writeQuery({
      query: fetchUsers,
      dataCache,
    })
  },
})
