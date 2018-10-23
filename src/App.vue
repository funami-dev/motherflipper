<template>
  <div id="app">
    <Motherflipper :start="0" :end="100" :speed="20" />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #efefef;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
