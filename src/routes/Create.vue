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
    <router-link v-on:click="addItem" to="/profile" tag="input" type="button" value="Save" class="saveButton"><span>Save</span></router-link>
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

  .buttonSave{
  position: relative;

  display: block;
  margin: 30px auto;
  padding: 0;

  overflow: hidden;

  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  
  background-color: #2ecc71;
  color: #ecf0f1;
  
  transition: background-color .3s;
  }


.buttonSave:hover, .buttonSave:focus {
  background-color: #27ae60;
}


  .buttonSave:before {
    transition: width .2s ease-out, padding-top .2s ease-out;
  }

  .buttonSave:active:before {
    width: 120%;
    padding-top: 120%;
  }


.buttonSave span {
  display: block;
  padding: 12px 24px;
}

.buttonSave:before {
  content: "";
  
  position: absolute;
  top: 50%;
  left: 50%;
  
  display: block;
  width: 0;
  padding-top: 0;
    
  border-radius: 100%;
  
  background-color: rgba(236, 240, 241, .3);
  
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.buttonSave:before {
  transition: width .2s ease-out, padding-top .2s ease-out;
}

.buttonSave:active:before {
  width: 120%;
  padding-top: 120%;
}

</style>
