<template>
    <div class="container">
        <h1 class="letraTitulo"><strong>Hospital de Traumatologia, rehabilitació i cremats</strong></h1>
        <br/>
        <div class="columns is-mobile">
            <div class="lista-material">
                <div v-for="planta in plantas" :key="planta" class="column">
                    <div class="card2">
                        <br/>
                       <strong>Planta: </strong> {{ planta }}
                       <p>Senars -- Parells</p>
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
            plantas: 5,
        }
    }
}
</script>

<style >
.lista-material {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;  
}
.card2 {
    width: 365px;
    height: 110px;
    text-align: center;
    background-color: rgb(223, 223, 245);
    border-radius: 15px;
    box-shadow: 5px 5px 15px rgb(195, 196, 252);
}
</style>