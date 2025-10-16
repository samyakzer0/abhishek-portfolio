import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import StaggeredMenu from "./StaggeredMenu.jsx";

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

      {/* StaggeredMenu Navigation */}
      <StaggeredMenu
        position="right"
        items={[
          { label: 'Services', ariaLabel: 'View our services', link: '#services' },
          { label: 'Impact', ariaLabel: 'View our impact', link: '#impact' },
          { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
          { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
        ]}
        socialItems={[
          { label: 'Twitter', link: 'https://twitter.com' },
          { label: 'GitHub', link: 'https://github.com' },
          { label: 'LinkedIn', link: 'https://linkedin.com' }
        ]}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#394867"
        openMenuButtonColor="#6A8DAD"
        changeMenuColorOnOpen={true}
        colors={['#394867', '#6A8DAD']}
        logoUrl="/img/1753091925122.jpeg"
        accentColor="#3A7CA5"
        isFixed={true}
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
}