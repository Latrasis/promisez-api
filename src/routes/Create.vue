<template lang="html">
  <form class="item_adder">
    <input type="text" name="name" v-model="title" placeholder="Title">
    <input type="text" name="name" v-model="desc" placeholder="Description">
    <input type="text" name="name" v-model="assigne" placeholder="Assigne">
    <input type="time" name="name" v-model="expire" placeholder="Expiration">
    <input type="button" value="Save">
  </form>
</template>

<script>
export default {
}
</script>

<style lang="css">

</style>
