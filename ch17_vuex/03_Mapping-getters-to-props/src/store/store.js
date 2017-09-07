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
            // 2. Adding another getter meth to return a string - see AnotherResult
            stringCounter: state => {
                return state.counter + ' Clicks'
            }
        }
    })