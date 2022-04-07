<template>
  <div class="card border-light p-1 fade-in-fade-out">
    <h1 class ="mt-3">WELCOME</h1>
   <p>Bienvenue chez <br> <span class="text-success">VaporTechnology</span></p>
  </div>
</template>

<script setup>

</script>

<style scoped>

  .card {
    max-width: 30rem;
    height: 12rem;
  }
  a {
    color:none;
  }
  .text-success {
    font-size: 3rem;
  }
  .fade-in {
  animation-name: FadeIn;
  animation-duration: 5s;
  transition-timing-function: linear;
}
@keyframes fade-inout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.fade-in-fade-out {
  animation: fade-inout 3s infinite alternate;
}
</style>
