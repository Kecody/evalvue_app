<template>
    <form @submit="checkForm" class = "card border-light p-1">
        <input class="form-control mt-4 mb-3 mx-auto" type="text" v-model="email" placeholder="Email" required />
        <input class="form-control my-3 mx-auto" type="text" placeholder="Password" v-model="password" required  />
        <p></p>
        <button type="button" class="btn btn-success mt-3 mb-4 mx-auto">LOGIN</button>
    </form>
</template>

<script>//envoie la methods submit à l'élément parent et la récupère dans l'élément template de l'enfant
 export default {
     data() {
         return {
             email:"",
             password:""
         }
     },
     methods: {//créer un evenement personnalisé
         submit(){ this.$emit("submit",{
             email: this.email,
             password: this.password,
            })   
        }
    },
 };

</script>


<style scoped>
/*style scoped propre a la page*/
    form {
        max-width: 25rem;
        max-height: 50vh;
    }
    input {
        max-width: 20rem;
    }
</style>
