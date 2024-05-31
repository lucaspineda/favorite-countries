<template>
  <ul v-if="props.countriesList">
    <li class="country-list-item" v-for="item in props.countriesList" :key="item.name">
      <section @click="handleCountryClick(item)" class="country-list-item__title">
        <span> {{ item.name }} </span>
        <div class="icon-wrapper">
          <v-icon
            v-show="!item.showDetails"
            icon="mdi-arrow-down"
            color="grey-darken-1"
            end
          ></v-icon>
          <v-icon v-show="item.showDetails" icon="mdi-arrow-up" color="grey-darken-1" end></v-icon>
        </div>
      </section>
      <article v-show="item.showDetails" class="country-list-item__details">
        <span> <span style="font-weight: 600">Capital:</span> {{ item.capital }} </span>
        <span> <span style="font-weight: 600">About:</span> {{ item.summary }}</span>
        <section class="country-list-item__details__btns">
          <div v-if="appPath == '/all' || appPath == '/'">
            <button @click="addToVisitedCountry(item)">Add to Visited</button>
            <button @click="addToWishlist(item)">Add to Wishlist</button>
          </div>
          <button
            v-else-if="appPath.includes('visited')"
            style="background-color: #c4493f; color: #fff"
            @click="removeFromVisited(item.name)"
          >
            Remove
          </button>
          <button
            v-else-if="appPath.includes('wishlist')"
            style="background-color: #c4493f; color: #fff"
            @click="removeFromWishlist(item.name)"
          >
            Remove
          </button>
        </section>
      </article>
    </li>
  </ul>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const appPath = computed(() => route.path)

const props = defineProps(['countriesList'])
const store = useStore()

function addToVisitedCountry(item) {
  store.commit('countries/pushToVisitedList', item)
}

function addToWishlist(item) {
  store.commit('countries/pushToWishlist', item)
}

function handleCountryClick(item) {
  item.showDetails = !item.showDetails
}

function removeFromVisited(name) {
  store.commit('countries/removeFromVisited', name)
}

function removeFromWishlist(name) {
  store.commit('countries/removeFromWishlist', name)
}
</script>

<style lang="scss" scoped>
.country-list-item {
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
</style>
