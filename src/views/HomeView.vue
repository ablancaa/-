<template>
  <div id="contenido">

    <SearchBar v-on:showForm="toggleForm" v-on:search="setSearchTerm"/>
   <CardList :inventario="inventario"/>
  </div>

</template>

<script>
import Inventario from "../json/inventario.json"
import CardList from '@/components/CardList.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'HomeView',
  components: { CardList, SearchBar },

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
