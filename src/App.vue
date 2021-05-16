<template>
  <Navbar />
  <!-- <Home /> -->
  <router-view></router-view>
  <Footer />
</template>

<script setup>
// import Home from './components/Home.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<style>

*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

body {
  font-family: acumin-pro, system-ui, sans-serif;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  font-size: 14px;
  background-color: #f4f4f4;
  align-items: start;
  min-height: 100vh;
}
</style>
