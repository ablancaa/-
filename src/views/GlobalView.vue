<template>

  <div class="tile is-ancestor"> 
   <div class="tile is-parent" >
    <router-link :to="{name: 'VistaListaEspecifica', params: {title:inventario[0].title}}">
    <article class="tile is-child box">
      <p class="title"> <img :src="inventario[0].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[0].title}}</strong></p>
      <div class="content">
        <br/>
        <p><strong>Total Unitats:</strong> {{contadoresTotales}}<br/>
            <img src="../assets/ico/Disponible.png" width="20"/> <strong>Disponibles:</strong>  23 <br/>
            <img src="../assets/ico/NoDisponible.png" width="20"/> <strong> No disponibles:</strong> 8 <br/>
            <img src="../assets/ico/Mantenimiento.png" width="20"/> <strong>En Manteniment:</strong> 5
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
{{ contadoresTotales }}
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
      }
    },
    mounted(){
      this.fetchItems();
      localStorage.setItem("materiales", JSON.stringify(this.inventario));     
    },
    computed:{
        contadoresTotales(){
            let contador = this.contadoresIndividuales();
            return contador
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
    contadoresIndividuales(){
        if (this.materiales > 0) {
          return this.materiales.filter((item) => {
            if(item.title=="Bomba FreeGo Abbott"){
               this.contador++ 
               return this.materiales.map("Bomba FreeGo Abbott").length 
            }
            return (
                this.materiales.map("Bomba FreeGo Abbott").length 
            );
          });
        }

        return this.materiales.length;
        /*
        let array = [];
        //array = this.materiales.map(element => element == 'Bomba FreeGo Abbott')
        for (let i = 0; i< this.materiales.length; i++){
            if(this.materiales[i+1].title == "Bomba FreeGo Abbott"){
                array[i] = this.materiales[i];
                console.log("Se repite "+this.materiales[i].prestado);
                this.contador++;
            }
        }
        console.log(array.length)
        return array.length
        */
        //let prefijos = ["super", "spider", "ant", "iron"]
        //let sufijo = "man";
        //let arrayBusqueda = this.materiales.map(item => item == "Bomba FreeGo Abbott");
        //console.log(arrayBusqueda[0]);
        //let nombresCompletos = prefijos.map(prefijo => prefijo + sufijo);
       // let nombresReales = this.materiales.map(item => {
       // if (item.title == "Bomba FreeGo Abbott"){
           //console.log("Dentro if"); 
         //  return console.log(item.title)
       // }
       // }
        //);
        //return nombresReales.map(item => item == "Bomba FreeGo Abbott");
        //console.log(nombresReales.length)
        
        // ["superman", "spiderman", "antman", "ironman"]
       /* this.materiales.map(function(element) {
            if(element.title == "Bomba FreeGo Abbott") {
                console.log(element.title)  
            }
            return this.contador;
        });   */   
       
        /*for (let i = 0; i< this.materiales.length; i++){
            if(this.materiales[i+1].title == "Bomba FreeGo Abbott"){
                console.log("Se repite "+this.materiales[i].prestado)
                this.contador++;
              
            } 
            console.log("Contador: "+this.contador)
            
        }*/       
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