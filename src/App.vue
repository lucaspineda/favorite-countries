<template>
  <div class="container">
    <header>
      <AppTabs />
    </header>
  </div>
</template>
<script setup>
import AppTabs from './components/AppTabs.vue'
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  display: flex;
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
