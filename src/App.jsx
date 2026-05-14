import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects.jsx';
import Resume from './pages/Resume/Resume';

function App() {
    const [activeTab, setActiveTab] = useState('home');

    return (
        // 전체 레이아웃에서 불필요한 배경색과 여백을 최소화
        <div className="min-h-screen flex flex-col font-sans text-gray-900">
            <div className="fixed top-0 left-0 w-full z-50">
                <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* ★ 핵심 해결책: 조건부 스타일링
          activeTab이 'home'일 때는 여백(p-6)과 너비 제한(max-w-5xl)을 싹 없애서 꽉 채움!
      */}
            <main className={`flex-1 w-full flex flex-col ${
                activeTab === 'home'
                    ? '' // 홈 화면: 헤더와 겹치게 그대로 둠 (Edge-to-Edge)
                    : 'pt-24 p-4 sm:p-6 max-w-7xl mx-auto items-center justify-center' // ★ 홈이 아닐 땐 상단 여백 pt-24 추가!
            }`}>

                {/* 1. 홈 화면 */}
                {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}

                {/* 2. 프로젝트 화면 (임시) */}
                {activeTab === 'project' && <Projects />}

                {/* 3. 이력서 화면 (임시) */}
                {activeTab === 'resume' && <Resume/>}

            </main>
        </div>
    );
}

export default App;