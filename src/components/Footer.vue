<template>
  <div id="logo">
    <router-link to="/"
      ><img id="logo" alt="logo" src="@/assets/logos/Salut-Campus-tots-RGB.png"
    /></router-link>
  </div>
  <br/>
  <span class="firma navbar-item"
    ><strong
      >webmaster: @lberto Blanca Alcaide - {{day}}/{{month}}/{{year}} -- Version 1.7 --</strong
    ></span
  >
</template>
<script>
export default {
  name: "Footer-",
    data(){
        return{
            dia: '',
            month:'',
            year:''
        }

    },
    mounted() {
    //crea un nuevo objeto `Date`
    var today = new Date();
    //`getDate()` devuelve el día del mes (del 1 al 31)
    var day = today.getDate();
    this.day = day;
    //`getMonth()` devuelve el mes (de 0 a 11)
    var month = today.getMonth() + 1;
    this.month = month;
    //`getFullYear()` devuelve el año completo
    var year = today.getFullYear();
    this.year = year;
    //muestra la fecha de hoy en formato `MM/DD/YYYY`
    console.log(`${day}/${month}/${year}`);
  },
};
</script>

<style scoped>
#logo {
  width: 95%;
}
.firma {
  font-size: 9px;
  color: black;
  background-color: rgb(227, 227, 247);
  text-align: left;
}
</style>
