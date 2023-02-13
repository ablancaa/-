<template>
  <div class="home">
    <SearchBar v-on:showForm="toggleForm" v-on:search="setSearchTerm"/>
    <div id="contenido">
   <CardList :inventario="itemListFiltered" v-on:tornada-num="tornada" v-on:prestec-num="prestec"/>
  </div>
  <FormPrestec
      v-if="showModal"
      v-on:closeModal="toggleForm"
      v-on:add-prestec="give" 
    />
</div>
</template>

<script>
import Inventario from "../json/inventario.json"
import CardList from '@/components/CardList.vue'
import SearchBar from '@/components/SearchBar.vue'
import FormPrestec from "../components/FormPrestec.vue";

export default {
  name: 'HomeView',
  components: { CardList, SearchBar, FormPrestec },

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
      localStorage.setItem("materiales", JSON.stringify(this.inventario));
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
     this.materiales = Inventario.data;
    },
    toggleForm() {
      this.showModal = !this.showModal;
    },
    tornada(item) {
      //crea un nuevo objeto `Date`
      var today = new Date();
      //`getDate()` devuelve el día del mes (del 1 al 31)
      var day = today.getDate();
      //`getMonth()` devuelve el mes (de 0 a 11)
      var month = today.getMonth() + 1;
      //`getFullYear()` devuelve el año completo
      var year = today.getFullYear();
      //muestra la fecha de hoy en formato `MM/DD/YYYY`
      //console.log(`${month}/${day}/${year}`);
      console.log("Desde Home tornada: " +item)
      this.numinventari = item;
      this.materiales.map(function(element) {
        if(element.numinventari== item){
          return element.ubicacio = "Unitat de Cremats",
              element.extensio = "3856" ,
              element.estado = "Disponible",
              element.prestado = false,
              element.dateout="",
              element.datein = (`${day}/${month}/${year}`);
        }
      });      
    },
    prestec(item) {
      this.showModal = true;
      localStorage.setItem("num", item);
      console.log("LocalStorage: "+localStorage.getItem("num"));


      //crea un nuevo objeto `Date`
     // var today = new Date();
      //`getDate()` devuelve el día del mes (del 1 al 31)
      //var day = today.getDate();
      //`getMonth()` devuelve el mes (de 0 a 11)
      //var month = today.getMonth() + 1;
      //`getFullYear()` devuelve el año completo
      //var year = today.getFullYear();
      //muestra la fecha de hoy en formato `MM/DD/YYYY`
      //console.log(`${month}/${day}/${year}`);
      //console.log(item)
      console.log("prestec: "+item)
      return item;
      /*this.materiales.map(function(element) {
        if(element.numinventari == item){
          return element.ubicacio = "PRUEBA",
              element.extensio = "3856",
              element.estado = "No Disponible",
              element.prestado = true,
              element.dateout="",
              element.datein = (`${day}/${month}/${year}`);
        }
      });      */
    },
    give(items){
      //crea un nuevo objeto `Date`
      var today = new Date();
      //`getDate()` devuelve el día del mes (del 1 al 31)
      var day = today.getDate();
      //`getMonth()` devuelve el mes (de 0 a 11)
      var month = today.getMonth() + 1;
      //`getFullYear()` devuelve el año completo
      var year = today.getFullYear();
      //muestra la fecha de hoy en formato `MM/DD/YYYY`
      //console.log(`${day}/${month}/${year}`);
      console.log(items);
      console.log(localStorage.getItem("num"));
      console.log("NUM: "+localStorage.getItem("num"));
      let estado = null;
      this.materiales.map(function(element) {
        if(element.numinventari == localStorage.getItem("num")){
          if(items.ubicacio == "Tallers"){
           estado = "En Manteniment"
          }
          if(items.ubicacio != "Tallers"){
           estado = "No Disponible"
          }
          if(items.ubicacio)
          return element.ubicacio =  items.ubicacio,
              element.extensio = items.extensio,
              element.estado = estado,
              element.prestado = true,
              element.dateout=(`${day}/${month}/${year}`),
              element.datein = "";
        }
      });      
      return items;
    }
    },
    
}
</script>
<style scoped>
#contenido{
 width: 1204; margin: 0 auto; 
}
</style>
