<script setup>

</script>

<template>
    <div class="d-flex flex-column h-100 p-5 container align-items-center">
        <div class="w-50">
            <h1>Regsitro</h1>
            <div>
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" v-model="nombre" class="form-control" id="nombre">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" v-model="email" class="form-control" id="email" placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" v-model="password" class="form-control" id="password">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Confirmar Password</label>
                        <input type="password" v-model="password" class="form-control" id="password">
                    </div>
                    <div class="d-flex mb-3">
                        <button type="submit" class="btn btn-primary">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

</style>