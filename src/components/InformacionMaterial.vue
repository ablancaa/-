<template>
  <div>
    <h1>{{ material.title }}</h1>
    <div>
      <p class="left">{{ material.info }}</p>
    </div>
    <div><img :src="material.image"/></div>
    
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