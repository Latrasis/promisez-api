<template>
  <div id="app">
    <profile-top></profile-top>
    <nav class="nav-list">
      <button class="nav-list-btn" type="button" name="button">Мои</button>
      <button class="nav-list-btn" type="button" name="button">Другие</button>
    </nav>
    <router-view></router-view>
</template>
<script>
import ProfileTop from './components/ProfileTop.vue'

export default {
  name: 'app',
  components: {
    ProfileTop
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

#app {
  text-align: center;
  color: #2c3e50;
  width: inherit;
}

.nav-list {
  margin-top: 5rem;
  display: flex;
}

.nav-list .nav-list-btn {
  border-radius: 0;
  background-color: #333;
  border: none;
  color: #aaa;
  width: 50%;
  height: 3rem;
  margin: 0;
  padding: 0.5rem;
  font-size: 0.9rem;
  border-bottom: 4px solid #333;
}

.nav-list .nav-list-btn:hover,
.nav-list .nav-list-btn.selected {
  border-bottom: 4px solid #848;
  color: #fff;
}


</style>
