import { motion } from "motion/react";
import { Cpu, Boxes, Compass, TrendingUp, Zap, Server } from "lucide-react";
import { STRENGTHS_DATA } from "../types";

export default function Strengths() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Icon mapper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-6 h-6 text-primary-600" />;
      case "Boxes":
        return <Boxes className="w-6 h-6 text-blue-600" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-emerald-600" />;
      default:
        return <Zap className="w-6 h-6 text-primary-600" />;
    }
  };

  return (
    <section id="strengths" className="py-24 bg-neutral-50 border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold text-primary-600 tracking-wider uppercase">
            CORE COMPETENCIES & VALUE
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-neutral-900 tracking-tight">
            외부에서 바라보는 독보적인 3대 강점
          </p>
          <p className="mt-4 text-sm text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            나용균 전무의 이력은 엔지니어링의 정밀함과 경영 전술의 기민함을 조화롭게 갖춘, 하이테크 기업에 최적화된 기획 임원의 진면모를 보여줍니다.
          </p>
          <div className="mt-4 h-1 w-12 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        {/* Strengths Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {STRENGTHS_DATA.map((strength, index) => (
            <motion.div
              id={`strength-card-${strength.id}`}
              variants={cardVariants}
              key={strength.id}
              className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Card number watermark */}
              <div className="absolute top-4 right-6 text-8xl font-sans font-black text-neutral-100/50 pointer-events-none select-none group-hover:text-primary-50 transition-colors duration-300">
                0{index + 1}
              </div>

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center mb-6 relative z-10">
                {getIcon(strength.icon)}
              </div>

              {/* Title & Description */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-neutral-900 font-sans mb-4 group-hover:text-primary-600 transition-colors duration-200">
                  {strength.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  {strength.description}
                </p>
              </div>

              {/* Bottom decorative accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-blue-500 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Strategic Fit Panel */}
        <div className="mt-16 bg-white border border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 text-xs font-semibold mb-4">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>AP시스템과의 완벽한 정합성(Strategic Fit)</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-sans tracking-tight">
                반도체 장비 사업 본격화 및 미래 다변화의 주역
              </h3>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed max-w-3xl">
                AP시스템은 현재 디스플레이 의존도를 낮추고 RTP, 레이저 어닐링 장비 등 반도체 전공정 및 첨단 패키징(HBM, 유리기판·인터포저)으로 영역을 거세게 확장하고 있습니다. 나용균 전무의 삼성 생산기술·설비전략 경험은 이러한 전략 방향성과 완벽한 싱크로율을 이루며 주주와 기업 가치를 동시에 견인하고 있습니다.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 text-center w-full max-w-xs">
                <div className="text-xs text-neutral-400 font-mono tracking-wider">AP SYSTEMS NEWS REPORT</div>
                <div className="mt-3 text-3xl font-sans font-extrabold text-primary-600">3,600<span className="text-sm font-bold text-neutral-500 ml-1">주</span></div>
                <div className="mt-1.5 text-xs text-neutral-700 font-semibold">AP시스템 책임경영 지분 보유</div>
                <p className="mt-2 text-[11px] text-neutral-400 leading-normal">
                  2026년 상여 보상 및 보통주 취득을 통해 책임경영에 적극 임하고 있음이 보도됨
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
