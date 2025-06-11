'use client'
// ✅ 이 컴포넌트는 클라이언트 컴포넌트임을 명시
// Next.js 13+에서는 기본적으로 서버 컴포넌트이므로
// 이벤트 핸들링 등 *클라이언트 기능*을 쓰려면 *반드시 선언*해야 함

export default function Header() {
    return (
        // ✅ <header> : 시멘틱 태그로 문서의 헤더 영역을 나타냄
        // 전체 가로 너비를 채우고, 배경색/패딩/테두리 스타일 적용
        <header className="w-full bg-gray-950 px-6 py-4 border-b border-gray-300">
            <h1 className="text-xl font-bold text-gray-50">React Study</h1>
            <p className="text-sm text-gray-400">React 학습하기</p>
            <p className="text-sm text-gray-600">by sean</p>
        </header>
    )
}