<template>
    <div class="search">
      <div class="search-wrapper input-group">
        <input type="text" v-model="search" placeholder="Cerca el material"/>
        <!-- <label for="">Cerca el  material</label> -->
        <button class="clear" v-if="search.length" @click="clearSearch">
          Esborrar
        </button>
      </div>
      <!-- <button @click="showForm">Add a new recipe</button> -->
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits, watch } from "vue";
  const search = ref("");
  const emit = defineEmits(["show-form", "search"]);
 /* const showForm = () => {
    emit("show-form");
  };
  */
  const clearSearch = () => {
    search.value = "";
  };
  watch(search, (value) => {
    emit("search", value);
  });
  </script>
  <style scoped>
  .input-group {
  position: relative;
}
  .search {
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 25px;
    margin-top: -10px;
    justify-content: space-between;
  }
  .search input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: white;
    font-size: 16px;
    margin: 0 auto;
    max-width: 500px;
    width: 500px;
    border-radius: 10px;
    transition:  150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .search button {
    margin-left: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    background: blue;
    color: #fff;
  }

  label{
    position: absolute;
    left:30px;
    margin-top:-5px;
    pointer-events: none;
    transform: translateY(1rem);
    transition: 150ms cubic-bezier(0.4, 0, 0,2, 1);
  }
  input:focus{
    outline: none;
    border: 1.5px solid blue;
  }
  /*input:focus ~ label{
    transform:  translateY(-50%) scale(0.8);
    padding: 0 0.2rem;
    color: blue;
  }*/
  </style>
  