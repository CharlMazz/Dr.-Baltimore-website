import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, CreditCard, Tent, ArrowRight } from 'lucide-react';

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState('membership');

  const tabs = [
    {
      id: 'membership',
      label: 'Membership',
      icon: <CreditCard size={20} />,
      title: 'Elite Membership Access',
      description: 'Join the inner circle. Get exclusive access to our state-of-the-art facility, premium equipment, and a community of high-performers dedicated to excellence.',
      features: ['24/7 Secure Gym Access', 'Personalized Onboarding Session', 'Monthly Body Composition Analysis', 'Exclusive Member Workshops'],
      price: '$99/mo',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'training',
      label: 'Group Training',
      icon: <Users size={20} />,
      title: 'High-Intensity Group Sessions',
      description: 'Train in a competitive, high-energy environment. Our group sessions focus on intensity, form, and collective progress under expert supervision.',
      features: ['Expert Led Strength Sessions', 'Structured Progression Models', 'Community Accountability', 'Real-time Form Correction'],
      price: '$150/mo',
      image: 'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'camps',
      label: 'Fitness Camps',
      icon: <Tent size={20} />,
      title: 'Intensive Fitness Bootcamps',
      description: 'Seasonal immersive experiences designed to break plateaus and reset your fitness journey. Intensive training, nutrition, and recovery in one package.',
      features: ['3-Day Immersive Training', 'Custom Nutritional Planning', 'Advanced Biomechanics Analysis', 'Guided Recovery & Mobility'],
      price: 'From $499',
      image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'consulting',
      label: 'Consulting',
      icon: <ArrowRight size={20} />,
      title: 'Professional Performance Consulting',
      description: 'One-on-one strategic planning for your physical and mental performance. Ideal for athletes and professionals looking for a bespoke roadmap.',
      features: ['Bespoke Training Architecture', 'Nutritional Optimization Strategy', 'Bi-Weekly Strategy Calls', 'Performance Data Analysis'],
      price: 'Custom',
      image: 'https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <section id="training" className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-4 text-3d"
          >
            CHOOSE YOUR <span className="text-primary text-3d-primary">PATH</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/50 max-w-2xl mx-auto text-sm md:text-base"
          >
            Whether you're looking for a home gym or an intensive transformation, we have the right program for you.
          </motion.p>
        </div>

        {/* Tabs Header - Scrollable on mobile */}
        <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-4 mb-8 md:mb-12 pb-4 md:pb-0 scrollbar-hide no-scrollbar">
          {tabs.map((tab, i) => (
            <motion.button
              key={tab.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-3 px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
              }`}
            >
              {tab.icon}
              <span className="text-sm md:text-base">{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="bg-white/5 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 border border-white/10">
          <AnimatePresence mode="wait">
            {tabs.map((tab) => tab.id === activeTab && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className="order-2 lg:order-1">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6 italic tracking-tight"
                  >
                    {tab.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/70 text-base md:text-lg mb-6 md:mb-8 leading-relaxed"
                  >
                    {tab.description}
                  </motion.p>
                  
                  <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                    {tab.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center space-x-3 text-white/80"
                      >
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full"></div>
                        <span className="font-medium text-sm md:text-base">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                    <div>
                      <p className="text-white/40 text-[10px] md:text-xs uppercase font-bold tracking-widest mb-1">Starting at</p>
                      <p className="text-2xl md:text-3xl font-black text-white italic">{tab.price}</p>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto bg-white text-black px-8 md:px-10 py-3 md:py-4 rounded-2xl font-black uppercase tracking-tighter hover:bg-primary hover:text-white transition-all flex items-center justify-center space-x-2 text-sm md:text-base"
                    >
                      <span>Get Started</span>
                      <ArrowRight size={18} className="md:w-5 md:h-5" />
                    </motion.button>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="aspect-video lg:aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl">
                    <img 
                      src={tab.image} 
                      alt={tab.label}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
