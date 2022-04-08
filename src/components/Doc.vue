<template>
  <div class="card border-light">
   <li class ="mt-2 mb-2 pb-3 px-2 mx-2 ">Mise en production</li>
   <a type = "button" class="text-success" href="" target="_blank">En savoir plus</a>
   <li class ="mt-2 mb-2 pb-3 px-2 mx-2 ">MangoDB</li>
   <a  class="text-success" href="https://www.mongodb.com/fr-fr" target="_blank">En savoir plus</a>
   <li class ="mt-2 mb-2 pb-3 px-2 mx-2 ">MySQL</li>
   <a class="text-success" href="https://www.mysql.com/fr/" target="_blank">En savoir plus</a>
   <li class ="mt-2 mb-2 pb-3 px-2 mx-2">PHP</li>
   <a class="text-success"  href="https://www.php.net/manual/fr/intro-whatis.php" target="_blank">En savoir plus</a>
   <li class ="mt-2 mb-2 pb-3 px-2 mx-2" >Python</li>
   <a class="text-success" href="https://www.python.org/" target="_blank">En savoir plus</a>
   <li class ="mt-2 mb-2 pb-3 px-2 mx-2" >Docker</li>
   <a class="text-success" href="https://www.docker.com/" target="_blank">En savoir plus</a>
  </div>
</template>
<script setup>
 
</script>

<style scoped>
  .card {
    max-width: 30rem;
    height: auto;
  }
  
  li {
  font-size: 1.5rem;
  }
  a {
      font-size: 1rem;
      text-align: center;
      margin-bottom: 0.5rem;
      border-bottom: 1px solid;
      padding: 1rem;
  }  
  a:last-child {
      border-bottom: none;
      padding: 0;
  }

</style>