<template>
  <footer>
    <div style="margin-bottom: 1rem;">
      Made with:
      <a href="https://vuejs.org">Vue.js</a> /
      <a href="p5js.org">p5.js</a> /
      <a href="https://npmjs.com/package/p5snap">p5snap</a>
    </div>
    <div>© 2020 Zach Krall. All Rights Reserved.</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  padding: 1rem;
  font-family: 'Kale Mono X';
  color: #999;
}
a {
  color: inherit;
}
</style>