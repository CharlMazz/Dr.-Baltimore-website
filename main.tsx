import React from 'react';
import { Instagram, Youtube, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="text-3xl font-black tracking-tighter text-white italic">
              DR. <span className="text-primary">BALTIMORE</span>
            </div>
            <p className="text-white/50 leading-relaxed">
              Elevating human performance through science-based training and relentless intensity. Join the movement.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/dr.baltimore/" className="text-white/40 hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/justin.inman.758" className="text-white/40 hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Training Programs</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Membership Plans</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Fitness Camps</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Shop All</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <span className="text-white/40">123 Performance Way, <br />Fitness City, FC 90210</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={20} className="text-primary shrink-0" />
                <span className="text-white/40">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={20} className="text-primary shrink-0" />
                <span className="text-white/40">coaching@drbaltimore.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-bold uppercase tracking-widest">
            © 2026 DR. BALTIMORE FITNESS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8">
            <span className="text-white/20 text-xs font-bold uppercase tracking-widest">Terms of Service</span>
            <span className="text-white/20 text-xs font-bold uppercase tracking-widest">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
