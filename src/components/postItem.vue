<template>
  <router-link :to="`/users/${userId}/posts/${post.id}`" class="card">
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

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #ffd700;
  max-width: 800px;
  width: 100%;
  max-height: 300px;
  height: 210px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 1);
  text-decoration: none;
  color: #000000;
}
.card:hover {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
}
</style>
