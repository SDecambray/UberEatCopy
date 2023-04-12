<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url('./styles/reset.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  padding: 0px 20px;
}
</style>
