<template>
  <div>
    <h2>POSTS</h2>
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
export default {
  name: "Posts",
  components: {
    postItem
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

<style></style>
