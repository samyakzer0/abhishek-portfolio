import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your interest! I'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#1a1a1a] text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: CTA & Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's Master
              <br />
              Communication Together
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Ready to elevate your communication skills? Book a session or
              get in touch to discuss how I can help you achieve fluency and confidence.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href="mailto:abhishekthakur2771999@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  abhishekthakur2771999@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">Indore, Madhya Pradesh, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                />
              </div>
              <div>
                <Input
                  placeholder="Company/Organization"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell me about your communication goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-white text-black hover:bg-gray-100 h-12 text-base font-semibold"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Abhishek Thakur. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}