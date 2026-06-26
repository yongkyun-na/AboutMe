import { motion } from "motion/react";
import { Briefcase, Milestone, CheckCircle2 } from "lucide-react";
import { TIMELINE_DATA } from "../types";

export default function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="timeline" className="py-24 bg-white border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-mono font-bold text-primary-600 tracking-wider uppercase">
            CAREER ROADMAP
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-neutral-900 tracking-tight">
            기술 엔지니어에서 전략기획 임원까지
          </p>
          <p className="mt-4 text-sm text-neutral-500 max-w-xl mx-auto leading-relaxed">
            나용균 전무의 커리어는 굳건한 기술 지식과 경영공학 박사로서의 거시적 경영 관점이 어떻게 조화롭게 수렴되어 왔는지를 보여주는 발자취입니다.
          </p>
          <div className="mt-4 h-1 w-12 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Component Area */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-neutral-200 -translate-x-1/2"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            {TIMELINE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  id={`timeline-item-${item.id}`}
                  variants={itemVariants}
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge (Center Dot) */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white border-4 border-primary-600 flex items-center justify-center shadow-md">
                      <Briefcase className="w-4 h-4 text-primary-600" />
                    </div>
                  </div>

                  {/* Empty space for grid on large screens */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="bg-neutral-50 p-6 sm:p-8 rounded-2xl border border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-md transition-all duration-300">
                      
                      {/* Company & Role */}
                      <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 font-sans mb-3 border border-primary-100">
                        {item.period}
                      </span>
                      
                      <h3 className="text-xl font-bold text-neutral-900 font-sans tracking-tight">
                        {item.company}
                      </h3>
                      
                      <p className="text-sm font-semibold text-primary-600 mt-1">
                        {item.role}
                      </p>

                      <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-normal">
                        {item.description}
                      </p>

                      {/* Details Bullet Points */}
                      <div className="mt-6 border-t border-neutral-200/60 pt-5 space-y-3">
                        {item.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start space-x-2.5">
                            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Education Box as Timeline climax */}
        <div className="mt-20 max-w-2xl mx-auto bg-gradient-to-br from-primary-900 to-neutral-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-700/20 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary-200 shrink-0">
              <Milestone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-sans tracking-tight">탄탄한 공학·경영 학술 기반</h4>
              <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                나용균 전무는 <strong>한양대 전자전기공학(학사)</strong>의 하드웨어 기반 위에서 <strong>포항공대 AI·로봇(석사)</strong> 전공을 통해 소프트웨어와 인공지능 지식을 수립했으며, 최종적으로 세계 최고 명문인 <strong>스탠퍼드 대학교(Stanford University) 경영공학 박사</strong>를 취득하여 공학적 실무와 기업 성장 경영에 대한 혜안을 완성하였습니다.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
