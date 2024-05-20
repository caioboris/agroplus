import axios from 'axios';

const api = axios.create({
    baseURL:"https://api.agroplus.com.br"
});

export default api;