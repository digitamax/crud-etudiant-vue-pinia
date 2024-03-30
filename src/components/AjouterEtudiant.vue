<template>
    <div>
        <h2 class="mb-3">Ajouter un étudiant</h2>
        <form>

            <div class="mb-3">
                <label for="prenom" class="form-label">Prénom</label>
                <input type="text" class="form-control" id="prenom"  v-model="prenom">
            </div>

            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input type="text" class="form-control" id="nom" v-model="nom">
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" v-model="email">
            </div>

            <div class="mb-3">
                <label for="telephone" class="form-label">Téléphone</label>
                <input type="tel" class="form-control" id="telephone" v-model="telephone" >
            </div>

            <button type="submit" class="btn btn-warning" @click="sendOrUpdate">{{action}}</button>
          </form>
    </div>
</template>

<script setup>

import {ref,  watch, computed} from "vue"
import  {useEtudiantStore} from "@/store/store"


const store = useEtudiantStore()

let idEtudiantAModifier =  computed(() => store.idEtudiantAModifier)

let prenom = ref("") 
let nom = ref("")
let email = ref("")
let telephone = ref("")

let action = computed(()=> idEtudiantAModifier.value? "Mettre à jour": "Ajouter")

watch(
    idEtudiantAModifier, 
    async () => {
    if(idEtudiantAModifier.value != null) {
        await store.getEtudiant()
        const etudiant = computed(() => store.getEtudiantInfos)
        prenom.value = etudiant.value.firstname
        nom.value = etudiant.value.lastname
        telephone.value = etudiant.value.telephone
        email.value =etudiant.value.email
    }
})

const sendOrUpdate = (e) => {
    e.preventDefault();
    try {
        if(action.value =="Mettre à jour") {
            store.modifierEtudiant(prenom.value, nom.value, email.value, telephone.value)
        } else {
            store.ajouterEtudiant(prenom.value, nom.value, email.value,telephone.value)
        }
    }
    catch (e) {
        console.log(e)
    }
    finally {
        prenom.value=""
        nom.value =""
        email.value=""
        telephone.value=""
    }
   
}


</script>

<style>
</style>