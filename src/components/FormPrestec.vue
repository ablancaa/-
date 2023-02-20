<template>
    <div class="modal-container">
      <div class="contact-form">
        <div class="contact-form-header">
          <h2>Préstec de Material</h2>
          <button @click="closeForm" class="blanco">
           <!-- Tancar--><img src="../assets/ico/cerrarVentana.png" alt="Close modal" /> 
          </button>
        </div>
        <div class="error" v-if="error">
          Emplena tots el camps.
        </div>
        <form @submit.prevent="addPrestec">
          <div class="contact-form-item">
            <label for="name">Servei</label>
            <select v-model="material.ubicacio">
                <option value="Unitat de cremats">Unitat de cremats</option>
                <option value="Planta 1 Parells">Planta 1 Parells</option>
                <option value="Planta 1 Senars">Planta 1 Senars</option>
                <option value="Planta 2 Parells">Planta 2 Parells</option>
                <option value="Planta 2 Senars">Planta 2 Senars</option>
                <option value="Planta 3 Parells">Planta 3 Parells</option>
                <option value="Planta 3 Senars">Planta 3 Senars</option>
                <option value="Planta 4 Parells">Planta 4 Parells</option>
                <option value="Planta 4 Senars">Planta 4 Senars</option>
                <option value="Reanimacio">Reanimació</option>
                <option value="Quiròfan 41">Quiròfan 41</option>
                <option value="Tallers">Tallers</option>
            </select>
          </div>
          <div class="contact-form-item">
            <button type="submit" @submit.prevent="addPrestec">Préstec</button>
          </div>
        </form>
        <div class="foot"><img id="logo" alt="logo" src="@/assets/logos/Salut-Campus-tots-RGB.png"/></div>
      </div>
    </div>
    
  </template>
  
  <script setup>
  import { ref, defineEmits, reactive } from "vue";

 
  const emit = defineEmits(["add-prestec", "closeModal"]);
  let material = reactive({
    ubicacio: "",
    extensio: "",
    dataout: "",
  });
  const error = ref(false);
  
  const addPrestec = () => {

    console.log("addPrectec")
    if (
      material.ubicacio.length === 0 
     //material.extensio.length === 0 
     //material.dataout.length === 0
    ) {
      error.value = true;
      return;
    }
    switch(material.ubicacio){
      case 'Unitat de cremats':
        material.extensio="3856";
        break;
      case 'Planta 1 Senars':
        material.extensio="3111";
        break;
      case 'Planta 1 Parells':
        material.extensio="3112";
        break;
      case 'Planta 2 Senars':
        material.extensio="3221";
        break;
      case 'Planta 2 Parells':
        material.extensio="3222";
        break;
      case 'Planta 3 Senars':
        material.extensio="3331";
        break;
      case 'Planta 3 Parells':
        material.extensio="3332";
        break;
      case 'Planta 4 Senars':
        material.extensio="3441";
        break;
      case 'Planta 4 Parells':
        material.extensio="3442";
        break;
      case 'Reanimacio':
        material.extensio="3131";
        break;
      case 'Tallers':
        material.extensio="5555";
        break;
        
    }
    //console.log(material)
    
    emit("add-prestec", material);
    emit("closeModal", true);
    resetPrestec();
  };
  
  const resetPrestec = () => {
    material = {
        ubicacio: "",
        extensio: "",
        dataout: "",
    };
  };
  
  const closeForm = () => {
    emit("close-modal", "form");
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
  .foot{
    margin-bottom: -20px;;
  }
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(116, 161, 243, 0.5);
    z-index: 10;
  }
  .contact-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 500px;
    background:#1713e7;
    padding: 20px;
    border-radius: 10px;
    max-height: calc(100vh - 80px);
    overflow-y: auto;
  }
  .contact-form-header button {
    position: absolute;
    top: 10px;
    right: 20px;
    background: transparent;
    border: 0;
    padding: 0;
    cursor: pointer;
  }
  .contact-form-header button img {
    width: 20px;
  }
  .contact-form-item {
    margin-bottom: 20px;
  }
  .blanco{
    color: #fff;
  }
  h2{
    color: #fff;
    margin-bottom: 10px;
    font-size: 25px;
  }
  .contact-form-item label {
    display: block;
    font-weight: bold;
    color: #fff;
    margin-bottom: 5px;
  }
  .contact-form-item input,
  .contact-form-item select,
  .contact-form-item textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    max-width: 300px;
  }
  .contact-form-item button {
    background: rgb(85, 192, 219);
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: white;

  }
  .error {
    color: red;
    margin-bottom: 20px;
  }
  </style>
  