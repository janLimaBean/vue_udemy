import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =
    new Vuex.Store({
        state: {
            counter: 0
        },
        // 4. Setting reserved word getter to setup our getters
        getters: {
            // 5. Setting up function with state as an arg - vue autumatically passes the state - see AnotherResult.vue
            doubleCounter: state => {
                return state.counter * 2;
            }
        }
    })