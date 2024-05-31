<template>
  <div><CountriesList :countriesList="visitedCountriesList" /></div>
</template>

<script setup>
import { useStore } from 'vuex'
import CountriesList from './CountriesList.vue'
import { ref, computed } from 'vue'
const store = useStore()

const visitedCountriesList = computed(() => {
  console.log('chamou computed')
  return store.getters['countries/visitedCountries']
})
console.log(visitedCountriesList, 'visitedCountriesList')
</script>

<style lang="scss"></style>
