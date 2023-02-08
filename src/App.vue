<template>
<nav-bar></nav-bar>

<!--  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/VistaCards">Cards</router-link>
  </nav> -->
  <router-view/>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#contenido { width: 1150px; margin: 0 auto; }
</style>
