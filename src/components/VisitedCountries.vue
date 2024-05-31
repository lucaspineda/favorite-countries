<template>
  <div><CountriesList :countriesList="visitedCountriesList" /></div>
</template>

<script setup>
import { useStore } from 'vuex'
import CountriesList from './CountriesList.vue'
import { ref } from 'vue'
const store = useStore()

const visitedCountriesList = ref(store.getters['countries/visitedCountries'])
console.log(store.getters['countries/visitedCountries'], 'storee2')
</script>

<style lang="scss"></style>
