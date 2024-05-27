<template>
  <ul class="app-tabs">
    <li class="tab tab--active" v-for="item in tabs" :key="item.title">
      <button type="button" class="tab__title">
        {{ item.title }}
      </button>
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'
const tabs = computed(() => {
  return [
    {
      title: 'All Countries',
      component: null
    },
    {
      title: 'Visited Countries',
      component: null
    },
    {
      title: 'Wishlist',
      component: null
    }
  ]
})
</script>

<style lang="scss" scoped>
.app-tabs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  align-items: end;
  display: flex;

  & .tab {
    display: flex;
    height: 100%;
    align-items: center;
    &__title {
      margin: 0 1rem;
    }
    &--active {
      border-bottom: 1px solid black;
    }
  }
}
</style>
