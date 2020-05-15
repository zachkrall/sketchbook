<template>
  <nav>
    <a :href="homepage">&larr; Homepage</a>
  </nav>
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
nav {
  padding: 1rem;
}
a {
  display: inline-block;
  color: inherit;
  text-decoration: none;
  border: 1px solid #000;
  padding: 0.2em 0.4em;
  border-radius: 0.25em;
  transition: 0.3s color ease, 0.3s background ease;
}
a:hover {
  background: #000;
  color: #fff;
}
</style>