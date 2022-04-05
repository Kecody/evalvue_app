<template>
  <div class="item">
    <ul>
      <li> {{title}}</li>
      <li> {{description}}</li>
      <li> {{text}}</li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
// const postId = route.query.postId;
const{id, title, description, text, image}= route.query;// assignation par decomposition
</script>

<style scoped>

</style>
