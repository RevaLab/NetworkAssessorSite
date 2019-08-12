<template>
  <div id="app" class="app">
    <!--<div id="nav" class="header-nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <router-view class="router-view"/>
  </div>
</template>

<style lang="scss">
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*!*text-align: center;*!*/
  /*color: #2c3e50;*/
/*}*/
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

  .header-nav {
    flex: 0 0 50px;
  }

  .app {
    display: flex;
    flex-direction: column;
  }

  .router-view {
    flex: 9 9 90%;
  }
</style>
