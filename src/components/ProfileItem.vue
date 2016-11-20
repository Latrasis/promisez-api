<template lang="html">
  <router-link :to="{ path: '/item/'+id }" class="profile-item" tag="li">
    <span >{{item.hours}}:{{item.minutes}}:{{item.seconds}}</span>
    <header>
      <h3> {{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </header>
  </router-link>
</template>

<script>
export default {
  props: ['item', 'id'],
  data() {
    return {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    }
  },
  created() {
    
    console.dir(this.item);
    
    setInterval(() => {
      var sec = this.item.expires;
      var hours =  sec/3600 ^ 0;
      var minutes = (sec-hours*3600)/60 ^ 0; 
      var seconds = sec-hours*3600-minutes*60 ; 
      this.item.minutes = minutes;
      this.item.hours = hours;
      this.item.seconds = seconds;
    }, 10);
    setInterval(() => this.item.expires -= 1, 1000);
    }
  }
</script>

<style lang="css">

  li {
    display: flex;
    flex-direction: row;
    text-align: left;
    padding: 1rem;
  }

  li span{
    color: #f00; 
    font-size: 150%; 
    font-weight: bold;
    margin: 5%;
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
