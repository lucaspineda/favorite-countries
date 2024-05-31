<template>
  <div><CountriesList :countriesList="countriesWishlist" /></div>
</template>

<script setup>
import { useStore } from 'vuex'
import CountriesList from './CountriesList.vue'
import { ref } from 'vue'
const store = useStore()

const countriesWishlist = ref(store.getters['countries/wishlist'])
</script>

<style lang="scss"></style>
