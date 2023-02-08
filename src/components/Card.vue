<template>
  <div class="card">
  <header class="card-header">
    <img :src="material.image" width="100">
    <p class="card-header-title">
      {{ material.title }}
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
     <!--   <img src="http://clarys.ddns.net/ImgVueInventario/ico/Disponible.png" v-if="material.estado =='Disponible'" title="DISPONIBLE"/>
        <img src="http://clarys.ddns.net/ImgVueInventario/ico/NoDisponible.png" v-if="material.estado =='No Disponible'" title="NO DISPONIBLE"/>
        <img src="http://clarys.ddns.net/ImgVueInventario/ico/Mantenimiento.png" v-if="material.estado =='En Manteniment'" title="EN MANTENIMENT"/>
      -->
        
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
      <div id="info">
        <div class="hijo">
          <strong>Estat: </strong> {{ material.estado }} 
          <p><strong>Núm. Inventari: </strong>{{ material.numinventari }} <!--<span  v-if="material.estado">{{ material.prestado }}</span> -->
          <strong>Ubicació: </strong>{{ material.ubicacio }}
          <strong>Extensió:</strong>{{ material.extensio }}
        </p>
        </div>
        <div class="hijo2 estado" v-if="material.estado =='Disponible'"><img src="../assets/ico/Disponible.png" class="ico"  title="DISPONIBLE"/><span >{{material.estado}}</span></div>
        <div class="hijo2 estado" v-if="material.estado =='No Disponible'"><img src="http://clarys.ddns.net/ImgVueInventario/ico/NoDisponible.png" class="ico"  title="NO DISPONIBLE"/><span>{{material.estado}}</span></div>
        <div class="hijo2 estado" v-if="material.estado =='En Manteniment'"><img src="http://clarys.ddns.net/ImgVueInventario/ico/Mantenimiento.png" class="ico"  title="EN MANTENIMENT"/><span>{{material.estado}}</span></div>
  </div>
    </div>
    <hr/>
    <div class="content">
     {{ material.info }}
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Préstec</a>
    <a href="#" class="card-footer-item">Tornada</a>
    <router-link :to="{name: 'VistaInfo', params: {id:material.id}}"  class="card-footer-item">+ Info</router-link>
  </footer>
</div>
<br/>
</template>

<script>
export default {
  name: 'Card-single',
  props: {
            material: Object,
        },
}
</script>

<style>
.card{
  height: auto;
  width: 360px;
}

.content{
  text-align: left;
}

.ico {
width: 70px;
height: 60px;
  
}

#info {
  display: flex;
  flex-direction: row;
 

}
.hijo {
  width: auto;
  align-items: center;  
}
.hijo2{
  align-items: center;
}

.estado{
  font-size: 12px;
  text-align: center;
  margin-left: 12px;
}
</style>