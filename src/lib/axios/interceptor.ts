import axiosInstance from './instance'
import { handleApiError } from '../error/handleApiError'
import { useUiStore } from '@/stores/uiStore'

axiosInstance.interceptors.request.use(
    (config) => {
        useUiStore.getState().startLoading()
        //TODO. 필요하면 여기에 JWT 토큰 추가
        return config
    },
    (error) => {
        useUiStore.getState().endLoading()
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        useUiStore.getState().endLoading()
        return response
    },
    (error) => {
        useUiStore.getState().endLoading()
        handleApiError(error)
        return Promise.reject(error)
    }
)