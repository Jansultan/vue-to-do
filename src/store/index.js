import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import todo_list from './modules/todo_list'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        todo_list
    }
})