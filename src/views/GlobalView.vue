<template>
<h2 class="letraTitulo">Visió global del material</h2>
  <div class="tile is-ancestor"> 
   <div class="tile is-parent" >
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[0].title}}" title="Selecció de material">
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
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[7].title}}" title="Selecció de material">
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
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[16].title}}" title="Selecció de material">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[16].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[16].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats: </strong><span>{{ this.contadores[2].TotalUnitats }}</span><br/>
            <img src="../assets/ico/Disponible.png" width="20"/> <strong>Disponibles: </strong><span>{{ this.contadores[2].Disponible }}</span><br/>
            <img src="../assets/ico/NoDisponible.png" width="20"/> <strong> No disponibles: </strong> <span>{{ this.contadores[2].NoDisponible }} </span> <br/>
            <img src="../assets/ico/Mantenimiento.png" width="20"/> <strong>En Manteniment: </strong> <span>{{ this.contadores[2].EnManteniment }}</span>
         </p>
      </div>
    </article>
  </router-link>
  </div>
  <div class="tile is-parent">
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[60].title}}" title="Selecció de material">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[60].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[60].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contadores[3].TotalUnitats}}<br/>
            <img src="../assets/ico/Disponible.png" width="20"/> <strong>Disponibles:</strong><span>{{ this.contadores[3].Disponible }}</span><br/>
            <img src="../assets/ico/NoDisponible.png" width="20"/> <strong> No disponibles:</strong> <span>{{ this.contadores[3].NoDisponible }} </span> <br/>
            <img src="../assets/ico/Mantenimiento.png" width="20"/> <strong>En Manteniment:</strong> <span>{{ this.contadores[3].EnManteniment }}</span>
         </p>
      </div>
    </article>
  </router-link>
  </div>
  <div class="tile is-parent">
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[65].title}}" title="Selecció de material">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[65].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[65].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contadores[4].TotalUnitats}}<br/>
            <img src="../assets/ico/Disponible.png" width="20"/> <strong>Disponibles:</strong>  <span>{{ this.contadores[4].Disponible }}</span> <br/>
            <img src="../assets/ico/NoDisponible.png" width="20"/> <strong> No disponibles:</strong> <span>{{ this.contadores[4].NoDisponible }} </span>  <br/>
            <img src="../assets/ico/Mantenimiento.png" width="20"/> <strong>En Manteniment:</strong> <span>{{ this.contadores[4].EnManteniment }}</span>
         </p>
      </div>
    </article>
  </router-link>
  </div>
