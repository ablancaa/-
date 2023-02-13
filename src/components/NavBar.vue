<template>
  <br/>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
   <!-- <a class="navbar-item" href="/">
      <img src="../assets/logos/logo-VH-Master-RGB-blue.png" width="112" height="28">
    </a> -->
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
        <span class="navbar-item">
        <router-link to="/"><span class="color">Home</span></router-link> 
    </span>

      <span class="navbar-item">
        <router-link to="/VistaCards"><span class="color">Llistat</span></router-link>
      </span>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          <span class="color">Més</span>
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            <span class="color">Instruccions</span> 
          </a>
          <a class="navbar-item">
            <span class="color"> Operatives </span>
          </a>
          <a class="navbar-item">
            <span class="color"> Contacte</span>
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            <span class="color">Reporta un problema</span>
            
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
<br/>
</template>

<script>
export default {
name: 'Nav-Bar'
}
</script>

<style>
.color {
    color: blue;
}
.navbar{
  height: 70px;
}

</style>