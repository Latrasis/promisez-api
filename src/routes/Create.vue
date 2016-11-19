<template lang="html">
  <form class="item_adder">

    <div class="group">
    	<input type="text" name="name" v-model="title" placeholder="Title">
    	<span class="highlight"></span>
      	<span class="bar"></span>
      	<label>Title</label>
    </div>
    <div class="group">
    	<input type="text" name="name" v-model="desc" placeholder="Description">
    	<span class="highlight"></span>
    	<span class="bar"></span>
    	<label>Description</label>
    </div>
    <div class="group">
    	<input type="text" name="name" v-model="assigne" placeholder="Assigne">
    	<span class="highlight"></span>
      	<span class="bar"></span>
      	<label>Assigne</label>
    </div>
    <div class="group">
    	<input type="time" name="name" v-model="expire" placeholder="Expiration">
    	<span class="highlight"></span>
      	<span class="bar"></span>
      	<label>Expiration</label>
    </div>
    <input type="button" value="Save">
  </form>
</template>

<script>
export default {
}
</script>

<style lang="css">


</style>
