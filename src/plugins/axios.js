import axios from "axios";

const instance = axios.create({
    baseURL: 'https://www.omdbapi.com/?apikey=c90274af'
})

export default instance;