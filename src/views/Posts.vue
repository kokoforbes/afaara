<template>
  <div class="container">
    <h2>POSTS</h2>
    <backBtn path="/" name="users" />
    <div v-if="posts.length">
      <postItem
        v-for="post of posts"
        :post="post"
        :userId="userId"
        :key="post.id"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import postItem from "../components/postItem";
import backBtn from "../components/backBtn";
export default {
  name: "Posts",
  components: {
    postItem,
    backBtn
  },

  data() {
    return {
      posts: [],
      isLoading: false
    };
  },
  methods: {
    async fetchPosts() {
      try {
        this.isLoading = true;
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}/posts`
        );
        this.posts = data.filter(
          item => item.userId === parseInt(this.$route.params.id)
        );
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    userId() {
      return parseInt(this.$route.params.id);
    }
  },
  async created() {
    await this.fetchPosts();
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
