<template>
  <div><h1>Vista Cards</h1></div>
  <div id="contenido">
  <!--<card-list :materiales2="materiales"></card-list>-->
  <div>
    <table>
      <tr>
      <td> IMAGE </td>
      <td> TITLE </td>
      <td> ESTAT </td>
      <td> DATA SORTIDA </td>
      <td> DATA ENTRADA </td>
      <td> UBICACIÓ </td>
      <td> EXTENSIÓ </td>
  </tr>
  </table>
 <br/>
<table v-for="(item, index) in materiales" :key="index">
<tbody >
  
  <tr>
    <td ><img :src="item.image" width="70"></td>
    <td>{{ item.title }}</td>
    <td>{{ item.estado }}<br/>
      <span v-if="item.estado =='Disponible'"><img src="../assets/ico/Disponible.png" width="40"  title="DISPONIBLE"/></span>
      <span v-if="item.estado =='No Disponible'"><img src="../assets/ico/NoDisponible.png" width="40" title="NO DISPONIBLE"/></span>
      <span v-if="item.estado =='En Manteniment'"><img src="../assets/ico/Mantenimiento.png" width="40"  title="EN MANTENIMENT"/></span>
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
//import Card from '../components/Card.vue';
import Materiales from "../json/materialesLocal.json";
//import CardList from '@/components/CardList.vue'
export default {
  components: {  },
    name:'VistaCards',
    data(){
      return{
        materiales: Materiales.data,
      }

    }
}
</script>

<style>
.borde {
  border: 1px, solid, blue;
}
td{
  border-collapse: collapse;
  border: 1px solid purple;
}
table{
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid purple;
}

td {
  margin-top: 20px;
  text-align: center;
}
</style>