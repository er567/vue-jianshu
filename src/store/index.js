import Vue from 'vue'
import Vuex from 'vuex'
import demo from './demo/demo'
import Article from './modules/article'
Vue.use(Vuex)

export
default new Vuex.Store({
    modules: {
       demo,Article 
    }
})
