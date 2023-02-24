<template>
    <div class="container">
        <h1 class="letraTitulo"><strong>Hospital de Traumatologia, rehabilitació i cremats</strong></h1>
        <br/>
        <div class="columns is-mobile">
            <div class="lista-plantas">
                <div v-for="planta in plantas" :key="planta" class="column" v-on:click="show = !show">
                    <div class="card2">
                        <br/>
                       <span><strong>Planta: </strong> {{ planta-3 }}</span>
                       <br/>
                       <span>
                        <transition name="slide-fade">
                            <p v-if="show">Senars -- Parells</p>
                        </transition>
                       </span>
                    </div>
                </div>
            </div>
        </div>
        <br/>
    </div>
</template>

<script>

export default {    
    name: "H-Trauma",
    data(){
        return {
            plantas: 8,
            show: false,
            
        }
    }
}
</script>

<style >
.lista-plantas {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;  
}
.card2 {
    height: 110px;
    text-align: center;
    background-color: rgb(223, 223, 245);
    border-radius: 15px;
    box-shadow: 5px 5px 15px rgb(195, 196, 252);
}
/* Las animaciones de entrada y salida pueden usar */
/* funciones de espera y duración diferentes.      */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>