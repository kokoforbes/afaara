<template>
  <div>
    <h3>Comments</h3>
    <div v-if="comments.length">
      <CommentItem
        v-for="comment of comments"
        :comment="comment"
        :key="comment.id"
      />
    </div>
  </div>
</template>

<script>
import CommentItem from "./commentItem";
import axios from "axios";

export default {
  name: "CommentList",
  components: {
    CommentItem
  },
  props: {
    postId: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      comments: []
    };
  },
  methods: {
    async fetchComments() {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${this.postId}/comments`
        );
        this.comments = data.filter(
          item => item.postId === parseInt(this.postId)
        );
      } catch (error) {
        console.log(error);
      }
    }
  },
  async created() {
    await this.fetchComments();
  }
};
</script>

<style scoped></style>
