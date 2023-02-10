<template>
  <div class="home">
    <br/>
    
   <CardList :inventario="inventario"/>
  </div>

</template>

<script>
import Inventario from "../json/inventario.json";
import CardList from '@/components/CardList.vue'

export default {
  name: 'HomeView',
  components: { CardList },

  data(){
      return{
        inventario: Inventario.data,
      }

    }
}
</script>
<style scoped>
#contenido{
 width: 1204; margin: 0 auto; 
}
</style>
