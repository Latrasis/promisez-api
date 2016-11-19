<template lang="html">
<div>
  <div class="create-top">
    <img src=""/>
    <h4>Отправить обещание</h4>
  </div>

  <form class="item_adder container">
    <div class="group">
    	<input type="text" name="name" v-model="new_title" placeholder="Title" required>
    	<span class="highlight"></span>
      	<span class="bar"></span>
      	<label class="label-none">Title</label>
    </div>
    <div class="group">
    	<input type="text" name="name" v-model="new_desc" placeholder="Description" required>
    	<span class="highlight"></span>
    	<span class="bar"></span>
    	<label class="label-none">Description</label>
    </div>
    <div class="group">
    	<input type="text" name="name" v-model="new_assigne" placeholder="Assigne" required>
    	<span class="highlight"></span>
      	<span class="bar"></span>
      	<label class="label-none">Assigne</label>
    </div>
    <div class="group">
    	<input type="time" name="name" v-model="new_expire" placeholder="Expiration" required>
    	<span class="highlight"></span>
      	<span class="bar"></span>
      	<label class="label-none">Expiration</label>
    </div>
    <router-link v-on:click="addItem" to="/profile" tag="button" value="Save" ></router-link>
  </form>
  </div>
</template>

<script>
export default {
  methods: {
    addItem: function() {
      this.$store.dispatch('createPromiseItem', {title: this.new_title, description: this.new_desc, assigne: this.new_assigne, expire: this.new_expire})  
    }
  }
}
</script>

<style lang="css">


.create-top {
    display: flex;
    flex-direction: row;
    margin: 0;
    height: 5rem;
    padding: 0.1rem 1rem;
    text-align: left;
    position: fixed;
    background-color: #333;

    align-items: center;
    top: 0;
    width: 100%;
  }

  .create-top img {
      width: 3rem;
      height: 3rem;
      background-color:#838;
      border-radius: 50%;
      margin: 0;
  }

  .create-top h4 {
      color: #fff;
      margin: 0 0.5rem;
  }

  .item_adder{
  	margin-top: 6rem;
  }

</style>
