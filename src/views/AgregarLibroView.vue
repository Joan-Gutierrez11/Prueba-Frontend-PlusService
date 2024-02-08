<script setup>
import axios from "axios";

</script>

<template>
    <div class="d-flex flex-column h-100 p-5 container align-items-center">
        <div class="w-75">
            <h1>Agregar Libro</h1>
            <div>
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" v-model="data_agregar.libro" class="form-control" id="nombre">
                    </div>
                    <div class="mb-3">
                        <label for="localidad" class="form-label">Localidad</label>
                        <input type="text" v-model="data_agregar.localidad" class="form-control" id="localidad">
                    </div>
                    <div class="mb-3">
                        <label for="direccion" class="form-label">Direccion</label>
                        <input type="text" v-model="data_agregar.direccion" class="form-control" id="direccion">
                    </div>
                    <div class="mb-3">
                        <label for="categoria" class="form-label">Categoria</label>
                        <input type="text" v-model="data_agregar.categoria" class="form-control" id="categoria">
                    </div>
                    <div class="mb-3">
                        <label for="fecha_lanzamiento" class="form-label">Fecha Lanzamiento</label>
                        <input type="datetime-local" v-model="data_agregar.fecha_lanzamiento" class="form-control" id="fecha_lanzamiento">
                    </div>
                    <div class="mb-3">
                        <label for="cantidad" class="form-label">Cantidad</label>
                        <input type="number" v-model="data_agregar.cantidad" class="form-control" id="cantidad">
                    </div>
                    <div class="d-flex mb-3">
                        <button type="submit" class="btn btn-primary" v-on:click="agregar()">Agregar</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" 
            aria-hidden="true" v-bind:class="{ show: mostrar, blocked: mostrar }">
            <div class="modal-dialog">
                <div class="modal-content" v-if="!eliminacion_exitosa">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Se agrego el libro con exito</h5>
                    </div>
                    <div class="modal-footer">
                        <router-link :to="{ path: '/libros' }">
                            <button type="button" class="btn btn-primary">Aceptar</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            mostrar: false,
            data_agregar: {
                libro: "",
                localidad: "",
                direccion: "",
                cantidad: 0,
                categoria: "",
                fecha_lanzamiento: null
            },
            
        };
    },
    methods: {
        async agregar(){
            const url = "http://127.0.0.1:8000/biblioteca/libros";
            const res = (await axios.post(url, this.data_agregar)).data;
            console.log(res);
            this.mostrar = true;
            document.querySelector('body').className = 'modal-open';
            document.querySelector('body').style = 'overflow: hidden; padding-right: 15px;';
        }
    }
}
</script>

<style scoped>
    .blocked{
        display: block
    }

</style>
