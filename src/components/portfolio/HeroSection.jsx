import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleContactClick = () => {
    window.location.href = 'mailto:abhishekthakur2771999@gmail.com?subject=Training Inquiry&body=Hi Abhishek, I would like to discuss communication training opportunities.';
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                ABHISHEK
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-royal-blue"
              >
                THAKUR
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            >
              Communication Skills Trainer 
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            >
              <Button
                onClick={handleContactClick}
                size="lg"
                className="bg-royal-blue hover:bg-slate-blue text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Now
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Professional Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-royal-blue/20 rounded-full blur-3xl"></div>
              <img
                src="/img/1725782933236.jpeg"
                alt="Abhishek Thakur"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover object-center-top shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}