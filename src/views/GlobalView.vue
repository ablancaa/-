<template>

  <div class="tile is-ancestor"> 
   <div class="tile is-parent" >
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[0].title}}">
    <article class="tile is-child box">
      <p class="title"> <img :src="inventario[0].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[0].title}}</strong></p>
      <div class="content">
        <br/>
        <p><strong>Total Unitats: </strong><span>{{ this.contadores[0].TotalUnitats }}</span><br/>
            <img src="../assets/ico/Disponible.png" width="20"/> <strong>Disponibles: </strong><span>{{ this.contadores[0].Disponible }}</span> <br/>
            <img src="../assets/ico/NoDisponible.png" width="20"/> <strong> No disponibles: </strong><span> {{ this.contadores[0].NoDisponible }}</span><br/>
            <img src="../assets/ico/Mantenimiento.png" width="20"/> <strong>En Manteniment: </strong><span>{{ this.contadores[0].EnManteniment }}</span> 
         </p>
      </div>
    </article>
  </router-link>
  </div>
  
  <div class="tile is-parent">
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[7].title}}">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[7].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[7].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats: </strong><span>{{ this.contadores[1].TotalUnitats }}</span><br/>
            <img src="../assets/ico/Disponible.png" width="20"/> <strong>Disponibles: </strong><span>{{ this.contadores[1].Disponible }}</span><br/>
            <img src="../assets/ico/NoDisponible.png" width="20"/> <strong> No disponibles: </strong><span>{{ this.contadores[1].NoDisponible }} </span> <br/>
            <img src="../assets/ico/Mantenimiento.png" width="20"/> <strong>En Manteniment: </strong><span>{{ this.contadores[1].EnManteniment }}</span> 
         </p>
      </div>
    </article>
  </router-link>
  </div>

  <div class="tile is-parent">
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[16].title}}">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[16].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[16].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <img src="../assets/ico/Disponible.png" width="20"/> <strong>Disponibles:</strong>  23 <br/>
            <img src="../assets/ico/NoDisponible.png" width="20"/> <strong> No disponibles:</strong> 8 <br/>
            <img src="../assets/ico/Mantenimiento.png" width="20"/> <strong>En Manteniment:</strong> 5
         </p>
      </div>
    </article>
  </router-link>
  </div>
  <div class="tile is-parent">
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[60].title}}">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[60].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[60].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <img src="../assets/ico/Disponible.png" width="20"/> <strong>Disponibles:</strong>  23 <br/>
            <img src="../assets/ico/NoDisponible.png" width="20"/> <strong> No disponibles:</strong> 8 <br/>
            <img src="../assets/ico/Mantenimiento.png" width="20"/> <strong>En Manteniment:</strong> 5
         </p>
      </div>
    </article>
  </router-link>
  </div>
  <div class="tile is-parent">
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[65].title}}">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[65].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[65].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <img src="../assets/ico/Disponible.png" width="20"/> <strong>Disponibles:</strong>  23 <br/>
            <img src="../assets/ico/NoDisponible.png" width="20"/> <strong> No disponibles:</strong> 8 <br/>
            <img src="../assets/ico/Mantenimiento.png" width="20"/> <strong>En Manteniment:</strong> 5
         </p>
      </div>
    </article>
  </router-link>
  </div>
</div>
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[66].title}}">
    <article class="tile is-child box">
      <p class="title"> <img :src="inventario[66].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[66].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <img src="../assets/ico/Disponible.png" width="20"/> <strong>Disponibles:</strong>  23 <br/>
            <img src="../assets/ico/NoDisponible.png" width="20"/> <strong> No disponibles:</strong> 8 <br/>
            <img src="../assets/ico/Mantenimiento.png" width="20"/> <strong>En Manteniment:</strong> 5
         </p>
      </div>
    </article>
  </router-link>
  </div>
  <div class="tile is-parent">
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[68].title}}">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[68].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[68].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <img src="../assets/ico/Disponible.png" width="20"/> <strong>Disponibles:</strong>  23 <br/>
            <img src="../assets/ico/NoDisponible.png" width="20"/> <strong> No disponibles:</strong> 8 <br/>
            <img src="../assets/ico/Mantenimiento.png" width="20"/> <strong>En Manteniment:</strong> 5
         </p>
      </div>
    </article>
  </router-link>
  </div>
  <div class="tile is-parent">
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[71].title}}">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[71].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[71].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <img src="../assets/ico/Disponible.png" width="20"/> <strong>Disponibles:</strong>  23 <br/> 
            <img src="../assets/ico/NoDisponible.png" width="20"/> <strong> No disponibles:</strong> 8 <br/>
            <img src="../assets/ico/Mantenimiento.png" width="20"/> <strong>En Manteniment:</strong> 5
         </p>
      </div>
    </article>
  </router-link>
  </div>
  <div class="tile is-parent">
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[77].title}}">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[77].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[77].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <img src="../assets/ico/Disponible.png" width="20"/> <strong>Disponibles:</strong>  23 <br/>
            <img src="../assets/ico/NoDisponible.png" width="20"/> <strong> No disponibles:</strong> 8 <br/>
            <img src="../assets/ico/Mantenimiento.png" width="20"/> <strong>En Manteniment:</strong> 5
         </p>
      </div>
    </article>
  </router-link>
  </div>
  <div class="tile is-parent">
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[80].title}}">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[80].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[80].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <img src="../assets/ico/Disponible.png" width="20"/> <strong>Disponibles:</strong>  23 <br/>
            <img src="../assets/ico/NoDisponible.png" width="20"/> <strong> No disponibles:</strong> 8 <br/>
            <img src="../assets/ico/Mantenimiento.png" width="20"/> <strong>En Manteniment:</strong> 5
         </p>
      </div>
    </article>
  </router-link>
  </div>
  <!-- <div class="tile is-parent">
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[77].title}}">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[77].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[77].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <img src="../assets/ico/Disponible.png" width="20"/> <strong>Disponibles:</strong>  23 <br/>
            <img src="../assets/ico/NoDisponible.png" width="20"/> <strong> No disponibles:</strong> 8 <br/>
            <img src="../assets/ico/Mantenimiento.png" width="20"/> <strong>En Manteniment:</strong> 5
         </p>
      </div>
    </article>
  </router-link>
  </div> -->
  <!-- <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[60].image" width="100"></p>
      <p class="subtitle">10</p>
    </article>
  </div> -->
