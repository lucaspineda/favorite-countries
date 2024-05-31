import { createStore, createLogger } from 'vuex'
import countries from './modules/countries'

export default createStore({
  modules: {
    countries
  }
})
