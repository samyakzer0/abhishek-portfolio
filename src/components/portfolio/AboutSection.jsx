import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, GraduationCap, Trophy, Lightbulb } from "lucide-react";

export default function AboutSection() {
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

  const credentials = [
    { icon: GraduationCap, text: "B.E. in Computer Science Engineering" },
    { icon: Trophy, text: "TEFL Certified (120 hours)" },
    { icon: Lightbulb, text: "Emotional Intelligence Practitioner" },
    { icon: Award, text: "5+ Years Training Experience" }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-royal-blue/10 to-slate-blue/10 rounded-3xl blur-2xl"></div>
            <img
              src="/img/1752505337820.jpeg"
              alt="Abhishek Thakur - Communication Skills Trainer"
              className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gray-300"></div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">About</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Through
              <br />
              Communication Excellence
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                My journey in communication training began 5+ years ago when I discovered the transformative
                power of effective communication. Since then, I've dedicated my career to helping students
                and professionals unlock their communication potential.
              </p>
              <p>
                I believe that great communication is the foundation of career success, personal growth, and
                meaningful relationships. My approach combines practical teaching methodologies with
                interactive activities that create lasting confidence and fluency.
              </p>
              <p>
                What sets my training apart is the focus on real-world application. I don't just teach
                theory—I help you develop practical skills through mock interviews, group discussions,
                and presentation practice that prepare you for actual professional scenarios.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <motion.div
                  key={credential.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl p-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <credential.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">{credential.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}