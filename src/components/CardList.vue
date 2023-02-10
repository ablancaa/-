<template>
  <div class="lista-material">
    <div v-for="material in inventario" :key="material.numinventari">
        <MaterialCard :material="material"/>
    </div>
</div>
</template>

<script>
import MaterialCard from '@/components/Card.vue'
export default {
    name: 'Card-List',
    components:{ MaterialCard },
    props: {
        materiales: Array,
        materiales2: Array,
        inventario: Array,
        },

}
</script>

<style>
.lista-material {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
}
</style>