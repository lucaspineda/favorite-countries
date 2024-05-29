<template>
  <main>
    <div class="input-wrapper">
      <v-text-field
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Search templates"
        variant="solo"
        hide-details
        single-line
        v-model="countryInput"
        @input="handleCountryInput"
      ></v-text-field>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const countryInput = ref('')

function handleCountryInput() {
  console.log('dsfd')
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  width: 100%;
  padding: 0 1rem;
}

.input-wrapper {
  margin-top: 2rem;
  width: 100%;
}
</style>
