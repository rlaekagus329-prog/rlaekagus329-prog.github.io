import React from 'react';

export default function Home({ setActiveTab }) {
    return (
        // min-h-screen과 w-full로 모니터 끝까지 완벽한 캔버스 확보
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#f3f4f6]">

            {/* ★ 1. 배경 이미지 레이어 (화질 최적화)
          - bg-cover 대신 꽉 채우되 비율을 유지하고 중앙에 배치
          - 화질을 흐리게 만들던 필터(blur) 완벽 제거!
      */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("images/background.png")',
                }}
            >
                {/* ★ 2. 글자 가독성용 레이어 (블러 없이 밝기만 살짝 톤다운) */}
                <div className="absolute inset-0 bg-white/20 (혹은 어둡게 하려면 bg-black/10) mix-blend-overlay"></div>
            </div>

            {/* 메인 컨텐츠 영역 (텍스트에만 그림자를 강하게 줘서 선명한 배경 위에서도 잘 보이게 처리) */}
            <div className="relative z-10 max-w-4xl px-4 animate-fade-in text-gray-900">

                <p className="text-xl md:text-2xl font-extrabold text-blue-500 tracking-[0.2em] mb-4 drop-shadow-md uppercase">
                    Bridging Data and Human
                </p>

                <h1 className="text-3xl md:text-6xl font-black mb-8 leading-tight flex flex-wrap justify-center gap-x-3">
                    <span className="text-jelly-bubble">
                        FULL-STACK &
                    </span>

                    <span className="
                        text-transparent bg-clip-text
                        bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
                        animate-gradient drop-shadow-none
                    ">
                        AI DEVELOPER
                    </span>
                </h1>

                <div className="text-white text-lg md:text-xl font-bold mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] leading-relaxed">
                    <p className="mb-2">Java / Python 기반의 견고한 백엔드와 AI 기술을 자연스럽게 결합합니다.</p>
                    <p className="mb-2">전통적인 소프트웨어나 비즈니스 로직에 AI 기술을 결합하여 새로운 가치를 구축합니다.</p>
                    <p className="mb-2">사용자가 안심하고 누릴 수 있는 지속 가능한 서비스를 구축합니다.</p>
                </div>

                <button
                    onClick={() => setActiveTab('project')}
                    className="
                        px-10 py-5
                        bg-white/10 backdrop-blur-lg
                        hover:bg-white/20
                        text-white font-bold text-xl
                        rounded-full
                        border-2 border-blue-400 hover:border-blue-300 //
                        shadow-[0_0_20px_rgba(59,130,246,0.2)]
                        transition-all duration-500
                        hover:scale-105 active:scale-95
                        cursor-pointer
                    "
                >
                    <span className="text-blue-400 group-hover:text-white transition-colors">
                        프로젝트 보러가기
                    </span>
                </button>
            </div>
        </section>
    );
}