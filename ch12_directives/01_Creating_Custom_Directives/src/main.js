import Vue from 'vue'
import App from './App.vue'

// 2. Register new directive globally below will be called by v-highlight
Vue.directive('highlight', {
// 3. We use hooks similar to vue lifecycle to create directives
    bind(el, binding, vnode) {
        // a. el refers to Element. b. binding refers to methods and params. c. refers to vue rendered node
        
        // Option without argument
        // el.style.backgroundColor = 'green' |  <p v-highlight="'Some text'"></p>

// 4. Setting passing argument with the directive - see app.vue
        el.style.backgroundColor = binding.value
    }
})

// 7. Setting up more arguments on above directive - see app.vue
Vue.directive('highlightv2', {
        bind(el, binding, vnode) {
            
            if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value
            } else {
                // if argument not true then default to below
                el.style.color = binding.value
            }

        }
    })

// 9. Setting up modifiers on arguments - see app.vue
Vue.directive('highlightv3', {
    bind(el, binding, vnode) {
        
        let delay = 0
    // a. looking if delayed is in the array 
        if (binding.modifiers['delayed']) {
            delay = 2000
        }
        setTimeout(() => {
            if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value
            } else {
                // if argument not true then default to below
                el.style.color = binding.value
            }
        }, delay)
        

    }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
