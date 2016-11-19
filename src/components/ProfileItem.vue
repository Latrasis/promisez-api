<template lang="html">
  <li class="profile-item">
    <span class="time-limit"></span>
    <header>
      <h3> {{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </header>
  </li>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="css">

  li {
    display: flex;
    flex-direction: row;
    text-align: left;
    padding: 1rem;
  }

  li span {
    height: 4rem;
    width: 4rem;
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
</style>
