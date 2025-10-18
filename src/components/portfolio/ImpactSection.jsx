import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Quote, TrendingUp, Target, Heart, MessageSquare, Users, Award } from "lucide-react";
import { NumberTicker } from "../NumberTicker.jsx";
import { Marquee } from "../Marquee.jsx";

export default function ImpactSection() {
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

  const results = [
    {
      icon: TrendingUp,
      metric: "85%",
      description: "Improvement in English fluency"
    },
    {
      icon: Target,
      metric: "90%",
      description: "Success rate in job interviews"
    },
    {
      icon: Heart,
      metric: "95%",
      description: "Student satisfaction rate"
    }
  ];

  const testimonials = [
    {
      quote: "Abhishek's communication training transformed my interview performance completely. His personalized coaching and mock interview sessions gave me the confidence I needed to land my dream job.",
      author: "Priya Sharma",
      role: "Software Engineer",
      company: "TCS"
    },
    {
      quote: "The spoken English classes helped me overcome my hesitation in public speaking. Abhishek's teaching methods are practical and the AI-integrated learning made it even more effective.",
      author: "Rahul Kumar",
      role: "Engineering Student",
      company: "SAGE University"
    },
    {
      quote: "Abhishek's workshops at our college dramatically improved students' communication skills. His focus on real-world application and modern teaching techniques is outstanding.",
      author: "Dr. Meera Patel",
      role: "HOD, Computer Science",
      company: "Sushila Devi Bansal College"
    }
  ];

  return (
    <section id="impact" className="py-8 md:py-12 lg:py-16 bg-white-smoke">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-royal-blue"></div>
            <span className="text-sm font-semibold text-royal-blue uppercase tracking-wider">Impact</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Measurable Results
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Real transformations backed by data and client success stories
          </motion.p>
        </motion.div>

        {/* Results Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {results.map((result, index) => (
            <motion.div
              key={result.description}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <result.icon className="w-10 h-10 text-royal-blue mb-4" />
              <div className="text-5xl font-bold mb-2">
                <NumberTicker value={result.metric} suffix="%" className="text-5xl font-bold" />
              </div>
              <p className="text-gray-600">{result.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials with Marquee */}
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:30s] py-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.author}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group mx-3 md:mx-4 w-80 md:w-96 flex-shrink-0"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-royal-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 mb-6 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-gray-100 pt-4">
                      <div className="font-semibold text-lg mb-1">{testimonial.author}</div>
                      <div className="text-sm text-gray-600 mb-1">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Marquee>
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[#FAFAF9] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[#FAFAF9] to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}