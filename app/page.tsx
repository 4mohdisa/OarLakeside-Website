'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Home() {
  console.log("OAR Restaurant page loaded");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const scrollToSection = (sectionId: string) => {
    console.log("Scrolling to section:", sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    console.log("Book Now button clicked - scrolling to booking section");
    scrollToSection('booking');
  };

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been sent. We will get back to you soon.');
        reset();
      } else {
        setSubmitMessage('There was an error sending your message. Please try again or call us directly.');
      }
    } catch (error) {
      setSubmitMessage('There was an error sending your message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-oar-white">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dtrzjqrne/video/upload/v1756037666/OAR_Video_1_1_uivylg.mp4" type="video/mp4" />
          {/* Fallback image for browsers that don't support video */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url('https://images.pexels.com/photos/16722390/pexels-photo-16722390.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`
            }}
          />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-macaly="hero-title">
            OAR: Coffee, Kitchen & Lakeside Vibes
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-12 font-light max-w-4xl mx-auto leading-relaxed" data-macaly="hero-subtitle">
            Welcome to OAR – Coffee House • Bar • Kitchen, where fresh, local ingredients meet global inspiration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleBookNow}
                size="lg"
                className="bg-white hover:bg-gray-100 text-oar-black px-12 py-6 text-lg font-bold rounded-full shadow-lg border-2 border-transparent hover:border-white/20 transition-all duration-200"
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
                  console.log("Explore Menu button clicked - redirecting to menu page");
                  window.location.href = '/menu';
                }}
                size="lg"
                className="bg-white hover:bg-gray-100 text-oar-black px-12 py-6 text-lg font-bold rounded-full shadow-lg border-2 border-transparent hover:border-white/20 transition-all duration-200"
              >
                EXPLORE MENU
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-oar-green mb-8" data-macaly="about-title">
              About OAR
            </h2>
            <div className="w-24 h-1 bg-oar-green mx-auto mb-12"></div>
            
            {/* Our Story Section */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-serif text-oar-green mb-6" data-macaly="our-story-title">
                Our Story
              </h3>
              <p className="text-lg md:text-xl text-oar-black leading-relaxed max-w-3xl mx-auto" data-macaly="about-description">
                Oar offers a modern and vibrant brunch and lunch experience in a relaxing, and picturesque lakeside location. 
                Our chefs pride themselves in taking local, fresh ingredients and using them to create flavours from all around the globe. 
                Oar also takes advantage of fresh fruit and vegetables sourced directly from our farm in the Adelaide Hills. 
                The menu has all the usual brunch suspects, however also hosts more interesting and fun dishes for people looking for something new.
              </p>
            </div>
            
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/s6-ZBv89sNKaWSFkVmHfw/untitled-design-6.png" 
                  alt="Lakeside dining experience with fresh food and drinks at OAR"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-300"
                  data-macaly="about-featured-image"
                />
              </div>
            </motion.div>
            
            {/* Our Vision Section */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-serif text-oar-green mb-6" data-macaly="our-vision-title">
                Our Vision
              </h3>
              <div className="space-y-4 max-w-3xl mx-auto">
                <p className="text-lg md:text-xl text-oar-black leading-relaxed" data-macaly="our-vision-text-1">
                  The bar is stocked with boutique wine and beer, and packages can be made to include any of your favourites.
                </p>
                
                <p className="text-lg md:text-xl text-oar-black leading-relaxed" data-macaly="our-vision-text-2">
                  Our event coordinator is here to create an evening that is unique to your personality and will impress even the fussiest of guests!
                </p>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center items-center">
              <Button 
                onClick={() => {
                  console.log("Learn More About Us button clicked");
                  window.location.href = '/about';
                }}
                variant="outline"
                className="border-oar-green text-oar-green hover:bg-oar-green hover:text-white px-8 py-3"
              >
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section id="opening-hours" className="py-20 bg-oar-beige px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-oar-black mb-16" data-macaly="opening-hours-title">
              OAR Opening Hours
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Food Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/BrEUgV6exVKnItkv_zxyR/where-every-dish-tells-a-story-and-every-laugh-adds-flavor.-oarlakeside-goodvibeswithoar-deli.jpg"
                alt="Where every dish tells a story and every laugh adds flavor - OAR's signature dishes"
                className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
                data-macaly="opening-hours-food-image"
              />
            </motion.div>

            {/* Restaurant Exterior Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/LXgXiVKN0QhIV5PRaem1f/2025-06-01.webp"
                alt="OAR restaurant exterior with lakeside dining and signature diamond logo"
                className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
                data-macaly="opening-hours-exterior-image"
              />
            </motion.div>

            {/* Opening Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-oar-green rounded-2xl p-8 lg:p-12 text-center shadow-lg h-64 lg:h-80 flex flex-col justify-center"
            >
              <h3 className="text-2xl lg:text-3xl font-serif text-white mb-6" data-macaly="hours-title">
                Monday - Sunday
              </h3>
              <p className="text-lg lg:text-xl text-white/90 mb-4" data-macaly="hours-open-text">
                Open 7 days
              </p>
              <p className="text-2xl lg:text-3xl font-bold text-white" data-macaly="hours-time">
                7am-3pm
              </p>
              <p className="text-sm text-white/80 mt-2" data-macaly="kitchen-hours">
                (Kitchen Closes at 2:30pm)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Most Popular Dishes Section */}
      <section id="popular-dishes" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif text-oar-black"
              data-macaly="popular-dishes-title"
            >
              Most Popular Dishes
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                onClick={() => window.location.href = '/menu'}
                className="bg-oar-green hover:bg-oar-green/90 text-white px-8 py-3 rounded-full font-semibold"
              >
                VIEW FULL MENU
              </Button>
            </motion.div>
          </div>

          {/* Dishes Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Poached Eggs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img 
                  src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/yGcqUZUnGWMs7D0wLf_Kp/tmpams0-yjs.webp"
                  alt="Poached Eggs with Barossa bacon, sourdough toast, avocado, dukkah & fetta"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-macaly="popular-dish-poached-eggs-image"
                />
                <div className="absolute bottom-4 right-4 bg-oar-green text-white px-4 py-2 rounded-lg font-bold text-lg">
                  $25
                </div>
              </div>
              <h3 className="text-2xl font-serif text-oar-black mb-3" data-macaly="poached-eggs-title">
                Poached Eggs
              </h3>
              <p className="text-gray-600 leading-relaxed" data-macaly="poached-eggs-description">
                Barossa bacon | sourdough toast | avocado | dukkah & fetta
              </p>
            </motion.div>

            {/* Dark Rye */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img 
                  src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/xFvXXjXfKOqViePV8VFAE/tmplcycgtt2.webp"
                  alt="Dark Rye with fetta, avocado, togarashi, eggs, watercress, apple, radish"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-macaly="popular-dish-dark-rye-image"
                />
                <div className="absolute bottom-4 right-4 bg-oar-green text-white px-4 py-2 rounded-lg font-bold text-lg">
                  $22
                </div>
              </div>
              <h3 className="text-2xl font-serif text-oar-black mb-3" data-macaly="dark-rye-title">
                Dark Rye
              </h3>
              <p className="text-gray-600 leading-relaxed" data-macaly="dark-rye-description">
                Fetta | avocado | togarashi | eggs | watercress | apple | radish
              </p>
            </motion.div>

            {/* French Toast */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img 
                  src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/gCXx81H2B3Njh0zURl-zR/tmpl129sokm.webp"
                  alt="French Toast with cheesecake whip, roasted strawberries, curd, maple"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-macaly="popular-dish-french-toast-image"
                />
                <div className="absolute bottom-4 right-4 bg-oar-green text-white px-4 py-2 rounded-lg font-bold text-lg">
                  $26
                </div>
              </div>
              <h3 className="text-2xl font-serif text-oar-black mb-3" data-macaly="french-toast-title">
                French Toast
              </h3>
              <p className="text-gray-600 leading-relaxed" data-macaly="french-toast-description">
                Cheesecake whip | roasted strawberries | curd | maple
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OAR Restaurant Section */}
      <section id="menu" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-oar-black mb-4" data-macaly="restaurant-title">
              OAR Restaurant
            </h2>
            <div className="w-24 h-1 bg-oar-green mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-macaly="restaurant-description">
              Discover our carefully crafted seasonal menu featuring fresh, local ingredients and global flavors that define the OAR dining experience.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-serif text-oar-black mb-6">
                2025 Summer Menu
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Experience our latest seasonal offerings, featuring vibrant summer ingredients, refreshing beverages, and signature dishes that capture the essence of lakeside dining.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => {
                    console.log("2025 Summer Menu button clicked - navigating to menu page");
                    window.location.href = '/menu';
                  }}
                  className="bg-oar-green hover:bg-oar-green/90 text-white px-8 py-3 text-lg font-semibold rounded-lg"
                >
                  View 2025 Summer Menu
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/BrEUgV6exVKnItkv_zxyR/where-every-dish-tells-a-story-and-every-laugh-adds-flavor.-oarlakeside-goodvibeswithoar-deli.jpg"
                alt="OAR Restaurant summer menu featuring fresh seasonal dishes and lakeside dining"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                data-macaly="restaurant-menu-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* OAR Experience Gallery Section */}
      <section className="py-20 bg-oar-beige px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-oar-black mb-4">
              The OAR Experience
            </h2>
            <div className="w-24 h-1 bg-oar-green mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From sunrise coffee to lakeside lunches, every moment at OAR is crafted to perfection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/_YWaCAh0Hv70HnX4Sm12L/unnamed.webp"
                alt="OAR outdoor lakeside dining with umbrellas and water views"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                data-macaly="oar-experience-outdoor-dining"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/xsxNpFegzRBaLDscKXyF8/untitled-design-7-.png"
                alt="OAR interior dining atmosphere with guests enjoying meals"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                data-macaly="oar-experience-interior-dining"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/vtorE9Yp5YpSoYntyqZ5A/unnamed-1-.webp"
                alt="OAR restaurant interior with string lights and modern dining ambiance"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                data-macaly="oar-experience-interior-ambiance"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Online Order for Pick Up Section */}
      {/* <section id="online-order" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/yGcqUZUnGWMs7D0wLf_Kp/tmpams0-yjs.webp"
                alt="Fresh takeaway options available for online ordering"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                data-macaly="online-order-image"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-serif text-oar-black mb-4" data-macaly="online-order-title">
                Online Order for Pick Up
              </h2>
              <div className="w-24 h-1 bg-oar-green mb-8"></div>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed" data-macaly="online-order-description">
                Skip the wait and enjoy OAR's signature dishes from the comfort of your home. 
                Order online for convenient pickup and savor our fresh, locally-sourced meals wherever you are.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-oar-green rounded-full"></div>
                  <span className="text-gray-700">Fast & convenient online ordering</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-oar-green rounded-full"></div>
                  <span className="text-gray-700">Fresh ingredients, prepared to order</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-oar-green rounded-full"></div>
                  <span className="text-gray-700">Ready when you are - 15min pickup</span>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pt-6"
              >
                <Button 
                  onClick={() => {
                    console.log("Online Order button clicked");
                    window.open('https://oarwestlakes.orderfeeds.com/', '_blank');
                  }}
                  className="bg-oar-green hover:bg-oar-green/90 text-white px-8 py-3 text-lg font-semibold rounded-lg flex items-center gap-2"
                >
                  Order Online Now
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Takeaway Convenience Section */}
      <section className="py-20 bg-oar-beige px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-oar-black mb-4">
              Takeaway Made Easy
            </h2>
            <div className="w-24 h-1 bg-oar-green mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated 15-minute takeaway parking makes pickup quick and convenient.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-oar-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-oar-black mb-2">Order Online</h3>
              <p className="text-gray-600">Browse menu and place your order</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-oar-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-oar-black mb-2">We Prepare</h3>
              <p className="text-gray-600">Fresh ingredients, made to order</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-oar-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-oar-black mb-2">Quick Pickup</h3>
              <p className="text-gray-600">15-minute dedicated parking spots</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-oar-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-oar-black mb-2">Enjoy</h3>
              <p className="text-gray-600">Savor OAR quality anywhere</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Moments Captured Section */}
      <section id="moments-captured" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-oar-black mb-4" data-macaly="moments-title">
              Moments Captured
            </h2>
            <div className="w-24 h-1 bg-oar-green mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8" data-macaly="moments-description">
              Share your OAR experience with us. Every photo tells a story of great food, beautiful views, and memorable moments.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => {
                  console.log("Instagram button clicked");
                  window.open('https://www.instagram.com/oarlakeside/', '_blank');
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold rounded-lg flex items-center gap-2 mx-auto"
              >
                <Instagram className="w-5 h-5" />
                Follow @oarlakeside
              </Button>
            </motion.div>
          </motion.div>

          {/* Instagram Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/WIO2efRvwr2LaqzOClgkx/505447650-18505226551019495-2712278449749952026-n.jpeg"
                alt="Instagram post featuring OAR's crispy patties with poached eggs and avocado"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                data-macaly="instagram-post-1"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/p55IBW-4VQb3sxZBVQLeu/505444617-18505226539019495-105965496264506377-n.jpeg"
                alt="Instagram post showcasing OAR's grilled sourdough with halloumi and roasted tomatoes"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                data-macaly="instagram-post-2"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/LXgXiVKN0QhIV5PRaem1f/2025-06-01.webp"
                alt="Instagram post of OAR's lakeside dining atmosphere"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                data-macaly="instagram-post-3"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/BrEUgV6exVKnItkv_zxyR/where-every-dish-tells-a-story-and-every-laugh-adds-flavor.-oarlakeside-goodvibeswithoar-deli.jpg"
                alt="Instagram post featuring OAR's signature dishes and atmosphere"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                data-macaly="instagram-post-4"
              />
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 mb-4">
              Tag us in your photos for a chance to be featured!
            </p>
            <span className="text-2xl font-semibold text-oar-green">#OARLakeside #GoodVibesWithOAR</span>
          </motion.div>
        </div>
      </section>

      {/* OAR Contact Section */}
      <section id="contact" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-oar-black mb-4" data-macaly="contact-title">
              OAR Contact
            </h2>
            <div className="w-24 h-1 bg-oar-green mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-macaly="contact-description">
              Get in touch with us for reservations, events, or any questions about your OAR experience.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-serif text-oar-black mb-6">Visit Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-oar-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-oar-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-oar-black mb-2">Address</h4>
                    <p className="text-gray-600">
                      100 Military Road<br />
                      West Lakes Shore SA 5020<br />
                      In the Rowing SA complex
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-oar-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-oar-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-oar-black mb-2">Phone</h4>
                    <p className="text-gray-600">0403 573 273</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-oar-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-oar-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-oar-black mb-2">Email</h4>
                    <p className="text-gray-600">bookings@oarlakeside.com.au</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-oar-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-oar-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-oar-black mb-2">Hours</h4>
                    <p className="text-gray-600">
                      Monday - Sunday: 7am-3pm<br />
                      Kitchen closes at 2:30pm
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 shadow-lg">
                <CardContent>
                  <h3 className="text-2xl font-serif text-oar-black mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <Input
                          {...register('name')}
                          type="text"
                          className="w-full"
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <Input
                          {...register('phone')}
                          type="tel"
                          className="w-full"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        {...register('email')}
                        type="email"
                        className="w-full"
                        placeholder="Your email address"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        {...register('subject')}
                        type="text"
                        className="w-full"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        {...register('message')}
                        rows={5}
                        className="w-full"
                        placeholder="Tell us how we can help you..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>
                    
                    {submitMessage && (
                      <div className={`p-4 rounded-md ${submitMessage.includes('Thank you') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                        {submitMessage}
                      </div>
                    )}

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-oar-green hover:bg-oar-green/90 text-white py-3 text-lg font-semibold rounded-lg"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-oar-beige px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-oar-black mb-4">
              Reserve Your Table
            </h2>
            <div className="w-24 h-1 bg-oar-green mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Book your lakeside dining experience at OAR Restaurant. Select your preferred date and time below.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            {/* resOS Booking widget */}
            <div className="booking-widget-wrapper" style={{ minHeight: '700px' }}>
              <a 
                className="resos-booking-widget" 
                href="https://oarlakeside.resos.com/booking" 
                data-lang="en" 
                data-restaurant-id="L3bST4yofNoBkosxy" 
                data-domain="oarlakeside.resos.com"
              >
                Book a table
              </a>
              <div 
                id="resos-booking-script-3" 
                style={{
                  textAlign: 'center',
                  opacity: 0.6,
                  fontSize: '70%',
                  marginTop: '10px'
                }}
              >
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href="https://resos.com"
                >
                  Restaurant table management
                </a>
              </div>
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `(
                    function() {
                      const scr = document.createElement('script');
                      scr.src = 'https://oarlakeside.resos.com/embed/booking/widget.js?ts=' + new Date().getTime();
                      const el = document.getElementById('resos-booking-script-3');
                      if (el) { el.appendChild(scr); }
                    }
                  )()`
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}



