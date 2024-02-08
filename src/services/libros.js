import axios from "axios";

const DOMINIO = "http://127.0.0.1:8000/biblioteca/";

export const getLibros = async (ordenAlfabetico=null, ordenLanzamiento=null, categoria=null) => {
    const consultas = { ordenAlfabetico, ordenLanzamiento, categoria };
    const res = await axios.get(DOMINIO + "libros", { params: consultas });
    return res.data;
}


export const addLibros = async (nuevoLibro) => {
    const res = await axios.post(DOMINIO + "libros", JSON.stringify(nuevoLibro));
    return res.data;
}


export const updateLibros = async (libro) => {
    const res = await axios.put(DOMINIO + "libros", JSON.stringify(libro));
    return res.data;
}


export const deleteLibro = async (libro) => {
    const res = await axios.delete(DOMINIO + "libros", JSON.stringify(libro));
    return res.data;
}

