<template>
  <div class="container">
    <header>
      <AppTabs :tabsData="tabs" v-model="currentTab" />
    </header>
    <main>
      <component :is="currentTab" />
    </main>
  </div>
</template>
<script setup>
import { computed, ref, watch } from 'vue'
import AppTabs from './components/AppTabs.vue'
import CountriesHome from './components/CountriesHome.vue'
import VisitedCountries from './components/VisitedCountries.vue'
import Wishlist from './components/WishList.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentTab = ref(null)
watch(route, (newRoute, oldRoute) => {
  console.log('Path changed:', newRoute.path, oldRoute)
  if (newRoute.path === '/' || newRoute.path === '/all') {
    currentTab.value = CountriesHome
    console.log('caiuu')
  } else if (newRoute.path === '/visited') {
    currentTab.value = VisitedCountries
  } else if (newRoute.path === '/wishlist') {
    currentTab.value = Wishlist
  }
  console.log(currentTab, 'currentTab')
})

const tabs = computed(() => {
  return [
    {
      title: 'All Countries',
      component: CountriesHome,
      path: 'all'
    },
    {
      title: 'Visited Countries',
      component: VisitedCountries,
      path: 'visited'
    },
    {
      title: 'Wishlist',
      component: Wishlist,
      path: 'wishlist'
    }
  ]
})
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
main {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
}
</style>
