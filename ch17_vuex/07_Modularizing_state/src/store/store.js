import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
// 10. Importing actions note the star as actions. This will import all named exports and hold it
    // as properties on the actions object
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)
console.log(counter)
export const store =
    new Vuex.Store({
        state: {
            value: 0
        },
        getters: {
            // 3. Removing all getters, mutation, actions and copy them to store/modules/counter.js
            value: state => {
                return state.value
            }
        },
        // 12. also moved to single file
        mutations,

        // 7. Copying all shared actions to a single file actions.js
        // actions: {
        //     updateValue({commit}, payload) {
        //         commit('updateValue', payload)
        //     }
        // },

        // 11. Setting the new actions - can do the same for the mutaions and getters
        actions,

        // 6. Importing the different modules that was exported
        modules: {
            counter
        }

        // 13. To conclude we can create module files for more specialized things and general actions,
            // mutation,getter files
    })