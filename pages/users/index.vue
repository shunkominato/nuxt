<template>
  <section class="container">
    <p>{{ message }}</p>
    <hr />
    <router-link to="/users/other">user index</router-link>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      message: "hellow",
    };
  },
};
</script>

<style>
</style>
