import axiosInstance from './axios/instance'

export const fetcher = async <T>(url: string): Promise<T> => {
    const res = await axiosInstance.get<T>(url)
    return res.data
}