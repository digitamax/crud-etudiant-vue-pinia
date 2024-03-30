<template>

  <div class="container">
    <div class="row">
      <h1 class="text-warning mb-5 mt-5 center">Application étudiants </h1>
    </div>
    <div class="row">
      <div class="col-md-4">
        <AjouterEtudiant />
      </div>

      <div class="col-md-8">
        <ListeEtudiants/>
      </div>
    </div>

  </div>

</template>

<script setup>

import AjouterEtudiant from './components/AjouterEtudiant.vue';
import ListeEtudiants from './components/ListeEtudiants.vue';


</script>

<style scoped>

</style>
