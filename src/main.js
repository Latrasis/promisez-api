import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    promises: new Set()
  },
  mutations : {
    createPromise: (state, promise) => state.promises.add(promise),
    deletePromise: (state, promise) => state.promises.delete(promise)
  }
})

const app = new Vue({
  el: '#app',
  render: h => h(App)
})
