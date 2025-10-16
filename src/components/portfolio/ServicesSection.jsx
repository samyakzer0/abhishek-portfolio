import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Briefcase, Presentation, Crown, BookOpen, Lightbulb } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "../ScrollStack.jsx";

export default function ServicesSection() {
  const [scrollStackProps, setScrollStackProps] = useState({
    itemDistance: 50,
    itemScale: 0.02,
    itemStackDistance: 15,
    stackPosition: "15%",
    scaleEndPosition: "5%"
  });
  const services = [
    {
      icon: MessageCircle,
      title: "Spoken English Training",
      subtitle: "Master Fluency & Confidence",
      description: "Comprehensive English fluency programs with pronunciation correction, grammar mastery, vocabulary building, and daily conversation practice. Perfect for beginners to advanced learners.",
      highlights: ["Pronunciation Correction", "Grammar Mastery", "Vocabulary Building", "Conversation Practice"],
      duration: "4-8 weeks intensive",
      students: "500+ trained",
      image: "/img/1725782933236.jpeg"
    },
    {
      icon: Briefcase,
      title: "Interview Preparation",
      subtitle: "Land Your Dream Job",
      description: "Personalized interview coaching with mock sessions, body language training, resume optimization, and industry-specific preparation. Boost your confidence and success rate.",
      highlights: ["Mock Interviews", "Resume Building", "Body Language", "Industry-Specific Prep"],
      duration: "2-4 weeks intensive",
      students: "300+ placed",
      image: "/img/1735809837262.jpeg"
    },
    {
      icon: Presentation,
      title: "Public Speaking Coaching",
      subtitle: "Command Any Audience",
      description: "Transform your presentation skills with voice modulation, stage presence, content structuring, and audience engagement techniques. Overcome stage fear and speak with impact.",
      highlights: ["Voice Modulation", "Stage Presence", "Content Structure", "Audience Engagement"],
      duration: "3-6 weeks program",
      students: "400+ confident speakers",
      image: "/img/1742659005828.jpeg"
    },
    {
      icon: Crown,
      title: "Personality Development",
      subtitle: "Holistic Growth Journey",
      description: "Complete personality transformation combining communication, leadership, emotional intelligence, and professional etiquette. Develop executive presence and interpersonal skills.",
      highlights: ["Leadership Skills", "Emotional Intelligence", "Professional Etiquette", "Executive Presence"],
      duration: "6-12 weeks comprehensive",
      students: "350+ transformed",
      image: "/img/1752051624351.jpeg"
    }
  ];

  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gray-300"></div>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">How I Can Help</h2>
        </motion.div>

        {/* ScrollStack Services - Minimal Design */}
        <ScrollStack
          itemDistance={50}
          itemScale={0.02}
          itemStackDistance={15}
          stackPosition="15%"
          scaleEndPosition="5%"
          baseScale={0.9}
          rotationAmount={0}
          blurAmount={0}
          useWindowScroll={true}
        >
          {services.map((service, index) => (
            <ScrollStackItem key={service.title}>
              <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                {/* Image with Title Overlay */}
                <div className="aspect-[4/3] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Opaque White Text Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-tight drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}