<template>
  <div class="input-wrapper">
    <v-text-field
      append-inner-icon="mdi-magnify"
      density="compact"
      label="Search templates"
      variant="solo"
      hide-details
      single-line
      v-model="countryInput"
    ></v-text-field>
  </div>
  <CountriesList :countriesList="computedCountries" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import CountriesList from './CountriesList.vue'
import Countries from '../assets/countries.json'

const store = useStore()
console.log(store, 'storee')

const processedCountries = Countries.map((country) => ({
  ...country,
  showDetails: false
}))
const countryInput = ref('')
const countriesRef = ref(processedCountries)

const computedCountries = computed(() => {
  return countriesRef.value.filter((country) =>
    country.name.toLowerCase().includes(countryInput.value.toLowerCase())
  )
})
</script>

<style scoped lang="scss">
.input-wrapper {
  margin: 2rem 0;
  width: 100%;
}
</style>
