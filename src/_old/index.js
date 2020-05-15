const Vue = require('vue').default
const compileToFunctions = require('vue-template-compiler').compileToFunctions

const config = require('../../sketchbook.config.js')

const components = require('./components.js')

const App = Vue.extend({
  data() {
    return {
      ...config,
      sketches: []
    }
  },
  components: {
    List: components.List
  },
  mounted() {
    fetch('./dist/data.json')
      .then(res => res.json())
      .then(json => {
        this.sketches = json.sketches
      })
  },
  ...compileToFunctions(`<div id="app">
  <header style="text-align:center;">
  <br/>
  Rough Visual Experiments
  </header>
<nav>
  <span><b>{{title}}</b> / <b>{{ author }}</b></span>
  <a :href="homepage">Homepage</a>
</nav>
<List :items="sketches"/>
<footer>
<div style="margin-bottom:1rem"><a href="https://vuejs.org">Vue.js</a> / <a href="p5js.org">p5.js</a> / <a href="https://npmjs.com/package/p5snap">p5snap</a></div>
<div>&copy; {{ (new Date()).getFullYear() }} {{ author }}. All Rights Reserved.</div>
</footer>
</div>`)
})

const vm = new Vue({
  render: h => {
    return h(App)
  }
})

/* mount Vue once DOM tree is available */
document.addEventListener('DOMContentLoaded', () => {
  vm.$mount('#app')
})
