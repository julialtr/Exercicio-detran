import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    componentes: [{
      titulo: 'Home'
    }, {
      titulo: 'Infracoes'
    }, {
      titulo: 'Main'
    }
  ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
