<template>
  <div><CountriesList :countriesList="visitedCountriesList" /></div>
</template>

<script setup>
import { useStore } from 'vuex'
import CountriesList from './CountriesList.vue'
import { ref, computed } from 'vue'
const store = useStore()

const visitedCountriesList = computed(() => {
  return store.getters['countries/visitedCountries']
})
</script>

<style lang="scss"></style>
