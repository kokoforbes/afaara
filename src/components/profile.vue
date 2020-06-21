<template>
  <router-link :to="`/users/${user.id}/posts`">
    <div class="name">
      <h2>{{ user.name }}</h2>
    </div>
    <div class="body">
      <div class="content">
        <img src="" alt="" />
        <span>{{ user.phone }}</span>
      </div>
      <div class="content">
        <img src="" alt="" />
        <span>{{ user.email }}</span>
      </div>
      <div class="content">
        <img src="" alt="" />
        <span>{{ user.website }}</span>
      </div>
      <div class="content">
        <img src="" alt="" />
        <span>{{ user.address.city }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "profile",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style></style>
