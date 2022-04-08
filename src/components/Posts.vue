<template>
  <div class="item">
  <ul class = "card border-light px-4 py-3 "><!-- spreed, propage et decompacte-->
    <li class="text-success my-auto mb-2" v-for = "post in posts" :key="post.id"><router-link :to = "{ path:'/post/'+ post.id, query:{...post}}"
>{{post.title}}</router-link> 
    </li> <!-- passe en un objet quand on clique dessus-->
  </ul>
    
  </div>
</template>

<script setup>
import {ref} from 'vue';

const posts = ref(
  [
    { id: 1, title : "MongoDB", description : "MongoDB est une base de données orientée documents. En clair, vous bénéficiez de la scalabilité et de la flexibilité que vous voulez, avec les fonctions d’interrogation et d’indexation qu’il vous faut.", text: "Service MongoDB hébergé dans le cloud sur AWS, Azure et Google Cloud. Déployez, exploitez et mettez à l'échelle une base de données MongoDB en quelques clics", image:"MongoDB.png"},
    { id: 2, title : "MySQL", description : "MySQL est un système de gestion de bases de données relationnelles SQL open source développé et supporté par Oracle.", text: "MySQL a été lancé à l’origine en 1995. Depuis, il a connu quelques changements de propriétaire et de gestion, avant de se retrouver chez Oracle Corporation en 2010. Alors qu’Oracle est en charge maintenant, MySQL est toujours un logiciel open source, ce qui signifie que vous pouvez l’utiliser et le modifier librement.", image :'mySQL.png' },
    { id: 3, title : "PHP", description : "PHP a permis de créer un grand nombre de sites web célèbres, comme Facebook et Wikipédia", text: "PHP (officiellement, ce sigle est un acronyme récursif pour PHP Hypertext Preprocessor) est un langage de scripts généraliste et Open Source, spécialement conçu pour le développement d'applications web. Il peut être intégré facilement au HTML. " ,image : 'PHP.png' },
    { id: 4, title : "Python", description : "Python est le langage de programmation le plus utilisé dans le domaine du Machine Learning, du Big Data et de la Data Science. Découvrez tout ce que vous savoir à son sujet : définition, avantages, cas d’usage…", text: "Python (prononcé /pi.tɔ̃/) est un langage de programmation interprété, multi-paradigme et multiplateformes. Il favorise la programmation impérative structurée, fonctionnelle et orientée objet. Il est doté d'un typage dynamique fort, d'une gestion automatique de la mémoire par ramasse-miettes et d'un système de gestion d'exceptions ; il est ainsi similaire à Perl, Ruby, Scheme, Smalltalk et Tcl. ", image : 'python.png' },
    { id: 5, title : "Docker", description : "Le logiciel « Docker » est une technologie de conteneurisation qui permet la création et l'utilisation de conteneurs Linux®.", text: "La technologie Docker utilise le noyau Linux et des fonctions de ce noyau, telles que les groupes de contrôle cgroups et les espaces de noms, pour séparer les processus afin qu'ils puissent s'exécuter de façon indépendante. Cette indépendance reflète l'objectif des conteneurs : exécuter plusieurs processus et applications séparément les uns des autres afin d'optimiser l'utilisation de votre infrastructure tout en bénéficiant du même niveau de sécurité que celui des systèmes distincts.", image : 'docker.png' },
]
);
</script>

<style scoped>


li {
  border-bottom:3px solid;
  padding :1rem ;
}

li:last-child {
border-bottom:none ;
padding:0 ;
  }
</style>
