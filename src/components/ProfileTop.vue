<template lang="html">
  <div class="profile-top">
    <img src=""/>
    <h4>Мои Обещания</h4>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.profile-top {
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

  .profile-top img {
      width: 3rem;
      height: 3rem;
      background-color:#838;
      border-radius: 50%;
      margin: 0;
  }

  .profile-top h4 {
      color: #fff;
      margin: 0 0.5rem;
  }

</style>
