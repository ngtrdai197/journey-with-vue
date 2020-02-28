<template>
  <v-container>Login component ...</v-container>
</template>

<script>
import { FETCH_USERS } from '@/graphql/user/queries/fetchUser'

export default {
  name: 'Login',
  data() {
    return {
      fetchUsers: [],
    }
  },
  apollo: {
    fetchUsers: FETCH_USERS,
  },
}
</script>

<style>
</style>