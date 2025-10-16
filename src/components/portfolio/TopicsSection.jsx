import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Briefcase, Presentation, Crown, BookOpen, Lightbulb, Star, Zap } from "lucide-react";

export default function TopicsSection() {
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

  const topics = [
    {
      icon: MessageCircle,
      title: "Spoken English Fluency",
      description: "Comprehensive training in pronunciation, grammar, vocabulary, and conversational English",
      color: "from-royal-blue to-slate-blue"
    },
    {
      icon: Crown,
      title: "Interview Success",
      description: "Master interview techniques, body language, and communication strategies for job placement",
      color: "from-soft-navy to-royal-blue"
    },
    {
      icon: Star,
      title: "Group Discussion Skills",
      description: "Excel in group discussions, debates, and collaborative communication scenarios",
      color: "from-muted-gold to-royal-blue"
    },
    {
      icon: Presentation,
      title: "Presentation Mastery",
      description: "Create and deliver impactful presentations with confidence and clarity",
      color: "from-moss-green to-royal-blue"
    },
    {
      icon: BookOpen,
      title: "Resume Building",
      description: "Craft compelling resumes and professional profiles that stand out to employers",
      color: "from-soft-navy to-slate-blue"
    },
    {
      icon: Zap,
      title: "Professional Communication",
      description: "Develop workplace communication skills, email etiquette, and business correspondence",
      color: "from-muted-gold to-soft-navy"
    }
  ];

  return (
    <section id="topics" className="py-24 md:py-32 bg-sandstone-beige">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gray-300"></div>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Topics</span>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Areas of Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive communication training across critical professional skills
          </p>
        </motion.div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${topic.color} rounded-xl mb-4 shadow-lg`}>
                  <topic.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{topic.title}</h3>
                <p className="text-gray-600 leading-relaxed">{topic.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}