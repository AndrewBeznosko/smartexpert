<template>
  <div id="app">
    <!-- fixed header -->
    <Header></Header>
    <!-- / fixed header -->

    <router-view />

    <!-- footer -->
    <Footer></Footer>
    <!-- / footer -->

    <!-- nav -->
    <Nav></Nav>
    <!-- / nav -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Nav
  }
};
</script>

<style lang="scss">
// @import "./assets/scss/style";
</style>
