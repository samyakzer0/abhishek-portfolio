import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Briefcase, Presentation, Crown, BookOpen, Lightbulb } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "../ScrollStack.jsx";

export default function ServicesSection() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleCardClick = (service, index) => {
    if (isDesktop) return; // Only enable on mobile/tablet

    if (expandedCard === index) {
      // Close the modal
      setIsModalOpen(false);
      setTimeout(() => setExpandedCard(null), 300); // Wait for animation
    } else {
      // Open the modal
      setExpandedCard(index);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setExpandedCard(null), 300);
  };

  const handleGetStarted = (service) => {
    const subject = `Training Inquiry - ${service.title}`;
    const body = `Hi Abhishek,

I am interested in your "${service.title}" service.

Service Details:
- ${service.subtitle}
- Duration: ${service.duration}
- Students: ${service.students}

Please provide more information about this training program and how we can get started.

Thank you!`;

    const mailtoLink = `mailto:abhishekthakur2771999@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const scrollStackProps = {
    itemDistance: isDesktop ? 20 : 50,
    itemScale: isDesktop ? 0.006 : 0.02,
    itemStackDistance: isDesktop ? 6 : 15,
    stackPosition: isDesktop ? "30%" : "15%",
    scaleEndPosition: isDesktop ? "12%" : "5%",
    baseScale: isDesktop ? 0.97 : 0.9,
    rotationAmount: 0,
    blurAmount: 0,
    useWindowScroll: true
  };
  const services = [
    {
      icon: MessageCircle,
      title: "Spoken English Training",
      subtitle: "Master Fluency & Confidence",
      description: "Comprehensive English fluency programs with pronunciation correction, grammar mastery, vocabulary building, and daily conversation practice. Perfect for beginners to advanced learners.",
      highlights: ["Pronunciation Correction", "Grammar Mastery", "Vocabulary Building", "Conversation Practice"],
      duration: "4-8 weeks intensive",
      students: "500+ trained",
      image: "img/1752051624351.jpeg"
    },
    {
      icon: Briefcase,
      title: "Interview Preparation",
      subtitle: "Land Your Dream Job",
      description: "Personalized interview coaching with mock sessions, body language training, resume optimization, and industry-specific preparation. Boost your confidence and success rate.",
      highlights: ["Mock Interviews", "Resume Building", "Body Language", "Industry-Specific Prep"],
      duration: "2-4 weeks intensive",
      students: "300+ placed",
      image: "img/1753091925122.jpeg"
    },
    {
      icon: Presentation,
      title: "Public Speaking Coaching",
      subtitle: "Command Any Audience",
      description: "Transform your presentation skills with voice modulation, stage presence, content structuring, and audience engagement techniques. Overcome stage fear and speak with impact.",
      highlights: ["Voice Modulation", "Stage Presence", "Content Structure", "Audience Engagement"],
      duration: "3-6 weeks program",
      students: "400+ confident speakers",
      image: "img/1752505337820.jpeg"
    },
    {
      icon: Crown,
      title: "Personality Development",
      subtitle: "Holistic Growth Journey",
      description: "Complete personality transformation combining communication, leadership, emotional intelligence, and professional etiquette. Develop executive presence and interpersonal skills.",
      highlights: ["Leadership Skills", "Emotional Intelligence", "Professional Etiquette", "Executive Presence"],
      duration: "6-12 weeks comprehensive",
      students: "350+ transformed",
      image: "img/1753091924422.jpeg"
    }
  ];

  return (
    <section id="services" className="py-8 md:py-12 lg:py-16 bg-white">
      {/* Custom styles for desktop ScrollStack optimization */}
      {isDesktop && (
        <style jsx>{`
          .desktop-service-card {
            height: 20rem !important;
            margin: 15px 0 !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
            backface-visibility: hidden !important;
          }
          @media (min-width: 1280px) {
            .desktop-service-card {
              height: 22rem !important;
            }
          }
          /* Optimize ScrollStack performance on desktop */
          .scroll-stack-card {
            transform: translateZ(0) !important;
            will-change: transform !important;
            backface-visibility: hidden !important;
          }
          /* Line clamp utility */
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          /* Enhanced Mobile Modal Styles */
          .mobile-modal-scroll {
            -webkit-overflow-scrolling: touch;
            overscroll-behavior-y: contain;
            scroll-snap-type: y proximity;
            scrollbar-gutter: stable;
          }

          /* Hide scrollbar but keep functionality */
          .mobile-modal-scroll::-webkit-scrollbar {
            display: none;
          }

          .mobile-modal-scroll {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          /* Ensure modal container allows flex layout */
          .modal-flex-container {
            display: flex;
            flex-direction: column;
          }

          /* Enhanced modal animations */
          .modal-backdrop-blur {
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
          }

          /* Smooth content sections */
          .modal-content-section {
            scroll-snap-align: start;
            scroll-behavior: smooth;
          }

        `}</style>
      )}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-royal-blue"></div>
            <span className="text-sm font-semibold text-royal-blue uppercase tracking-wider">Services</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            How I Can Help
          </motion.h2>
        </motion.div>

        {/* ScrollStack Services - Desktop Optimized */}
         <ScrollStack {...scrollStackProps}>
          {services.map((service, index) => (
            <ScrollStackItem key={service.title}>
              <div className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden ${isDesktop ? 'desktop-service-card' : ''}`}>
                {isDesktop ? (
                  /* Desktop: Detailed Card Layout */
                  <div className="flex flex-col h-full">
                    {/* Image Section - Smaller on Desktop */}
                    <div className="aspect-[4/3] sm:aspect-[16/10] relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-[center_40%]  group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Subtle overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                        <h3 className="text-white text-lg md:text-xl font-bold leading-tight drop-shadow-lg">
                          {service.title}
                        </h3>
                        <p className="text-white/90 text-sm md:text-base font-medium drop-shadow">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
                      {/* Description */}
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.highlights.slice(0, 3).map((highlight, idx) => (
                            <span
                              key={idx}
                              className="inline-block bg-royal-blue/10 text-royal-blue text-xs px-2 py-1 rounded-full font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex justify-between items-center text-sm text-gray-500 border-t border-gray-100 pt-3">
                        <span className="font-medium">{service.duration}</span>
                        <span className="font-medium">{service.students}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Mobile: Clickable Card with Title Overlay */
                  <div
                    className="aspect-[4/3] relative cursor-pointer"
                    onClick={() => handleCardClick(service, index)}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center-top transition-transform duration-700"
                    />
                    {/* Opaque White Text Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-tight drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>

                    {/* Click indicator */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

        {/* Mobile Expanded Card Modal */}
        {!isDesktop && (
          <AnimatePresence>
            {isModalOpen && expandedCard !== null && (
              <>
                {/* Enhanced Backdrop Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="fixed inset-0 bg-black/60 modal-backdrop-blur z-50"
                  onClick={closeModal}
                />

                {/* Expanded Card Sliding from Right */}
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{
                    type: "spring",
                    damping: 35,
                    stiffness: 400,
                    duration: 0.4
                  }}
                  className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 flex flex-col mobile-modal-scroll modal-flex-container"
                  style={{
                    borderTopLeftRadius: '2rem',
                    borderBottomLeftRadius: '2rem',
                    maxWidth: 'calc(100vw - 2rem)'
                  }}
                >
                  {/* Enhanced Header */}
                  <div className="sticky top-0 bg-gradient-to-r from-white via-white to-white/95 backdrop-blur-md border-b border-gray-200/80 p-6 flex justify-between items-center shadow-sm">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-1">Service Details</h2>
                      <p className="text-sm text-gray-500 font-medium">Comprehensive information</p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-royal-blue hover:text-white transition-all duration-300 group shadow-sm"
                    >
                      <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Enhanced Content Layout */}
                  {services[expandedCard] && (
                    <div className="flex flex-col h-full">
                      {/* Scrollable Content */}
                      <div className="flex-1 overflow-y-auto mobile-modal-scroll px-6 py-2 modal-content-section" style={{ height: 'calc(100vh - 200px)' }}>
                        {/* Service Image */}
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-lg">
                          <img
                            src={services[expandedCard].image}
                            alt={services[expandedCard].title}
                            className="w-full h-full object-cover object-center-top"
                          />
                        </div>

                        {/* Service Title & Subtitle */}
                        <div className="mb-8">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                                {services[expandedCard].title}
                              </h3>
                              <p className="text-xl text-royal-blue font-semibold mb-4 leading-relaxed">
                                {services[expandedCard].subtitle}
                              </p>
                            </div>
                          </div>

                          {/* Enhanced Stats Badges */}
                          <div className="flex flex-wrap gap-3 mb-6">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-royal-blue/10 to-royal-blue/5 text-royal-blue text-sm font-semibold border border-royal-blue/20">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {services[expandedCard].duration}
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-50 text-green-700 text-sm font-semibold border border-green-200">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              {services[expandedCard].students}
                            </div>
                          </div>
                        </div>

                        {/* Enhanced Description */}
                        <div className="mb-8">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-8 bg-royal-blue"></div>
                            <h4 className="text-xl font-bold text-gray-900">About This Service</h4>
                          </div>
                          <p className="text-gray-700 leading-relaxed text-base pl-11">
                            {services[expandedCard].description}
                          </p>
                        </div>

                      </div>

                      {/* Enhanced CTA Section */}
                      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 shadow-lg">
                        <button
                          onClick={() => handleGetStarted(services[expandedCard])}
                          className="w-full bg-gradient-to-r from-royal-blue to-slate-blue hover:from-slate-blue hover:to-royal-blue text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                        >
                          <span className="flex items-center justify-center gap-2">
                            Get Started
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}