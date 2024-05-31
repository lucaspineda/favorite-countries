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
      ></v-text-field>
    </div>
    <ul>
      <li class="country-list-item" v-for="item in computedCountries" :key="item.name">
        <section @click="handleCountryClick(item)" class="country-list-item__title">
          <span> {{ item.name }} </span>
          <div class="icon-wrapper">
            <v-icon
              v-show="!item.showDetails"
              icon="mdi-arrow-down"
              color="grey-darken-1"
              end
            ></v-icon>
            <v-icon
              v-show="item.showDetails"
              icon="mdi-arrow-up"
              color="grey-darken-1"
              end
            ></v-icon>
          </div>
        </section>
        <article v-show="item.showDetails" class="country-list-item__details">
          <span> <span style="font-weight: 600">Capital:</span> {{ item.capital }} </span>
          <span> <span style="font-weight: 600">About:</span> {{ item.summary }}</span>
          <section class="country-list-item__details__btns">
            <button @click="addToVisitedCountry(item)">Add to Visited</button>
            <button @click="addToWishlist(item)">Add to Wishlist</button>
          </section>
        </article>
      </li>
    </ul>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import Countries from './../assets/countries.json'

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

function addToVisitedCountry(item) {
  store.commit('countries/pushToVisitedList', item)
}

function addToWishlist(item) {
  store.commit('countries/pushToWishlist', item)
}

function handleCountryClick(item) {
  item.showDetails = !item.showDetails
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
    margin: 0.8rem 0;

    &__title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-weight: 500;
    }
    &__details {
      margin-top: 0.5rem;
      font-size: 0.8rem;
      display: flex;
      flex-direction: column;

      &__btns {
        display: flex;
        margin-top: 1rem;

        & button {
          border: 2px solid #ccc; /* Set border style, width, and color */
          border-radius: 4px; /* Set border radius for rounded corners */
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
          padding: 0.4rem;
          background-color: #fad02c;
          color: #000;
          margin-right: 0.5rem;
          border-style: none;
          box-sizing: border-box;
          cursor: pointer;
          font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-weight: 500;
          height: 40px;
          padding: 10px 16px;
          transition: color 100ms;
          vertical-align: baseline;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
        }
      }
    }
  }
}

.input-wrapper {
  margin: 2rem 0;
  width: 100%;
}
</style>
