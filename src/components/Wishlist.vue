<template>
  <div><CountriesList :countriesList="computedCountries" /></div>
</template>

<script setup>
import { useStore } from 'vuex'
import CountriesList from './CountriesList.vue'
const store = useStore()

const visitedCountriesList = ref(store.countries.getters.visitedCountries)
</script>

<style lang="scss" scoped></style>
