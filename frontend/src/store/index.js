import { createStore } from "vuex";
const store = createStore({
    state: {
        // Login
        user : null,

        // Store api request results in the task list

        showModal: false,
        graphData :[1],
        graphLables: ["Landing Page"],
       

        // Example given below
        selectedBugList: [{
            "id": 0,
            "location": "Landing Page",
            "title": "Test Title", 
            "description": "This is a short disciption about this bug",
            "steps": [
                    "step 1: click on something",
                    "step 2: click on something else",
                    "step 3: navigate to some place",
                    "step 4: observe something that is displayed"],
            "expected": "This is what is expected to happen",
            "actual": "This is what actually happens ",
            "show": false}]
        },
        // Stores the currently selected location
        selectedLocation: "",
    mutations: { 
        appendData(state, data){
            // mutate state
            state.graphData.push(data)
        },
        appendLable(state, lable){
            state.graphLables.push(lable)
        },

        setAuthUser(state, user){
            state.user = user;
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
        isLoggedIn(state) {
            return state.user != null;  
        }
    },
    modules: {
        

    }
})
export default store;