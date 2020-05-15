<template>
  <div id="app">
    <Nav />
    <Header />
    <Gallery :items="sketches" />
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Header from '~/components/Header.vue'
import Gallery from '~/components/Gallery.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Header,
    Gallery,
    Footer
  },
  data() {
    return {
      sketches: []
    }
  },
  mounted() {
    fetch('/dist/data.json')
      .then(res => res.json())
      .then(json => {
        this.sketches = json
      })
  }
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap'); */

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, 'Helvetica Neue', Helvetica, Icons, sans-serif;
  background: #fff;
  color: #000;

  /* letter-spacing: -0.5pt; */
  word-spacing: 0.01rem;
  line-height: 1;

  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  text-transform: uppercase;
}
</style>