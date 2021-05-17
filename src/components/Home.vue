<template>
  <div class="home-container">
    <div class="greeting">
      <h1>APP Marketing Solutions</h1>
      <h2>Canada's ONLY agency providing domestic and Chinese marketing solutions</h2>
      <h2>We connect you to the world</h2>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style lang = "scss" scoped >
.home-container {
  background: url("../assets/shanghai.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  text-align: center;

  .greeting {
    padding-top: 10rem;
  }

  h1{
    margin: 0;
    color:white;
    font-size: 4.5rem;
  }

  h2{
    color:white;
    font-size: 1.8rem;
  }
}
</style>
