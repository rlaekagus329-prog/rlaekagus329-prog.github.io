import React, { useState } from 'react';

export default function Resume() {
    // 상단 네비게이션 탭 상태 관리
    const [activeTab, setActiveTab] = useState('all');

    const tabs = [
        { id: 'all', label: '전체 보기' },
        { id: 'summary', label: '핵심 요약' },
        { id: 'skills', label: '기술 스택' },
        { id: 'experience', label: '경력 및 학력' },
        { id: 'projects', label: '프로젝트 요약' },
        { id: 'coverletter', label: '상세 기술서' },
    ];

    return (
        // ★ 1. Home, Projects와 동일한 전체 화면 배경 컨테이너
        <section className="relative w-full min-h-screen pt-24 pb-12 overflow-hidden flex flex-col items-center">

            {/* ★ 배경 이미지 레이어 */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat fixed"
                style={{ backgroundImage: 'url("/images/background.png")' }}
            ></div>

            {/* 메인 컨텐츠 영역 */}
            <div className="relative z-10 w-full max-w-5xl px-4 space-y-12">

                {/* ========================================== */}
                {/* 1. 프로필 헤더 섹션 (글래스모피즘 적용) */}
                {/* ========================================== */}
                <header className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 overflow-hidden p-8 md:p-10
                   bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-blue-300 rounded-[2rem]
                   shadow-[-1px_-1px_1px_rgba(255,255,255,0.8),_1px_1px_1px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500">
                    {/* 카드 좌측 포인트 컬러 바 */}
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500"></div>

                    {/* ★ 좌측: 증명사진 + 이름 및 기본 정보 통합 래퍼 */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pl-2 w-full md:w-auto">

                        {/* ★ 추가된 증명사진 영역 (비율 고정, 둥근 테두리, 그림자 적용) */}
                        <div className="relative shrink-0 w-28 h-32 sm:w-32 sm:h-36 rounded-2xl overflow-hidden border-2 border-white/40 shadow-md bg-white/20 flex items-center justify-center">
                            <img
                                src="/images/profile.png" // ★ 실제 사진 파일 경로로 변경해 주세요 (예: public/images/profile.jpg)
                                alt="김담현 증명사진"
                                className="w-full h-full object-cover"
                                // 이미지가 없을 때 깨진 아이콘 대신 깔끔하게 보이도록 기본 배경색을 주었습니다.
                            />
                        </div>

                        {/* 이름 및 타이틀 정보 (사진 우측에 배치) */}
                        <div className="flex flex-col justify-center h-full text-center sm:text-left mt-2 sm:mt-0">
                            <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                                <span className="px-3 py-1 bg-white/60 border border-blue-200 rounded-full text-[11px] text-blue-800 font-bold shadow-sm">
                                    신입
                                </span>
                                <span className="text-xs md:text-sm text-zinc-800 font-bold tracking-wide">남, 1991 (35세)</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-black tracking-tight flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient drop-shadow-none">
                                    김담현
                                </span>
                                <span className="text-base sm:text-lg font-bold text-zinc-800">| Full-Stack AI Developer</span>
                            </h1>
                        </div>
                    </div>

                    {/* 연락처 및 링크 정보 (우측 정렬 유지) */}
                    <div className="flex flex-col gap-2.5 text-xs md:text-sm text-zinc-800 font-semibold border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 w-full md:w-auto">
                        <div className="flex items-center gap-2.5">
                            <span className="text-blue-500 font-bold shrink-0">✉</span>
                            <a href="mailto:rlaekagus329@gmail.com" className="hover:text-blue-600 transition-colors break-all">
                                rlaekagus329@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <span className="text-blue-500 font-bold shrink-0">☎</span>
                            <span>010-5362-2977</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <span className="text-blue-500 font-bold shrink-0">⌂</span>
                            <span className="truncate">(16817) 경기 용인시 수지구 신봉2로</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 pt-2">
                            <a
                                href="https://rlaekagus329-prog.github.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 bg-white/60 border border-blue-200 rounded-full text-[11px] text-blue-800 font-bold shadow-sm hover:bg-white/80 transition-all flex items-center gap-1 no-underline"
                            >
                                <span>🔗</span> GitHub Pages
                            </a>
                            <a
                                href="https://drive.google.com/drive/folders/1bDrn5di5T7L1SQgJAhDAzeA2HJGHj5d7?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 bg-white/60 border border-blue-200 rounded-full text-[11px] text-blue-800 font-bold shadow-sm hover:bg-white/80 transition-all flex items-center gap-1 no-underline"
                            >
                                <span>📁</span> 포트폴리오 문서
                            </a>
                        </div>
                    </div>
                </header>

                {/* ========================================== */}
                {/* 탭 네비게이션 바 (글래스모피즘 버튼 튜닝) */}
                {/* ========================================== */}
                <div className="flex justify-center">
                    <nav className="flex gap-2 overflow-x-auto p-1.5 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full shadow-lg max-w-full scrollbar-hide">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                                    activeTab === tab.id
                                        ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white shadow-md'
                                        : 'text-zinc-800 hover:bg-white/40'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* ========================================== */}
                {/* 2. 타이틀 및 간략 소개 섹션 */}
                {/* ========================================== */}
                {(activeTab === 'all' || activeTab === 'summary') && (
                    <section className="relative overflow-hidden p-8 md:p-10 bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-blue-300 rounded-[2rem] shadow-[-1px_-1px_1px_rgba(255,255,255,0.8),_1px_1px_1px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500 animate-fade-in">
                        <div className="border-b border-white/10 pb-4 mb-6">
                            <span className="text-blue-500 font-extrabold text-xs tracking-wider uppercase drop-shadow-sm">
                                Brief Introduction
                            </span>
                            <h2 className="text-xl sm:text-2xl font-black text-zinc-800 mt-1.5 tracking-tight">
                                프론트엔드부터 AI 파이프라인 통합까지, 시스템의 흐름을 제어하는 Full-Stack AI 엔지니어
                            </h2>
                        </div>
                        <div className="space-y-4 text-zinc-800 font-semibold text-xs md:text-sm leading-relaxed break-keep">
                            <p>
                                데이터의 효율성과 예측 정확도를 고민하며 이상 거래 탐지 프로젝트에서 <strong>XGBoost와 SHAP을 활용해 설명 가능한 AI 서비스</strong>를 구축한 경험이 있습니다. 최근에는 이를 넘어 LLM(대형 언어 모델)과 벡터 데이터베이스(pgvector)를 결합한 <strong>RAG(검색 증강 생성) 기반 AI 질의응답 시스템</strong>을 독자적으로 구축하며 AI 파이프라인 설계 역량을 크게 확장했습니다.
                            </p>
                            <p>
                                단순히 AI API를 호출하는 것에 그치지 않고, 시스템의 안정성과 정확도를 높이는 데 집중합니다. 딥러닝 기반 감정 분석에 기업 도메인에 맞춘 <strong>Rule-based 제어를 결합한 하이브리드 NLP 아키텍처</strong>를 설계해 AI의 환각(Hallucination) 현상을 통제했습니다. 또한, React - Spring Boot - Flask로 역할을 분리한 다중 서버 분산 아키텍처를 구축하고, 멀티테넌트 환경에서의 데이터 격리와 비동기 통신 간의 동시성 문제 등 복잡한 트러블슈팅을 주도적으로 해결했습니다.
                            </p>
                            <p className="bg-white/40 p-4 rounded-2xl border border-white/20 text-zinc-800 font-bold shadow-inner">
                                💡 시스템이 복잡해질수록 협업과 소통의 가치는 더욱 빛난다고 믿습니다. 유연한 사고방식으로 팀의 합의점을 도출하는 데 능숙하며, 이기종 스택이 얽힌 환경에서도 적극적인 경청과 명확한 의사표현으로 오해 없는 업무 환경을 만드는 <span className="text-blue-600 font-black">'함께 일하고 싶은 동료'</span>입니다.
                            </p>
                        </div>

                        {/* 핵심 역량 목록 */}
                        <div className="pt-6 mt-6 border-t border-white/10">
                            <h3 className="text-xs font-extrabold text-blue-500 uppercase tracking-wider mb-4">
                                핵심 역량 (Core Competencies)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {[
                                    "벡터 DB와 LLM을 연동한 RAG 파이프라인 구축 및 AI 오케스트레이션 설계",
                                    "Rule-Engine과 ML 모델을 결합한 하이브리드 로직 정밀 제어",
                                    "React - Spring Boot - FastAPI AI 연동 풀스택 아키텍처 구축",
                                    "데이터-드리븐 사고 기반의 체계적인 전처리 설계로 ML·LLM 모델 성능 극대화",
                                    "프롬프트 엔지니어링 및 캐싱 전략을 통한 LLM 응답 지연 최소화 및 토큰 절감",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-2.5 bg-white/40 p-3.5 rounded-xl border border-white/20 shadow-xs">
                                        <span className="text-blue-600 font-bold shrink-0 mt-0.5">✔</span>
                                        <span className="text-xs md:text-sm text-zinc-800 font-bold leading-snug">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ========================================== */}
                {/* 3. 나의 스킬 (기술 스택) 섹션 */}
                {/* ========================================== */}
                {(activeTab === 'all' || activeTab === 'skills') && (
                    <section className="relative overflow-hidden p-8 md:p-10 bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-blue-300 rounded-[2rem] shadow-[-1px_-1px_1px_rgba(255,255,255,0.8),_1px_1px_1px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500 animate-fade-in">
                        <div className="border-b border-white/10 pb-4 mb-8">
                            <span className="text-blue-500 font-extrabold text-xs tracking-wider uppercase drop-shadow-sm">
                                Tech Stack
                            </span>
                            <h2 className="text-2xl md:text-3xl font-black mt-1.5 tracking-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient drop-shadow-none">
                                    나의 스킬
                                </span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Languages & Web",
                                    skills: ['Java', 'JavaScript', 'Python', 'SQL', 'JSP', 'HTML5', 'CSS3']
                                },
                                {
                                    title: "Frameworks & Libraries",
                                    skills: ['Spring Boot', 'Spring Framework', 'Flask', 'FastAPI', 'React', 'Vue.js', 'jQuery', 'Streamlit']
                                },
                                {
                                    title: "AI / ML / Data Science",
                                    skills: ['LLM', 'LangChain', 'LangGraph', 'PyTorch', 'TensorFlow', 'XGBoost', 'LightGBM', 'Random Forest', 'SHAP', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
                                },
                                {
                                    title: "Database & DevOps & Tools",
                                    skills: ['Oracle', 'MySQL', 'MariaDB', 'PostgreSQL', 'pgvector', 'Git', 'GitHub', 'Docker', 'Docker Compose', 'WSL', 'Jira', 'Slack', 'Notion']
                                }
                            ].map((group) => (
                                <div key={group.title} className="space-y-3">
                                    <h3 className="text-blue-300 font-extrabold text-xs tracking-wider uppercase">
                                        {group.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {group.skills.map((skill) => (
                                            <span key={skill} className="px-3 py-1 bg-white/60 border border-blue-200 rounded-full text-[11px] text-blue-800 font-bold shadow-sm">
                                                #{skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* 아키텍처 및 패턴 */}
                            <div className="md:col-span-2 space-y-3 pt-4 border-t border-white/10">
                                <h3 className="text-blue-300 font-extrabold text-xs tracking-wider uppercase">
                                    Architecture & Patterns
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {['MVC Pattern', 'Rule Engine', 'RAG (Retrieval-Augmented Generation)', 'Microservices Architecture 관점 분리'].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-white/60 border border-blue-200 rounded-full text-[11px] text-blue-800 font-bold shadow-sm">
                                            #{skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ========================================== */}
                {/* 4. 경력 및 학력 / 자격사항 섹션 */}
                {/* ========================================== */}
                {(activeTab === 'all' || activeTab === 'experience') && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">

                        {/* 경력 (2열 차지) */}
                        <section className="lg:col-span-2 relative overflow-hidden p-8 bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-blue-300 rounded-[2rem] shadow-[-1px_-1px_1px_rgba(255,255,255,0.8),_1px_1px_1px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
                            <div>
                                <div className="border-b border-white/10 pb-4 mb-6 flex justify-between items-end">
                                    <div>
                                        <span className="text-blue-500 font-extrabold text-xs tracking-wider uppercase drop-shadow-sm">Work Experience</span>
                                        <h2 className="text-xl sm:text-2xl font-black text-zinc-800 mt-1.5 tracking-tight">경력 사항</h2>
                                    </div>
                                    <span className="px-3 py-1 bg-white/60 border border-blue-200 rounded-full text-[11px] text-blue-800 font-bold shadow-sm">
                                        총 4년 1개월
                                    </span>
                                </div>

                                <div className="space-y-6 relative border-l-2 border-blue-300/40 ml-2 pl-6">
                                    {[
                                        {
                                            company: "유지트PC수지본점",
                                            role: "매니저 / 홀매니저",
                                            period: "2023.10 - 2024.07 (10개월)",
                                            task: "매장안에 모든일(이벤트기획부터 발주, 회계, 기계관리) 총괄책임자",
                                        },
                                        {
                                            company: "베스트골프",
                                            role: "온라인팀 과장/팀장 · 마케팅기획",
                                            period: "2020.02 - 2022.01 (2년)",
                                            task: "온라인 홍보 및 판매유도, 온라인 광고낙찰, 쇼핑몰사이트 편리성개선, 사이트 디자인개선, 판매 제품 확보, 판매전략 기획",
                                        },
                                        {
                                            company: "브이케이티 (VKT)",
                                            role: "cs엔지니어팀 사원/팀원 · 기계수리",
                                            period: "2018.04 - 2019.06 (1년 3개월)",
                                            task: "반도체 etching장비 유지보수 및 설비 수리 업무",
                                        },
                                    ].map((exp, idx) => (
                                        <div key={idx} className="relative group">
                                            {/* 타임라인 노드 점 */}
                                            <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-white border-2 border-blue-500 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                                                <h3 className="text-base font-black text-zinc-800">{exp.company}</h3>
                                                <span className="text-[11px] font-extrabold text-blue-700 bg-white/60 border border-blue-100 px-2 py-0.5 rounded-md">
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <div className="text-xs md:text-sm font-bold text-blue-600 mb-1.5">{exp.role}</div>
                                            <p className="text-xs md:text-sm text-zinc-800 font-semibold leading-relaxed bg-white/40 p-3 rounded-xl border border-white/20 shadow-xs">
                                                {exp.task}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 병역 사항 */}
                            <div className="pt-4 mt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs md:text-sm text-zinc-800 bg-white/40 p-4 rounded-2xl border border-white/20 shadow-inner gap-2">
                                <span className="font-extrabold text-blue-600">🛡 병역 사항</span>
                                <span className="font-bold text-zinc-800">군필 | 육군/병장 만기전역 (2012.08 - 2014.05)</span>
                            </div>
                        </section>

                        {/* 학력 및 자격/어학 (1열 차지) */}
                        <div className="space-y-8">
                            {/* 학력 */}
                            <section className="relative overflow-hidden p-8 bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-blue-300 rounded-[2rem] shadow-[-1px_-1px_1px_rgba(255,255,255,0.8),_1px_1px_1px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500">
                                <div className="border-b border-white/10 pb-3 mb-4">
                                    <span className="text-blue-500 font-extrabold text-xs tracking-wider uppercase drop-shadow-sm">Education</span>
                                    <h2 className="text-xl font-black text-zinc-800 mt-1.5 tracking-tight">학력 사항</h2>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-blue-400 font-extrabold">
                                        <span>2010.03 - 2016.02</span>
                                        <span>경기 | 주간</span>
                                    </div>
                                    <h3 className="text-base font-black text-zinc-800">명지대학교(자연) <span className="text-xs font-bold text-zinc-600">4년제</span></h3>
                                    <div className="flex justify-between items-center pt-1 border-t border-white/10">
                                        <span className="text-xs md:text-sm font-bold text-zinc-800">신소재공학과 <span className="text-[11px] font-extrabold px-1.5 py-0.5 bg-white/60 border border-blue-200 rounded-md">수료</span></span>
                                        <span className="text-[11px] font-extrabold text-blue-800 bg-white/60 border border-blue-200 px-2 py-0.5 rounded-full shadow-sm">학점 3.57 / 4.5</span>
                                    </div>
                                </div>
                            </section>

                            {/* 자격 및 어학 */}
                            <section className="relative overflow-hidden p-8 bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-blue-300 rounded-[2rem] shadow-[-1px_-1px_1px_rgba(255,255,255,0.8),_1px_1px_1px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500">
                                <div className="border-b border-white/10 pb-3 mb-4">
                                    <span className="text-blue-500 font-extrabold text-xs tracking-wider uppercase drop-shadow-sm">Certificates</span>
                                    <h2 className="text-xl font-black text-zinc-800 mt-1.5 tracking-tight">자격 / 어학 / 수상</h2>
                                </div>
                                <div className="space-y-4 divide-y divide-white/10">
                                    {[
                                        { date: "2025.03", name: "CO2용접기능사 최종합격", org: "한국산업인력공단" },
                                        { date: "2016.09", name: "TOEIC Speaking Test 110점", org: "intermediate Mid1급 영어" },
                                        { date: "2015.06", name: "ISO9001 인증심사원보 최종합격", org: "한국능률협회" },
                                        { date: "2011.02", name: "1종보통운전면허 최종합격", org: "경찰청 (운전면허시험관리단)" },
                                    ].map((cert, idx) => (
                                        <div key={idx} className="pt-3 first:pt-0 flex flex-col gap-0.5">
                                            <span className="text-[11px] font-extrabold text-blue-400 tracking-wider">{cert.date}</span>
                                            <div className="text-xs md:text-sm font-black text-zinc-800">{cert.name}</div>
                                            <span className="text-xs font-semibold text-zinc-600">{cert.org}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                )}

                {/* ========================================== */}
                {/* 5. 프로젝트 요약 및 교육 이수 내역 섹션 */}
                {/* ========================================== */}
                {(activeTab === 'all' || activeTab === 'projects') && (
                    <section className="space-y-12 animate-fade-in">

                        {/* 교육 및 활동 */}
                        <div className="relative overflow-hidden p-8 md:p-10 bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-blue-300 rounded-[2rem] shadow-[-1px_-1px_1px_rgba(255,255,255,0.8),_1px_1px_1px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500">
                            <div className="border-b border-white/10 pb-4 mb-8">
                                <span className="text-blue-500 font-extrabold text-xs tracking-wider uppercase drop-shadow-sm">Training & Activities</span>
                                <h2 className="text-2xl md:text-3xl font-black mt-1.5 tracking-tight">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient drop-shadow-none">
                                        경험 / 활동 / 교육
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-10">
                                {/* AI 심화 과정 */}
                                <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                        <h3 className="text-base sm:text-lg font-black text-zinc-800 flex items-center gap-2.5">
                                            휴먼AI교육센터
                                            <span className="px-2.5 py-0.5 bg-white/60 border border-blue-200 rounded-full text-[11px] text-blue-800 font-bold shadow-sm">교육이수내역</span>
                                        </h3>
                                        <span className="text-xs font-extrabold text-blue-500">2026.03 - 2026.05</span>
                                    </div>
                                    <p className="text-xs md:text-sm font-bold text-zinc-800 bg-white/40 p-4 rounded-2xl border border-white/20 leading-relaxed shadow-inner">
                                        "React와 Django를 활용해 프론트와 백엔드를 구축하고, 'AI 기반 고객 타겟팅 솔루션'을 실제 비즈니스 환경에 맞춰 완성하는 심화 프로젝트 과정"
                                    </p>
                                    <div className="bg-white/20 p-5 rounded-2xl border border-white/10 space-y-3">
                                        <div className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">[AI 기반 서비스 개발 심화 과정] 세부 학습 내용</div>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-zinc-800 font-semibold list-disc list-inside">
                                            <li>Python 기반 데이터 분석 및 전처리(결측치·이상치 처리, 정규화, 시각화)</li>
                                            <li>Scikit-Learn 기반 ML 모델 구성(XGBoost, Random Forest) 및 성능 최적화</li>
                                            <li>TensorFlow/Keras 기반 딥러닝 모델링(CNN-LSTM), 시계열·오디오 처리</li>
                                            <li>LangChain 기반 LLM 응용 개발 및 프롬프트 엔지니어링</li>
                                            <li>RAG Pipeline 구성(Embedding, VectorStore, Retriever, LLM)</li>
                                            <li>LangGraph 기반 대화 Workflow 설계(상태 기반 흐름)</li>
                                            <li>FastAPI 기반 ML/DL/LLM 모델 API 설계</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* 풀스택 웹 개발 과정 */}
                                <div className="space-y-4 pt-6 border-t border-white/10">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                        <h3 className="text-base sm:text-lg font-black text-zinc-800 flex items-center gap-2.5">
                                            휴먼AI교육센터
                                            <span className="px-2.5 py-0.5 bg-white/60 border border-blue-200 rounded-full text-[11px] text-blue-800 font-bold shadow-sm">교육이수내역</span>
                                        </h3>
                                        <span className="text-xs font-extrabold text-blue-500">2025.09 - 2026.03</span>
                                    </div>
                                    <p className="text-xs md:text-sm font-bold text-zinc-800 bg-white/40 p-4 rounded-2xl border border-white/20 leading-relaxed shadow-inner">
                                        "데이터 분석 및 인공지능(머신러닝/딥러닝) 모델을 웹 서비스로 직접 구현해 낼 수 있는 완성형 풀스택 개발자 양성 과정"
                                    </p>
                                    <div className="bg-white/20 p-5 rounded-2xl border border-white/10 space-y-3">
                                        <div className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">[Java 기반 풀스택 웹 개발자 과정] 세부 학습 내용</div>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-zinc-800 font-semibold list-disc list-inside">
                                            <li>Java 기반 웹 개발 : OOP, JSP/Servlet, Spring MVC</li>
                                            <li>Spring Boot 기반 REST API 설계 및 서비스 계층 구조</li>
                                            <li>MyBatis 연동, Oracle DB CRUD 및 SQL 최적화</li>
                                            <li>Git/GitHub 협업, MVC 구조 이해, 배포 환경 설정</li>
                                            <li>인증/인가 기본: 세션/쿠키, JWT 개념 및 보안 기초</li>
                                            <li>프론트엔드 기초: HTML/CSS/JavaScript, React 기초 구조</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 프로젝트 요약 리스트 (Projects.jsx 테마 적용) */}
                        <div className="relative overflow-hidden p-8 md:p-10 bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-blue-300 rounded-[2rem] shadow-[-1px_-1px_1px_rgba(255,255,255,0.8),_1px_1px_1px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500 space-y-8">
                            <div className="border-b border-white/10 pb-4 flex justify-between items-end">
                                <div>
                                    <span className="text-blue-500 font-extrabold text-xs tracking-wider uppercase drop-shadow-sm">Projects Portfolio</span>
                                    <h2 className="text-xl sm:text-2xl font-black text-zinc-800 mt-1.5 tracking-tight">주요 프로젝트 요약</h2>
                                </div>
                                <span className="px-3 py-1 bg-white/60 border border-blue-200 rounded-full text-[11px] text-blue-800 font-bold shadow-sm">
                                    총 6건 완성
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "1. All care, Medi-core",
                                        meta: "팀프로젝트 (5명) | 2026.04.24 - 2026.05.08",
                                        desc: "각각의 질병별 Ai 모델들을 온프레미스구조로 연결하여 하나의 시스템으로 여러가지 질병 진단을 보조하는 종합 솔루션",
                                        points: [
                                            "WSL2 + Docker 컨테이너 활용 온프레미스 서버 구축",
                                            "LangGraph 기반 gemini 2.5 flash 모델로 척추협착증 진단보조",
                                            "FastAPI 기반 ResNet 비전 모델 활용으로 질환 분류",
                                            "할루시네이션 방지 코드 구현",
                                            "React 기반 AI의 분석 결과와 진단 리포트 반응형 웹 대시보드 UI",
                                        ]
                                    },
                                    {
                                        title: "2. Javis2 (맞춤형 AI 비서 생성)",
                                        meta: "개인프로젝트 (1명) | 2026.04.20 - 2026.04.23",
                                        desc: "사용자가 직접 회사내규 PDF 파일을 업로드하여 본인만의 맞춤 RAG 비서를 만드는 멀티테넌트 웹 서비스",
                                        points: [
                                            "Ollama LLM + HuggingFace모델 + pgvector 활용 데이터베이스 고차원 벡터 임베딩 및 유사도 검색 파이프라인 구축",
                                            "LlamaParse 청킹 및 2단계 청킹 설정으로 할루시네이션 완벽 방지",
                                            "React 기반 회사별/부서별 접근 데이터 격리된 안전한 멀티테넌트 UI 제공",
                                            "사용자들의 채팅내역을 자동으로 감정분석 하도록 아키텍처 설계",
                                        ]
                                    },
                                    {
                                        title: "3. Smart Conveyor (비전 AI 물류제어)",
                                        meta: "개인프로젝트 (1명) | 2026.04.13 - 2026.04.16",
                                        desc: "객체가 컨베이어를 지나가기만 하면 자동으로 재고 집계 및 고유 바코드를 실시간 발급하는 물류 관제 프로그램",
                                        points: [
                                            "객체 탐지에 특화된 YOLO 모델과 경량화 이미지 분류 모델인 MobileNetV2 결합",
                                            "집요한 데이터 전처리와 고도화된 전이 학습(Transfer Learning) 적용으로 99% 이상의 높은 분류 정확도 확보",
                                            "비전 AI 실시간 추론 결과를 바탕으로 상품 판별 및 카테고리별 누적 수량 자동 집계 제어 로직 구현",
                                            "Streamlit 기반 상품 분류 현황 및 누적 통계 실시간 모니터링 대시보드 UI",
                                        ]
                                    },
                                    {
                                        title: "4. 태양광 발전량 예측 모델",
                                        meta: "개인프로젝트 (1명) | 2026.04.06 - 2026.04.09",
                                        desc: "머신러닝(ML)을 통해 날씨 요인에 따른 태양광 변화 및 발전량을 정밀하게 시계열·회귀 예측하는 분석 모델",
                                        points: [
                                            "탐색적 데이터 분석(EDA)을 통해 기상 이변·센서 오류 이상치 및 결측치를 식별·제거하여 모델링 정확도를 끌어올리는 데이터 중심 전처리 수행",
                                            "초기 직관적 해석이 가능한 선형 회귀 모델 베이스라인 구축으로 기본 상관관계 파악",
                                            "고성능 앙상블 모델인 XGBoost로 파이프라인을 고도화하여 예측 성능 대폭 향상",
                                            "R2 Score와 RMSE 지표 종합 활용 검증 체계 확립 및 Streamlit 기반 실시간 기상조건 입력 웹 서비스 배포",
                                        ]
                                    },
                                    {
                                        title: "5. 핀플로우가드 (FFG)",
                                        meta: "팀프로젝트 (4명) | 2026.03.09 - 2026.03.27",
                                        desc: "Rule 엔진 + 머신러닝(하이브리드) 결합 기반 실시간 금융 이상거래 탐지(FDS) 및 권한별 통합 관제 웹 솔루션",
                                        points: [
                                            "사용자 행동 패턴 Rule 엔진과 XGBoost 머신러닝을 결합하여 정상/비정상 탐지 모델 완성",
                                            "Velocity 룰 및 행동 패턴 정규화를 통한 설명 가능한 AI(SHAP) 연동",
                                        ]
                                    },
                                    {
                                        title: "6. 여행담기 / 5조 - Memos",
                                        meta: "팀프로젝트 (5명 / 4명) | 풀스택 및 API 연동",
                                        desc: "공공데이터 파싱 기반 맞춤형 여행지 추천 플랫폼 및 허깅페이스 AI 자연어 요약 모델 연동 풀스택 일정 관리 솔루션",
                                        points: [
                                            "[여행담기] 공공데이터 파싱 후 관심등록 장소 키워드 선별 랭킹 알고리즘 서비스 제공 (Spring MVC 기반)",
                                            "[Memos] Hugging Face API를 이용한 지능형 요약 캘린더 + 메모장 통합 구현 (Flask + React)",
                                        ]
                                    },
                                ].map((proj, idx) => (
                                    <div key={idx} className="group relative overflow-hidden flex flex-col justify-between p-6 bg-white/40 border border-white/20 hover:border-blue-300 rounded-2xl shadow-xs transition-all duration-300">
                                        {/* 카드 좌측 포인트 바 */}
                                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                                        <div className="space-y-3 pl-2">
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[11px] font-extrabold text-blue-600 tracking-wider">{proj.meta}</span>
                                                <h3 className="text-base font-black text-zinc-800">{proj.title}</h3>
                                            </div>
                                            <p className="text-xs font-bold text-zinc-800 bg-white/60 p-2.5 rounded-xl border border-white/20 leading-relaxed shadow-xs">
                                                {proj.desc}
                                            </p>
                                            <ul className="space-y-1.5 pt-1">
                                                {proj.points.map((p, pIdx) => (
                                                    <li key={pIdx} className="text-xs text-zinc-800 font-semibold flex items-start gap-1.5 leading-relaxed break-keep">
                                                        <span className="text-blue-500 font-bold shrink-0">∙</span>
                                                        <span>{p}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ========================================== */}
                {/* 6. 상세 자기소개서 및 프로젝트 경험 섹션 */}
                {/* ========================================== */}
                {(activeTab === 'all' || activeTab === 'coverletter') && (
                    <section className="relative overflow-hidden p-8 md:p-10 bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-blue-300 rounded-[2rem] shadow-[-1px_-1px_1px_rgba(255,255,255,0.8),_1px_1px_1px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500 space-y-10 animate-fade-in">
                        <div className="border-b border-white/10 pb-4">
                            <span className="text-blue-500 font-extrabold text-xs tracking-wider uppercase drop-shadow-sm">Cover Letter & Deep Dive</span>
                            <h2 className="text-2xl md:text-3xl font-black mt-1.5 tracking-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient drop-shadow-none">
                                    상세 기술서 및 자기소개서
                                </span>
                            </h2>
                        </div>

                        {/* 서론 */}
                        <div className="space-y-3">
                            <div className="px-3 py-1 bg-white/60 border border-blue-200 rounded-full text-[11px] text-blue-800 font-bold shadow-sm w-fit">
                                [서론] - 자기소개
                            </div>
                            <h3 className="text-base sm:text-lg font-black text-zinc-800">
                                "데이터 수집부터 AI 서빙·인프라까지, SDLC 전반을 관통하는 풀스택 아키텍트"
                            </h3>
                            <div className="text-xs md:text-sm font-extrabold text-blue-600">
                                프로세스 전반을 조망하며 '이해(Understanding)'를 설계하는 개발자
                            </div>
                            <div className="bg-white/40 p-5 rounded-2xl border border-white/20 text-zinc-800 font-semibold text-xs md:text-sm leading-relaxed space-y-3 shadow-inner break-keep">
                                <p>
                                    "코드 생성 속도가 기하급수적으로 빨라지는 패러다임 속에서, 개발자의 진정한 경쟁력은 단순한 구현을 넘어 시스템 전체의 아키텍처와 데이터 흐름을 완벽히 이해(Understanding)하고 설계하는 역량에 있다고 확신합니다.
                                </p>
                                <p>
                                    데이터의 수집 및 전처리부터 풀스택 서비스 연동, AI 모델 서빙, 그리고 Docker 기반의 인프라 구축까지 소프트웨어 생명 주기(SDLC) 전반을 직접 경험하며 전체 프로세스를 조망하는 시야를 키워왔습니다.
                                </p>
                                <p>
                                    개별 API의 세부 문법을 작성하는 일종의 처리 작업(Processing)은 AI 도구를 레버리지하여 효율화하되, 메모리 구조와 트랜잭션, 비동기 통신 등 기반 시스템의 동작 원리를 꿰뚫어 보는 본질적인 이해도에 집중했습니다.
                                </p>
                                <p className="font-bold text-zinc-900">
                                    숲과 나무를 동시에 보는 안목을 바탕으로 React, Spring Boot, FastAPI로 이어지는 이기종 분산 환경을 견고하게 통합하고, 유관 부서와의 소통 비용을 최소화하여 안정적인 서비스 런칭을 이끄는 설계 중심 개발자입니다."
                                </p>
                            </div>
                        </div>

                        {/* 본론 - 협업 경험 */}
                        <div className="space-y-3 pt-6 border-t border-white/10">
                            <div className="px-3 py-1 bg-white/60 border border-blue-200 rounded-full text-[11px] text-blue-800 font-bold shadow-sm w-fit">
                                [본론] - 협업 경험
                            </div>
                            <h3 className="text-base sm:text-lg font-black text-zinc-800">
                                상세한 스펙(Spec) 설계 중심의 기민한 오케스트레이션
                            </h3>
                            <p className="text-xs md:text-sm text-zinc-800 font-semibold leading-relaxed bg-white/40 p-5 rounded-2xl border border-white/20 shadow-inner break-keep">
                                "팀 프로젝트에서 개발자의 역할은 전체적인 감독(Supervision)을 맡아 명확한 제약 조건과 상세한 스펙을 설계하는 것이라 생각합니다. 4인 규모의 프로젝트 환경에서 프론트엔드, 비즈니스 백엔드, AI 추론 서버 간의 역할을 명확히 분리하고 투명한 API 명세와 데이터 모델을 사전에 조율하는 역할을 주도했습니다. 견고한 Git 브랜치 전략을 통해 충돌을 예방하고, 명확한 청사진 중심의 효율적인 소통을 전개하여 단시간 내에 성공적으로 MVP 기능 통합 및 배포를 완수했습니다. 동료들과 기술적 해결책을 함께 고민하며, 복잡한 요구사항을 안정적인 구현으로 번역해 내는 유연한 팀 플레이어입니다."
                            </p>
                        </div>

                        {/* 본론 - 나의 장점 */}
                        <div className="space-y-3 pt-6 border-t border-white/10">
                            <div className="px-3 py-1 bg-white/60 border border-blue-200 rounded-full text-[11px] text-blue-800 font-bold shadow-sm w-fit">
                                [본론] - 나의 장점
                            </div>
                            <h3 className="text-base sm:text-lg font-black text-zinc-800">
                                "에이전틱 엔지니어링을 관철하는 집요한 검증력"
                            </h3>
                            <div className="bg-white/40 p-5 rounded-2xl border border-white/20 text-zinc-800 font-semibold text-xs md:text-sm leading-relaxed space-y-3 shadow-inner break-keep">
                                <p>
                                    저의 가장 큰 강점은 타협 없는 데이터 기반 검증을 통해 책임 있는 소프트웨어 품질을 보장하는 에이전틱 엔지니어링(Agentic Engineering) 역량입니다. AI와 복잡한 시스템은 채점 및 검증 가능한 영역에서만 의도대로 동작한다는 점을 깊이 인지하고 있습니다.
                                </p>
                                <p>
                                    단순히 동작만 하는 코드(Vibe Coding)에 만족하지 않고, 시스템 연동 시 발생하는 병목 현상이나 데이터 불일치 문제를 해결하기 위해 집요하게 파고듭니다.
                                </p>
                                <p className="font-bold text-zinc-900">
                                    회귀 분석 시 R2, RMSE 지표와 잔차 분석을 통해 과적합을 철저히 점검하고, 스마트 물류 제어 프로젝트 당시 12,000장의 데이터를 직접 전수 정제하여 99%의 분류 정확도를 확보했던 것처럼, 엄격한 품질 기준과 테스트 체계를 관철하여 실무 수준의 신뢰도를 달성합니다.
                                </p>
                            </div>
                        </div>

                        {/* 상세 프로젝트 경험 */}
                        <div className="space-y-8 pt-8 border-t border-white/10">
                            <div className="px-3 py-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white rounded-full text-xs font-bold shadow-md w-fit">
                                [본론] - 프로젝트 경험 상세 서술
                            </div>

                            {[
                                {
                                    title: "1. <FFG 핀플로우가드 - 금융 이상거래 탐지 AI>",
                                    sub: "사용자 행동 패턴 Rule 엔진과 XGBoost 머신러닝을 결합하여, 금융 이상 거래를 실시간으로 탐지하고 권한별로 제어하는 통합 보안 웹 솔루션",
                                    quote: "설계의 힘과 데이터에 대한 집요함으로 완성한 하이브리드 이상거래 탐지 시스템",
                                    content: [
                                        "금융 보안의 핵심은 정확한 탐지와 신속한 대응이라는 판단하에, AI 기반 이상거래 탐지 시스템(FFG)의 기획부터 모델링까지 전 과정을 주도했습니다. 복잡한 금융 데이터를 다루는 만큼, 초기 설계 단계에 가장 많은 시간을 투자했습니다. 사용자 권한별로 접근 경로와 노출되는 데이터를 엄격하게 분리하는 아키텍처를 세우고, 화면 테마부터 명명 규칙까지 꼼꼼히 정의했습니다. 이러한 탄탄한 사전 설계 덕분에 프론트엔드와 CRUD, 통신 기능 구현을 예상보다 훨씬 빠르게 마무리하며 개발 공수를 획기적으로 줄일 수 있었습니다.",
                                        "하지만 진정한 도전은 AI 모델링 단계에서 찾아왔습니다. 초기에는 Kaggle의 금융 데이터를 활용해 XGBoost 모델을 빠르게 연동했지만, 특정 극단적 패턴에만 반응하고 단순 이진 결과만 도출하는 한계에 부딪혔습니다. 이를 해결하기 위해 기존 데이터에 의존하지 않고, 3일에 걸쳐 각종 오픈 데이터를 분석하여 [일반 거래 정보 + 행동 패턴 수치 + AI 분석 내용]으로 구성된 독자적인 스키마를 새롭게 구축했습니다. 특히 Velocity 룰, 블랙리스트 등 사용자의 행동 패턴을 일관되게 정규화하는 Rule 엔진을 도입하여 모델 학습의 질을 높였습니다.",
                                        "모델 선정에 있어서도 설명 가능한 AI(XAI)인 SHAP과 시너지가 좋은 XGBoost를 최종 채택했습니다. 학습 과정에서 모델이 '직전 거래와의 시간차'에 과도한 가중치를 부여해 편의점 연속 결제와 같은 일상적 거래를 이상거래로 과탐지(False Positive)하는 이슈가 발생했습니다. 이를 해결하기 위해 일상 거래 패턴을 반영하여 피처 중요도를 조정하고 모델을 재학습시켰으며(colsample_bytree, subsample), 마침내 실무에서도 유의미하게 활용할 수 있는 안정적인 탐지 로직을 완성했습니다.",
                                        "💡 이 프로젝트를 통해 단순히 코드를 짜는 것을 넘어, 데이터의 본질을 뜯어보고 시스템의 뼈대를 튼튼하게 세우는 '아키텍트'로서의 시야를 갖추게 되었습니다."
                                    ]
                                },
                                {
                                    title: "2. <JAVIS2 - 회사에 맞는 AI 비서 생성 프로그램>",
                                    sub: "LLM RAG + 감정분석DL + Rule 하이브리드 기반 멀티테넌트 UI 제공, AI 오케스트레이션을 통해 회사별 내규정보 알림 서비스 제공",
                                    quote: null,
                                    content: [
                                        "단 3일의 짧은 기간 동안 React, Spring, Flask, pgvector, 그리고 로컬 LLM인 Ollama, Hugging Face DL모델+Rule, LlamaParser까지 아우르는 풀스택 AI 아키텍처, 'JAVIS2' 프로젝트를 구축하며 개발자로서의 한계를 시험하고 또 돌파하는 경험을 했습니다.",
                                        "초기에는 로컬 환경의 리소스 부족으로 인한 지연 현상과 높은 컴포넌트 결합도로 인해, 하나의 오류가 전체 시스템 장애로 이어지는 MSA급 환경의 복잡성을 뼈저리게 경험했습니다. 이를 통해 단순히 '동작하는 코드'를 작성하는 것을 넘어, 초기 아키텍처 설계의 중요성과 타인이 이해하기 쉬운 클린 코드(Clean Code), 그리고 꼼꼼한 문서화의 필요성을 깊이 깨달았습니다.",
                                        "특히 AI 파이프라인을 최적화하는 과정에서 발생하는 실무적인 문제들을 주도적으로 해결했습니다. 먼저, 감정 분석 딥러닝 모델이 사내 도메인 특화 데이터에 가지는 한계를 파악하고, 시스템 단에서 직접 인사 및 감사 키워드 등의 규칙 기반(Rule-based) 컨트롤을 결합한 하이브리드 제어 로직을 구현하여 비즈니스 요구사항을 정확히 충족시켰습니다.",
                                        "또한, 멀티테넌트(Multi-tenant) 환경에서 회사별 데이터를 격리할 때 LangChain 내장 필터의 간헐적 무시 현상을 발견했습니다. 이때 프레임워크에 맹목적으로 의존하는 대신, 파이썬 기반의 자체 필터링 로직으로 전면 대체하여 확실한 데이터 격리를 이루어냈습니다.",
                                        "비동기 환경에서 발생하는 동시성 문제 역시 중요한 도전 과제였습니다. UI에서 테넌트를 전환한 직후 질문 시 이전 회사의 데이터가 응답되는 레이스 컨디션(Race Condition)이 발생했습니다. 이는 테넌트 변경과 AI 컨텍스트 로드 간의 비동기적 타이밍 문제임을 원인으로 규명하고, Spring Controller 계층에 .block() 메서드를 도입해 동기적 흐름으로 제어함으로써 데이터 정합성을 확보할 수 있었습니다.",
                                        "💡 이러한 일련의 트러블슈팅 과정은 시스템 전체를 조망하는 시야를 길러주었습니다. LlamaParse와 Ollama를 성공적으로 연동하며 얻은 LLM 서비스 구조에 대한 깊은 이해를 바탕으로, 앞으로는 LLM 모델의 응답 지연(Latency) 개선과 중복 질문에 대한 프롬프트 토큰 소모량 최적화 기법을 심도 있게 연구하고 싶습니다. 당면한 문제를 회피하지 않고 집요하게 파고들어, 비용 효율적이고 빠르며 안정적인 AI 서비스를 설계하는 개발자로 성장하겠습니다."
                                    ]
                                },
                                {
                                    title: "3. <딥러닝 CNN 기반 실시간 컨베이어 재고 관리 및 자동 바코드 시스템>",
                                    sub: "물체가 컨베이어를 지나가면 자동 수량 관리와 바코드 자동 발급 프로그램",
                                    quote: "모델 구조의 한계를 데이터의 본질로 돌파하다: 61%에서 99%로의 도약",
                                    content: [
                                        "프로젝트 초기, Custom CNN 아키텍처를 설계하여 모델 학습을 진행했으나 61%라는 기대 이하의 정확도에 직면했습니다. 문제 해결을 위해 학습 프로세스를 시각화하여 분석한 결과, 정확도와 손실률 그래프가 수렴하지 못한 채 조기에 정체되는 현상을 발견했습니다. 이를 개선하기 위해 하이퍼파라미터 튜닝(Epoch, Patience 증대)과 아키텍처 고도화(5개 레이어 확장, 512 뉴런 Dense 층 삽입)를 단행하고, 전이 학습 모델인 MobileNetV2까지 도입했으나 성능은 69% 수준에서 정체되었습니다.",
                                        "모델의 깊이를 더하거나 구조를 바꾸는 방식만으로는 임계점을 돌파할 수 없음을 직시하고, 문제의 원인을 외부(모델)가 아닌 내부(데이터)에서 찾기로 결정했습니다. 이를 위해 약 4만 장의 원천 이미지 데이터를 전수 조사하는 과정을 거쳤습니다. 이 집요한 분석 과정에서 공통적인 문제점을 발견했습니다. 실제 컨베이어 환경의 불규칙한 배경 노이즈가 모델이 제품의 핵심 특징을 추출하는 것을 심각하게 방해하고 있었던 것입니다.",
                                        "이 가설을 검증하기 위해 파이프라인을 새롭게 구축했습니다:\n∙ 객체 탐지 기반 전처리: YOLO 모델을 전처리 단계에 도입하여 배경을 완전히 배제하고 제품 객체만을 정밀하게 추출(Auto-Cropping)했습니다.\n∙ 데이터 무결성 확보: 추출 과정에서 발생한 오인식 데이터를 수동으로 정제하고, 모든 데이터를 224x224 사이즈로 리사이징 후 Padding을 추가하여 기하학적 왜곡을 최소화하는 정규화를 진행했습니다.",
                                        "💡 데이터의 순도를 극대화한 후 다시 학습을 진행한 결과, 별도의 모델 구조 변경 없이도 정확도가 69%에서 99.4%로 비약적으로 상승하는 결과를 얻었습니다. 이 경험은 AI 프로젝트의 성패는 정교한 알고리즘만큼이나 '현장의 도메인이 반영된 양질의 데이터'에 있다는 사실을 수치로 증명한 값진 경험이었습니다."
                                    ]
                                },
                                {
                                    title: "4. <머신러닝 기반 기후에 따른 태양열 발전량 데이터 분석>",
                                    sub: "EDA에 따른 XGBoost의 성능 변화",
                                    quote: "핵심 기술: Java, Flask, sklearn, matplotlib, seaborn, numpy, pandas, sklearn.metrics, StandardScaler",
                                    content: [
                                        "과거 프로젝트들이 AI API를 활용한 기능 구현에 집중했다면, 본 프로젝트는 UI를 배제하고 오직 데이터 수집과 가공, 분석에만 몰두한 첫 경험이었습니다. 데이터 파이프라인의 기저를 이해하기 위해 EDA(탐색적 데이터 분석)를 수행하며, 변수 간의 상관관계를 시각화하고 불필요한 컬럼을 줄여나가는 피처 엔지니어링(Feature Engineering)에 집중했습니다. 이 과정에서 양질의 데이터 가공과 선택만으로도 머신러닝 모델의 성능을 크게 향상시킬 수 있음을 체감했습니다.",
                                        "또한, 모델 선택에 대한 깊은 인사이트를 얻었습니다. 단순 예측 성능은 XGBoost가 압도적이었지만, 각 독립변수가 결과에 미치는 영향력을 직관적으로 파악하는 데는 선형 회귀(Linear Regression) 모델이 더 적합하다는 것을 확인했습니다.",
                                        "💡 이를 통해 무조건 성능이 좋은 모델이 아닌, '해결하고자 하는 문제 상황과 목적에 맞는 최적의 알고리즘을 선택하는 안목'의 중요성을 배웠습니다. 앞으로도 데이터의 특성을 명확히 분석하고 적절한 AI/ML 모델을 설계하는 데이터 주도적인(Data-Driven) 개발자로 성장하겠습니다."
                                    ]
                                },
                                {
                                    title: "5. <여행담기 - 알고리즘 기반 여행 자동 추천 및 예약>",
                                    sub: "사용자 취향에 맞는 국내 여행지를 추천하고 정보를 공유하는 웹 서비스",
                                    quote: "MVC 모델의 기초부터 데이터 기반 추천 로직까지, 웹 서비스의 전 과정을 주도하다",
                                    content: [
                                        "팀원들과의 회의를 통해 '국내 여행의 설렘을 담다'라는 의미의 '여행담기' 프로젝트를 기획하고, 4인 팀의 일원으로서 설계부터 구현까지 풀스택 개발을 수행했습니다. 본 프로젝트는 사용자의 취향을 분석해 최적의 여행지를 제안하는 것을 목표로 했으며, '로그인 ➔ 관심지 선택 ➔ 개인별 키워드 분석 ➔ 맞춤형 추천'으로 이어지는 핵심 프로세스를 구축하는 데 집중했습니다.",
                                        "개발 초기에는 사용자에게 일관된 시각적 경험을 제공하기 위해 Bootstrap을 도입하여 UI의 통일성을 확보했습니다. 이후 웹 개발의 근본 원리를 깊이 있게 이해하고자 Java와 JSP를 활용한 MVC 아키텍처를 설계했습니다. 서블릿(Servlet)을 통해 컨트롤러를 구현하고 회원가입, 로그인 정보 유지(Session), 회원 탈퇴 등 백엔드의 필수 기능을 성공적으로 연동하며 시스템의 안정성을 높였습니다.",
                                        "가장 도전적이었던 부분은 공공데이터를 활용한 데이터 모델링과 추천 알고리즘 구현이었습니다. 한국관광공사의 방대한 XML 데이터를 직접 파싱하여 프로젝트에 꼭 필요한 주소, 카테고리, 계절 정보만을 추출해 데이터베이스 용량을 최적화했습니다. 이를 기반으로 사용자가 '좋아요'를 누를 때마다 해당 여행지의 핵심 키워드를 수집하고, 누적된 데이터 중 가장 높은 빈도를 보이는 키워드 조합(예: 1순위 주소 + 1순위 카테고리)과 일치하는 장소를 우선 추천해 주는 키워드 랭킹 알고리즘을 독자적으로 설계했습니다.",
                                        "💡 비록 개발 당시에는 API 통신 방식인 Node.js 환경에 익숙하지 않아 XML 파싱 방식을 선택했다는 아쉬움이 남지만, 오히려 이 과정을 통해 데이터 전처리의 중요성과 SQL 연동의 정석을 몸소 익힐 수 있었습니다. 팀원들이 제 아이디어를 믿고 주도적인 설계를 맡겨준 덕분에 갈등 없이 순조롭게 프로젝트를 완수할 수 있었으며, 이 경험은 이후 AI 기반의 이상거래 탐지 시스템(FFG) 프로젝트에서 더욱 복잡한 데이터를 다루는 데 든든한 밑거름이 되었습니다."
                                    ]
                                }
                            ].map((detail, idx) => (
                                <div key={idx} className="group relative overflow-hidden p-6 md:p-8 bg-white/40 border border-white/20 hover:border-blue-300 rounded-2xl shadow-xs transition-all duration-300 space-y-4">
                                    {/* 좌측 포인트 컬러 바 */}
                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500"></div>
                                    <div className="pl-2 space-y-2">
                                        <h4 className="text-base sm:text-lg font-black text-zinc-900 tracking-tight">
                                            {detail.title}
                                        </h4>
                                        <div className="text-xs font-bold text-blue-700 tracking-wider">
                                            {detail.sub}
                                        </div>
                                        {detail.quote && (
                                            <div className="text-xs md:text-sm font-black text-zinc-800 bg-white/60 p-2.5 rounded-xl border border-white/20 shadow-xs inline-block w-full">
                                                "{detail.quote}"
                                            </div>
                                        )}
                                        <div className="space-y-3 pt-2 text-xs md:text-sm text-zinc-800 font-semibold leading-relaxed break-keep whitespace-pre-line">
                                            {detail.content.map((paragraph, pIdx) => (
                                                <p key={pIdx} className={paragraph.startsWith("💡") ? "font-bold text-blue-900 bg-white/40 p-3 rounded-xl border border-white/20 shadow-inner" : ""}>
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 결론 - 입사 후 포부 및 비전 */}
                        <div className="space-y-4 pt-8 border-t border-white/10">
                            <div className="px-3 py-1 bg-white/60 border border-blue-200 rounded-full text-[11px] text-blue-800 font-bold shadow-sm w-fit">
                                [결론] - 입사 후 포부 및 비전
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-zinc-800 tracking-tight">
                                사유(Thinking)를 넘어 본질을 이해(Understanding)하는 시스템 아키텍트
                            </h3>
                            <div className="relative overflow-hidden p-6 md:p-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white rounded-2xl shadow-xl space-y-4 font-bold text-xs md:text-sm leading-relaxed break-keep">
                                <p className="drop-shadow-sm">
                                    "입사 후, 단기적으로는 귀사의 기존 코드 베이스와 도메인 지식을 빠르게 뇌에 적재하여 팀의 즉시 전력감으로 융화되겠습니다. 장기적으로는 <span className="underline decoration-2 underline-offset-4 text-white font-black">'사유(Thinking)는 위임할 수 있어도, 이해(Understanding)는 위임할 수 없다'</span>는 철학을 바탕으로 귀사 비즈니스의 본질을 책임지는 핵심 아키텍트로 성장하고자 합니다.
                                </p>
                                <p className="drop-shadow-sm">
                                    나아가 프롬프트 엔지니어링 및 컨텍스트 최적화를 통해 동일한 처리 과정에서도 토큰 비용을 대폭 절감하고 응답 지연(Latency)을 최소화하는 효율적인 파이프라인을 설계해 내겠습니다.
                                </p>
                                <p className="text-center pt-4 border-t border-white/20 text-sm md:text-base font-black tracking-widest drop-shadow-md">
                                    끝없이 파고드는 집요함으로 귀사 비즈니스의 성장을 가속화하겠습니다."
                                </p>
                            </div>
                        </div>
                    </section>
                )}

            </div>
        </section>
    );
}