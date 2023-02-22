<template>
    <div class="container">
        <h1 class="letraTitulo">Selecciona el hospital</h1>
        <br/>

    
        <div class="columns is-mobile">
            <div class="column"><router-link to="/" title="Hospital General"><img src="../assets/img/general_frontal.jpg" class="borderRadius"/><strong>Hospital General</strong></router-link></div>
            <div class="column"><router-link to="/" title="Hospital Maternal"><img src="../assets/img/materna_frontal.jpeg" class="borderRadius"/><strong>Hospital Maternal</strong></router-link></div>
            <div class="column"><router-link to="/" title="Hospital Maternal"><img src="../assets/img/frontal_traumatologia.jpg" width="500" class="borderRadius"/><strong>Hospital de traumatologia i cremats</strong></router-link></div>
        </div>
    
    <br/>
    
    
    </div>
</template>

<script>
export default {
    name: "Inicio-view",
}


</script>

<style>
.borderRadius{
    border-radius: 15px;
}
</style>