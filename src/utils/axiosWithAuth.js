import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL: 'http://127.0.0.1:8000/api',
        headers: {
            Authorization: token
        }
    })
}