<template>
  <router-link :to="`/users/${user.id}/posts`" class="card">
    <div class="name">
      <h2>{{ user.name }}</h2>
    </div>
    <div class="body">
      <div class="content">
        <img :src="callIcon" alt="phone" class="icon" />
        <span>{{ user.phone }}</span>
      </div>
      <div class="content">
        <img :src="emailIcon" alt="email" class="icon" />
        <span>{{ user.email }}</span>
      </div>
      <div class="content">
        <img :src="webIcon" alt="website" class="icon" />
        <span>{{ user.website }}</span>
      </div>
      <div class="content">
        <img :src="cityIcon" alt="city" class="icon" />
        <span>{{ user.address.city }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
import callIcon from "../assets/call.svg";
import cityIcon from "../assets/city.svg";
import emailIcon from "../assets/email.svg";
import webIcon from "../assets/web.svg";

export default {
  name: "profile",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      callIcon,
      cityIcon,
      emailIcon,
      webIcon
    };
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
  padding: 1rem;
}

.content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  width: 40%;
  margin-bottom: 0.4rem;
}

.icon {
  width: 16px;
  margin-right: 1rem;
}

@media (max-width: 550px) {
  .body {
    font-size: 65%;
  }
}
</style>
