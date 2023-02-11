<template>
  <div class="home">
    <br/>
    <nav-bar></nav-bar>
    <SearchBar v-on:showForm="toggleForm" v-on:search="setSearchTerm"/>
    <div id="contenido">
   <CardList :inventario="itemListFiltered" v-on:tornada-num="tornada" v-on:open-form="toggleForm" v-on:prestec-num="prestec"/>
  </div>
  <FormPrestec
      v-on:addContact="addContact"
      v-on:closeModal="toggleForm"
      v-on:add-prestec="prestec"
      v-if="showModal"
    />
</div>
</template>

<script>
import Inventario from "../json/inventario.json"
import NavBar from '@/components/NavBar.vue'
import CardList from '@/components/CardList.vue'
import SearchBar from '@/components/SearchBar.vue'
import FormPrestec from "../components/FormPrestec.vue";

export default {
  name: 'HomeView',
  components: { CardList, SearchBar, FormPrestec, NavBar },

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
     this.materiales = Inventario.data;
    },
    toggleForm() {
      this.showModal = !this.showModal;
    },
    tornada(item) {
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
      console.log("Desde Home: " +item)
      console.log(this.materiales);
      for(let i= 0; this.materiales.length; i++){
        if(this.inventario[i].numinventari === item){ //0
          this.materiales[i].ubicacio = "Unitat de Cremats"; //1
          this.materiales[i].extensio = "3856" //2
          this.materiales[i].estado = "Disponible";//7
          this.materiales[i].prestado = false;//8
          this.materiales[i].dateout = "";//9
          this.materiales[i].datein = (`${month}/${day}/${year}`);//10
        }
        if(this.materiales[i].estado == false){
            this.materiales[i].dateout = "";
          }

        }
      /*this.materiales = this.materiales.filter(
        (item) => item.numinventari !== numItem
      );*/
    },
    prestec(item) {
      console.log("Desde Home: "+item)
      for(let i= 0; this.materiales.length; i++){
        if(this.materiales[i].numinventari == item.numinventari){ //0
          this.materiales[i].ubicacio = item.ubicacio; //1
          this.materiales[i].extensio = item.extensio //2
          this.materiales[i].prestado = true;//8
          this.materiales[i].dateout = item.dateout;//9
        }
        if(this.materiales[i].ubicacio == item.ubicacio) {
            this.materiales[i].estado = "En Manteniment";//7
          } else if (this.materiales[i].prestado == false){
            this.materiales[i].estado = "Disponible";//7
          }
        if(this.materiales[i].estado == false){
            this.materiales[i].datein = "";
          }
        }
    }
    
    },
    
}
</script>
<style scoped>
#contenido{
 width: 1204; margin: 0 auto; 
}
</style>
