import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "소개", href: "#about", id: "about" },
    { name: "핵심역량", href: "#strengths", id: "strengths" },
    { name: "경력스토리", href: "#timeline", id: "timeline" },
    { name: "저서 · 보도", href: "#press", id: "press" },
    { name: "문의", href: "#contact", id: "contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-neutral-200/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <a
              id="brand-logo"
              href="#hero"
              onClick={(e) => handleScrollTo(e, "#hero")}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-mono font-bold text-lg shadow-sm">
                NY
              </div>
              <div className="text-left">
                <span className="block font-sans font-bold text-lg tracking-tight text-neutral-900 leading-none">
                  나용균 전무
                </span>
                <span className="block font-sans text-xs text-neutral-500 font-medium tracking-wide mt-1">
                  AP시스템 전략기획
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  id={`nav-item-${item.id}`}
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-primary-600 font-semibold"
                      : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Call to Action Desktop */}
          <div className="hidden md:block">
            <a
              id="header-cta"
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="inline-flex items-center space-x-1 px-4 py-2 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-primary-600 transition-colors shadow-sm duration-200"
            >
              <span>연락하기</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-neutral-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {menuItems.map((item) => (
                <a
                  id={`mobile-nav-item-${item.id}`}
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium ${
                    activeSection === item.id
                      ? "text-primary-600 bg-primary-50 font-semibold"
                      : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 px-4">
                <a
                  id="mobile-cta"
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="w-full justify-center inline-flex items-center space-x-1 px-5 py-3 rounded-xl bg-neutral-900 text-white text-base font-semibold hover:bg-primary-600 transition-colors shadow-sm"
                >
                  <span>연락하기</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
