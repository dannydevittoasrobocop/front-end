import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        // baseURL: 'http://127.0.0.1:8000/api',
        baseURL: 'https://robocop-cs-buildweek.herokuapp.com/api',
        headers: {
            Authorization: `Token ${token}`
        }
    })
}
