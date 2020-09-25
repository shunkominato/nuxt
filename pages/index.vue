<template>
  <section class="container">
    <p>{{ message }}</p>
    <hr />
    <router-link to="/price">price page</router-link>
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