</div>
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[66].title}}" title="Selecció de material">
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
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[68].title}}" title="Selecció de material">
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
        contadorTotales0: 0,
        contadorTotales1: 0,
        contadorTotales2: 0,
        contadorTotales3: 0,
        contadorTotales4: 0,
        contadorTotales5: 0,
        contadorTotales6: 0,
        contadorTotales7: 0,
        contadorTotales8: 0,
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
          TotalUnitats: 0,
          Disponible: 0,
          NoDisponible: 0,
          EnManteniment: 0,
        },
        {
          title: "Bomba Volumétrica Alaris",
          TotalUnitats: 0,
          Disponible: 0,
          NoDisponible: 0,
          EnManteniment: 0,
        },
        {
          title: "Bomba Volumétrica de jeringa Alaris",
          TotalUnitats: 0,
          Disponible: 0,
          NoDisponible: 0,
          EnManteniment: 0,
        },
        {
          title: "Calentador de infusión HOTLINE®",
          TotalUnitats: 0,
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
      //this.contadorTotales = 0;
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
      this.contadorTotales=0;
      for(let i = 0; i < this.materiales.length; i++){
               
          switch(this.materiales[i].title){
            case 'Bomba FreeGo Abbott':
            this.contadorTotales0++;
            this.contadores[0].TotalUnitats = this.contadorTotales0;
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
              this.contadorTotales1++;
              this.contadores[1].TotalUnitats = this.contadorTotales1;
              //this.contadorDisponible = 0;
              //this.contadorNoDisponible = 0;
              //this.contadorEnManteniment = 0;
              switch(this.materiales[i].estado){
                  case 'Disponible':
                  this.contadorDisponible = 0;
                  this.contadorDisponible++;
                  this.contadores[1].Disponible = this.contadorDisponible;
                  break;
                  case 'No Disponible':
                  this.contadorNoDisponible = 0;
                  this.contadorNoDisponible++;
                  //this.contadores[1].TotalUnitats = this.contadores[1].TotalUnitats + this.contadorNoDisponible;
                  this.contadores[1].NoDisponible = this.contadorNoDisponible;
                  break;
                  case 'En Manteniment':
                  this.contadorEnManteniment = 0;
                  this.contadorEnManteniment++;
                  //this.contadores[1].TotalUnitats = this.contadores[1].TotalUnitats + this.contadorEnManteniment;
                  this.contadores[1].EnManteniment = this.contadorEnManteniment;
                  break;
                }
             // this.contadores[1].TotalUnitats =  this.contadores[1].Disponible+this.contadores[1].NoDispobible;
            break;
            case 'Bomba Volumétrica Alaris':
              this.contadorTotales2++;
              this.contadores[2].TotalUnitats = this.contadorTotales2;
            switch(this.materiales[2].estado){
                case 'Disponible':
                this.contadorDisponible = 0;
                this.contadorDisponible++;
                this.contadores[2].Disponible = this.contadorDisponible;
                break;
                case 'No Disponible':
                this.contadorNoDisponible = 0;
                this.contadorNoDisponible++;
               //this.contadores[2].TotalUnitats = this.contadores[2].TotalUnitats + this.contadorNoDisponible;
                this.contadores[2].NoDisponible = this.contadorNoDisponible;
                break;
                case 'En Manteniment':
                this.contadorEnManteniment = 0;
                this.contadorEnManteniment++;
               // this.contadores[2].TotalUnitats = this.contadores[2].TotalUnitats + this.contadorEnManteniment;
                this.contadores[2].EnManteniment = this.contadorEnManteniment;
                break;
            
              }
             // this.contadores[1].TotalUnitats =  this.contadores[1].Disponible+this.contadores[1].NoDispobible;
            break;
            case 'Bomba Volumétrica de jeringa Alaris':
                
              this.contadorTotales3++;
              this.contadores[3].TotalUnitats = this.contadorTotales3;
            switch(this.materiales[3].estado){
                case 'Disponible':
                this.contadorDisponible++;
                this.contadores[3].Disponible = this.contadorDisponible;
                this.contadorDisponible = 0;
                break;
                case 'No Disponible':
                this.contadorNoDisponible++;
                this.contadores[3].NoDisponible = this.contadorNoDisponible;
                this.contadorNoDisponible = 0;
                break;
                case 'En Manteniment':
                this.contadorEnManteniment++;
                this.contadores[3].EnManteniment = this.contadorEnManteniment;
                this.contadorEnManteniment = 0;
                break;
                
              }
             // this.contadores[1].TotalUnitats =  this.contadores[1].Disponible+this.contadores[1].NoDispobible;
            break;
            
            case 'Calentador de infusión HOTLINE®':
                
              this.contadorTotales4++;
              this.contadores[4].TotalUnitats = this.contadorTotales4;
              this.contadorNoDisponible = 0;
            switch(this.materiales[4].estado){
                case 'Disponible':
                this.contadorDisponible = 0;
                this.contadorDisponible++;
                this.contadores[4].Disponible = this.contadorDisponible;
                
                break;
                case 'No Disponible':
                
                this.contadorNoDisponible++;
                //this.contadores[3].TotalUnitats = this.contadores[3].TotalUnitats + this.contadorNoDisponible;
                this.contadores[4].NoDisponible = this.contadorNoDisponible;
                
                break;
                case 'En Manteniment':
                
                this.contadorEnManteniment++;
                //this.contadores[3].TotalUnitats = this.contadores[3].TotalUnitats + this.contadorEnManteniment;
                this.contadores[4].EnManteniment = this.contadorEnManteniment;
                this.contadorEnManteniment = 0;
                break;
                
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
      this.contadorDisponible = 0;
              this.contadorNoDisponible = 0;
              this.contadorEnManteniment = 0;   
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