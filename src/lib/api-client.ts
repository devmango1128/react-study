//공통 데이터 요청 함수
//axios 인스턴스를 사용해 GET 요청을 보내고, 응답 데이터를 제네릭 타입으로 반환
import axiosInstance from '@/lib/axios/instance'

/**
 * GET 요청: 데이터 조회
 * ex: const cardList = await get<CardData[]>('/data/card-data.json')
 */
//제네릭 <T>를 사용해 호출 시점에 타입을 명시할 수 있도록 함
export const get = async <T>(url: string): Promise<T> => {
    //axios.get<T>()는 응답 본문(response.data)의 타입을 T로 지정
    const res = await axiosInstance.get<T>(url)
    //실제 데이터만 반환
    return res.data
}

/**
 * POST 요청: 데이터 등록
 * ex: await post<CardData, { title: string }>('/api/card', { title: '새 카드' })
 */
export const post = async <T, D = unknown>(url: string, data: D): Promise<T> => {
    const res = await axiosInstance.post<T>(url, data)
    return res.data
}

/**
 * PUT 요청: 데이터 수정
 * ex: await put<CardData, { id: number; title: string }>('/api/card/1', { id: 1, title: '수정됨' })
 */
export const put = async <T, D = unknown>(url: string, data: D): Promise<T> => {
    const res = await axiosInstance.put<T>(url, data)
    return res.data
}

/**
 * DELETE 요청: 데이터 삭제
 * ex: await del<void>('/api/card/1')
 */
export const del = async <T>(url: string): Promise<T> => {
    const res = await axiosInstance.delete<T>(url)
    return res.data
}