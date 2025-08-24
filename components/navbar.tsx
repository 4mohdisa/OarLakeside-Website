'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface NavbarProps {
  onScrollToSection?: (sectionId: string) => void;
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log("Navbar component loaded");

  const scrollToSection = (sectionId: string) => {
    console.log("Scrolling to section:", sectionId);
    if (onScrollToSection) {
      onScrollToSection(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleBookNow = () => {
    console.log("Book Now button clicked - redirecting to booking system");
    window.open('https://booking.orderfeeds.com/restaurant/oar', '_blank');
  };

  const navigateToPage = (path: string) => {
    console.log(`Navigating to ${path}`);
    window.location.href = path;
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-oar-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => navigateToPage('/')}
              className="block"
            >
              <Image
                src="/logo.png"
                alt="OAR Restaurant - Coffee, Kitchen & Lakeside Vibes"
                width={48}
                height={48}
                className="w-12 h-12 object-contain hover:scale-105 transition-transform duration-200"
                data-macaly="nav-logo"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => navigateToPage('/')} className="text-oar-black hover:text-oar-green transition-colors">Home</button>
              <button onClick={() => navigateToPage('/about')} className="text-oar-black hover:text-oar-green transition-colors">About</button>
              <button onClick={() => navigateToPage('/menu')} className="text-oar-black hover:text-oar-green transition-colors">Menu</button>
              <button onClick={() => navigateToPage('/functions')} className="text-oar-black hover:text-oar-green transition-colors">Functions</button>
              <Button onClick={handleBookNow} className="bg-oar-green hover:bg-oar-green/90 text-white">
                Book Now
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-oar-black"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-oar-white border-t border-gray-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => navigateToPage('/')} className="block px-3 py-2 text-oar-black hover:text-oar-green">Home</button>
            <button onClick={() => navigateToPage('/about')} className="block px-3 py-2 text-oar-black hover:text-oar-green">About</button>
            <button onClick={() => navigateToPage('/menu')} className="block px-3 py-2 text-oar-black hover:text-oar-green">Menu</button>
            <button onClick={() => navigateToPage('/functions')} className="block px-3 py-2 text-oar-black hover:text-oar-green">Functions</button>
            <button onClick={() => navigateToPage('/privacy')} className="block px-3 py-2 text-oar-black hover:text-oar-green">Privacy Policy</button>
            <button onClick={() => navigateToPage('/legal')} className="block px-3 py-2 text-oar-black hover:text-oar-green">Legal Notice</button>
            <div className="px-3 py-2">
              <Button onClick={handleBookNow} className="w-full bg-oar-green hover:bg-oar-green/90 text-white">
                Book Now
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
