import { createStore } from "vuex";
const store = createStore({
    state: {
  
        // Store api request results in the task list
        name: "Testing Vue State Management in store/index.js",
        graphData :[12, 19, 3, 5, 2, 6, 8, 2],
        graphLables: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Pink', 'grey'],
      

    },
    mutations: { 
        appendData(state, data){
            // mutate state
            state.graphData.push(data)
        },
        appendLable(state, lable){
            state.graphLables.push(lable)
        }
      
    },
    actions: {
        addData(state, payload){
            state.commit('appendData', payload)
        },
        addLable(state, payload){
            state.commit('appendLable', payload)
        }
    },
    getters: {
      
    },
    modules: {
        

    }
})
export default store;