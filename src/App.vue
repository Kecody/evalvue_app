<script setup>
import { RouterLink, RouterView } from 'vue-router';


</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

  <div class="wrapper">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      <a class="navbar-brand text-primary" href="#">VaporTechnology</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <RouterLink class="mx-3" to="/">Home</RouterLink>
            <span class="visually-hidden">(current)</span>
        </li>
        <li class="nav-item">
          <RouterLink  class="mx-3 border-bottom-1px" to="/posts">Posts</RouterLink>
        </li>
        <li class="nav-item ">
          <RouterLink class="mx-3" to="/user">User</RouterLink>
        </li>
	      <li class="nav-item ">
          <RouterLink  class="mx-3" to="/login">Login</RouterLink>
        </li> 
        <li class="nav-item ">
          <RouterLink  class="mx-3" to="/doc">Doc</RouterLink>
        </li>
        <li class="nav-item ">
          <RouterLink  class="mx-3" to="/iceberg">Iceberg</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav> 
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';
/* @import '@/assets/style.css'; */ 
@import '@/assets/bootstrap.min.css';


a {
  font-size:  2rem;
  text-decoration: none;
}
nav a {
  color: white;
}
.navbar-brand {
  font-size: 3rem;
}

.card {
margin: 5rem auto 2rem ;
text-align: center;
padding:2rem;
width: 30rem;
}

.loginbtn {
  max-width: 4rem;
  margin: auto;
}

.btn {
  max-width: 5rem;
}

li {
  list-style-type: none;
  white-space: inherit;
}
.border-bottom-secondary {
  border-bottom:2px solid;
  margin: 0 auto 2rem;
}


/* #app {
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
} */
</style>
