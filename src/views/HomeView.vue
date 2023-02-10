<template>
  <div id="contenido">

    <SearchBar v-on:showForm="toggleForm" v-on:search="setSearchTerm"/>
   <CardList :inventario="itemListFiltered" v-on:tornadaNum="tornada"/>
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
    computed: {
      itemListFiltered() {
        if (!this.searchTerm) {
          return this.materiales;
        } else if (this.searchTerm) {
          return this.materiales.filter((item) => {
            return (
              item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
              item.estado.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
              item.ubicacio.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
              item.numinventari.includes(this.searchTerm) 
            
          );
          });
        }
        return this.materiales;
      },
    },
  methods:{
    setSearchTerm(searchTerm) {
      console.log(searchTerm);
      this.searchTerm = searchTerm;
    },
    fetchItems() {
      this.materiales = this.inventario;
    },
    toggleForm() {
      this.showModal = !this.showModal;
    },
    tornada(numItem) {
      // crea un nuevo objeto `Date`
      var today = new Date();
      // `getDate()` devuelve el día del mes (del 1 al 31)
      var day = today.getDate();
      // `getMonth()` devuelve el mes (de 0 a 11)
      var month = today.getMonth() + 1;
      // `getFullYear()` devuelve el año completo
       var year = today.getFullYear();
      // muestra la fecha de hoy en formato `MM/DD/YYYY`
      //console.log(`${month}/${day}/${year}`);
      console.log("Desde Home: " +numItem)
      for(let i= 0; this.materiales.length; i++){
        if(this.materiales[i].numinventari == numItem){
          this.materiales[i].ubicacio = "Unitat de Cremats";
          this.materiales[i].estado = "Disponible";
          this.materiales[i].extensio = "3856"
          this.materiales[i].prestado = false;
          
          this.materiales[i].datein = (`${month}/${day}/${year}`);
          this.materiales[i].dateout = "";
        }
        if(this.materiales[i].estado == false){
            this.materiales[i].dateout = "";
          }

      }
      /*this.materiales = this.materiales.filter(
        (item) => item.numinventari !== numItem
      );*/
    },
    
    },
    
}
</script>
<style scoped>
#contenido{
 width: 1204; margin: 0 auto; 
}
</style>
