<template>
  <h1 class="letraTitulo"><strong>Llistat de material</strong></h1>
  <SearchBar v-on:showForm="toggleForm" v-on:search="setSearchTerm"/>
  <div id="contenido">
    <FormPrestec  
     v-if="showModal"
     v-on:add-prestec="give" 
     v-on:closeModal="toggleForm"/>
  <div>
    <table>
      <tr>
      <td> <strong>IMAGE</strong> </td>
      <td> <strong>TITLE</strong> </td>
      <td> <strong>- ESTAT - INVENTARI</strong> </td>
      <td> <strong>- DATA - SORTIDA</strong> </td>
      <td> <strong>- DATA - ENTRADA</strong> </td>
      <td> <strong>DIES FORA</strong> </td>
      <td> <strong>UBICACIÓ</strong> </td>
      <td> <strong>QR</strong> </td>
      <td> <strong>EXTENSIÓ</strong> </td>
      <td></td>
  </tr>
  </table>
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
    <td><br/>{{ item.dateout }}</td>
    <td><br/>{{ item.datein }}</td>
    <td><br/>DIES FORA</td>
    <td><br/>{{ item.ubicacio }}</td>
    <td><br/><span v-if="item.qr==''"><img src="../assets/img/skeleton.gif" width="100"/></span><span else><img :src="item.qr" width="85"/></span></td>
    <!-- <td else><br/></td> -->
    <td><br/>{{ item.extensio }}</td>
    <td v-if="item.prestado"><br/><button @click="tornada(item.numinventari)" class="btn1">Tornada</button></td>
    <td v-else><!--A la unitat--><br/> <span v-if="!item.prestado"><button @click="prestec(item.numinventari), give()" class="btn1">Préstec</button></span>
    <!--A la unitat--> <span v-if="!item.prestado"><button @click="prestec(item.numinventari), give()" class="btn1">eliminiar</button></span></td>
   
  </tr>
</tbody>
</table>
  </div>
</div>
<div class="go-top-container">
      <div class="go-top-button">
        <i class="fas fa-chevron-up"> <img src="../assets/ico/volver-arriba.png" width="90"/></i>
      </div>
    </div>
<br/><br/>
</template>

<script>
import FormPrestec from "../components/FormPrestec.vue";
import SearchBar from '@/components/SearchBar.vue'
import Inventario from "../json/inventario.json";
export default {
  components: { SearchBar, FormPrestec },
    name:'VistaCards',
    data(){
      return{
        inventario: Inventario.data,
        materiales: [],
        material: null,
        searchTerm: "",
        showModal: false,
      }
    },
    mounted(){
      this.fetchItems();
      window.onscroll = function(){
        console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop > 100) {
          document.querySelector('.go-top-container').classList.add('show');
        } else {
          document.querySelector('.go-top-container').classList.remove('show');
        }
      } 
 
      document.querySelector('.go-top-container').addEventListener('click', () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
      });
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
      console.log(numItem);
      this.materiales.map(function(element) {
        if(element.numinventari == numItem){
          return element.ubicacio = "Unitat de Cremats",
              element.extensio = "3856" ,
              element.estado = "Disponible",
              element.prestado = false,
              element.dateout="--/--/----",
              element.datein = (`${day}/${month}/${year}`);
        }
      });      
    },
    prestec(item) {
      this.showModal = true;
      localStorage.setItem("num", item);
      console.log("LocalStorage: "+localStorage.getItem("num"));
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
              element.datein = "--/--/----";
        }
      }); 
      this.showModal = true;     
      return items;
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
              item.numinventari.includes(this.searchTerm) ||
              item.ubicacio.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
              item.extensio.includes(this.searchTerm)
          );
          });
        }
        return this.materiales;
      },
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
.borde {
  border: 1px, solid, blue;
}
td {
  text-align: center;
  background-color:white;
}
table{
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid blue;
}

.btn {
/* Color del texo */
color: #0099CC;
/* Eliminar color de fondo */
background: transparent;
/* Grosor del borde, estilo de línea y color */
border: 2px solid blue;
/* Añadir esquinas curvadas */
border-radius: 6px;
/* Poner texto en mayúsculas */

border: none;
      color: white;
      padding: 16px 32px;
      text-align: center;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      -webkit-transition-duration: 0.4s; /* Safari */
      transition-duration: 0.4s;
      cursor: pointer;
      text-decoration: none;
      text-transform: uppercase;
}
.btn1 {
      background-color: rgb(17, 0, 255); 
      color: black; 
      border: 2px solid #001aff;
      margin-top: 5px;
}
/* Al poner el curso encima (hover) */

.btn1:hover {
      background-color: #008CBA;
      color: white;
 }

 .EstadoRojo{
  background: red;
  margin-right: 0px;
  margin-left: 0px;
  width: 34px;
  height: 152px;

  border-radius: 20px;
}
.colorEstadoNaranja{
  background: orange;
  margin-right: 5px;
  margin-left: -15px;
  width: 10px;
  border-radius: 20px;
}
.colorEstadoVerde{
  background: green;
  margin-right: 5px;
  margin-left: -15px;
  width: 10px;
  border-radius: 20px;
}

/* GOTOP */
 
.go-top-container {
    position: fixed;
    bottom: 2rem;
    right: 1rem;
    width: 2.6rem;
    height: 2.6rem;
    z-index: -1;
}
 
.go-top-button {
    width: 0rem;
    height: 0rem;
    background: #002fff;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.2s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
}
 
.go-top-button i {
    position: absolute;
    font-size: 0rem;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    color: #fff;
    transition: 0.2s;
}
 
.show {
    z-index: 10;
}
 
.show .go-top-button {
    animation: popup 0.3s ease-in-out;
    width: 2.6rem;
    height: 2.6rem;
    z-index: 11;
}
 
.show i {
    transform: translate(-50%, -50%) scale(1);
}
 
@keyframes popup {
    0% {
        width: 0;
        height: 0;
    }
    50% {
        width: 2rem;
        height: 2rem;
    }
    100% {
        width: 4.6rem;
        height: 4.6rem;
    }
}
</style>