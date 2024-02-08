import axios from "axios";

const ENDPOINT_PATH = "https://localhost:3000/biblioteca/";

export default {
    login(email, password){
        const credentials = {email, password};
        return axios.post(ENDPOINT_PATH + "login", credentials);
    },

    register(name, email, password, confirmar_password){
        const credentials = {name, email, password, confirmar_password};
        return axios.post(ENDPOINT_PATH + "registro", credentials);
    }
}