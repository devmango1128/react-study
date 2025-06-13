import { useLoadingStore } from '@/stores/loadingStore'
import axios from 'axios'

// axios 인스턴스 생성
const axiosInstance = axios.create({
    baseURL: '/', // 기본 요청 URL (상대 경로)
    timeout: 5000  // 요청 제한 시간 5초
})

/**
 * 요청과 응답에 인터셉터(중간 처리기)를 붙이는 함수
 *
 * @param store - zustand 상태를 받아서 로딩 상태 관리
 * @param onErrorRedirect - 에러 상태 코드(예: 401, 404)에 따라 리디렉션 처리 함수
 */
export const attachInterceptors = (
    store: typeof useLoadingStore,
    onErrorRedirect: (status: number) => void
) => {
    //요청 인터셉터: 요청 전에 로딩 시작 처리
    axiosInstance.interceptors.request.use(config => {
        store.getState().setLoading(true)
        return config
    })

    //응답 인터셉터: 응답 수신 시 로딩 종료 처리
    axiosInstance.interceptors.response.use(
        res => {
            store.getState().setLoading(false)
            return res
        },
        err => {
            store.getState().setLoading(false)

            // 에러 응답에 상태 코드가 있을 경우
            const status = err?.response?.status
            if (status) onErrorRedirect(status) // 상태 코드에 따른 리디렉션 실행

            // 에러를 다시 던져서 후속에서 catch 가능하게 함
            return Promise.reject(err)
        }
    )
}

export default axiosInstance