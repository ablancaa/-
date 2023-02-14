<template>
<div class="container">
  <div class="lista-material">
    <div v-for="material in inventario" :key="material.numinventari" class="container">
        <MaterialCard :material="material" v-on:tornada-num="tornada" v-on:open-form="openForm" v-on:prestec-num="prestec" />
    </div>
  </div>
</div>
</template>

<script>
import MaterialCard from '@/components/Card.vue'

export default {
    
    name: 'Card-List',
    components:{ MaterialCard },
    props: {
        inventario: Array,
        },
    methods:{
        tornada(numItem) {
            console.log("Desde CardList: "+numItem);
            this.$emit("tornada-num",numItem);
        },
        openForm(openForm){
            console.log("Desde CardList: "+openForm);
            this.$emit("open-form",true);
        },
        prestec(numItem) {
            console.log("Desde CardList: "+numItem);
            this.$emit("prestec-num", numItem);
        
        },
    }

}
</script>

<style>
.lista-material {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    
}
</style>