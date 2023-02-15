<template>
    
    <div id="logo">
        <router-link to="/"><img id="logo" alt="logo" src="@/assets/logos/Salut-Campus-tots-RGB.png"/></router-link>
    </div>
    <span class="firma navbar-item"><strong>webmaster: @lberto Blanca Alcaide - 16/02/2023 / Version 1.3</strong></span>
</template>
<script>
    export default {
        name: 'Footer-',
    }
</script>

<style scoped>
#logo {
    width: 95%;
}
.firma{
  font-size: 9px;
  color: black;
  background-color:rgb(227, 227, 247);
  text-align: left;
}
</style>