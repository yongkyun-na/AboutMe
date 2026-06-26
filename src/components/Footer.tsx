import { ExternalLink, GraduationCap, Code } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-neutral-800 pb-12">
          
          {/* Logo / Brand Info */}
          <div className="md:col-span-5">
            <a
              id="footer-logo"
              href="#hero"
              onClick={handleScrollToTop}
              className="flex items-center space-x-2"
            >
              <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center text-white font-mono font-bold text-base shadow-sm">
                NY
              </div>
              <span className="font-sans font-bold text-lg tracking-tight text-white">
                나용균 전무
              </span>
            </a>
            <p className="mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm font-normal">
              포항공대 AI·로봇공학 석사 및 Stanford 대학교 경영공학 박사.
              삼성전자, 씨젠, AP시스템을 아우르는 기술 전략기획 리더로서, 조직의 미래 지속성장 동력을 설계합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-neutral-300 uppercase mb-4">
              SITE MAP
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-neutral-400">
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">프로필 요약</a>
              </li>
              <li>
                <a href="#strengths" className="hover:text-primary-400 transition-colors">핵심 강점</a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-primary-400 transition-colors">경력 히스토리</a>
              </li>
              <li>
                <a href="#press" className="hover:text-primary-400 transition-colors">저서 및 보도</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">비즈니스 제안</a>
              </li>
            </ul>
          </div>

          {/* Verification Resources */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold tracking-wider text-neutral-300 uppercase mb-4">
              EXTERNAL VERIFICATION
            </h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li className="flex items-center space-x-2">
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                <a
                  id="footer-kyobo-link"
                  href="https://store.kyobobook.co.kr/person/detail/1121231401"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  교보문고 공식 인물 등록 정보
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                <a
                  id="footer-kind-link"
                  href="https://kind.krx.co.kr/common/disclsviewer.do?acptno=20250814002799&docno=&method=search&viewerhost="
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  KRX KIND 공식 기업 경영 반기보고서
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                <a
                  id="footer-dealsite-link"
                  href="https://dealsite.co.kr/articles/141258"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  딜사이트 &apos;삼성맨&apos; 영입 반도체 장비 강화 보도
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                <a
                  id="footer-digitaltoday-link"
                  href="https://www.digitaltoday.co.kr/news/articleView.html?idxno=662103"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  디지털투데이 보통주 보유 공시 보도
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500">
          <p className="mb-4 sm:mb-0">
            &copy; {currentYear} Na Yong-kyun. All rights reserved.
          </p>
          <div className="flex items-center space-x-1.5 font-sans font-medium text-[10px] tracking-wide uppercase bg-neutral-950 px-3 py-1.5 rounded-lg border border-neutral-800">
            <Code className="w-3.5 h-3.5 text-neutral-400" />
            <span>Verified Professional Profile Card</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
