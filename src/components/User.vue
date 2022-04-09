<template>
  <div class="card border-light">
      <p>
      Vous êtes un nouvel utilisateur de cette super application, cool! Vous êtes au bon endroit, 
      je me présente Kévin de VaporTechnology, quel est ce nom vous me direz, moi même je ne sais pas. 
      Cette application va évolué au cour de ces années, et j'espère aura du succés. Enjoy
      </p>
      <a class="btn-sm btn-light mt-5 mb-2 mx-auto p-3 rounded" >Prêt pour l'expérience</a>
            <div class="progress mt-4">
              <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"  role="progressbar" aria-valuenow="75" aria-valuemin="50" aria-valuemax="100" style="width: 90%;"></div>
            </div>
            <!-- <div v-else-if = "load === false">
            <div class="progress mt-4">
              <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"  role="progressbar" aria-valuenow="75" aria-valuemin="50" aria-valuemax="100" style="width: 90%;"></div>
            </div>
          </div>  
          </div>   -->

        <!-- <a class="btn-sm btn-light mt-5 mb-2 mx-auto p-3 rounded" >Prêt pour l'expérience</a>
        <div v-if = "load === true">
          <div class="progress mt-4">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"  role="progressbar" aria-valuenow="75" aria-valuemin="50" aria-valuemax="100" style="width: 90%;"></div>
          </div>
        </div> -->
      <!-- <a @click="stop" class="btn-sm btn-secondary mt-5 mb-2 mx-auto p-3 rounded" >Arrêtez l'experience</a>
        <div class="progress mt-4">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"  role="progressbar" aria-valuenow="75" aria-valuemin="50" aria-valuemax="100" style="width: 0%;"></div>
        </div> -->
  </div>
</template>
<script setup>
  // import {ref} from 'vue'
  // const load = false;
  // function loading() {
  //   this.load = true
  // }
  // function stop() {
  //   this.load = false
  // }
</script>

<style scoped>
  .card {
    max-width: 30rem;
    height: auto;
    padding: 2rem;
  }
  p {
    font-size: 1.2rem;
    word-spacing: .2rem;
    line-height: 2;
  }
  .btn-sm{
    width: auto;
    padding: 1rem;
    font-size: 1.2rem;
  }
</style>
