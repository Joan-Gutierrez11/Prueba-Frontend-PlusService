<script setup>
import axios from "axios";

</script>

<template>
    <div class="d-flex flex-column h-100 p-5 container align-items-center">
        <div class="w-100">
            <div class="d-flex justify-content-between">
                <h1>Libros</h1>
                <router-link :to="{ path: '/libros/agregar' }">
                    <button type="button" class="btn btn-secondary">Agregar Libro</button>
                </router-link>
            </div>
            <div class="mt-4">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Localidad</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="libro in libros" v-bind:key="libro.id">
                            <th scope="row">{{ libro.id }}</th>
                            <td>{{ libro.libro }}</td>
                            <td>{{ libro.localidad }}</td>
                            <td>{{ libro.direccion }}</td>
                            <td>
                                <div class="d-flex justify-content-center">
                                    <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" 
                                        data-bs-target="#exampleModal" v-on:click="libro_borrar = libro">
                                        Borrar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li v-for="p in paginacion" v-bind:key="p.label" class="page-item" 
                        v-bind:class="{ active: p.active, disabled:p.url == null }"
                        v-on:click.prevent="loadLibros(p.url)">
                        <a class="page-link" href="#">{{ p.label }}</a>
                    </li>
                </ul>
            </nav>
        </div>
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" v-if="!eliminacion_exitosa">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Estas seguro en borrar el libro con id {{ libro_borrar.id }} </h5>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary" v-on:click="borrarLibro(libro_borrar.id)">Borrar</button>
                    </div>
                </div>
                <div class="modal-content" v-if="eliminacion_exitosa">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Se borro con exito el libro</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                            v-on:click="eliminacion_exitosa = false">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            libros: [],
            paginacion: [],
            orden_alfab: 'asc',
            orden_fecha: 'asc',
            categoria: '',
            eliminacion_exitosa: false,
            libro_borrar: {
                id: 0,
                nombre: "",
                localidad: "",
                direccion: "",
                cantidad: 0
            }
        }
    },
    async mounted(){
        this.loadLibros("http://127.0.0.1:8000/biblioteca/libros");
    },
    methods: {
        async loadLibros(url){
            const res = (await axios.get(url)).data;
            this.libros = res.data;
            this.paginacion = res.links;
        },
        async borrarLibro(id){
            // eslint-disable-next-line no-unused-vars
            const res = (await axios.delete(`http://127.0.0.1:8000/biblioteca/libros/${id}`)).data;
            this.eliminacion_exitosa = true;
            this.libro_borrar = { id: 0, nombre: "", localidad: "", direccion: "", cantidad: 0 };
            this.loadLibros("http://127.0.0.1:8000/biblioteca/libros");
        },
    }

}

</script>
