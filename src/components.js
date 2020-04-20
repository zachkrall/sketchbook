const Vue = require('vue').default
const compileToFunctions = require('vue-template-compiler').compileToFunctions

const Entry = Vue.component('Entry', {
  name: 'Entry',
  props: ['path','name','image'],
  data(){
    return {
      iframe: false
    }
  },
  methods: {
    iframeTrue(event){
      if(!this.iframe){
        event.preventDefault()
        this.iframe = true
      }
    },
    iframeFalse(event){
      event.preventDefault()
      this.iframe = false
    }
  },
  mounted(){
    this.$refs.container.addEventListener('click', this.iframeTrue)
    this.$refs.container.addEventListener('blur', this.iframeFalse)
  },
  ...compileToFunctions(`<a
    :href="path"
    ref="container"
    class="artCard"
    :style="{ backgroundImage: 'url(' + image + ')'}"
    title="click to preview">
    <div class="artCard-label">{{ name }}</div>
    <iframe v-if="iframe" scrolling="no" :src="path"></iframe>
</a>`)
})

const List = Vue.component('List', {
  name: "List",
  props: ['items'],
  components: {
    Entry
  },
  data(){
    return {}
  },
  ...compileToFunctions(`<div>
<Entry
  v-for="({path,image,name},index) in items"
  :key="index"
  :path="path"
  :image="image"
  :name="name"
/>
</div>`)
})

module.exports = { List }
