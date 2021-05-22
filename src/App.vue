<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<style lang="scss">

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
  align-items: start;
  min-height: 100vh;
  background-color: white;
  color: rgb(58, 57, 57);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

.card-shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
}

.banner {
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
    min-height: 600px;
    opacity: 0.8;
    filter: brightness(50%);
    transition: transform 10s;
  }
  .banner-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -32%);
    color: white;
    min-width: 72%;
    min-height: 800px;
    h1 {
      font-size: 5rem;
      padding-bottom: 2.4rem;
    }
    p {
      font-size: 1.5rem;
    }

    @media only screen and (max-width: 768px) {
      h1 {
        font-size: 3rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
