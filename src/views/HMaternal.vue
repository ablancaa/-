<template>
    <div class="container">
        <h1 class="letraTitulo"><strong>Hospital de Traumatologia, rehabilitació i cremats</strong></h1>
        <br/>
            <div class="lista-material">
                <div v-for="planta in plantas" :key="planta" class="column ">
                    <div class="card2">
                        <br/>
                       <strong>Planta: </strong> {{ planta }}
                       <p>Senars -- Parells</p>
                    </div>
                </div>
            </div>
        <br/>
    </div>
</template>

<script>

export default {    
    name: "H-Maternal",
    data(){
        return {
            plantas: 5,
        }
    }
}
</script>

<style scoped>
.lista-material {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;  
}
.sombra {
    box-shadow: 5px 5px 15px rgb(255, 0, 0);
}

</style>