<template>
  <div id="app">
    <!-- <Home /> -->
    <router-view></router-view>
  </div>
</template>
<script>
/* import Home from "./views/Home"; */

export default {
  data() {
    return {
      msg: "hello world"
    };
  },
  /* components: { Home } */
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* width: 500px;
  height: 500px; */
  /* background: red; */
  background: #f5f5f5;
}
</style>
