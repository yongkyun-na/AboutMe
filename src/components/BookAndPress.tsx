import { motion } from "motion/react";
import { BookOpen, ExternalLink, Newspaper, Database, GraduationCap, TrendingUp } from "lucide-react";

export default function BookAndPress() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const externalLinks = {
    kyoboBook: "https://store.kyobobook.co.kr/person/detail/1121231401",
    kindDiscls: "https://kind.krx.co.kr/common/disclsviewer.do?acptno=20250814002799&docno=&method=search&viewerhost=",
    digitalToday: "https://www.digitaltoday.co.kr/news/articleView.html?idxno=662103",
    dealSite: "https://dealsite.co.kr/articles/141258",
  };

  return (
    <section id="press" className="py-24 bg-neutral-50 border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold text-primary-600 tracking-wider uppercase">
            PUBLICATIONS & MEDIA
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-neutral-900 tracking-tight">
            저서 및 대외 공개 기록
          </p>
          <p className="mt-4 text-sm text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            나용균 전무의 경영 전문성과 커리어 로드맵, 그리고 기업 성장에 깊이 관여하고 있는 다양한 대외 공시 및 언론 기록을 확인할 수 있습니다.
          </p>
          <div className="mt-4 h-1 w-12 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Side: Book Cover and Info (5 cols) */}
          <motion.div
            id="book-section"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-md flex flex-col justify-between"
          >
            <div>
              {/* Tag */}
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-100 text-xs font-semibold mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                <span>베스트셀러 저서</span>
              </div>

              {/* Book Layout */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
                {/* Book Cover Mockup */}
                <div className="relative w-40 h-56 shrink-0 bg-gradient-to-br from-primary-800 to-neutral-900 rounded-lg shadow-xl shadow-neutral-400/40 border-l-[6px] border-primary-950 flex flex-col justify-between p-4 text-white overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  {/* Spine effect */}
                  <div className="absolute top-0 bottom-0 left-0 w-1 bg-white/10"></div>
                  
                  {/* Book header */}
                  <div className="text-[10px] font-mono tracking-widest text-primary-200 uppercase leading-none">
                    NY BOOK GROUP
                  </div>
                  
                  {/* Book Title */}
                  <div className="my-auto text-center">
                    <p className="text-sm font-sans font-extrabold tracking-wide leading-tight">
                      프로 직장인의<br />
                      <span className="text-primary-300">성장 시크릿</span>
                    </p>
                    <p className="text-[9px] text-neutral-400 mt-2">
                      성공적인 커리어 설계와 기술 전략가의 노하우
                    </p>
                  </div>
                  
                  {/* Book Author */}
                  <div className="text-right border-t border-white/10 pt-2">
                    <p className="text-[10px] font-semibold text-neutral-300">나용균 저</p>
                  </div>
                </div>

                {/* Book Text Description */}
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 font-sans tracking-tight">
                    『프로 직장인의 성장 시크릿』
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium mt-1">
                    교보문고 인물 최신 작가 등재
                  </p>
                  <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    글로벌 대기업, 바이오 기업, 코스닥 중견 장비사의 핵심 리더로 발돋움하며 얻은 실질적인 비즈니스 노하우와 직장에서 독보적 인재로 성장하는 구조화된 비밀을 제시하는 저서입니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-neutral-100 pt-6">
              <a
                id="kyobobook-link"
                href={externalLinks.kyoboBook}
                target="_blank"
                rel="noreferrer referrerPolicy"
                className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-neutral-900 hover:bg-primary-600 text-white text-sm font-semibold shadow-sm transition-colors duration-200"
              >
                <span>교보문고 저자 정보 및 구매</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Media and Disclosures List (7 cols) */}
          <motion.div
            id="press-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* KIND 공시 카드 */}
            <motion.div
              id="press-kind"
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 shrink-0">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-emerald-600 uppercase font-bold">
                      KRX KIND DISCLOSURE
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 font-sans tracking-tight mt-1">
                      KIND 반기보고서 임원 공시 정보
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      AP시스템 미등기 상근 전무로서 경영지원본부 성장전략 TF장을 맡고 있으며, 스탠퍼드(Stanford) 경영공학 박사 학위 소지 등의 정식 이력이 공시 보고서를 통해 증명됩니다.
                    </p>
                  </div>
                </div>
                <a
                  id="kind-discls-link"
                  href={externalLinks.kindDiscls}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg hover:bg-neutral-100 text-neutral-400 hover:text-neutral-900 transition-colors"
                  aria-label="KIND 공시 보기"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* 딜사이트 카드 */}
            <motion.div
              id="press-dealsite"
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-2 rounded-lg bg-primary-50 text-primary-700 border border-primary-100 shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-primary-600 uppercase font-bold">
                      DEALSITE NEWS REPORT
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 font-sans tracking-tight mt-1">
                      &apos;삼성맨&apos; 영입한 AP시스템, HBM 등 반도체 사업 강화
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      삼성전자 출신의 주요 인재 영입을 통한 반도체 영역 혁신 추진 보도. 유리기판 및 첨단 패키징 공정, RTP/레이저 장비 국산화 등의 핵심 성장 로드맵과 나용균 전무의 시너지를 다루었습니다.
                    </p>
                  </div>
                </div>
                <a
                  id="dealsite-link"
                  href={externalLinks.dealSite}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg hover:bg-neutral-100 text-neutral-400 hover:text-neutral-900 transition-colors"
                  aria-label="딜사이트 기사 보기"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* 디지털투데이 카드 */}
            <motion.div
              id="press-digitaltoday"
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 shrink-0">
                    <Newspaper className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-blue-600 uppercase font-bold">
                      DIGITAL TODAY MEDIA
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 font-sans tracking-tight mt-1">
                      보유 지분 변동 보고 및 책임경영 실천
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      2026년 4월 기준 AP시스템 보통주 3,600주 보유 공시 및 자사주 상여 보상을 통한 변동 내역 보고. 임원으로서 실적 견인 및 기업 가치 향상을 위한 주주와의 상생 의지를 시장에 전달하였습니다.
                    </p>
                  </div>
                </div>
                <a
                  id="digitaltoday-link"
                  href={externalLinks.digitalToday}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg hover:bg-neutral-100 text-neutral-400 hover:text-neutral-900 transition-colors"
                  aria-label="디지털투데이 기사 보기"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
