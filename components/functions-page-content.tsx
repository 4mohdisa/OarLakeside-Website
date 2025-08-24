'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Calendar, Users, Wine, ChefHat, MapPin, Phone, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const functionInquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  eventType: z.string().min(1, 'Please select an event type'),
  eventDate: z.string().min(1, 'Please select an event date'),
  guestCount: z.string().min(1, 'Please enter number of guests'),
  message: z.string().min(10, 'Please provide more details about your event'),
})

type FunctionInquiryForm = z.infer<typeof functionInquirySchema>

export default function FunctionsPageContent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FunctionInquiryForm>({
    resolver: zodResolver(functionInquirySchema),
  })

  const onSubmit = async (data: FunctionInquiryForm) => {
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/functions-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitMessage('Thank you! Your function inquiry has been submitted. We will contact you within 24 hours.')
        reset()
      } else {
        setSubmitMessage('There was an error submitting your inquiry. Please try again or call us directly.')
      }
    } catch (error) {
      setSubmitMessage('There was an error submitting your inquiry. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(48,74,51,0.7), rgba(48,74,51,0.7)), url('https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/_YWaCAh0Hv70HnX4Sm12L/unnamed.webp')`
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            OAR – Functions
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-4">
            Coffee House • Bar • Kitchen
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Your perfect lakeside venue for unforgettable celebrations
          </p>
        </motion.div>
      </section>

      {/* Main Content Section */}
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
                Private Function Space
              </h2>
              <div className="w-24 h-1 bg-oar-green mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In the evenings OAR can be used as a private function space. With surrounding views of the Lake and adjacent reserve, it is perfect for a wedding, engagement or amazing party.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When hosting an event at OAR you will command our whole site, hence you will be our sole priority, with all our attention focused on you and your special event. We offer both sit down and cocktail menus, created using fresh local ingredients, with our specialist chefs available to tailor the menu to your needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The bar is stocked with boutique wine and beer, and packages can be made to include any of your favourites.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our event coordinator is here to create an evening that is unique to your personality and will impress even the fussiest of guests!
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
                src="https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/xsxNpFegzRBaLDscKXyF8/untitled-design-7-.png"
                alt="OAR Restaurant private function space with elegant dining setup"
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
              Why Choose OAR for Your Event
            </h2>
            <div className="w-24 h-1 bg-oar-green mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need for a memorable celebration in one stunning lakeside location
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
                  <h3 className="text-xl font-semibold text-oar-black mb-3">Exclusive Venue</h3>
                  <p className="text-gray-600">Complete privacy with stunning lakeside views and reserve surroundings</p>
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
                    <ChefHat className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-oar-black mb-3">Custom Menus</h3>
                  <p className="text-gray-600">Tailored sit-down or cocktail menus using fresh local ingredients</p>
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
                    <Wine className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-oar-black mb-3">Premium Bar</h3>
                  <p className="text-gray-600">Boutique wines and craft beers with custom packages available</p>
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
                  <h3 className="text-xl font-semibold text-oar-black mb-3">Event Coordination</h3>
                  <p className="text-gray-600">Dedicated coordinator to create your unique and memorable event</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-oar-black mb-4">
              Contact Us Today
            </h2>
            <div className="w-24 h-1 bg-oar-green mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to discuss your special night? Fill out the form below and our event coordinator will contact you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        {...register('name')}
                        className="mt-1"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        {...register('phone')}
                        className="mt-1"
                        placeholder="0412 345 678"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="eventType" className="text-sm font-medium text-gray-700">
                        Event Type *
                      </Label>
                      <select
                        id="eventType"
                        {...register('eventType')}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-oar-green focus:border-oar-green"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="engagement">Engagement</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.eventType && (
                        <p className="mt-1 text-sm text-red-600">{errors.eventType.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="eventDate" className="text-sm font-medium text-gray-700">
                        Preferred Event Date *
                      </Label>
                      <Input
                        id="eventDate"
                        type="date"
                        {...register('eventDate')}
                        className="mt-1"
                      />
                      {errors.eventDate && (
                        <p className="mt-1 text-sm text-red-600">{errors.eventDate.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="guestCount" className="text-sm font-medium text-gray-700">
                        Number of Guests *
                      </Label>
                      <Input
                        id="guestCount"
                        {...register('guestCount')}
                        className="mt-1"
                        placeholder="e.g. 50"
                      />
                      {errors.guestCount && (
                        <p className="mt-1 text-sm text-red-600">{errors.guestCount.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Event Details *
                    </Label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      className="mt-1"
                      rows={4}
                      placeholder="Please tell us more about your event, including any special requirements, dietary needs, or specific requests..."
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
                    className="w-full bg-oar-green hover:bg-oar-green/90 text-white py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Function Inquiry'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
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
              Ready to Create Memories?
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Let us help you create an unforgettable event at Adelaide's most beautiful lakeside venue
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => {
                    const form = document.getElementById('name');
                    if (form) {
                      form.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-oar-green px-12 py-6 text-lg font-bold rounded-full shadow-lg"
                >
                  GET STARTED
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => {
                    window.location.href = 'tel:+61-8-XXXX-XXXX';
                  }}
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-oar-green px-12 py-6 text-lg font-bold rounded-full"
                >
                  CALL NOW
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
