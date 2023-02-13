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
        
        <div class="colorEstadoRojo" v-if="material.estado =='No Disponible'"></div>
        <div class="colorEstadoNaranja" v-if="material.estado =='En Manteniment'"></div>
        <div class="colorEstadoVerde" v-if="material.estado =='Disponible'"></div>
       
        <div class="hijo">          
          <p><strong>Núm.Inventari: </strong><span class="letraGrande">{{ material.numinventari }}</span></p>
          <p><strong>Ubicació: </strong>{{ material.ubicacio }}</p>
          <p><strong>Extensió: </strong><span class="letraExtension">{{ material.extensio }}</span></p>
          <strong>Sortida: </strong><span class="letraData">{{ material.dateout }}</span><br/>
          <strong>Entrada: </strong><span class="letraData">{{ material.datein }}</span>
        
        </div>
         
        <div class="hijo2 estado" v-if="material.estado =='Disponible'">
          <img src="../assets/ico/Disponible.png" class="ico"  title="DISPONIBLE"/>
          <span><strong>Estat:</strong><br/> {{material.estado}}</span>
          <img src="../assets/img/qr-code.png" class="ico qr"  title="CODE QR"/>
        </div>
        <div class="hijo2 estado" v-if="material.estado =='No Disponible'">
          <img src="../assets/ico/NoDisponible.png" class="ico"  title="NO DISPONIBLE"/>
          <span><strong>Estat:</strong><br/> {{material.estado}}</span>
          <img src="../assets/img/qr-code.png" class="ico qr"  title="CODE QR"/>
        </div>
        <div class="hijo2 estado" v-if="material.estado =='En Manteniment'">
          <img src="../assets/ico/Mantenimiento.png" class="ico"  title="EN MANTENIMENT"/>
          <span><strong>Estat:</strong><br/> {{material.estado}}</span>
          <img src="../assets/img/qr-code.png" class="ico qr"  title="CODE QR"/>
        </div>
  </div>
    </div>
  <!--   <hr/>
   <div class="content">
     {{ material.info }}
    </div> -->
  </div>
  <footer class="card-footer">
   <span v-if="!material.prestado" class="card-footer-item textoBlanco"><a @click="prestec(material.numinventari)">Préstec</a></span>
   <span v-else  class="card-footer-item"> <a @click="tornada">Tornada</a></span>
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
 
          }
        },
  methods:{
    prestec(numItem){
      console.log("Préstec");
      console.log("Desde Card préstec: "+numItem);
      this.$emit("prestec-num", numItem);
    },
    formOpen(){
      console.log("Desde Card: "+true);
      this.emit("open-form",true);
    },
    tornada(){
      console.log("Tornada")
      console.log("Desde Card tornada: "+this.material.numinventari);
      this.$emit("tornada-num", this.material.numinventari);
    }
  }
}
</script>

<style>

.salida{
  margin-right: 4px;
  float: left;
  margin-top: 5px;
}
.salida2{
  margin-right: 4px; 
  position: fixed;
  margin-top: -95px;
}
.entrada2{
  margin-right: 4px; 
}

.card-footer-item {
  background: rgb(236, 236, 245);
  
}
.textoBlanco {
  color: white;
}
.card-footer-item:hover a:hover {
  color: white;
}
.card-footer-item:hover {
  background:blue;
  color: hsl(0, 0%, 100%);
}
.colorEstadoRojo{
  background: red;
  margin-right: 5px;
  margin-left: -15px;
  width: 10px;
  border-radius: 20px;
}
.colorEstadoNaranja{
  background: orange;
  margin-right: 5px;
  margin-left: -15px;
  width: 10px;
  border-radius: 20px;
}
.colorEstadoVerde{
  background: green;
  margin-right: 5px;
  margin-left: -15px;
  width: 10px;
  border-radius: 20px;
}

.qr{
  margin-top:10px;
}

.qr-diponible{
  margin-top:100px;
}
.card{
  height: auto;
  width: 360px;
  
}

header{
  border-radius: 0px 0px 80px 0px;
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
  width: 340px;
  align-items: left;  
  line-height: 1.2;
  letter-spacing: -0.1px;
}
.hijo2{
  align-items: center;
  width: 150px;
}

.estado{
  font-size: 12px;
  text-align: center;
  margin-left: 12px;
}
.letraGrande{
  font-size: 23px;
  line-height: -1%;
}

.letraExtension{
  font-size: 20px;
  line-height: 1%;
}

.letraData{
  font-size: 18px;
  line-height: -1.5%;
}
</style>