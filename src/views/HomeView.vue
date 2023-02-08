<template>
  <div class="home">
    <div id="contenido">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
   <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   <CardList :materiales="materiales"/>
  </div>
  </div>
</template>

<script>
import Materiales from "../json/materiales.json";
import CardList from '@/components/CardList.vue'

export default {
  name: 'HomeView',
  components: { CardList },

  data(){
      return{
        materiales: Materiales.data,
      }

    }
}
</script>
<style scoped>
#contenido{
 width: 1204; margin: 0 auto; 
}
</style>
