import Vue from 'vue'
import App from './App.vue'

const vm = new Vue({
  render: h => {
    return h(App)
  }
})

document.addEventListener('DOMContentLoaded', () => {
  vm.$mount('#app')
})
