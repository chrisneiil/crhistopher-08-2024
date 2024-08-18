import axios from 'axios';

const pokeApiAxiosInstance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 segundos.
});

export default pokeApiAxiosInstance;