import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: '/',
    timeout: 5000,
    withCredentials: true,
})

export default axiosInstance