<template>
  <section class="container">
    <hr />
    <router-link to="/price">price page</router-link>
    <!-- <div>{{ users[0].id }},{{ users[0].name }}</div> -->
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }}, {{ user.name }}, {{ user.company.name }}
      </li>
    </ul>
    <!-- <img src="../assets/9月.png" /> -->
    <p>{{ $store.state.message }}</p>
    <!-- <button @click="$store.commit('updateMessage')">dsa</button> -->
    <button @click="$store.commit('updateMessage', 'ffffff')">dsa</button>
  </section>
</template>

<script>
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/users";
export default {
  asyncData({ params, error }) {
    console.log("ads");
    return axios
      .get(url)
      .then((res) => {
        return { users: res.data };
      })
      .catch((e) => {
        // console.log(e);
        error({ users: e.response.status, message: e.message });
      });
  },
};
</script>

<style>
</style>