</div>
<div class="tile is-ancestor">
  <!-- <div class="tile is-parent" >
    <article class="tile is-child box">
      <p class="title"> <img :src="inventario[0].image" width="100"></p>
      <p class="subtitle">Subtitle</p>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[7].image" width="100"></p>
      <p class="subtitle">Subtitle</p>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[16].image" width="100"></p>
      <p class="subtitle">Subtitle</p>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[60].image" width="100"></p>
      <p class="subtitle">Subtitle</p>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[60].image" width="100"></p>
      <p class="subtitle">Subtitle</p>
    </article>
  </div> -->
</div> 


<br/>
<br/>

</template>

<script>
import Inventario from "../json/inventario.json"
export default {
    name: 'Global-View',
    data(){
      return{
        inventario: Inventario.data,
        materiales: [],
        searchTerm: "",
        showModal: false,
        contador: 0,
        contadorTotales: 0,
        contadorDisponible: 0,
        contadorNoDisponible: 0,
        contadorEnManteniment: 0,
        contadores: [
        {
          title: "Bomba FreeGo Abbott",
          TotalUnitats: 0,
          Disponible: 0,
          NoDispobible: 0,
          EnManteniment: 0,
        },
        {
          title: "Bis Aspect Medical Systems",
          Disponible: 0,
          NoDisponible: 0,
          EnManteniment: 0,
        }]
      }
    },
    mounted(){
      this.fetchItems();
      localStorage.setItem("materiales", JSON.stringify(this.inventario));   
      this.contadoresIndividuales();
    },
    computed:{
       /* contadoresTotales(){
            let contador = this.contadoresIndividuales();
            return contador
        },*/
    },
    methods:{
    setSearchTerm(searchTerm) {
      console.log(searchTerm);
      this.searchTerm = searchTerm;
    },
    fetchItems() {
     this.materiales = Inventario.data;
    },
    contadoresIndividuales(){
      for(let i = 0; i < this.materiales.length; i++){
        
       
          switch(this.materiales[i].title){
            case 'Bomba FreeGo Abbott':
            this.contadorTotales++;
            this.contadores[0].TotalUnitats = this.contadorTotales;
              switch(this.materiales[i].estado){
                case 'Disponible':
                this.contadorDisponible++;
                this.contadores[0].Disponible = this.contadorDisponible;
                break;
                case 'No Disponible':
                this.contadorNoDisponible++;
                this.contadores[0].NoDisponible = this.contadorNoDisponible;
                break;
                case 'En Manteniment':
                this.contadorEnManteniment++;
                this.contadores[0].EnManteniment = this.contadorEnManteniment;
                break;
              }   
            break;

            case 'Bis Aspect Medical Systems':
              //contador de totales
            if(this.contadorTotales < 0){
                this.contadorTotales=0;
            } else {
             // this.contadores[1].TotalUnitats = this.contadorTotales;
            }
                this.contadorTotales = 0;
                this.contadorTotales++;
            switch(this.materiales[i].estado){
                case 'Disponible':
                this.contadorDisponible = 0;
                this.contadorDisponible++;
                this.contadores[1].TotalUnitats = this.contadorTotales;
                this.contadores[1].Disponible = this.contadorDisponible;
                break;
                case 'No Disponible':
                this.contadorNoDisponible = 0;
                this.contadorNoDisponible++;
                this.contadores[1].TotalUnitats = this.contadores[1].TotalUnitats + this.contadorNoDisponible;
                this.contadores[1].NoDisponible = this.contadorNoDisponible;
                break;
                case 'En Manteniment':
                this.contadorEnManteniment = 0;
                this.contadorEnManteniment++;
                this.contadores[1].TotalUnitats = this.contadores[1].TotalUnitats + this.contadorEnManteniment;
                this.contadores[1].EnManteniment = this.contadorEnManteniment;
                break;
                default: this.contadorTotales = 0;
              }
             // this.contadores[1].TotalUnitats =  this.contadores[1].Disponible+this.contadores[1].NoDispobible;
            break;
        }
        
      // console.log(this.contadores[0].Disponible)
       console.log(this.contadores[1].TotalUnitats)
       console.log(this.contadores[1].Disponible)
       console.log(this.contadores[1].NoDisponible)
       console.log(this.contadores[1].EnManteniment)
      }     
    },
    }
}
</script>

<style>
.subtitle2 {
    font-size: 16px;
    font-weight: bold;
}
.router-link:hover{
  background-color: #3e8e41;
}
</style>