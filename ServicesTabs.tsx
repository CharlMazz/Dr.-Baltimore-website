import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Star } from 'lucide-react';

export default function ShopSection() {
  const products = [
    {
      id: 1,
      name: 'Elite Pre-Workout',
      price: '$45.00',
      category: 'Supplements',
      image: 'https://images.pexels.com/photos/39671/physiotherapy-weight-training-dumbbell-exercise-39671.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5
    },
    {
      id: 2,
      name: 'Performance Tee',
      price: '$35.00',
      category: 'Apparel',
      image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Resistance Band Set',
      price: '$25.00',
      category: 'Equipment',
      image: 'https://images.pexels.com/photos/4397841/pexels-photo-4397841.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.9
    },
    {
      id: 4,
      name: 'Hypertrophy Guide',
      price: '$59.00',
      category: 'Digital',
      image: 'https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5
    }
  ];

  return (
    <section id="shop" className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left w-full md:w-auto"
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-4 block">Store</span>
            <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter text-3d">
              GEAR & <span className="text-primary text-3d-primary">FUEL</span>
            </h2>
          </motion.div>
          <motion.button 
            whileHover={{ x: 10 }}
            className="text-white font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors text-sm md:text-base mx-auto md:mx-0"
          >
            View All Products
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-white/5">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-4 right-4 bg-white text-black p-4 rounded-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-2xl"
                >
                  <ShoppingBag size={20} />
                </motion.button>
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star size={12} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-white text-xs font-bold">{product.rating}</span>
                </div>
              </div>
              
              <p className="text-primary text-xs font-black uppercase tracking-widest mb-1">{product.category}</p>
              <h3 className="text-white font-bold text-xl mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
              <p className="text-white/60 font-black italic">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
