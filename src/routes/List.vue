<template lang="html">
  <ul>
    <li v-for="item in list">
      <header>
        <h3> Обещание {{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </header>
      <input type="checkbox" name="name" class="checked" v-model="item.done">
    </li>
    <form class="item_adder">
      <input type="text" name="name" v-model="new_title" placeholder="Title">
      <input type="text" name="name" v-model="new_desc" placeholder="Description">
      <input v-on:click="addItem" type="button" value="Create">
    </form>
  </ul>
</template>

<script>
export default {
  data () {
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
  },
  methods: {
    addItem: function() {
      this.list.push({title: this.new_title, description: this.new_desc})
    }
  }
}
</script>

<style lang="css">

ul {
  list-style-type: none;
  width: 100%;
  padding: 0;
  margin: 5rem 0 0 0;
}

li {
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: space-between;
  padding: 1rem;
}

li header {
  display: flex;
  flex-direction: column;
}

li h3 {
  margin: 0;
}

li:hover {
  background-color: #888;
  color: #fff;
}
li:active {
  background-color: #444;
}



a {
  color: #42b983;
}
</style>
