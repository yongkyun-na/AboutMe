import { motion } from "motion/react";
import { GraduationCap, Briefcase, Award, TrendingUp, BookOpen, Quote } from "lucide-react";
import { PROFILE_DATA } from "../types";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 bg-white border-b border-neutral-200/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold text-primary-600 tracking-wider uppercase">
            EXECUTIVE SUMMARY
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-neutral-900 tracking-tight">
            전략과 기술을 양손에 쥔 비즈니스 리더
          </p>
          <div className="mt-4 h-1 w-12 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        {/* Executive Statement Box */}
        <div className="bg-neutral-50 rounded-3xl p-6 sm:p-10 border border-neutral-200/80 max-w-4xl mx-auto mb-16 shadow-sm relative overflow-hidden">
          {/* Decorative quotes */}
          <div className="absolute -top-4 -left-2 text-neutral-200/50 pointer-events-none select-none">
            <Quote className="w-24 h-24 transform rotate-180" />
          </div>
          
          <div className="relative z-10 text-center sm:text-left">
            <p className="text-lg sm:text-xl text-neutral-800 font-sans font-medium leading-relaxed mb-6">
              &ldquo;{PROFILE_DATA.summary}&rdquo;
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-neutral-200/60 pt-6">
              <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4 sm:mb-0">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold font-mono text-xs">
                  NY
                </div>
                <div>
                  <span className="font-bold text-neutral-900 text-sm">나용균 박사 · 전무</span>
                  <span className="text-neutral-400 mx-2 text-xs">|</span>
                  <span className="text-neutral-500 text-xs font-medium">AP시스템 성장전략 TF장</span>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700 border border-primary-100 font-mono">
                  #Technology_Strategy
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid: Core Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 학력 카드 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 font-sans mb-3">학문적 탄탄함</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                이론적 지식과 정교한 방법론을 바탕으로 혁신적 분석과 장기 기획 방향을 제시합니다.
              </p>
              <ul className="space-y-2 border-t border-neutral-100 pt-4 text-xs font-medium text-neutral-700">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span>Stanford Univ. 경영공학 박사 (Ph.D.)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span>포항공대(POSTECH) AI·로봇 석사</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span>한양대학교 전자전기공학과 학사</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 text-xs text-neutral-400 font-mono">EDUCATIONAL FOUNDATION</div>
          </motion.div>

          {/* 주요 기업 경력 카드 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-5 border border-primary-100">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 font-sans mb-3">융합 비즈니스 이력</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                반도체·디스플레이 공정 자동화 대기업(삼성), 정밀 의료 바이오 기기 중견(씨젠), 차세대 장비 강소(AP시스템)를 관통하는 하이테크 커리어를 다져왔습니다.
              </p>
              <ul className="space-y-2 border-t border-neutral-100 pt-4 text-xs font-medium text-neutral-700">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                  <span>AP시스템 전략기획 전무 / 성장전략 TF장</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                  <span>씨젠 진단장비 개발 연구소장 / 상무</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                  <span>삼성전자 설비 전략기획 및 HW/SW 엔지니어</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 text-xs text-neutral-400 font-mono">CROSS-INDUSTRY EXPERTISE</div>
          </motion.div>

          {/* 리더십 강점 및 포지셔닝 카드 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between md:col-span-2 lg:col-span-1"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 font-sans mb-3">전략기획형 임원 포지션</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                단순한 재무/기획 담당자가 아닌, 최하단 현장의 복잡한 기술 프로세스를 직접 겪어보고 다루어 본 &lsquo;기술 구동형 기획자&rsquo;입니다.
              </p>
              <ul className="space-y-2 border-t border-neutral-100 pt-4 text-xs font-medium text-neutral-700">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>자동화 솔루션 및 로봇 시스템 개발 능력</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>신산업 M&A, 핵심 기술 투자 로드맵 기획</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>글로벌 파트너십 구축 및 상생 생태계 리드</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 text-xs text-neutral-400 font-mono">EXECUTIVE POSITIONING</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
