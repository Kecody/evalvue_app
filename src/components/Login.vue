<template>
    <form @submit="checkForm" v-if="submit != ''">
        <input v-model="email" placeholder="Email" required />
        <input v-model="password" placeholder="Mot de Passe" required  />
        <p></p>
        <button>Ok</button>
    </form>
</template>

<script>
 export default {
     data() {
         return {
             email:"",
             password:""
         }
     },
     methods: {
         submit(){ this.$emit("submit",{
             email: this.email,
             password: this.password,
            })   
        }
    },
 };

</script>

<style scoped>

</style>
