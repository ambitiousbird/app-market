<template>
  <div class="clients">
      <div v-for="(content, index) in clients.content" :key = index>
          <div class="paragraph">{{content.item}}</div>
      </div>
  </div>
</template>

<script setup>
import clients from '../content/clients.json';
</script>

<style lang = "scss" scoped >
.paragraph{
    padding-top:1rem;
    /* &:last-child{
        padding-bottom:1rem;
    } */
}
</style>
