<template>
  <div id="contenido">
    <h1 class="letraTitulo"><strong>{{ material.title }}</strong></h1>
    <br/>
    <div class="columns">
  <div class="column">
    <p class="left">{{ material.info }}</p>
   <!-- <p class="left">{{ material.video }}</p> -->
   <br/>
    <iframe :src="material.video" width="560" height="315"></iframe>
    <br/><br/>
    <p><a href="">QR NURSE - Desmuntatge del circuit respiratori de m&agrave;quina d&rsquo;anest&egrave;sia GE Advance i Datex Ohmeda Aysis</a> from <a href="https://vimeo.com/vallhebron">Vall d&#039;Hebron Hospital Campus</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
  </div>
  <div class="column">
    <p>Imatge de material</p>
    <img :src="material.image"/>
    <br/>
    <img src="@/assets/img/qr-code.png" width="250" title="QR"/>
    <p>Códi QR-NURSE</p>
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
.letraTitulo{
  font-size: 50px;
}
</style>