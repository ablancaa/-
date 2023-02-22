<template>
    <div class="container">
        <h1 class="letraTitulo"><strong>Selecciona hospital</strong></h1>
    <br/>
        <div class="columns is-mobile">
            <div class="column"><router-link to="/" title="Hospital General"><img src="../assets/img/general_frontal.jpg" class="borderRadius"/><strong>Hospital General</strong></router-link></div>
            <div class="column"><router-link to="/" title="Hospital Maternal"><img src="../assets/img/materna_frontal.jpeg" class="borderRadius"/><strong>Hospital Maternal</strong></router-link></div>
            <div class="column"><router-link to="/HTrauma" title="Hospital Traumatologia"><img src="../assets/img/frontal_traumatologia.jpg" width="500" class="borderRadius"/><strong>Hospital de traumatologia i cremats</strong></router-link></div>
        </div>
    <br/>
        <div class="columns is-mobile">
            <div class="column"><router-link to="/" title="Treballant en la secció"><img src="../assets/img/skeleton.gif" class="borderRadius" width="200"/><img src="../assets/img/skeleton.gif" width="250"/><strong></strong></router-link></div>
            <div class="column"><router-link to="/" title="Treballant en la secció"><img src="../assets/img/skeleton.gif" class="borderRadius" width="200"/><img src="../assets/img/skeleton.gif" width="250"/><strong></strong></router-link></div>
            <div class="column"><router-link to="/" title="Treballant en la secció"><img src="../assets/img/skeleton.gif" class="borderRadius" width="200"/><img src="../assets/img/skeleton.gif" width="250"/><strong></strong></router-link></div>
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
    box-shadow: 5px 5px 15px rgb(195, 196, 252);
}


</style>