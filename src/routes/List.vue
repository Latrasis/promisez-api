<template lang="html">
  <ul>
    <profile-item v-for="(item, index) in list" v-bind:item="item" v-bind:id="index"></profile-item>
    <router-link to="/create" class="buttonAdd" value="+" tag="button">+</router-link>
  </ul>
</template>

<script>

import ProfileItem from '../components/ProfileItem.vue'

export default {
  components: {
    ProfileItem
  },
  computed: {
    list() {
      if (this.$route.name == 'rec') return this.$store.state.rec_list;
      if (this.$route.name == 'send') return this.$store.state.send_list;
    }
  },
  methods: {
    addItem: function() {
      this.$store.dispatch('createPromiseItem', {title: this.new_title, description: this.new_desc})
    }
  }
}
</script>

<style lang="css">

ul {
  list-style-type: none;
  width: 100%;
  padding: 0;
  margin: 0;
}

a {
  color: #42b983;
}

button.buttonAdd {
  width: 4rem;
  height: 4rem;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  background-color: #333;
  color: #fff;
  padding: 0;
  border-radius: 50%;
  border: 0;
  font-size: 1.8rem;
}

button.buttonAdd:hover {
  cursor: pointer;
  background-color: #444;
}
</style>
