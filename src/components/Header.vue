<template>
  <header>
    <h1>{{title}} / {{author}}</h1>
    <p>An archive of generative art sketches. These are all rough experiments and may not render correctly on mobile devices.</p>
  </header>
</template>

<script>
import config from '../../sketchbook.config'
export default {
  data() {
    return {
      ...config
    }
  }
}
</script>

<style scoped>
header {
  padding: 1rem;
}
h1 {
  font-weight: normal;
}
p {
  padding: 1rem 0;
  text-transform: none;
  max-width: 30em;
}
</style>