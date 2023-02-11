<template>
  <div class="card">
  <header class="card-header">
    <img :src="material.image" width="100">
    <p class="card-header-title">
      {{ material.title }}</p>
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
          <p><strong>Núm. Inventari:</strong>{{ material.numinventari }} <!--<span  v-if="material.estado">{{ material.prestado }}</span> -->
          <strong>Ubicació: </strong>{{ material.ubicacio }}
          <strong>Extensió:</strong>{{ material.extensio }}</p>
          <p><strong>Data Out: </strong>{{ material.dateout }}<br/>
          <strong>Data In: </strong>{{ material.datein }}</p>
        
        </div>
         
        <div class="hijo2 estado" v-if="material.estado =='Disponible'"><img src="../assets/ico/Disponible.png" class="ico"  title="DISPONIBLE"/><span><strong>Estat:</strong> {{material.estado}}</span></div>
        <div class="hijo2 estado" v-if="material.estado =='No Disponible'"><img src="../assets/ico/NoDisponible.png" class="ico"  title="NO DISPONIBLE"/><span><strong>Estat:</strong><br/> {{material.estado}}</span></div>
        <div class="hijo2 estado" v-if="material.estado =='En Manteniment'"><img src="../assets/ico/Mantenimiento.png" class="ico"  title="EN MANTENIMENT"/><span><strong>Estat:</strong><br/> {{material.estado}}</span></div>
  </div>
    </div>
  <!--   <hr/>
   <div class="content">
     {{ material.info }}
    </div> -->
  </div>
  <footer class="card-footer">
   <span v-if="!material.prestado" class="card-footer-item"><a @click="prestec(material.numinventari)">Préstec</a></span> 
   <span v-else  class="card-footer-item"> <a @click="tornada" >Tornada</a></span>
    <router-link :to="{name: 'VistaInfo', params: {numinventari:material.numinventari}}"  class="card-footer-item">+ Info</router-link>
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
        data(){
          return{
            openForm: true,
          }
        },
  methods:{
    prestec(numItem, openForm){
      console.log("Préstec");
      console.log("Desde Card: "+numItem);
      this.$emit("prestec-num", numItem, "open-form",openForm);
    },
    formOpen(){
      this.openForm = true
      this.$emit("open-form",true);
    },
    tornada(){
      console.log("Tornada")
      //console.log("Desde Card: "+numItem);
      this.$emit("tornada-num", this.material.numinventari);
      
    }
  }
}
</script>

<style>
.card{
  height: auto;
  width: 360px;
}

.bordeRojo{
  -webkit-box-shadow: inset 2px 2px 2px 0px rgba(255,3,3,1);
-moz-box-shadow: inset 2px 2px 2px 0px rgba(255,3,3,1);
box-shadow: inset 2px 2px 2px 0px rgba(255,3,3,1);
}

.content{
text-align: left;

}

.ico {
width: 75px;
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
.letraGrande{
  font-size: 16px;
}
</style>