<template lang="html">
  <ul>
    <li v-for="item in list">
      <h3> Обещание {{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </li>
    <form class="item_adder">
      <input type="text" name="name" v-model="title" placeholder="Title">
      <input type="text" name="name" v-model="desc" placeholder="Description">
      <input type="text" name="name" v-model="assigne" placeholder="Assigne">
      <input type="time" name="name" v-model="expire" placeholder="Expiration">
      <input type="button" value="Edit">
    </form>
  </ul>
</template>

<script>
export default {
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
  flex-direction: column;
  text-align: left;
  padding: 1rem;
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
