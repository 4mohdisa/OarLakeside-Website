'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Clock, Users, Award } from 'lucide-react'
import BookingDialog from '@/components/booking-dialog'

export default function AboutPageContent() {
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  console.log("About page loaded");

  const handleBookNow = () => {
    // Check if we're on the homepage
    if (window.location.pathname === '/') {
      // On homepage, scroll to booking section
      const element = document.getElementById('booking');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other pages, open booking dialog
      setIsBookingDialogOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(48,74,51,0.7), rgba(48,74,51,0.7)), url('https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/UnTKDyAR-667Jlmd6WOa_/untitled-design-6.png')`
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            About OAR
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Where lakeside dining meets global flavors, crafted with love from our Adelaide Hills farm
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-oar-green mb-6">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-oar-green mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                OAR offers a modern and vibrant brunch and lunch experience in a relaxing, picturesque lakeside location. Our passionate chefs take pride in transforming local, fresh ingredients into globally-inspired flavors that tell a story with every bite.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We source fresh fruit and vegetables directly from our own farm in the Adelaide Hills, ensuring every dish reflects our commitment to quality and sustainability. While our menu features beloved brunch classics, we also offer innovative dishes for adventurous palates seeking something extraordinary.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From sunrise coffee to lakeside lunches, every moment at OAR is crafted to create lasting memories in one of Adelaide's most beautiful dining destinations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/s6-ZBv89sNKaWSFkVmHfw/untitled-design-6.png"
                alt="OAR Restaurant's fresh, locally-sourced dishes with lakeside ambiance"
                width={600}
                height={400}
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-oar-beige px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-oar-black mb-4">
              What Makes OAR Special
            </h2>
            <div className="w-24 h-1 bg-oar-green mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the unique elements that make OAR a standout dining destination
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 h-full border-0 shadow-lg bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-oar-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-oar-black mb-3">Lakeside Location</h3>
                  <p className="text-gray-600">Stunning waterfront views in the heart of West Lakes Shore</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 h-full border-0 shadow-lg bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-oar-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-oar-black mb-3">Farm Fresh</h3>
                  <p className="text-gray-600">Ingredients sourced directly from our Adelaide Hills farm</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 h-full border-0 shadow-lg bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-oar-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-oar-black mb-3">All Day Dining</h3>
                  <p className="text-gray-600">Open 7 days a week, 7am-3pm for your convenience</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 h-full border-0 shadow-lg bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-oar-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-oar-black mb-3">Events & Functions</h3>
                  <p className="text-gray-600">Perfect venue for special occasions and private events</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/_YWaCAh0Hv70HnX4Sm12L/unnamed.webp"
                alt="OAR Restaurant outdoor dining with lakeside views and umbrellas"
                width={600}
                height={400}
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-oar-green mb-6">
                Our Vision
              </h2>
              <div className="w-24 h-1 bg-oar-green mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We envision OAR as more than just a restaurant – it's a community gathering place where exceptional food meets breathtaking lakeside ambiance. Our commitment extends beyond serving great meals to creating memorable experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our bar features carefully curated boutique wines and craft beers, with custom packages available to suit any preference. Whether you're planning an intimate dinner or a grand celebration, our dedicated event coordinator ensures every detail reflects your unique style.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From casual lakeside lunches to sophisticated evening events, we're here to exceed expectations and create moments that linger long after the last bite.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-oar-green px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Ready to Experience OAR?
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Join us for an unforgettable lakeside dining experience where every dish tells a story
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleBookNow}
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-oar-green px-12 py-6 text-lg font-bold rounded-full shadow-lg"
                >
                  BOOK NOW
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => {
                    console.log("View Menu button clicked from About page");
                    window.location.href = '/menu';
                  }}
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-oar-green px-12 py-6 text-lg font-bold rounded-full"
                >
                  VIEW MENU
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <BookingDialog 
        isOpen={isBookingDialogOpen} 
        onClose={() => setIsBookingDialogOpen(false)} 
      />
    </div>
  )
}