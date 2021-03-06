import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
    bind(el, binding, vnode) {
        el.style.backgroundColor = binding.value
    }
})

Vue.directive('highlightv2', {
        bind(el, binding, vnode) {
            
            if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value
            } else {
                el.style.color = binding.value
            }

        }
    })

Vue.directive('highlightv3', {
    bind(el, binding, vnode) {     
        let delay = 0

        if (binding.modifiers['delayed']) {
            delay = 2000
        }
        setTimeout(() => {
            if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value
            } else {
                el.style.color = binding.value
            }
        }, delay)
    }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
