import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button.jsx";

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past threshold
      setIsScrolled(currentScrollY > 50);

      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white-smoke">
      <style>{`
        :root {
          --primary: #394867;
          --accent: #3A7CA5;
          --accent-dark: #6A8DAD;
          --gray-50: #F4F6F8;
          --gray-100: #E9E4DA;
          --gray-900: #555F6A;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity"
            >
              ABHISHEK
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                About
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-[var(--primary)] hover:bg-gray-800 text-white px-6"
              >
                Contact Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                About
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-[var(--primary)] hover:bg-gray-800 text-white mt-2"
              >
                Book a Session
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
}