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
    if (!state.visitedCountries.find((country) => country.name === item.name)) {
      state.visitedCountries.push(item)
    }
  },
  pushToWishlist(state, item) {
    state.wishlist.push(item)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
