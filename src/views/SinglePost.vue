<template>
  <div class="container">
    <h2>Single Post</h2>
    <div v-if="posts.length">
      <postItem :post="post" :userId="userId" />
      <comments :postId="postId" />
    </div>
  </div>
</template>

<script>
import comments from "../components/comments";
import postItem from "../components/postItem";
import axios from "axios";

export default {
  name: "SinglePost",
  components: {
    comments,
    postItem
  },
  data() {
    return {
      postId: this.$route.params.postId,
      posts: []
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}/posts`
        );
        this.posts = data.filter(
          item => item.userId === parseInt(this.$route.params.id)
        );
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    post() {
      return this.posts.filter(post => post.id === parseInt(this.postId))[0];
    },
    userId() {
      return parseInt(this.$route.params.id);
    }
  },
  async mounted() {
    await this.fetchPosts();
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 800px;
  width: 100%;
  margin-top: 20px;
}
</style>
