import { useState } from "react";
import { Send, CheckCircle2, Mail, Info, Linkedin } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "business",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("모든 필수 항목을 입력해주세요.");
      return;
    }

    setError("");
    
    // Simulating API or storing to local storage as mock feedback
    const savedMessages = JSON.parse(localStorage.getItem("contact_messages") || "[]");
    savedMessages.push({
      ...formData,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    });
    localStorage.setItem("contact_messages", JSON.stringify(savedMessages));

    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "business", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold text-primary-600 tracking-wider uppercase">
            CONTACT & PARTNERSHIPS
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-neutral-900 tracking-tight">
            새로운 가능성의 연결
          </p>
          <p className="mt-4 text-sm text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            HBM, 유리기판, 차세대 패키징 및 기술 전략 투자 협업을 제안하고 싶으시거나, 저서 및 강연에 대한 비즈니스 연락이 필요하시면 언제든 남겨주십시오.
          </p>
          <div className="mt-4 h-1 w-12 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Contact Info (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-50 rounded-3xl p-8 border border-neutral-200 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-neutral-900 font-sans tracking-tight mb-4">
                비즈니스 오피스
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-8">
                AP시스템 본사 성장전략 TF를 통해 공식 검토를 받으실 수 있으며, 하단의 양식을 이용해 직접적인 메일링 전송이 가능합니다.
              </p>

              {/* Direct Mail Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3.5 p-4 bg-white rounded-2xl border border-neutral-100">
                  <div className="p-2.5 rounded-xl bg-primary-50 text-primary-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-neutral-400 uppercase font-semibold">
                      DIRECT EMAIL
                    </span>
                    <a
                      id="direct-email-link"
                      href="mailto:YongkyunNa@gmail.com"
                      className="text-sm font-semibold text-neutral-800 hover:text-primary-600 transition-colors"
                    >
                      YongkyunNa@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5 p-4 bg-white rounded-2xl border border-neutral-100">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-neutral-400 uppercase font-semibold">
                      PROFESSIONAL NETWORK
                    </span>
                    <span className="text-sm font-semibold text-neutral-800">
                      LinkedIn 공식 프로필 연결
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning / Notes */}
            <div className="mt-8 pt-6 border-t border-neutral-200/60 text-xs text-neutral-400 flex items-start space-x-2">
              <Info className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
              <p className="leading-normal">
                메시지는 나용균 전무의 비즈니스 채널로 전달되며, 보안이 필요한 사업적 기밀 제안의 경우 암호화 처리 후 공식 절차를 거치게 됩니다.
              </p>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm flex flex-col justify-center">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald-100">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 font-sans tracking-tight">
                  문의 접수가 완료되었습니다
                </h3>
                <p className="mt-3 text-sm text-neutral-500 max-w-sm mx-auto leading-relaxed">
                  작성해 주신 제안 내용은 기재하신 이메일 연락처로 빠른 시일 내에 공식 검토 의견을 회신해 드리겠습니다. 감사합니다.
                </p>
                <button
                  id="reset-form-btn"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-neutral-200 hover:bg-neutral-50 text-neutral-700 text-sm font-semibold transition-colors"
                >
                  새로운 문의 남기기
                </button>
              </motion.div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-rose-50 border border-rose-100 text-rose-800 text-xs font-semibold rounded-xl">
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-sans font-bold text-neutral-700 mb-2">
                      제안자명 / 기업명 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="이름 또는 소속 회사"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-sm transition-all outline-none"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-sans font-bold text-neutral-700 mb-2">
                      회신 이메일 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-sm transition-all outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Subject Select */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-sans font-bold text-neutral-700 mb-2">
                    문의 주제 분류 <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-sm transition-all outline-none bg-white"
                  >
                    <option value="business">반도체·디스플레이 협업 및 제안</option>
                    <option value="investment">기술 투자 및 신사업 시너지 제안</option>
                    <option value="book">저서 『프로 직장인의 성장 시크릿』 강연/서평</option>
                    <option value="etc">기타 문의 사항</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-xs font-sans font-bold text-neutral-700 mb-2">
                    상세 제안 내용 <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="내용을 정교하게 적어주시면 검토에 큰 도움이 됩니다."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-sm transition-all outline-none resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    id="submit-contact-btn"
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors shadow-md shadow-primary-600/10 cursor-pointer"
                  >
                    <span>공식 제안 전송하기</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
