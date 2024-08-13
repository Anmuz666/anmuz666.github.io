<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/qushan">衢山</router-link> |
      <router-link to="/qushanplus">衢山plus</router-link> |
      <router-link to="/canves">canves</router-link>
      <router-link to="/mapc">3666</router-link>

    </nav>-->
    <router-view />
  </div>
</template>


<style lang="scss">
@import "@/assets/theAll.css";
@import "@/assets/background1.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
