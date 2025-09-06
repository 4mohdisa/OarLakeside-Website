'use client';

import { useState } from 'react';
import { Instagram } from 'lucide-react';
import Image from 'next/image';
import BookingDialog from '@/components/booking-dialog';

interface FooterProps {
  onScrollToSection?: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  console.log("Footer component loaded");

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
  };

  const navigateToPage = (path: string) => {
    console.log(`Navigating to ${path}`);
    window.location.href = path;
  };

  return (
    <footer className="bg-stone-200 py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content Row - Logo, Text, and Button */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Logo */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <Image
              src="/logo.png"
              alt="OAR Restaurant - Coffee, Kitchen & Lakeside Vibes"
              width={144}
              height={144}
              className="w-36 h-36 object-contain"
              data-macaly="footer-logo"
            />
          </div>

          {/* Parking Information */}
          <div className="lg:col-span-7 text-center lg:text-left px-4">
            <p className="text-gray-800 text-lg leading-relaxed" data-macaly="footer-parking-info">
              Oar is situated on the lake at the front of the Rowing SA complex. Oar has 
              dedicated 15min take away and regular car parks in the complex car park right 
              out the front. You can also park on Military Road. There is also two large car 
              parks on either side of Military Road. You can also park in The Annie Watt 
              Circuit and walk down the path to Oar.
            </p>
          </div>

          {/* Book Now Button */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end relative">
            <button 
              onClick={() => {
                // Check if we're on the homepage
                if (window.location.pathname === '/') {
                  // On homepage, scroll to booking section
                  scrollToSection('booking');
                } else {
                  // On other pages, open booking dialog
                  setIsBookingDialogOpen(true);
                }
              }}
              className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-xl"
              data-macaly="footer-book-now-button"
            >
              BOOK NOW!
            </button>
            
            {/* Decorative compass wheel near button */}
            <div className="absolute -top-12 -right-8 opacity-40 text-oar-green pointer-events-none">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="2" fill="none"/>
                <g>
                  {[...Array(16)].map((_, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2={i % 4 === 0 ? "85" : "75"}
                      y2="50"
                      stroke="currentColor"
                      strokeWidth={i % 4 === 0 ? "2" : "1"}
                      transform={`rotate(${i * 22.5} 50 50)`}
                    />
                  ))}
                </g>
              </svg>
            </div>

            {/* Decorative food swirls */}
            <div className="absolute -bottom-8 -left-12 opacity-25 text-oar-green pointer-events-none">
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
                <path d="M10 30 Q 30 10, 50 30 Q 70 50, 90 30 Q 110 10, 130 30" stroke="currentColor" strokeWidth="3" fill="none"/>
                <path d="M5 40 Q 25 20, 45 40 Q 65 60, 85 40" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                <ellipse cx="60" cy="35" rx="20" ry="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-400 mb-10"></div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-between items-center mb-10">
          <div className="flex flex-wrap gap-8 mb-4 lg:mb-0">
            <button onClick={() => navigateToPage('/')} className="text-gray-900 hover:text-oar-green transition-colors font-semibold text-lg">HOME</button>
            <button onClick={() => scrollToSection('functions')} className="text-gray-900 hover:text-oar-green transition-colors font-semibold text-lg">FUNCTIONS</button>
            <button onClick={() => scrollToSection('location')} className="text-gray-900 hover:text-oar-green transition-colors font-semibold text-lg">LOCATIONS</button>
            <button onClick={() => navigateToPage('/menu')} className="text-gray-900 hover:text-oar-green transition-colors font-semibold text-lg">MENU</button>
          </div>
          <div className="flex gap-6 items-center">
            <button onClick={() => navigateToPage('/privacy')} className="text-gray-900 hover:text-oar-green transition-colors font-semibold text-lg">PRIVACY POLICY</button>
            <span className="text-gray-600 text-xl">|</span>
            <button onClick={() => navigateToPage('/legal')} className="text-gray-900 hover:text-oar-green transition-colors font-semibold text-lg">LEGAL NOTICE</button>
          </div>
        </div>

        {/* Bottom Copyright and Social */}
        <div className="flex flex-wrap justify-between items-center text-gray-700">
          <div>
            <p className="text-base">Copyright 2025 OAR | All Rights Reserved | Design with ❤️ by StepSharp | Powered By OAR</p>
          </div>
          <div className="mt-4 lg:mt-0">
            <button 
              onClick={() => window.open('https://www.instagram.com/oarlakeside/', '_blank')}
              className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-oar-green transition-colors shadow-md"
            >
              <Instagram className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Large Decorative Food Illustrations */}
      <div className="absolute top-8 right-8 opacity-20 text-oar-green pointer-events-none">
        {/* Enhanced Decorative Swirls */}
        <svg width="280" height="200" viewBox="0 0 280 200" fill="none">
          <path d="M20 40 Q 60 15, 100 40 Q 140 65, 180 40 Q 220 15, 260 40" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M10 80 Q 50 55, 90 80 Q 130 105, 170 80 Q 210 55, 250 80" stroke="currentColor" strokeWidth="2.5" fill="none"/>
          <path d="M30 120 Q 70 95, 110 120 Q 150 145, 190 120 Q 230 95, 270 120" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M15 160 Q 55 135, 95 160 Q 135 185, 175 160" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <ellipse cx="140" cy="100" rx="50" ry="25" stroke="currentColor" strokeWidth="2" fill="none"/>
          <ellipse cx="80" cy="60" rx="25" ry="12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>
      
      <BookingDialog 
        isOpen={isBookingDialogOpen} 
        onClose={() => setIsBookingDialogOpen(false)} 
      />
    </footer>
  );
}