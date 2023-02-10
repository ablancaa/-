<template>
 <cabecera/>


<div id="contenido">
  <nav-bar></nav-bar>
  <router-view/>
</div>
<Footer/>
</template>
<script>
import Cabecera from '@/components/Cabecera.vue'
import Footer from '@/components/Footer.vue'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Cabecera,
    Footer
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
