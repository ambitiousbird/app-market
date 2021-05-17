<template>
  <div class="consulting-services">
    <div id="di-consulting">
              <h1>Domestic & International Consulting</h1>
      <div v-html="consulting.content"></div>
      <ul v-for="(question, index) in consulting.questions" :key="index">
          <li>{{question.item}}</li>
      </ul>
      <div>{{consulting.followup}}</div>
            <router-link to="/contact">{{ contact }}</router-link>
    </div>

    <div id="ec-planning">
        <h1>Event & Campaign Planning</h1>
    </div>
  </div>
</template>

<script setup>
import consulting from '../content/di-consulting.json'
</script>

<style lang = "scss" scoped >
</style>