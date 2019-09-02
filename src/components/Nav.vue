<template>
  <footer class="bg-dark text-white fixed-bottom">
    <div class="container">
      <div id="nav">
        <span>Pages: &nbsp;&nbsp;</span>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/producing">Producing</router-link> |
        <router-link to="/product-prices">Product-prices</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Nav"
};
</script>
