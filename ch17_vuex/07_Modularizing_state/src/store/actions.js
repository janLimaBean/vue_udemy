// 8. Converting to es6 function that is also exported
    // note the difference here with named exports 'export default' and named exports below
// 9. See store.js
export const updateValue = ({commit}, payload) => {
        commit('updateValue', payload)
    }