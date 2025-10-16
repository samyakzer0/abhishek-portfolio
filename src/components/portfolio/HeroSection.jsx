import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6">
              ABHISHEK
              <br />
              THAKUR
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl">
              Communication Skills Trainer | Interview Preparation Expert | Spoken English Mentor
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-soft-navy hover:bg-slate-blue text-white px-8 py-6 text-base group"
            >
              Contact Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </motion.div>

          {/* Right: Professional Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/20 to-slate-blue/20 rounded-full blur-3xl"></div>
              <img
                src="/img/1753091925122.jpeg"
                alt="Abhishek Thakur"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}