<template lang="html">
  <h3>{{ item.description }}</h3>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    item() {
      return this.$store.state.promiseItem[this.id]
    }
  }
}
</script>

<style lang="css">
</style>
