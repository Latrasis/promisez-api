<template lang="html">
<div>
  <div class="create-top">
    <img src=""/>
    <h4>Отправить обещание</h4>
  </div>

  <form class="item_adder container">
    <input type="text" name="name" v-model="new_title" placeholder="Title" required>
    <input type="text" name="name" v-model="new_desc" placeholder="Description" required>
    <input type="text" name="name" v-model="new_assigne" placeholder="Assigne" required>
    <input type="time" name="name" v-model="new_expire" placeholder="Expiration" required>
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

</style>
