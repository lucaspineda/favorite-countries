<template>
  <ul class="app-tabs">
    <li
      v-for="item in props.tabsData"
      :class="{ 'tab--active': checkActiveTab(item.path), tab: true }"
      :key="item.title"
    >
      <button type="button" class="tab__title" @click="handleTabChange(item)">
        {{ item.title }}
      </button>
    </li>
  </ul>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const props = defineProps(['tabsData'])
const currentTab = defineModel()
function handleTabChange(item) {
  currentTab.value = item.component
  router.push({ path: `${item.path}` })
}

function checkActiveTab(itemPath) {
  if (route.path === '/' && itemPath === 'all') {
    return true
  } else if ('/' + itemPath === route.path) {
    return true
  }
}
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
