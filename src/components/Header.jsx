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

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-slate-900/85 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      >
        <div
          className={`absolute top-0 right-0 h-full w-3/4 max-w-xs bg-taxi-navy shadow-2xl border-l border-slate-800 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
              <div className="bg-taxi-yellow text-black font-black px-2 py-0.5 rounded text-lg italic tracking-tighter">
                AJAY
              </div>
              <div className="text-white font-bold text-base uppercase tracking-wider">
                Menu
              </div>
            </div>

            {/* Menu Cards */}
            <div className="flex flex-col space-y-3">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="w-full text-left py-2.5 px-4 rounded-lg text-slate-300 hover:text-taxi-yellow hover:bg-slate-800/50 transition-all text-sm font-medium capitalize"
                >
                  {section === "contact" ? "Contact Us" : section}
                </button>
              ))}

              {/* Call Now Card */}
              <button
                onClick={() => handleCall(phoneNumber)}
                className="mt-4 w-full py-3 bg-taxi-yellow text-black text-center text-xs font-bold uppercase tracking-wider rounded-full active:scale-95 shadow-lg transition-transform"
              >
                📞 Speak with Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
