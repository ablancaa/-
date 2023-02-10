<template>
  <div id="contenido">
    <h1><strong>{{ material.title }}</strong></h1>
    <br/>
    <div class="columns">
  <div class="column">
    <p class="left">{{ material.info }}</p>
   <!-- <p class="left">{{ material.video }}</p> -->
    <iframe :src="material.video" width="560" height="315"></iframe>
    <p><a href="">QR NURSE - Desmuntatge del circuit respiratori de m&agrave;quina d&rsquo;anest&egrave;sia GE Advance i Datex Ohmeda Aysis</a> from <a href="https://vimeo.com/vallhebron">Vall d&#039;Hebron Hospital Campus</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
  </div>
  <div class="column">
    <img :src="material.image"/>
  </div>
    </div>
  </div>
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
.left{
  text-align: left;
}
</style>