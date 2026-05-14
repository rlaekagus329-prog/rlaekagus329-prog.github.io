// src/pages/data/portfolioData.js

export const projectData = [
    {
        id: 1,
        title: "JAVIS2",
        subtitle: "AI-Based Enterprise Analysis System",
        // ★ 처음부터 끝까지 하나의 큰따옴표("") 안에 <br>을 포함하여 작성합니다.
        description: `LLM과 감정 분석 딥러닝 기반의 멀티테넌트 AI 오케스트레이션 시스템입니다. 사용자가 직접 RAG 데이터를 입력하여 나만의 맞춤형 AI 비서를 생성하고, 복잡한 기업 지배구조와 재무 지표를 분석하여 리포트를 생성하는 웹 서비스를 구축했습니다.
        
                       [트러블 슈팅:할루시네이션 제어]
                        할루시네이션 문제를 제어하기 위해 문맥 중심의 2단계 정밀 청킹과 핵심 조각 압축 검색 파이프라인을 구축하고(2-Stage Retrieval), 출처 표기와 근거 기반 프롬프트 제약을 통합하여 기업 리포트 답변의 신뢰도를 극대화했습니다.`,
        tags: ["React", "Flask", "Java","RESTful API", "PGVector", "Ollama", "HuggingFace", "LLM", "LangChain", "LlamaParse","BERT","PostgreSQL","pgvector","Gradle"],
        color: "from-blue-600 to-cyan-400",
        videoUrl: "https://www.youtube.com/embed/wbfH_BSXGb4",
        link:"https://drive.google.com/file/d/1rupVZ4Qy9Mg-DeH55UzehEwZgcsZDEHi/view?usp=drive_link"
    },
    {
        id: 2,
        title: "All Care, Medi-Core",
        subtitle: "AI-Based Medical Image Diagnostic Support System",
        description: `의료 이미지 전처리 및 딥러닝 분류 모델을 적용한 AI 기반 진단 보조 웹 서비스입니다. Python과 딥러닝 비전 모델(ResNet, MobileNet 등)을 활용해 정밀한 이미지 프로세싱 및 질환 예측 파이프라인을 설계하였으며, React 기반의 직관적인 UI를 통해 빠르고 정확한 분석 리포트를 제공합니다.
                      
                      [트러블 슈팅: 온프레미스 기반 다중 AI 모델 CI/CD 파이프라인 구축]
여러 개의 무거운 비전 모델이 독립적으로 동작하는 아키텍처 특성상, 무료 클라우드 환경에서는 리소스 한계로 배포가 불가능한 문제가 있었습니다. 
이를 해결하기 위해 로컬 메인 컴퓨터에 WSL2 기반의 온프레미스(On-Premise) 서버 환경을 직접 구축했습니다. 인바운드 방화벽 개방 및 포트 포워딩을 통해 외부 접속망을 확보하고, 각 AI 모델을 독립된 Docker 컨테이너로 격리하여 모델 간 간섭을 차단하는 분산 배포 환경을 완성했습니다. 
                      `,
        tags: ["React", "Python", "FastAPI", "PyTorch", "ResNet18", "OpenCV", "NumPy","LangGraph","Pandas","WSL2","Docker","GitHub"],
        color: "from-teal-500 to-emerald-400",
        videoUrl: "https://www.youtube.com/embed/99gKJIvHG3A",
        link:"https://drive.google.com/file/d/1TghHBH1uUafra6OU_vQpdol92gct6F1d/view?usp=drive_link"
    },
    {
        id: 3,
        title: "FFG (Fin Flow Guard)",
        subtitle: "Financial Fraud Detection System",
        description: `Rule Engine과 XGBoost+SHAP 하이브리드 모델을 결합한 금융 사기 탐지 시스템입니다. 금융 거래 발생 시 직전 거래 데이터와의 차이 분석 및 데이터 스키마 설계를 담당하였으며, 실시간으로 이상치를 발견하여 보안을 강화합니다.
                      
                      [트러블 슈팅: FDS 도메인 스키마 직접 설계 및 Rule+ML 하이브리드 스코어링 정규화]
도메인 특성상 실제 이상거래 데이터셋을 구하기 불가능한 한계가 있었습니다. 이를 해결하기 위해 이상거래 스키마를 직접 설계하고, 정상/사기 시뮬레이션 데이터를 직접 생성(Data Generation)하여 학습 환경을 구축했습니다.
직전 거래와의 시간차/금액차 등 직관적인 항목은 'Rule Engine'으로 즉시 차단하고, 복잡한 비선형적 거래 패턴은 'XGBoost 머신러닝 모델'에 위임하는 하이브리드 구조를 설계했습니다. 
하이브리드(Rule+ML) 시스템의 결과값을 합산할 때 판단 기준이 왜곡되는 문제를 막기 위해, 일관된 정규화(Normalization) 규칙을 수립하고 최종 위험도 점수(0~100점)로 산출하는 일관된 스코어링 체계를 완성하여 탐지 신뢰도를 극대화했습니다.
                      `,
        tags: ["Python", "XGBoost", "SHAP", "Java", "Spring Boot", "React", "Rule Engine", "MyBatis","GitHub"],
        color: "from-green-500 to-emerald-400",
        videoUrl: "https://www.youtube.com/embed/NED2g-EzZpY",
        link:"https://drive.google.com/file/d/1n2XhaDLpFUl_N8K-_HwGx4xVUPg12EqC/view?usp=drive_link"
    },
    {
        id: 4,
        title: "스마트 컨베이어",
        subtitle: "MobileNetV2 Inventory Management Solution",
        description: `MobileNetV2 딥러닝 모델을 활용한 실시간 자동 입고 관리 솔루션입니다. 컨베이어 벨트 위의 물체를 실시간 객체 인식(Object Detection)하여 수량을 자동으로 관리하고 바코드를 발급하는 데이터 파이프라인을 구축했습니다.
                      
                      [트러블 슈팅: 비전 모델 성능 한계 극복을 위한 Data-Centric 파이프라인 구축]
초기 8가지 항목 분류를 위해 Custom CNN 모델을 설계하고 레이어 심층화 및 하이퍼파라미터 튜닝을 진행했으나 인식률이 저조했습니다. 
경량화 전이 학습 모델인 MobileNetV2로 전환한 후에도 실무 도입 기준 성능에 미치지 못하는 한계에 부딪혔습니다.
원인이 '배경 노이즈와 데이터 품질'에 있음을 파악하고, 모델 구조 개선에서 데이터 중심(Data-centric) 최적화로 전략을 전면 수정했습니다. 
첫째, YOLO 모델을 전처리 파이프라인에 도입하여 컨베이어 벨트 등의 배경 노이즈를 제거하고 핵심 객체 이미지만 크롭(Crop)하도록 구성했습니다.
둘째, 확보된 12,000장 규모의 데이터셋을 직접 육안으로 전수 검사하여 오레이블링 및 저품질 노이즈 데이터를 완벽하게 정제(Data Cleansing)했습니다.

그 결과, 모델이 온전히 객체의 특징(Feature)에만 집중할 수 있게 되면서 최종 분류 정확도 99% 이상을 달성, 실시간 자동 입고 솔루션의 상용화 수준 신뢰도를 확보했습니다.`,
        tags: ["Custom CNN", "MobileNetV2","YOLO", "TensorFlow", "Keras", "OpenCV", "Streamlit", "Data Pipeline"],
        color: "from-orange-500 to-amber-400",
        videoUrl: "https://www.youtube.com/embed/ae31c0gbF2Q",
        link:"https://youtu.be/ae31c0gbF2Q"
    },
    {
        id: 5,
        title: "태양열 발전 예측 모델",
        subtitle: "ML-Based Solar Power Forecasting",
        description: `AI 머신러닝 기반의 태양열 발전량 예측 시스템입니다. 기상 데이터 분석 및 전처리를 수행하고, 시계열 예측(Time-Series Forecasting) 기법을 적용하여 과거 기록을 바탕으로 당일 발전량을 정밀하게 예측하는 모델을 구현했습니다.

[트러블 슈팅: EDA 기반 데이터 전처리 목표 수립 및 시각화 검증 파이프라인 구축]
머신러닝 프로젝트에 처음 도전하며, 수많은 기상 변수 중 어떤 컬럼을 선별하고 전처리해야 할지 방향을 설정하는 데 어려움이 있었습니다. 이를 해결하기 위해 체계적인 탐색적 데이터 분석(EDA) 시각화 기법을 도입했습니다.

변수별 데이터 분포도, 피처 간 상관관계 히트맵(Heatmap)을 분석하여 데이터의 특성을 파악하고 명확한 전처리 3대 목표를 수립했습니다.
1. 도메인 지식 기반 노이즈 제거: 태양열 발전이 불가능한 '밤 시간대 데이터'를 과감히 삭제하여 모델 학습 왜곡 방지
2. 데이터 품질 고도화: 분포도를 이탈하는 이상치(Outlier) 완벽 제거
3. 차원 축소: 타겟과 상관계수가 높은 핵심 기상 변수 컬럼만 최종 피처로 선별

모델 평가 단계에서는 단순 수치 검증을 넘어, 실측값과 예측값의 산점도를 시각화해 오차(Residual) 패턴을 눈으로 추적했습니다. 피처 중요도(Feature Importance) 분석과 결정계수($R^2$ Score) 평가를 종합적으로 연계하며 모델 성능을 검증하는 프로세스를 확립했고, 결과적으로 정교한 데이터 전처리가 ML 모델 성능의 결정적 열쇠임을 입증했습니다.`,
        tags: ["Python", "XGBoost", "Linear Regression", "R2 Score", "RMSE", "Data Pipeline", "Streamlit", "Matplotlib", "Seaborn", "Pandas","NumPy","Streamlit"],
        color: "from-yellow-400 to-orange-500",
        videoUrl: "https://www.youtube.com/embed/FWjxd8SWhuU",
        link:"https://drive.google.com/file/d/1FAJzd0bNaEE5WGr6G5m1yGrsFwSVPT8B/view?usp=drive_link"
    },
    {
        id: 6,
        title: "캘린더 AI",
        subtitle: "HuggingFace-Based Schedule Manager",
        description: `HuggingFace의 NLP 모델을 활용한 일정 요약 및 메모 기능을 제공하는 스마트 캘린더 서비스입니다. FullCalendar 라이브러리를 연동하여 복잡한 일정을 AI가 자동으로 요약하고 직관적으로 관리할 수 있는 UI/UX를 개발했습니다.

[트러블 슈팅: 극한의 타임라인 극복 및 자율적 애자일 협업]
심화 과정 중 사정상 다른 팀보다 4일 늦게 합류하여(목요일 합류, 금요일 제출), 단 7시간 만에 프로젝트를 완성해야 하는 극한의 시간적 제약이 있었습니다. 

기존 팀원들과의 이전 프로젝트 경험을 바탕으로, 세세한 역할 분담에 시간을 쏟는 대신 '자율적 협업' 방식을 채택했습니다. 
팀원들은 각자의 전문성에 따라 1. 메인 기능 고도화 2. 부가 기능 및 UI 디테일 3. 기본 아키텍처 세팅 및 배포 4. 발표 자료 작성 등으로 즉각 흩어져 작업을 개시했습니다. 별도의 지시 없이도 서로의 공백을 실시간으로 메우는 유기적인 협업을 수행했습니다.

그 결과, 불가능해 보였던 7시간이라는 짧은 시간 내에 핵심 기능을 갖춘 MVP(Minimum Viable Product)를 성공적으로 배포했으며, 최단 시간 내 최상의 팀워크를 발휘한 사례로 교수님의 극찬을 받으며 협업 역량을 증명했습니다.`,
        tags: ["Python", "React", "Spring Boot", "Flask", "FullCalendar", "Agile Collaboration", "Rapid Prototyping"],

        color: "from-purple-500 to-indigo-500",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        link: "https://drive.google.com/file/d/1VOb4SALR1sdzixY59rS19j9V-9ja4nAQ/view?usp=drive_link"
    },
    {
        id: 7,
        title: "여행담기",
        subtitle: "MVC-Based Tourism Information Portal",
        description: `대용량 XML 공공데이터 파싱 기술을 활용한 국내 여행 정보 공유 사이트입니다. MVC 아키텍처 패턴을 기반으로 JSP와 Java를 연동하여 견고한 데이터 처리 로직을 구현하였으며, 대규모 공공데이터를 효율적으로 렌더링하는 웹 서비스를 구축했습니다.

[트러블 슈팅: 대용량 공공데이터 적재 아키텍처 설계 및 자체 맞춤 추천 알고리즘 구현]
인생 첫 개발 프로젝트로서, 방대한 API 데이터의 처리 방식과 사용자 맞춤 추천 로직 구현에 있어 구조적인 의사결정과 문제 해결이 필요했습니다.
첫째, 데이터 파이프라인 최적화입니다. 초기엔 Node.js 기반의 실시간 API 호출을 검토했으나, 외부 API 서버 장애나 네트워크 지연 시 서비스 전체가 중단되는 병목 현상을 파악했습니다. 이에 XML 공공데이터를 주기적으로 파싱하여 자체 DB(Oracle)에 일괄 적재(Batch Insert)하는 구조로 전환, 서비스 응답 속도를 대폭 개선하고 데이터의 무결성을 확보했습니다.
둘째, 자체 맞춤형 추천 알고리즘 설계입니다. 복잡한 머신러닝 라이브러리 없이도 정밀한 추천을 제공하기 위해, 데이터의 '카테고리'와 '지역 코드' 메타데이터를 활용한 콘텐츠 기반 추천(Content-Based Filtering) 로직을 직접 구현했습니다. 
사용자가 '좋아요'를 누른 히스토리를 분석하여 선호 카테고리 최빈값(Rank 1)과 선호 지역 코드 최빈값(Rank 1)을 추출하고, 이를 결합 조건으로 매칭하여 최적의 맞춤 여행지를 큐레이션하는 알고리즘을 완성했습니다.

결과적으로 대규모 외부 데이터 연동부터 DB 설계, 사용자 취향 분석 알고리즘까지 웹 개발 전 과정을 주도적으로 해결하며 견고한 아키텍처 설계의 뼈대를 다졌습니다.`,
        tags: ["MVC Pattern", "JSP", "Java", "Spring Boot", "Oracle SQL", "XML Parsing"],
        color: "from-pink-500 to-rose-400",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
];

export const skillsData = [
    {
        category: "Backend & Architecture",
        skills: [
            "Java", "Spring Boot", "Python", "Flask", "FastAPI", "Node.js",
            "JSP/Servlet", "MVC Pattern", "Open API / XML Parsing", "Streamlit","PyTorch","TensorFlow"
        ]
    },
    {
        // ★ 카테고리명을 모델을 아우를 수 있도록 직관적으로 수정
        category: "AI Models & Orchestration",
        skills: [
            // 1. LLM & 에코시스템 (자비스2 등)
            "RAG System", "LLM Orchestration", "LangChain", "Hugging Face",
            "Gemini 2.5 Flash", "Gemma", "Ollama", "LlamaParse", "Vector DB",

            // 2. 비전 & 딥러닝 (메디코어 등)
            "Deep Learning", "ResNet", "MobileNet", "Image Processing",

            // 3. 머신러닝 & 시계열 (FFG, 태양열 예측 등)
            "XGBoost", "LightGBM", "Random Forest", "Time-Series Forecasting",
            "SHAP (XAI)", "Rule Engine"
        ]
    },
    {
        category: "Frontend",
        skills: [
            "React", "Vue.js", "JavaScript", "HTML5/CSS3", "Tailwind CSS", "jQuery"
        ]
    },
    {
        category: "Database & Tools",
        skills: [
            "PostgreSQL (pgvector)", "Oracle", "MySQL", "MariaDB",
            "Git/GitHub", "Docker", "Kafka", "Jira", "Notion",
            "IntelliJ", "VS Code","Slack","WsL2"
        ]
    }
];

