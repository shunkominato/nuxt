<template>
  <section class="container">
    <hr />
    <router-link to="/price">price page</router-link>
    <div>{{ users[0].id }},{{ users[0].name }}</div>
  </section>
</template>

<script>
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/users";
export default {
  asyncData({ params }) {
    console.log("ads");
    return axios.get(url).then((res) => {
      return { users: res.data };
    });
  },
};
</script>

<style>
</style>
