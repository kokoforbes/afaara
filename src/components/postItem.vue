<template>
  <router-link :to="`/users/${userId}/posts/${post.id}`">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </router-link>
</template>

<script>
export default {
  name: "Posts",
  props: {
    post: {
      type: Object,
      required: true
    },
    userId: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped></style>
