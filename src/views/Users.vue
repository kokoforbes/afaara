<template>
  <div>
    <h2>USERS</h2>
    <div class="users">
      <Profile v-for="user in users" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Profile from "../components/profile";

export default {
  name: "users",
  components: {
    Profile
  },
  data() {
    return {
      users: []
    };
  },
  methods: {
    fetchUsers() {
      const baseURI = "https://jsonplaceholder.typicode.com/users/";
      axios
        .get(baseURI)
        .then(response => {
          console.log(response);
          this.users = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  async mounted() {
    await this.fetchUsers();
  }
};
</script>

<style scoped></style>
