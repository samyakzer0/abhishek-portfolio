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
            <div className="absolute -inset-4 bg-royal-blue/10 rounded-3xl blur-2xl"></div>
            <img
              src="img/1735809837262.jpeg"
              alt="Abhishek Thakur - Communication Skills Trainer"
              className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover object-center-top"
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
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-blue-50 p-6 rounded-xl border-l-4 border-royal-blue"
              >
                <p>
                  My journey in communication training began <span className="font-semibold text-gray-900">5+ years ago</span> when I discovered the transformative
                  power of effective communication. Since then, I've dedicated my career to helping students
                  and professionals unlock their communication potential.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-50 p-6 rounded-xl border-r-4 border-slate-blue"
              >
                <p>
                  I believe that great communication is the foundation of <span className="font-semibold text-gray-900">career success</span>, personal growth, and
                  meaningful relationships. My approach combines practical teaching methodologies with
                  interactive activities that create lasting confidence and fluency.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600"
              >
                <p>
                  What sets my training apart is the focus on <span className="font-semibold text-gray-900">real-world application</span>. I don't just teach
                  theory—I help you develop practical skills through mock interviews, group discussions,
                  and presentation practice that prepare you for actual professional scenarios.
                </p>
              </motion.div>
            </div>

            {/* Enhanced Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Credentials</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={credential.text}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group flex items-center gap-4 bg-gray-50 hover:bg-royal-blue/5 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-royal-blue/20"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-royal-blue rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <credential.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition-colors">{credential.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}