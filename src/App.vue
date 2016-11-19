<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
</template>

<script>
import Top from './components/Top.vue'

export default {
  name: 'app',
  components: {
    Top
  },
  data() {
    return {
      list: [
        {
          title: '1',
          description: 'Clean Bathroom',
          done: false
        },
        { title: '2', description: 'Clean Bathroom', done: false},
        { title: '3', description: 'Clean Bathroom', done: false},
        { title: '4', description: 'Clean Bathroom', done: false},
      ]
    }
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
