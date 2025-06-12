import router from 'next/router'

export const handleApiError = (error: any) => {
    const status = error.response?.status

    switch (status) {
        case 401:
            router.push('/error?type=unauthorized')
            break
        case 403:
            router.push('/error?type=forbidden')
            break
        case 404:
            router.push('/error?type=not-found')
            break
        case 500:
            router.push('/error?type=server')
            break
        default:
            router.push('/error?type=unknown')
    }
}