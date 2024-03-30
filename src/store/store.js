import { defineStore } from 'pinia'
import axios from 'axios'


const config = {
    headers: {
        "Content-Type": "application/json",
    }
}


export const useEtudiantStore = defineStore('etudiants', {
  
    state: () => ({
          etudiantList: [],
          idEtudiantAModifier: null,
          etudiant:{},
      }),

      getters:{
         getListEtudiants(state){
            return  state.etudiantList
        },
        getEtudiantInfos(state){
            return state.etudiant
        }
      },

      actions: {

        async getEtudiants()  {
            try{
                const data = await axios.get("http://localhost:8080/api/etudiants")
                this.etudiantList = data.data
            } catch(e){
                console.log(e)
            }
            
        },
        async getEtudiant() {
            try{
                const data = await axios.get(`http://localhost:8080/api/etudiants/${this.idEtudiantAModifier}`)
                this.etudiant = data.data
            } catch(e){
                console.log(e)
            }

        },

        async ajouterEtudiant(prenom, nom, email, telephone) {
            try{
                const response = await axios.post("http://localhost:8080/api/etudiants", {
                    "firstname": prenom,
                    "lastname": nom,
                    "telephone": telephone,
                    "email": email
                }, config)
               
            } 
            catch(e){
                console.log(e)
            } 
            finally {
                this.getEtudiants()
            }
        },

        async modifierEtudiant(prenom, nom, email, telephone) {
            try{
                const response = await axios.put(`http://localhost:8080/api/etudiants/${this.idEtudiantAModifier}`, {
                    "firstname": prenom,
                    "lastname": nom,
                    "telephone": telephone,
                    "email": email,
                })
            } 
            catch(e){
                console.log(e)
            } 
            finally {
                this.getEtudiants()
                this.etudiant = {}
                this.idEtudiantAModifier = null
            }
        },

        async deleteEtudiant(id){
            try{
                const response = await axios.delete(`http://localhost:8080/api/etudiants/${id}`)
            } 
            catch(e){
                console.log(e)
            } 
            finally {
                this.getEtudiants()
            }
        },

      }

})