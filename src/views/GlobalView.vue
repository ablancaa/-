<template>

  <div class="tile is-ancestor">
  <div class="tile is-parent" >
    <article class="tile is-child box">
      <p class="title"> <img :src="inventario[0].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[0].title}}</strong></p>
      <div class="content">
        <br/>
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <strong>Disponibles:</strong>  23 <br/>
            <strong> No disponibles:</strong> 8 <br/>
            <strong>En Manteniment:</strong> 5
         </p>
      </div>
      
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[7].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[7].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <strong>Disponibles:</strong>  23 <br/>
            <strong> No disponibles:</strong> 8 <br/>
            <strong>En Manteniment:</strong> 5
         </p>
      </div>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[16].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[16].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <strong>Disponibles:</strong>  23 <br/>
            <strong> No disponibles:</strong> 8 <br/>
            <strong>En Manteniment:</strong> 5
         </p>
      </div>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[60].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[60].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <strong>Disponibles:</strong>  23 <br/>
            <strong> No disponibles:</strong> 8 <br/>
            <strong>En Manteniment:</strong> 5
         </p>
      </div>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[65].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[65].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <strong>Disponibles:</strong>  23 <br/>
            <strong> No disponibles:</strong> 8 <br/>
            <strong>En Manteniment:</strong> 5
         </p>
      </div>
    </article>
  </div>
</div>
<div class="tile is-ancestor">
  <div class="tile is-parent" >
    <article class="tile is-child box">
      <p class="title"> <img :src="inventario[66].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[66].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <strong>Disponibles:</strong>  23 <br/>
            <strong> No disponibles:</strong> 8 <br/>
            <strong>En Manteniment:</strong> 5
         </p>
      </div>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[68].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[68].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <strong>Disponibles:</strong>  23 <br/>
            <strong> No disponibles:</strong> 8 <br/>
            <strong>En Manteniment:</strong> 5
         </p>
      </div>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[71].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[71].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <strong>Disponibles:</strong>  23 <br/>
            <strong> No disponibles:</strong> 8 <br/>
            <strong>En Manteniment:</strong> 5
         </p>
      </div>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title"><img :src="inventario[77].image" width="100"></p>
      <p class="subtitle"><strong class="subtitle2">{{inventario[77].title}}</strong></p>
      <div class="content">
        <p><strong>Total Unitats:</strong> {{this.contador}}<br/>
            <strong>Disponibles:</strong>  23 <br/>
            <strong> No disponibles:</strong> 8 <br/>
            <strong>En Manteniment:</strong> 5
         </p>
      </div>
    </article>
  </div>
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

<!-- <div class="tile is-ancestor">
  <div class="tile is-vertical is-9">
    <div class="tile">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Five</p>
          <p class="subtitle">Subtitle</p>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
          </div>
        </article>
      </div>
      <div class="tile is-8 is-vertical">
        <div class="tile">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Six</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Seven</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Eight</p>
            <p class="subtitle">Subtitle</p>
          </article>
        </div>
      </div>
    </div>
    <div class="tile">
      <div class="tile is-8 is-parent">
        <article class="tile is-child box">
          <p class="title">Nine</p>
          <p class="subtitle">Subtitle</p>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Ten</p>
          <p class="subtitle">Subtitle</p>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </article>
      </div>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <div class="content">
        <p class="title">Eleven</p>
        <p class="subtitle">Subtitle</p>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
          <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
        </div>
      </div>
    </article>
  </div> 
</div>-->

<!-- <div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Twelve</p>
      <p class="subtitle">Subtitle</p>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</p>
      </div>
    </article>
  </div>
  <div class="tile is-parent is-6">
    <article class="tile is-child box">
      <p class="title">Thirteen</p>
      <p class="subtitle">Subtitle</p>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Fourteen</p>
      <p class="subtitle">Subtitle</p>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</p>
      </div>
    </article>
  </div>
</div> -->
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
      }
    },
    mounted(){
      this.fetchItems();
      localStorage.setItem("materiales", JSON.stringify(this.inventario));     
    },
    computed:{
        
    },
    methods:{
    setSearchTerm(searchTerm) {
      console.log(searchTerm);
      this.searchTerm = searchTerm;
    },
    fetchItems() {
     this.materiales = Inventario.data;
    },
    }
}
</script>

<style>
.subtitle2 {
    font-size: 16px;
    font-weight: bold;
}
</style>