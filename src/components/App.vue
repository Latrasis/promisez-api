<template>
  <div id="app">
    <top></top>
    <list><list>
</template>

<script>
import Top from './Top.vue'
import List from './List.vue'

export default {
  name: 'app',
  components: {
    Top,
    List
  }
}
</script>

<style>

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: inherit;
}

h1, h2 {
  font-weight: normal;
}
</style>
