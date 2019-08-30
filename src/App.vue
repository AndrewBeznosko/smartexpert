<template>
  <div id="app">
    <!-- fixed header -->
    <Header></Header>
    <!-- / fixed header -->

    <router-view />

    <!-- footer -->
    <Footer></Footer>
    <!-- / footer -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
// @import "./assets/scss/style";
</style>
