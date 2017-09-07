import Vue from 'vue'

// 3. Importing vuex file
import Vuex from 'vuex'

// 4. Registering vuex
Vue.use(Vuex)
// 6. Exporting store as a constant that can be used in our root vue instance
export const store =
    new Vuex.Store({
        // 5. Storing all properties our app has - note verb needs to be state
        state: {
            counter: 0
        }
    })