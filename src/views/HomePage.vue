<template>
  <v-app>
    <Header />
    <v-content>
      Home page ...
      <router-link to="/auth">
        <v-btn color="red">Login</v-btn>
      </router-link>
      <v-list>
        <v-list-item v-for="user in users.results" :key="user.id">{{ user.fullName }}</v-list-item>
      </v-list>
      <v-btn color="red" @click="loadMore">Load more</v-btn>
      <v-btn color="pink" @click="addUser">Add User</v-btn>
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import { createUserMutation } from '@/graphql/user/mutations/createUser'
import { fetchUsers } from '@/graphql/user/queries/fetchUser'
export default {
  name: 'HomePage',
  components: { Header },
  data() {
    return {
      users: [],
      limit: 5,
      page: 0,
    }
  },
  apollo: {
    users: fetchUsers,
  },
  methods: {
    async addUser() {
      const result = await this.$apollo
        .mutate(createUserMutation('nguyendat', 'Nguyen Dat', 'Aloalo123'))
        .catch(e => console.error(JSON.stringify(e)))
      console.log('result', result)
    },
    loadMore() {
      this.$apollo.queries.users.fetchMore({
        variables: {
          limit: this.limit,
          skip: ++this.page * this.limit,
        },
        // Transform the previous result with new data
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const { results, total } = fetchMoreResult.users
          return {
            users: {
              __typename: previousResult.users.__typename,
              results: [...previousResult.users.results, ...results],
              total,
            },
          }
        },
      })
    },
  },
}
</script>

<style></style>
