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
    <ul>
      <li class="country-list-item" v-for="item in Countries" :key="item.name">
        <section class="country-list-item__title">
          <span>
            {{ item.name }}
          </span>
          <div class="icon-wrapper">
            <v-icon icon="mdi-arrow-down" color="grey-darken-1" end></v-icon>
          </div>
        </section>
      </li>
    </ul>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Countries from './../assets/countries.json'

const countryInput = ref('')

function handleCountryInput() {
  console.log('dsfd')
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;

  & .country-list-item {
    border: 2px solid #ccc; /* Set border style, width, and color */
    border-radius: 10px; /* Set border radius for rounded corners */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    margin: 0.5rem 0;

    &__title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}

.input-wrapper {
  margin: 2rem 0;
  width: 100%;
}
</style>
