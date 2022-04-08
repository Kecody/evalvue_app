<template>
     <div class="card border-light p-1">
           <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="data">
    Data loaded:
    <pre>{{ data }}</pre>
  </div>
  <div v-else>Loading...</div>
         <img src="" alt="">
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    
    // data un état du composant qui peut changer. Pour assigner une valeur à data  on écrit data.value ="une valeur"
    const data = ref(null)
    const error = ref(null)
    const { VUE_APP_API : url_api }  = process.env

    // requete sur un fichier JSON sur github
    // fetch est une fonction qui est présente dans le navigateur qui permet de faire des requêtes asynchrone avec une API HTTP distante
    // Then c'est resolue, la requête, et on peut chaîner avec un autre then pour moidifier la source, par exemple ici en transformant celle-ci en json. 
    // Le catch va gérer les éventuelels erreurs
    fetch( url_api )
    .then((res) => res.json())
    .then((json) => {console.log(json); return json})
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))
</script>
