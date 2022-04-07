<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      
      <nav class="h">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/posts">Posts</RouterLink>
        <RouterLink to="/user">User</RouterLink>

      </nav>
    </div>
    
  </header>

  <RouterView />
</template>


<style scoped>
@import 'bootswatch/dist/cosmo/bootstrap.min.css';
  
</style>
