import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =
    new Vuex.Store({
        state: {
            counter: 0,
            value: 0
        },
        getters: {
            doubleCounter: state => {
                return state.counter * 2
            },
            stringCounter: state => {
                return state.counter + ' Clicks'
            },
            // 2. Setting up new getter
            value: state => {
                return state.value
            }
        },
        mutations :{
            increment: (state, payload) => {
                state.counter += payload;
            },
            decrement: state => {
                state.counter--;
            },
            // 3. Setting up new mutation
            updateValue: (state, payload) => {
                state.value = payload
            }
        },
        actions: {
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
            },
            // 4. Setting up new action. See app.vue
            updateValue({commit}, payload) {
                commit('updateValue', payload)
            }
        }
    })