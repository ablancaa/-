<template>
  <h1 class="letraTitulo">- <strong>{{ material.title }}</strong> -</h1>
   <div class="tile is-ancestor">
  <div class="tile is-4 is-vertical is-parent">
    <div class="tile is-child box">
      <p class="title"></p>
    <img :src="material.image"/>
      <p class="left">{{ material.info }}</p>
    </div>
    <div class="tile is-child box">
      <p class="title"></p>
      <img src="@/assets/img/qr-code.png" width="250" title="QR"/>
      <p><a href="">QR NURSE - Muntatge del circuit per Bomba FreeGo Abbott</a> from <a href="https://vimeo.com/vallhebron">Vall d&#039;Hebron Hospital Campus</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
    </div>
  </div>
  <div class="tile is-parent">
    <div class="tile is-child box">
      <p class="title"></p>
      <iframe :src="material.video" width="560" height="315" class="puntaRedonda"></iframe>
      <br/>
      <p class="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
      <p class="left">Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
      <p class="left">Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
    </div>
  </div>
  
</div>
<br/><br/>
</template>

<script>
import Inventario from "../json/inventario.json";
export default {
    name: 'InfoMateriales',
    data(){
      return{
        materiales: Inventario.data,
        material: null,
      }
    },
    created() {
    this.material = this.materiales.find((material) => material.numinventari == this.$route.params.numinventari);
  },
  }
</script>

<style>
.puntaRedonda{
  border-radius: 10px;
}
.left{
  text-align: left;
}
.letraTitulo{
  font-size: 35px;
  margin-top: -15px;
  margin-bottom: 8px;
  background-color: rgb(213, 221, 255);
  border-radius: 10px;
  width: 100%;
}
</style>