<template>
  <div class="item">
    <ul class = "card border-light">
      <img class="mb-4" :src ="urlImage"/>
      <li class ="h1 mt-2 mb-3 pb-3 px-2 border-bottom-secondary mx-2"> {{title}}</li>
      <li class ="description"> {{description}}</li>
      <li class ="longtext text-success"> {{text}}</li>
      <a href="/posts" class="btn btn-secondary mt-5 mb-2 mx-auto">Back</a>
    </ul>
 </div> 
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
// const postId = route.query.postId;

const{id, title, description, text, image}= route.query;// assignation par decomposition
const urlImage = '../assets/' + image;

//   return this.$route.go(-1);
// }
// function getImage() {
  
// }

</script>
 
<style scoped>
.description {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
.longtext {
  font-size: 1rem;
  line-height: 2;
}
</style>
