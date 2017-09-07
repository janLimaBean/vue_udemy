import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =
    new Vuex.Store({
        state: {
            counter: 0
        },
        getters: {
            doubleCounter: state => {
                return state.counter * 2
            },
            stringCounter: state => {
                return state.counter + ' Clicks'
            }
        },
        mutations :{
            // 3. Setting up the action payload to do something with in the mutation
            increment: (state, payload) => {
                state.counter += payload;
            },
            decrement: state => {
                state.counter--;
            }
        },
        actions: {
            // 2. Setting up a argument with the increment action with payload and commiting that to the mutation - payload is not a reserved word
            increment: ({commit}, payload) => {
                commit('increment', payload)
            },
            decrement: ({commit}) => {
                commit('decrement')
            },
            // 5. We cannot set more than one argument at a time but can pass a payload object with all the arguments
                // see AnotherCounter.vue
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
        }
    })