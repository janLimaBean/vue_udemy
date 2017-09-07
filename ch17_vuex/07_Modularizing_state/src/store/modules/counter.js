// 4. Creating constants holding the code for each block of code
const state = {
   counter: 0
}

const getters = {
    doubleCounter: state => {
        return state.counter * 2
    },
    stringCounter: state => {
        return state.counter + ' Clicks'
    }
}

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: state => {
        state.counter--;
    }
}

const actions = {
    increment: ({commit}, payload) => {
        commit('increment', payload)
    },
    decrement: ({commit}) => {
        commit('decrement')
    },
    asyncIncrement: ({commit}, payload) => {
        setTimeout(() => {
            commit('increment', payload.by)
        },payload.duration);  
    },
    asyncDecrement: ({commit}) => {
        setTimeout(() => {
            commit('decrement')
        },1000);  
    }
}
// 5. Exporting the code from the file - see store .js
    // default represent only one export in this file
export default { 
    state,
    mutations,
    actions,
    getters,
}