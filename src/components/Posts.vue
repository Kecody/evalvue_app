<template>
  <div class="item">
  Posts
  <ul class = "card"><!-- spreed, propage et decompacte-->
    <li v-for = "post in posts" :key="post.id"><router-link :to = "{ path:'/post/'+ post.id, query:{...post}}"
>{{post.title}}</router-link></li> <!-- passe en un objet quand on clique dessus-->
  </ul>
    
  </div>
</template>

<script setup>
import {ref} from 'vue';

const posts = ref(
  [
    { id: 1, title : "MongoDB", description : "blabla", text: "un texte plus long", image:"../assets/images/MongoDB-Logo.wine.png"},
    { id: 2, title : "MySQL", description : "blabla", text: "un texte plus long" },
    { id: 3, title : "PHP", description : "blabla", text: "un texte plus long" },
    { id: 4, title : "Pyhton", description : "blabla", text: "un texte plus long" },
    { id: 5, title : "Docker", description : "blue", text: "un texte plus long" },
]
);
</script>

<style scoped>


</style>
