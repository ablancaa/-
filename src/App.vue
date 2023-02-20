<template>
<div class="container">
  <cabecera/>
  <NavBar/>
    <router-view/>
  <Pie/>
</div>

</template>
<script>
import Cabecera from '@/components/Cabecera.vue'
import Pie from '@/components/Footer.vue'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Cabecera,
    Pie
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: white;
  background-image: url("assets/logos/BackgroundCorporativo2.png"); 
  opacity: 50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #ffffff;
}


</style>
