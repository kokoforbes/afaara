<template>
  <div>
    <div>
      <h3>{{ comment.name }}</h3>
    </div>
    <p>{{ comment.body }}</p>
  </div>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped></style>
