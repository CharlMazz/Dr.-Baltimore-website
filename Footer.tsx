import React from 'react';
import { motion } from 'motion/react';

export default function Intro() {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative bg-zinc-900 shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/media/picture 1.jpg"
                className="w-full h-full object-cover"
              >
                <source src="/media/introduction.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary p-6 md:p-8 rounded-2xl shadow-xl">
              <p className="text-3xl md:text-4xl font-black text-white italic leading-none">15+</p>
              <p className="text-white/80 text-[10px] md:text-xs uppercase font-bold tracking-widest mt-1 md:mt-2">Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-8 lg:mt-0"
          >
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1 }}
              className="text-primary font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-4 block"
            >
              Introduction
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 tracking-tighter italic text-3d"
            >
              MEET DR. <br /><span className="text-primary text-3d-primary">BALTIMORE</span>
            </motion.h2>
            <div className="space-y-4 md:space-y-6 text-white/70 text-base md:text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Dr. Baltimore is not just a trainer; he's a performance architect. With a deep focus on exercise mechanics and physiological optimization, he has transformed thousands of lives through his rigorous, science-backed approach.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Specializing in muscular hypertrophy and functional strength, his programs are designed for those who are serious about their results. No fluff, no shortcuts—just pure, intentional training.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-8 mt-10 md:mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h4 className="text-white font-black text-lg md:text-xl mb-1 md:mb-2 italic">Elite Gym</h4>
                <p className="text-white/50 text-xs md:text-sm">State-of-the-art facility designed for maximum output.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <h4 className="text-white font-black text-lg md:text-xl mb-1 md:mb-2 italic">Global Reach</h4>
                <p className="text-white/50 text-xs md:text-sm">Training clients across 20+ countries online.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
