import React from 'react';

export default function Header({ activeTab, setActiveTab }) {
    const tabs = [
        { id: 'home', label: 'Home' },
        { id: 'project', label: 'Projects' },
        { id: 'resume', label: 'Resume' }
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg">
            {/* py-4였던 패딩을 py-2로 줄여 상하 사이즈를 축소했습니다 */}
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

                {/* ★ 왼쪽: 내 이름 텍스트 대신 로고 이미지 배치 */}
                <div
                    className="cursor-pointer flex items-center"
                    onClick={() => setActiveTab('home')}
                >
                    <img
                        src="/images/name3.png"
                        alt="Kim Dam-hyun Logo"
                        className="h-10 w-auto object-contain transition-transform hover:scale-105"
                        // h-10(40px)으로 조절했습니다. 헤더 크기에 맞춰 숫자를 변경하세요.
                    />
                </div>

                {/* ★ 오른쪽: 네비게이션 메뉴 (버튼 패딩도 약간 줄여서 균형을 맞췄습니다) */}
                <nav className="flex items-center gap-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-1 ${
                                activeTab === tab.id
                                    ? 'bg-blue-600 text-white shadow-sm'
                                    : 'text-gray-900 hover:bg-white/40'
                            }`}
                        >
                            {tab.label}
                            {tab.id !== 'resume' && (
                                <span className="text-gray-400 font-light ml-1">/</span>
                            )}
                        </button>
                    ))}
                </nav>

            </div>
        </header>
    );
}