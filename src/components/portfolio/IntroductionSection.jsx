import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Award, Users, Sparkles, Trophy, UserCheck, Star } from "lucide-react";
import { NumberTicker } from "../NumberTicker.jsx";

export default function IntroductionSection() {
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

  const stats = [
    { icon: UserCheck, label: "Students Trained", value: "1,000+" },
    { icon: Trophy, label: "Years Experience", value: "5+" },
    { icon: Star, label: "Success Rate", value: "95%" }
  ];

  return (
    <section className="py-24 md:py-32 bg-sandstone-beige">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Empowering Students & Professionals
            <br />
            <span className="text-gray-600">Through Communication Mastery</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With 5+ years of experience, I deliver transformative communication training sessions
            that empower students and professionals to become confident, influential communicators.
            My unique approach combines modern teaching methodologies, interactive activities, and
            AI-integrated learning techniques to create lasting fluency and confidence.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <NumberTicker value={stat.value} className="text-3xl md:text-4xl font-bold" />
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}