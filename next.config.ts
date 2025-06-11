import type { NextConfig } from "next"

// Next.js 설정 객체 타입 지정
const nextConfig: NextConfig = {
    // React의 엄격 모드 활성화 (개발 중에 더 많은 경고 및 오류 감지)
    reactStrictMode: true,
    // 외부 이미지 도메인을 허용하는 설정
    images: {
        remotePatterns: [], // 현재는 허용된 외부 이미지 패턴이 없음
    },
    // 컴파일러 관련 설정
    compiler: {
        styledComponents: true // styled-components 사용 시 SSR을 위한 설정 활성화 (자동으로 스타일 태그 최적화)
    },
    // 사용자 정의 rewrite 규칙: 클라이언트 요청을 백엔드 서버로 프록시 처리
    async rewrites() {
        return [
            {
                // 모든 경로에 대해 프록시 설정
                source: '/:path*', // 클라이언트가 요청하는 경로 패턴
                destination: 'http://localhost:8686/api/:path*', // 백엔드 서버로 요청 전달
            }
        ]
    }
}
// 설정 객체를 export (Next.js가 이 설정을 인식함)
export default nextConfig