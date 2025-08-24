'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MenuPageContent() {
  return (
    <div className="min-h-screen bg-oar-beige pt-16">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-oar-black mb-6" data-macaly="menu-page-title">
              OAR All Day Menu
            </h1>
            <div className="w-24 h-1 bg-oar-green mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-macaly="menu-page-description">
              Discover our carefully crafted all-day menu featuring fresh, local ingredients and signature dishes that define the OAR dining experience.
            </p>
          </motion.div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <Clock className="w-8 h-8 text-oar-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-oar-black mb-2">Opening Hours</h3>
              <p className="text-gray-600">Monday - Sunday<br />7AM - 3PM</p>
              <p className="text-sm text-gray-500 mt-2">(Kitchen closes at 2:30PM)</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <MapPin className="w-8 h-8 text-oar-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-oar-black mb-2">Location</h3>
              <p className="text-gray-600">100 Military Road<br />West Lakes Shore SA 5020</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <Phone className="w-8 h-8 text-oar-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-oar-black mb-2">Reservations</h3>
              <p className="text-gray-600">0403 573 273</p>
              <p className="text-sm text-gray-500 mt-2">bookings@oarlakeside.com.au</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Image Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/GGfyFLyll76nJG7jYgmHg/a4b0dcd9-b58e-4610-8e77-c6abaf6db549.jpg"
              alt="OAR All Day Menu - Complete menu with breakfast, lunch items, juice bar and smoothies"
              className="w-full h-auto object-contain"
              data-macaly="full-menu-image"
            />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-oar-black mb-6">Ready to Experience OAR?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Book your table now to enjoy our fresh, locally-sourced dishes in our stunning lakeside setting.
            </p>
            <div className="flex justify-center">
              <Button
                onClick={() => window.open('https://booking.orderfeeds.com/restaurant/oar', '_blank')}
                className="bg-oar-green hover:bg-oar-green/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Book a Table
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}