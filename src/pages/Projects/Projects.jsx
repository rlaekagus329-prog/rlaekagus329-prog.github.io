import React from 'react';
import { projectData, skillsData } from '../data/portfolioData';

export default function Projects() {
    return (
        // ★ 1. Home과 동일한 배경 설정 (전체 화면 캔버스)
        <section className="relative w-full min-h-screen pt-24 pb-12 overflow-hidden flex flex-col items-center">

            {/* ★ 배경 이미지 레이어 (Home과 동일) */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat fixed"
                style={{ backgroundImage: 'url("/images/background.png")' }}
            >
            </div>

            {/* 컨텐츠 영역 */}
            <div className="relative z-10 w-full max-w-6xl px-4">

                {/* ★ 2. 프로젝트 리스트 (한 줄에 하나씩) */}
                <div className="flex flex-col gap-12">
                    {projectData.map((project) => (
                        // ★ 최상위 카드 컨테이너: 전체 배경, 테두리, 그림자 효과를 하나로 통합하고 relative 적용
                        <div
                            key={project.id}
                            className="group flex flex-col lg:flex-row overflow-hidden w-full relative
                       bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-blue-300 rounded-[2rem]
                       shadow-[-1px_-1px_1px_rgba(255,255,255,0.8),_1px_1px_1px_rgba(0,0,0,0.1)] hover:shadow-2xl
                       transition-all duration-500"
                        >
                            {/* ★ 카드 좌측 포인트 컬러 바 (전체 카드의 왼쪽에 밀착) */}
                            <div className={`absolute top-0 left-0 lg:w-1.5 lg:h-full w-full h-1.5 bg-gradient-to-b ${project.color}`}></div>

                            {/* ========================================== */}
                            {/* ★ 왼쪽 영역: 타이틀 + 서브타이틀 + 시연 영상 */}
                            {/* ========================================== */}
                            {/* 컬러바 영역 확보를 위해 pl-8 md:pl-10 적용 */}
                            <div className="lg:w-[45%] w-full p-6 md:p-8 pl-8 md:pl-10 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-white/10">

                                {/* 1. 타이틀 & 서브타이틀 */}
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-black mb-1.5 tracking-tight">
                                    <span className="
                                        text-transparent bg-clip-text
                                        bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
                                        animate-gradient drop-shadow-none
                                    ">
                                       {project.title}
                                    </span>
                                    </h3>
                                    <p className="text-blue-700 font-extrabold text-[12px] md:text-sm tracking-wider uppercase drop-shadow-sm">
                                        {project.subtitle}
                                    </p>
                                </div>

                                {/* 2. 시연 영상 */}
                                <div className="w-full aspect-video bg-black/40 rounded-xl overflow-hidden shadow-inner flex self-center">
                                    <iframe
                                        className="w-full h-full aspect-video"
                                        src={project.videoUrl}
                                        title={project.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                            </div>

                            {/* ========================================== */}
                            {/* ★ 오른쪽 영역: 본문 설명(트러블슈팅) + 태그 + 링크 */}
                            {/* ========================================== */}
                            <div className="lg:w-[55%] w-full p-6 md:p-8 flex flex-col justify-between">

                                <div>
                                    {/* 3. 본문 설명 및 트러블슈팅 (공간이 넓어졌으므로 쾌적하게 읽힘) */}
                                    <p className="text-zinc-800 font-semibold text-xs md:text-sm leading-relaxed mb-8 break-keep whitespace-pre-line">
                                        {project.description}
                                    </p>

                                    {/* 4. 기술 스택 태그 */}
                                    <div className="flex flex-wrap gap-2 mb-8 lg:mb-0">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-white/60 border border-blue-200 rounded-full text-[11px] text-blue-800 font-bold shadow-sm"
                                            >
                                #{tag}
                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* 5. 상세보기 링크 */}
                                <div className="flex justify-end w-full mt-6 lg:mt-0">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-1.5 text-[11px] md:text-xs text-blue-600 hover:text-blue-800 font-black transition-colors group/link cursor-pointer no-underline"
                                    >
                                        <span className="group-hover/link:underline decoration-2 underline-offset-4">
                                            프로젝트 상세보기
                                        </span>
                                        <span className="text-lg transition-transform group-hover/link:translate-x-1">→</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* 보유기술 */}
                <div className="mt-20 w-full bg-white/5 backdrop-blur-xl border-2 border-white/20 rounded-[2rem] p-8 md:p-10 shadow-2xl">
                    <h3 className="text-2xl md:text-3xl font-black mb-8 tracking-tight flex items-center gap-3">
                        {/* 3. ★ 화려한 그라데이션이 들어갈 텍스트 영역 */}
                        <span className="
                            text-transparent bg-clip-text
                            bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
                            animate-gradient drop-shadow-none
                        ">
                            Tech Stack & Skills
                        </span>
                    </h3>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillsData.map((group) => (
                            <div key={group.category}>
                                {/* 카테고리 제목 */}
                                <p className="text-blue-300 font-extrabold text-xs tracking-wider uppercase mb-3">
                                    {group.category}
                                </p>

                                {/* 내부 기술 스택 태그 매핑 */}
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-white/60 border border-blue-200 rounded-full text-[11px] text-blue-800 font-bold shadow-sm"
                                        >
                                            #{skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}