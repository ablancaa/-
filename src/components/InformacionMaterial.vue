<template>
  <div id="contenido">
    <h1><strong>{{ material.title }}</strong></h1>
    <br/>
    <div class="columns">
  <div class="column">
    <p class="left">{{ material.info }}</p>
  </div>
  <div class="column">
    <img :src="material.image"/>
  </div>
    </div>
  </div>
</template>

<script>
import Materiales2 from "../json/materialesLocal.json";
export default {
    name: 'InfoMateriales',
    data(){
      return{
        materiales: Materiales2.data,
        material: null,
      }
    },
    created() {
    this.material = this.materiales.find((material) => material.id == this.$route.params.id);
  },
  }
</script>

<style>
.left{
  text-align: left;
}
</style>