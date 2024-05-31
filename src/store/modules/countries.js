const state = () => ({
  visitedCountries: [],
  wishlist: []
})

// getters
const getters = {
  visitedCountries: (state) => {
    return state.visitedCountries
  },
  wishlist: (state) => {
    return state.wishlist
  }
}

// mutations
const mutations = {
  pushToVisitedList(state, item) {
    console.log(item, 'itemm')
    if (!state.visitedCountries.find((country) => country.name === item.name)) {
      state.visitedCountries.push(item)
    }
  },
  pushToWishlist(state, item) {
    state.wishlist.push(item)
  },
  removeFromVisited(state, countryName) {
    const index = state.visitedCountries.findIndex((country) => country.name === countryName)
    if (index !== -1) {
      state.visitedCountries.splice(index, 1)
    }
  },
  removeFromWishlist(state, countryName) {
    const index = state.wishlist.findIndex((country) => country.name === countryName)
    if (index !== -1) {
      state.wishlist.splice(index, 1)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
