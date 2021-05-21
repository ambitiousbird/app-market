<template>
  <div class="home-container">
    <div class="greeting">
      <h1>APP Marketing Solutions</h1>
      <h2>
        Canada's ONLY agency providing domestic and Chinese marketing solutions
      </h2>
      <h2>We connect you to the world</h2>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang = "scss" scoped >
.home-container {
  background: linear-gradient(rgba(0, 0, 0, 0.112), rgba(0, 0, 0, 0.393)),
    url("../assets/shanghai.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  text-align: center;

  .greeting {
    padding-top: 15rem;
  }

  h1 {
    margin: 0;
    color: white;
    font-size: 4.5rem;
    padding-top: 2rem;
    padding-bottom: 3rem;
  }

  h2 {
    color: white;
    font-size: 1.8rem;
    padding-bottom: 3rem;
  }
}
</style>
