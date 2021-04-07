import axios from 'axios';

const baseUrl = 'http://localhost:8000/api'

export async function get(url) {
    const response = await axios.get(`${baseUrl}${url}`);

    return response.data;
}