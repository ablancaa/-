<template>
  <h1>Vista info</h1>
  <div>
    <InfoMaterial :materiales="materiales"/>
</div>
  
</template>

<script>
import InfoMaterial from "../components/InformacionMaterial.vue"
export default {
    name: 'Vista-Info',
    components: { InfoMaterial },
    data(){
        return {
     
        }
    }
}
</script>

<style>

</style>