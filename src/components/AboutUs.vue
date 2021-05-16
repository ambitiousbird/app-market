<template>
  <div class="about-us">
      <div>{{aboutUs.introduction}}</div>
      <p>Our previous clients include:</p>
      <div>{{aboutUs.previousClients}}</div>
      <p>Some of our services include:</p>
      <div v-for="(service, index) in aboutUs.serviceCategory" v-bind:key = "index">
          <div>{{service.serviceItem}}</div>
          <div v-if="service.paymentMethods">{{service.paymentMethods}}</div>
          <div>{{service.description}}</div>
      </div>
  </div>
</template>

<script setup>
import aboutUs from '../content/about-us';
</script>

<style lang = "scss" scoped >
</style>
