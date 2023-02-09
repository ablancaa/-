<template>
  <div class="home">
    <br/>
    <div id="contenido">
 
   <CardList :materiales2="materiales"/>
  </div>
  </div>
</template>

<script>
import Materiales from "../json/materiales.json";
import Materiales2 from "../json/materialesLocal.json";
import CardList from '@/components/CardList.vue'

export default {
  name: 'HomeView',
  components: { CardList },

  data(){
      return{
        materiales: Materiales.data,
        materiales2: Materiales2.data,
      }

    }
}
</script>
<style scoped>
#contenido{
 width: 1204; margin: 0 auto; 
}
</style>
