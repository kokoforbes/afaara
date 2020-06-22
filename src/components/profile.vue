<template>
  <router-link :to="`/users/${user.id}/posts`" class="card">
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

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 800px;
  width: 100%;
  max-height: 250px;
  height: 170px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid #2e8b57;
  color: #000000;
}
.card:hover {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 50%;
  margin-bottom: 1rem;
  margin: 0 auto;
}
</style>
