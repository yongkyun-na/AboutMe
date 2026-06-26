export interface TimelineItem {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string;
  details: string[];
}

export interface StrengthItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProfileInfo {
  name: string;
  role: string;
  company: string;
  education: string[];
  summary: string;
}

export const PROFILE_DATA: ProfileInfo = {
  name: "나용균",
  role: "전략기획 담당 전무 (성장전략 TF장)",
  company: "AP시스템",
  education: [
    "한양대학교 전자전기공학과 학사",
    "포항공과대학교(POSTECH) AI·로봇 전공 석사",
    "스탠퍼드 대학교(Stanford University) 경영공학 박사"
  ],
  summary: "삼성전자 생산기술/설비 전략, 씨젠 진단장비 개발, AP시스템 성장전략을 잇는 ‘기술 기반 전략기획형 임원’입니다. 반도체·디스플레이 장비, 자동화, AI/로봇, 분자진단 자동화 장비 등의 현장 이해와 학술적 전문성을 융합하여 미래 성장 동력을 설계합니다."
};

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "ap-system",
    period: "현재 (AP시스템)",
    company: "AP시스템 (AP Systems)",
    role: "전략기획 담당 전무 / 경영지원본부 성장전략 TF장",
    description: "차세대 성장 동력 및 반도체 신사업 확장을 이끄는 컨트롤 타워 역할을 수행하고 있습니다.",
    details: [
      "디스플레이 중심 사업 포트폴리오를 다변화하여 반도체 장비 부문 경쟁력 강화",
      "HBM(고대역폭메모리), 유리기판·인터포저 기반 첨단 패키징 시장 전략 수립",
      "RTP(급속열처리장비) 및 레이저 장비 등 차세대 반도체 신사업 성장 기회 발굴 및 투자 로드맵 구축",
      "대기업 출신 핵심 기술 인재 영입 및 협력 파트너십 구축 주도"
    ]
  },
  {
    id: "seegene",
    period: "이전 (씨젠)",
    company: "씨젠 (Seegene)",
    role: "진단장비 개발 연구소장 / 상무",
    description: "바이오 테크와 정밀 자동화 하드웨어를 융합하여, 글로벌 분자진단 시장의 혁신 장비를 탄생시켰습니다.",
    details: [
      "Full-Auto 분자진단 자동화 장비의 원천 기술 개발 및 엔지니어링 리드",
      "복잡한 분자진단 프로세스를 자동화 기기 내에 고도로 통합(System Integration)하는 양산 모델 설계",
      "글로벌 시장 출시에 필요한 신뢰성 확보 및 대량 양산 프로세스 구축"
    ]
  },
  {
    id: "samsung",
    period: "이전 (삼성전자)",
    company: "삼성전자 (Samsung Electronics)",
    role: "반도체 설비 조직 전략기획 / 생산기술·설비 자동화 SW 엔지니어",
    description: "생산 현장의 하부 자동화 SW 엔지니어로 커리어를 시작해, 핵심 설비 조직의 의사결정을 돕는 전략기획 전문가로 활약했습니다.",
    details: [
      "반도체 및 디스플레이 Fab 자동화 SW 엔지니어로서 실무 설계 및 운영 경험 축적",
      "스탠퍼드 박사 학위 취득 후, 반도체 설비 부문 중장기 기술 로드맵 및 설비 전략 기획 수립",
      "해외 주요 파트너사 협상 및 기술 투자 파트너십 기획·조사·운영 총괄"
    ]
  }
];

export const STRENGTHS_DATA: StrengthItem[] = [
  {
    id: "strength-1",
    title: "기술과 전략의 완전한 결합",
    description: "AI·로봇공학 석사와 스탠퍼드 경영공학 박사 학위를 기반으로, 하부 기술 원리(SW, 장비, 자동화)를 철저히 이해하고 이를 고도의 경영 전략으로 변환합니다.",
    icon: "Cpu"
  },
  {
    id: "strength-2",
    title: "이종 산업 융합 및 비즈니스 다변화",
    description: "삼성전자의 초미세 반도체 생산 기술, 씨젠의 초정밀 바이오 진단 장비 개발, 그리고 AP시스템의 첨단 장비 성장 전략을 아우르는 글로벌 스펙트럼을 보유하고 있습니다.",
    icon: "Boxes"
  },
  {
    id: "strength-3",
    title: "미래 성장 엔진 설계 및 실행력",
    description: "HBM, 첨단 패키징(유리기판/인터포저), 차세대 레이저/RTP 등 급변하는 하이테크 환경에서 조직이 나아갈 기술적 돌파구를 제시하고, 파트너십과 핵심 인재 영입으로 이를 현실화합니다.",
    icon: "Compass"
  }
];
