<template>
  <div class="container">
    <header>
      <AppTabs :tabsData="tabs" v-model="currentTab" />
    </header>
    <component :is="currentTab" />
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import AppTabs from './components/AppTabs.vue'
import CountriesList from './components/CountriesList.vue'
import VisitedCountries from './components/VisitedCountries.vue'
import Wishlist from './components/Wishlist.vue'
function selectTab(value) {
  console.log('chamou', value)
  currentTab.value = value
}
const tabs = computed(() => {
  return [
    {
      title: 'All Countries',
      component: CountriesList
    },
    {
      title: 'Visited Countries',
      component: VisitedCountries
    },
    {
      title: 'Wishlist',
      component: Wishlist
    }
  ]
})

// const currentTab = computed(() => {
//   console.log('Current Tab:', tabs.value[0].component) // Log the component name
//   return tabs.value[0].component
// })

const currentTab = ref(tabs.value[0].component)

console.log(currentTab, 'heyy')
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & header {
    background-color: #90adc6;
    width: 100vw;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: end;
  }
}
</style>
