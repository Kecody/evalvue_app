<template>
  <div class="item">
    <ul>
      <li> {{route.query.postTitle}}</li>
      <li> {{route.query.postDescription}}</li>
      <li> {{route.query.postText}}</li>
    </ul>
  </div>
</template>

<script setup>

import { useRoute } from 'vue-router';

const route = useRoute();
const postId = route.query.postId;

</script>

<style scoped>

</style>
