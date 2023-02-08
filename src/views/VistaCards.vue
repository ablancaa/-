<template>
  <div><h1>Vista Cards</h1></div>
  <div id="contenido">
  <card></card>
  <card-list></card-list>
</div>
</template>

<script>
import Card from '../components/Card.vue';
import Materiales from "../json/materiales.json";
import CardList from '@/components/CardList.vue'
export default {
  components: { Card, CardList },
    name:'VistaCards',
    data(){
      return{
        materiales: Materiales.data,
      }

    }
}
</script>

<style>

</style>