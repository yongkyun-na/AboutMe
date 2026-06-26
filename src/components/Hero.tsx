import { motion } from "motion/react";
import { ArrowDown, Cpu, Award, GraduationCap, ChevronRight } from "lucide-react";
import { PROFILE_DATA } from "../types";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const tagVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  };

  const handleScrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-primary-50 via-white to-neutral-50"
    >
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary-200/40 rounded-full blur-[100px] -z-10 animate-pulse duration-[8000ms]"></div>
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-blue-100/30 rounded-full blur-[80px] -z-10 animate-pulse duration-[6000ms]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div
            id="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Top Subtitle */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-white border border-neutral-200/80 px-3 py-1.5 rounded-full shadow-sm w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              <span className="text-xs font-mono font-bold text-neutral-600 tracking-wider uppercase">
                AP SYSTEMS · GLOBAL GROWTH STRATEGY
              </span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-neutral-900 tracking-tight leading-[1.15] mb-6"
            >
              기술과 전략을 잇는<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                비즈니스 아키텍트
              </span>
            </motion.h1>

            {/* Introduction Bio */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl font-normal"
            >
              포항공대 AI·로봇 공학 석사, 스탠퍼드 경영공학 박사를 거쳐 삼성전자, 씨젠, 그리고 AP시스템의 전략기획을 주도해 왔습니다. <strong className="text-neutral-900 font-semibold">장비와 자동화 기술의 구조적 가치</strong>를 정확히 꿰뚫고, 이를 기업의 폭발적 성장을 위한 기획·투자 전략으로 변환합니다.
            </motion.p>

            {/* Main CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-10">
              <button
                id="hero-cta-timeline"
                onClick={() => handleScrollToSection("#timeline")}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-all shadow-md hover:shadow-lg hover:shadow-primary-600/15 duration-200"
              >
                <span>경력 히스토리 보기</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                id="hero-cta-contact"
                onClick={() => handleScrollToSection("#contact")}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 text-neutral-800 font-semibold transition-all duration-200"
              >
                <span>비즈니스 제안 및 문의</span>
              </button>
            </motion.div>

            {/* Micro Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {["반도체·디스플레이", "AI · 로봇공학", "분자진단 자동화", "M&A 및 신사업 성장전략"].map((tag, idx) => (
                <motion.span
                  id={`hero-tag-${idx}`}
                  variants={tagVariants}
                  key={tag}
                  className="px-3 py-1 rounded-md bg-neutral-100 border border-neutral-200/50 text-xs font-medium text-neutral-600 font-sans"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Profile Board */}
          <motion.div
            id="hero-profile-visual"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-xl shadow-neutral-100">
              {/* Profile Card Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold font-sans shadow-md">
                  NY
                </div>
                <div>
                  <h2 className="text-xl font-sans font-bold text-neutral-900 leading-none">
                    {PROFILE_DATA.name}
                  </h2>
                  <p className="text-xs text-neutral-500 font-semibold mt-1.5 font-mono">
                    Yongkyun Na, Ph.D.
                  </p>
                </div>
              </div>

              {/* Quick Details List */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-neutral-50 hover:bg-neutral-100/50 transition-colors duration-200 border border-neutral-100">
                  <div className="mt-0.5 p-1.5 rounded-lg bg-primary-100 text-primary-700">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-sans font-bold text-neutral-800">현재 직위</h3>
                    <p className="text-sm text-neutral-600 mt-0.5">
                      AP시스템 전략기획 담당 전무
                    </p>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      경영지원본부 성장전략 TF장
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-neutral-50 hover:bg-neutral-100/50 transition-colors duration-200 border border-neutral-100">
                  <div className="mt-0.5 p-1.5 rounded-lg bg-blue-100 text-blue-700">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-sans font-bold text-neutral-800">학력 사항</h3>
                    <p className="text-xs text-neutral-600 mt-1 flex flex-col space-y-1 font-sans">
                      <span>• Stanford Univ. 경영공학 박사</span>
                      <span>• 포항공대(POSTECH) AI·로봇 석사</span>
                      <span>• 한양대학교 전자전기공학 학사</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-neutral-50 hover:bg-neutral-100/50 transition-colors duration-200 border border-neutral-100">
                  <div className="mt-0.5 p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-sans font-bold text-neutral-800">주요 테크 트랙</h3>
                    <p className="text-sm text-neutral-600 mt-0.5">
                      반도체·디스플레이 Fab 자동화, 로봇공학, 분자진단 자동화 하드웨어
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Item */}
              <div className="absolute -bottom-4 -left-4 bg-neutral-900 text-white rounded-2xl px-4 py-3 shadow-lg flex items-center space-x-2 border border-neutral-800">
                <span className="text-lg">📖</span>
                <div>
                  <p className="text-[10px] text-neutral-400 leading-none">최신 출간 저서</p>
                  <p className="text-xs font-sans font-bold mt-1">프로 직장인의 성장 시크릿</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden sm:flex flex-col items-center space-y-1 opacity-70">
        <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="p-1 rounded-full bg-white border border-neutral-200 shadow-sm"
        >
          <ArrowDown className="w-3 h-3 text-neutral-500" />
        </motion.div>
      </div>
    </section>
  );
}
