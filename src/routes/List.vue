<template lang="html">
  <ul>
    <profile-item v-for="item in list" v-bind:item="item"></profile-item>
    <form class="item_adder">
      <input type="text" name="name" v-model="new_title" placeholder="Title">
      <input type="text" name="name" v-model="new_desc" placeholder="Description">
      <input v-on:click="addItem" type="button" value="Create">
    </form>
  </ul>
</template>

<script>

import ProfileItem from '../components/ProfileItem.vue'

export default {
  components: {
    ProfileItem
  },
  computed: {
    list() { return this.$store.state.list }
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
</style>
