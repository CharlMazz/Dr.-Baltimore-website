import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const overlayPoints = [
    {
      title: "1️⃣ Exercise Intensity",
      desc: "Not how tired you feel how close you train to true muscular failure with control and intent."
    },
    {
      title: "2️⃣ Exercise Selection",
      desc: "Every exercise has a purpose. Random lifts = random results. The right movements load the muscle, not just move weight."
    },
    {
      title: "3️⃣ Exercise Value",
      desc: "Are you training the muscle where it’s strongest and weakest? Short vs lengthened positions matter. Strength curves matter. Most people never tap into this."
    },
    {
      title: "4️⃣ Exercise Order",
      desc: "What you do first determines what actually grows. Poor sequencing = redundant training and stalled development."
    }
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-12 lg:py-0 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale brightness-50"
        >
          <source src="/media/video 1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left"
        >
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[2.75rem] leading-[0.9] sm:text-6xl lg:text-8xl font-black text-white mb-6 tracking-tighter italic text-3d"
          >
            TRAIN LIKE A <br />
            <motion.span 
              initial={{ color: "#fff" }}
              animate={{ color: "#dc2626" }}
              transition={{ duration: 1, delay: 1 }}
              className="text-primary text-3d-primary"
            >
              PRO.
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-base md:text-xl text-white/70 max-w-lg mb-8 font-medium mx-auto lg:mx-0"
          >
            High-performance coaching and science-based training methodologies designed to push you beyond your limits.
          </motion.p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-black uppercase tracking-tighter hover:bg-primary hover:text-white transition-all text-xs md:text-base"
            >
              Start Training
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-black uppercase tracking-tighter hover:bg-white/10 transition-all text-xs md:text-base"
            >
              View Programs
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="bg-black/40 backdrop-blur-xl p-5 md:p-8 rounded-3xl border border-white/10 space-y-4 md:space-y-6"
        >
          {overlayPoints.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + (i * 0.15), duration: 0.5 }}
              className="group"
            >
              <h3 className="text-primary font-black text-sm md:text-lg mb-1 group-hover:text-red-400 transition-colors flex items-center gap-2">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + (i * 0.15), type: "spring" }}
                >
                  {point.title.split(' ')[0]}
                </motion.span>
                {point.title.split(' ').slice(1).join(' ')}
              </h3>
              <p className="text-white/60 text-[11px] md:text-sm leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
