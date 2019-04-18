import axios from 'axios';

const api = axios.create({
    baseURL:'https://app01-backend.herokuapp.com',
});

export default api;