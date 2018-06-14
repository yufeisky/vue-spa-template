<!--suppress ALL -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
  }

  #app {
    color: #2c3e50;
    margin-top: 0px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
    a {
      text-decoration: none;
    }
  }

</style>
