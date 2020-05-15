<template>
  <div class="gallery">
    <a
      v-for="({ title, path, description, date, features },
      key) in $props.items"
      :href="path + '/index.html'"
      :key="key"
    >
      <div class="mono">{{ formatDate(date) }}</div>
      <div class="thumbnail">
        <img :src="`${path}/preview.png`" />
      </div>
      <div>
        {{ title }}
        <p v-if="description">{{ description }}</p>
        <ul v-if="features" v-for="item in features">
          Interactive:
          <li><img :src="'/assets/icons/' + item + '.svg'" /></li>
        </ul>
      </div>
    </a>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['items'],
  methods: {
    formatDate(d) {
      return moment(d).format('MMMM Do, YYYY')
    }
  }
}
</script>

<style scoped>
.mono {
  font-family: 'Kale Mono X', monospace;
  font-size: 0.8em;
  padding-bottom: 0.5em;
}
.gallery {
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
}
@media screen and (min-width: 900px) {
  .gallery {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (max-width: 400px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}
a {
  color: inherit;
  text-decoration: none;
}
@media screen and (max-width: 400px) {
  a {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
  }
  a .mono {
    grid-column: 2 span;
  }
  a {
    font-size: 0.8em;
  }
}
p {
  text-transform: none;
  color: #999;
  padding-bottom: 0.5em;
}
.thumbnail {
  max-width: 100%;
  height: 0px;
  padding-bottom: 100%;
  position: relative;
  margin-bottom: 0.5rem;
}
.thumbnail img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

a ul {
  margin: 0.8em 0;
  font-size: 0.8em;
  display: inline-block;
  font-family: 'Kale Mono X', monospace;
}
a ul li {
  display: inline-block;
}
a ul li img {
  height: 1.2em;
  vertical-align: middle;
}
</style>
