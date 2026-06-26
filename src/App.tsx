/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Strengths from "./components/Strengths";
import Timeline from "./components/Timeline";
import BookAndPress from "./components/BookAndPress";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "strengths", "timeline", "press", "contact"];
    const observers = sections.map((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        {
          rootMargin: "-20% 0px -60% 0px", // Trigger when the section occupies a good chunk of viewport
        }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  return (
    <div id="portfolio-app" className="min-h-screen flex flex-col font-sans bg-neutral-50 antialiased selection:bg-primary-100 selection:text-primary-900">
      {/* Dynamic Floating Header */}
      <Header activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Strengths />
        <Timeline />
        <BookAndPress />
        <Contact />
      </main>

      {/* Beautiful Informative Footer */}
      <Footer />
    </div>
  );
}

