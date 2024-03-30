<template>
    <div>
        <h2 class="mb-3">Liste des étudiants</h2>
        <table class="table table-striped" v-if="etudiants.length>0">
            <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Prénom</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Email</th>
                  <th scope="col">Téléphone</th>
                  <th colspan="2" class="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="etudiant in etudiants">
                    <th scope="row">{{etudiant.id}}</th>
                    <td>{{etudiant.firstname}}</td>
                    <td>{{etudiant.lastname}}</td>
                    <td>{{etudiant.email}}</td>
                    <td>{{etudiant.telephone}}</td>
                    <td><button class="btn btn-warning" @click="modifierEtudiant(etudiant.id)">Modifier</button></td>
                    <td><button class="btn btn-danger" @click="deleteEtudiant(etudiant.id)">Supprimer</button></td>
                  </tr>
            </tbody>
        </table>
        <div class="text-center mt-5" v-else>
            <p>Pas d'étudiants disponible... </p>
        </div>
        
    </div>
</template>

<script setup>

  import  {useEtudiantStore} from "@/store/store"
  import { computed, onMounted } from 'vue'

  const store = useEtudiantStore()
  
  onMounted(() => {
    store.getEtudiants()
  })
  
  const etudiants = computed(() => store.getListEtudiants)

  const deleteEtudiant = (id) => store.deleteEtudiant(id)
  const modifierEtudiant = (id) => {
    store.idEtudiantAModifier = id
  }

</script>

<style>
</style>