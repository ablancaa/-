<template>
  <div id="contenido">

    <SearchBar v-on:showForm="toggleForm" v-on:search="setSearchTerm"/>
   <CardList :inventario="itemListFiltered" v-on:tornada="tornada"/>
  </div>

</template>

<script>
import Inventario from "../json/inventario.json"
import CardList from '@/components/CardList.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'HomeView',
  components: { CardList: CardList, SearchBar },

  data(){
      return{
        inventario: Inventario.data,
        materiales: [],
        searchTerm: "",
        showModal: false,
      }

    },
  mounted(){
      this.fetchItems();
    },
  
  methods:{
    setSearchTerm(searchTerm) {
      console.log(searchTerm);
      this.searchTerm = searchTerm;
    },
    fetchItems() {
      this.materiales = Inventario.data;
    },
    toggleForm() {
      this.showModal = !this.showModal;
    },
    tornada(numItem) {
      console.log("Desde Home: " +numItem)
      for(let i= 0; this.materiales.length; i++){
        if(this.materiales[i].numinventari == numItem){
          this.materiales[i].ubicacio = "Unitat de Cremats";
          this.materiales[i].estado = "Disponible";
          this.materiales[i].extensio = "3856"
          this.materiales[i].prestado = false;
        }
      }
      /*this.materiales = this.materiales.filter(
        (item) => item.numinventari !== numItem
      );*/
    },
    
    },
    computed: {
      itemListFiltered() {
        if (!this.searchTerm) {
          return this.materiales;
        } else if (this.searchTerm) {
          return this.materiales.filter((item) => {
            return (
              item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
              item.estado.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
              item.numinventari.includes(this.searchTerm)
              
              //item.ubicacio.includes(this.searchTerm)
          );
          });
        }
        return this.materiales;
      },
    }
}
</script>
<style scoped>
#contenido{
 width: 1204; margin: 0 auto; 
}
</style>
