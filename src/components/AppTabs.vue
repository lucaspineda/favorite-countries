<template>
  <ul class="app-tabs">
    <li class="tab tab--active" v-for="item in props.tabsData" :key="item.title">
      <button type="button" class="tab__title" @click="currentTab = item.component">
        {{ item.title }}
      </button>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['tabsData'])
const currentTab = defineModel()
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
