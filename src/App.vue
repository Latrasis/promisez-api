<template>
  <div id="app">
    <profile-top></profile-top>
    <nav class="nav-list">
      <router-link to="rec" class="nav-list-btn" active-class="selected">Мои</router-link>
      <router-link to="send" class="nav-list-btn" active-class="selected">Другие</router-link>
    </nav>
    <router-view></router-view>
</template>
<script>
import ProfileTop from './components/ProfileTop.vue'

export default {
  name: 'app',
  components: {
    ProfileTop
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
  height: 2rem;
  margin: 0;
  padding: 0.5rem;
  font-size: 0.9rem;
  border-bottom: 4px solid #333;
  text-decoration: none;
}

.nav-list .nav-list-btn:hover,
.nav-list .nav-list-btn.selected {
  border-bottom: 4px solid #848;
  color: #fff;
}


</style>
