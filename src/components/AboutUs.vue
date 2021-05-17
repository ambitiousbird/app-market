<template>
  <div class="about-us">
      <div>{{aboutUs.introduction}}</div>
      <p>Our previous clients include:</p>
      <div>{{aboutUs.previousClients}}</div>
      <h3>Some of our services include:</h3>
      <div v-for="(service, index) in aboutUs.serviceCategory" v-bind:key = "index">
          <h2>{{service.serviceItem}}</h2>
          <div v-if="service.paymentMethods">{{service.paymentMethods}}</div>
          <div>{{service.description}}</div>
      </div>
  </div>
</template>

<script setup>
import aboutUs from '../content/about-us.json';
</script>

<style lang = "scss" scoped >
</style>
