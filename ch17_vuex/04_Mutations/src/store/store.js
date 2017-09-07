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
        // 4. Setting up a mutation - we will use this in AnotherCounter.vue
        mutations :{
            // getting state from the getter
            increment: state => {
                state.counter++;
            },
            decrement: state => {
                state.counter--;
            }
        }
    })