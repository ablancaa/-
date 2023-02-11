<template>
  <div><h1>Llistat de material</h1></div>
  <br/>
  <SearchBar v-on:showForm="toggleForm" v-on:search="setSearchTerm"/>
  <div id="contenido">
  <!--<card-list :materiales2="materiales"></card-list>-->
  <div>
    <table>
      <tr>
      <td> <strong>IMAGE</strong> </td>
      <td> <strong>TITLE</strong> </td>
      <td> <strong>- ESTAT - INVENTARI</strong> </td>
      <td> <strong>DATA SORTIDA</strong> </td>
      <td> <strong>DATA ENTRADA</strong> </td>
      <td> <strong>UBICACIÓ</strong> </td>
      <td> <strong>EXTENSIÓ</strong> </td>
      <td> <strong></strong> </td>
  </tr>
  </table>
 <br/>
<table v-for="(item, index) in itemListFiltered" :key="index" v-on:tornadaNum="tornada">
<tbody >
  
  <tr>
    <td><img :src="item.image" width="80"></td>
    <td>{{ item.title }}
      <router-link :to="{name: 'VistaInfo', params: {numinventari:item.numinventari}}"  class="card-footer-item">+ Info</router-link></td>
    <td><strong>{{ item.estado }}</strong><br/>
      <span v-if="item.estado =='Disponible'"><img src="../assets/ico/Disponible.png" width="40"  title="DISPONIBLE"/></span>
      <span v-if="item.estado =='No Disponible'"><img src="../assets/ico/NoDisponible.png" width="40" title="NO DISPONIBLE"/></span>
      <span v-if="item.estado =='En Manteniment'"><img src="../assets/ico/Mantenimiento.png" width="40"  title="EN MANTENIMENT"/></span>
      <br/>
      <span><!--<strong>Inventari:</strong>--> {{ item.numinventari }}</span>
    </td>
    <td>{{ item.dateout }}</td>
    <td>{{ item.datein }}</td>
    <td>{{ item.ubicacio }}</td>
    <td>{{ item.extensio }}</td>
    <td v-if="item.prestado"><button @click="tornada" v-on:tornadaNum="tornada">Tornada</button></td>
    <td v-else>A la unitat</td>
  </tr>
</tbody>
</table>
  </div>
</div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import Inventario from "../json/inventario.json";
export default {
  components: { SearchBar },
    name:'VistaCards',
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

<style>
.borde {
  border: 1px, solid, blue;
}
td{
  border-collapse: collapse;
  border: 2px, solid, blue;
  
}
table{
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid blue;
}

td {
  margin-top: 20px;
  text-align: center;
}
</style>