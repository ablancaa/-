<template>
  <div class="container">
    <h1 class="letraTitulo"><strong>Fitxes de material</strong></h1>
    <SearchBar v-on:showForm="toggleForm" v-on:search="setSearchTerm"/>
    <CardList :inventario="itemListFiltered" v-on:tornada-num="tornada" v-on:prestec-num="prestec"/>
  </div>
  <FormPrestec
      v-if="showModal"
      v-on:closeModal="toggleForm"
      v-on:add-prestec="give" 
    />
    <div class="go-top-container">
      <div class="go-top-button">
        <i class="fas fa-chevron-up"> <img src="../assets/ico/volver-arriba.png" width="90"/></i>
      </div>
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
              item.numinventari.includes(this.searchTerm) ||
              item.extensio.includes(this.searchTerm)
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
              element.dateout="--/--/----",
              element.datein = (`${day}/${month}/${year}`);
        }
      });      
    },
    prestec(item) {
      this.showModal = true;
      localStorage.setItem("num", item);
      console.log("LocalStorage: "+localStorage.getItem("num"));
      console.log("prestec: "+item)
      return item;
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
      return items;
    }
    },
    
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
#contenido{
 width: 1204; margin: 0 auto; 
}
.letraGrande{
  font-size: 16px;
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
