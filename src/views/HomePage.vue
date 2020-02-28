<template>
  <v-app>
    <Header />
    <v-content>
      Home page ...
      <router-link to="/auth">
        <v-btn color="red">Login</v-btn>
      </router-link>
      <v-list>
        <v-list-item v-for="user in fetchUsers" :key="user.id">{{ user.fullName }}</v-list-item>
      </v-list>
      <v-btn color="pink" @click="addUser">Add User</v-btn>
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import { createUserMutation } from '@/graphql/user/mutations/createUser'
import { FETCH_USERS } from '@/graphql/user/queries/fetchUser'
export default {
  name: 'HomePage',
  components: { Header },
  data() {
    return {
      fetchUsers: [],
    }
  },
  apollo: {
    fetchUsers: FETCH_USERS,
  },
  methods: {
    async addUser() {
      const result = await this.$apollo
        .mutate(createUserMutation('nguyendat', 'Nguyen Dat', 'Aloalo123'))
        .catch(e => console.error(JSON.stringify(e)))
      console.log('result', result)
    },
  },
}
</script>

<style></style>
