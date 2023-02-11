<template>
  <div class="lista-material">
    <div v-for="material in inventario" :key="material.numinventari">
        <MaterialCard :material="material" v-on:tornada-num="tornada" v-on:prestec-num="prestec" v-on:open-form="openForm"/>
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
    openForm(){
        this.$emit("open-form",true);
    },
    prestec(numItem, openForm) {
        console.log("Desde CardList: "+numItem);
        this.$emit("prestec-num", numItem, "open-form",openForm);
        
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