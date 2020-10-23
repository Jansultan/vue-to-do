import todoList from '../../mocks/to_do_list'

const loadToDo = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(todoList)
        }, time)
    })
}

export default{
    state:{
        todo_list:[]
    },
    getters:{
        getAllToDo(state){
            return state.todo_list
        }
    },
    mutations:{
        SET_TODO(state, payload){
            state.todo_list = payload
        },
        ADD_TO_DO(state, newTodo){
            state.todo_list.unshift(newTodo)
        },
        UPDATE_TO_DO(state, payload){
            state.todo_list = state.todo_list.map(todo => {
                if (todo.id === payload.id) {
                    return Object.assign({}, todo, payload)
                }
                return todo
            })
        },
        DELETE_TO_DO(state, id){
            var index = state.todo_list.findIndex(todo => todo.id == id)
            state.todo_list.splice(index, 1)
        }
    },
    actions:{
        async loadToDo({ commit }, payload) {
            try {
                const todo = await loadToDo(payload)
                commit('SET_TODO', todo)
            } catch (error) {
                console.error(error)
            }
        },
        async updateToDo({commit}, payload) {
            try {
                commit('UPDATE_TO_DO', payload)
            } catch (error) {
                console.error(error)
            }
        },
        async updateCheckToDo({commit}, payload) {
            try {
                commit('UPDATE_TO_DO', payload)
            } catch (error) {
                console.error(error)
            }
        },
        async deleteToDo({commit}, id) {
            try {
                commit('DELETE_TO_DO', id)
            } catch (error) {
                console.error(error)
            }
        }
    }
}