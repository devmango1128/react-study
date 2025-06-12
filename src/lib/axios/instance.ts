import { useLoadingStore } from '@/stores/loadingStore'
import axios from 'axios'

// axios 인스턴스 생성
const axiosInstance = axios.create({ baseURL: '/', timeout: 5000 })

export const attachInterceptors = (
    store: typeof useLoadingStore,
    onErrorRedirect: (status: number) => void
) => {
    axiosInstance.interceptors.request.use(config => {
        store.getState().setLoading(true)
        return config
    })

    axiosInstance.interceptors.response.use(
        res => {
            store.getState().setLoading(false)
            return res
        },
        err => {
            store.getState().setLoading(false)

            const status = err?.response?.status
            if (status) onErrorRedirect(status)

            return Promise.reject(err)
        }
    )
}

export default axiosInstance