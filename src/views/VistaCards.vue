<template>
  <div><h1>Llistat de material</h1></div>
  <br/>
  <div id="contenido">
  <!--<card-list :materiales2="materiales"></card-list>-->
  <div>
    <table>
      <tr>
      <td> <strong>IMAGE</strong> </td>
      <td> <strong>TITLE</strong> </td>
      <td> <strong>ESTAT</strong> </td>
      <td> <strong>DATA SORTIDA</strong> </td>
      <td> <strong>DATA ENTRADA</strong> </td>
      <td> <strong>UBICACIÓ</strong> </td>
      <td> <strong>EXTENSIÓ</strong> </td>
  </tr>
  </table>
 <br/>
<table v-for="(item, index) in materiales" :key="index">
<tbody >
  
  <tr>
   
    <td><img :src="item.image" width="70"></td>
    <td>{{ item.title }}
      <router-link :to="{name: 'VistaInfo', params: {id:item.id}}"  class="card-footer-item">+ Info</router-link></td>
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