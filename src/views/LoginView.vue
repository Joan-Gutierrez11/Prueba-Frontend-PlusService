<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <div class="d-flex flex-column h-100 p-5 container align-items-center">
        <div class="w-50">
            <h1>Login</h1>
            <div>
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" v-model="email" class="form-control" id="email" placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" v-model="password" class="form-control" id="password">
                    </div>
                    <div class="d-flex mb-3">
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                </form>
                <div class="mb-3">
                    <small class="w-100">Aún no tienes cuenta registrate: </small>
                    <router-link :to="{ path: '/register' }">
                        <button type="button" class="btn btn-secondary">Registro</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async login(){
            console.log(this.email);
            console.log(this.password);
        }
    }
}

</script>

<style scoped>

</style>