import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube, Mail, Phone, ExternalLink } from "lucide-react";

export default function FooterSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <footer id="contact" className="bg-white-smoke text-gray-900 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Left Section - CTA & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-gray-900">
                LET'S WORK
                <br />
                <span className="text-gray-600">TOGETHER</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ready to transform your communication skills? Let's discuss how we can work together to achieve your goals.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-500" />
                <a
                  href="mailto:abhishekthakur2771999@gmail.com"
                  className="text-[#3A7CA5] hover:text-[#6A8DAD] transition-colors font-medium"
                >
                  abhishekthakur2771999@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-500" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Quick Links</h3>
            <nav className="space-y-3">
              <a href="#hero" className="block text-gray-700 hover:text-[#3A7CA5] transition-colors py-1">Home</a>
              <a href="#about" className="block text-gray-700 hover:text-[#3A7CA5] transition-colors py-1">About</a>
              <a href="#services" className="block text-gray-700 hover:text-[#3A7CA5] transition-colors py-1">Services</a>
              <a href="#impact" className="block text-gray-700 hover:text-[#3A7CA5] transition-colors py-1">Impact</a>
              <a href="mailto:abhishekthakur2771999@gmail.com" className="block text-gray-700 hover:text-[#3A7CA5] transition-colors py-1">Contact</a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Connect</h3>
            <div className="space-y-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-[#3A7CA5] transition-colors py-1 group"
              >
                LinkedIn
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-[#3A7CA5] transition-colors py-1 group"
              >
                Twitter
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-[#3A7CA5] transition-colors py-1 group"
              >
                YouTube
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-300 mt-12 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2024 Abhishek Thakur. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}