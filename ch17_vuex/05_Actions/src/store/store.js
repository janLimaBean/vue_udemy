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
            increment: state => {
                state.counter++;
            },
            decrement: state => {
                state.counter--;
            }
        },
        // 4. Creating actions.
        actions: {
            // a. Passing context to the func - remember vue automatically gets this passing arg. Context gives us access to the
                // commit method among other build in methods associated with context
            // increment: context => {
            //     context.commit('increment');
            // }
            
            // 5. Another way to pass the commit method only(meaning not other context methods)
            increment: ({commit}) => {
                commit('increment')
            },
            decrement: ({commit}) => {
                commit('decrement')
            },
            // 6. Setting the async action that will be used - see AnotherCounter.vue
            asyncIncrement: ({commit}) => {
                setTimeout(() => {
                    commit('increment')
                },1000);  
            },
            asyncDecrement: ({commit}) => {
                setTimeout(() => {
                    commit('decrement')
                },1000);  
            },
        }
    })