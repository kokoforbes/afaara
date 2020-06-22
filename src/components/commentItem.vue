<template>
  <div class="card">
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

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #0000ff;
  max-width: 800px;
  width: 100%;
  max-height: 300px;
  height: 210px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  transition: 0.5s ease-in-out;
  background-color: rgba(255, 255, 255, 1);
}
</style>
