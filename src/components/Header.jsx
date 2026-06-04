// components/Header.jsx
"use client";

import { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `/${id}`);
    }
    setMobileMenuOpen(false);
  };

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  const sections = ["about", "services", "fleet", "pricing", "contact"];
  const phoneNumber = "+917878329410";

  return (
    <>
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 border-b-4 border-taxi-yellow ${
          scrolled
            ? "bg-taxi-navy/95 backdrop-blur shadow-lg py-2"
            : "bg-taxi-navy py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="bg-taxi-yellow text-black font-black px-2.5 py-1 rounded text-xl italic tracking-tighter">
              AJAY
            </div>
            <div className="text-white font-bold text-lg sm:text-xl tracking-tight uppercase">
              Taxi Service
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center text-slate-300 text-sm font-semibold tracking-wide">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-taxi-yellow transition-colors duration-200 capitalize cursor-pointer"
              >
                {section === "contact" ? "Contact Us" : section}
              </button>
            ))}
            <button
              onClick={() => handleCall(phoneNumber)}
              className="ml-4 px-5 py-2 bg-taxi-yellow text-black hover:bg-yellow-400 font-bold rounded-full text-xs uppercase tracking-wider transition-transform active:scale-95 cursor-pointer shadow-md hover:shadow-yellow-400/20"
            >
              Call: +91 78783 29410
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none p-1 cursor-pointer"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6 text-taxi-yellow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-taxi-yellow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu - Rendered OUTSIDE of header as sibling to prevent layout clipping and positioning bugs */}
      <div
        className={`fixed inset-0 z-[9999] md:hidden bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      >
        <div
          className={`absolute top-0 right-0 h-full w-3/4 max-w-xs bg-slate-900 shadow-2xl border-l border-slate-800 transform transition-transform duration-300 ease-in-out flex flex-col ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="bg-taxi-yellow text-black font-black px-2 py-0.5 rounded text-lg italic tracking-tighter">
                    AJAY
                  </div>
                  <div className="text-white font-extrabold text-sm uppercase tracking-wider">
                    Menu
                  </div>
                </div>
                {/* Dedicated Close Button */}
                <button
                  onClick={toggleMobileMenu}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/40 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col space-y-2">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="w-full text-left py-3 px-4 rounded-xl text-slate-300 hover:text-taxi-yellow hover:bg-slate-800/50 transition-all text-sm font-bold capitalize flex items-center justify-between group"
                  >
                    <span>{section === "contact" ? "Contact Us" : section}</span>
                    <span className="opacity-0 group-hover:opacity-100 text-taxi-yellow transition-opacity">→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Panel */}
            <div className="pt-6 border-t border-slate-800 space-y-4">
              <div className="text-center">
                <span className="text-[10px] text-slate-500 font-extrabold tracking-widest uppercase block mb-1">Need Immediate Cab?</span>
                <button
                  onClick={() => handleCall(phoneNumber)}
                  className="w-full py-4 bg-taxi-yellow text-black text-center text-xs font-black uppercase tracking-wider rounded-xl active:scale-95 shadow-lg shadow-yellow-500/10 transition-transform flex items-center justify-center gap-2"
                >
                  📞 Speak with Us
                </button>
              </div>
              <div className="text-center text-[10px] text-slate-500 font-bold tracking-tight">
                Sikar &amp; Jaipur • 24/7 Help
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
