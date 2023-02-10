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
      <td> <strong>ESTAT / INVENTARI</strong> </td>
      <td> <strong>DATA SORTIDA</strong> </td>
      <td> <strong>DATA ENTRADA</strong> </td>
      <td> <strong>UBICACIÓ</strong> </td>
      <td> <strong>EXTENSIÓ</strong> </td>
  </tr>
  </table>
 <br/>
<table v-for="(item, index) in itemListFiltered" :key="index">
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
    }
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