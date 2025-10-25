"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import ShaderBackground from "@/components/shader-background"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: ""
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <ShaderBackground>
      <Header />
      <div className="relative z-10 px-8 py-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
              Get In <span className="font-medium italic instrument">Touch</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Ready to scale your e-commerce business? Let's discuss how our ecosystem of services can help you grow.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <a 
                      href="mailto:official@hashshopinc.com"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      official@hashshopinc.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Phone</h3>
                    <a 
                      href="tel:+14255349380"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      +1 (425) 534-9380
                    </a>
                  </div>
                </div>


                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <Clock className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Business Hours</h3>
                    <p className="text-white/70">Monday - Friday</p>
                    <p className="text-white/70">9:00 AM - 6:00 PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Overview */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Inventory Liquidation</span>
                  <span className="text-xs text-white/50">XcessFlow</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">LATAM Expansion</span>
                  <span className="text-xs text-white/50">ssello</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Amazon Automation</span>
                  <span className="text-xs text-white/50">DropMate</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Analytics & Insights</span>
                  <span className="text-xs text-white/50">Ogeo</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">K-Fashion Retail</span>
                  <span className="text-xs text-white/50">Pickori</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">B2B Commerce</span>
                  <span className="text-xs text-white/50">SwiftBuy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl font-light text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors"
                >
                  <option value="" className="bg-gray-800">Select a subject</option>
                  <option value="general" className="bg-gray-800">General Inquiry</option>
                  <option value="xcessflow" className="bg-gray-800">XcessFlow - Inventory Liquidation</option>
                  <option value="ssello" className="bg-gray-800">ssello - LATAM Expansion</option>
                  <option value="dropmate" className="bg-gray-800">DropMate - Amazon Automation</option>
                  <option value="ogeo" className="bg-gray-800">Ogeo - Analytics</option>
                  <option value="pickori" className="bg-gray-800">Pickori - K-Fashion</option>
                  <option value="swiftbuy" className="bg-gray-800">SwiftBuy - B2B Commerce</option>
                  <option value="partnership" className="bg-gray-800">Partnership Opportunity</option>
                  <option value="careers" className="bg-gray-800">Careers</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Tell us about your business and how we can help..."
                />
              </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-green-500/20 border border-green-400/30 text-green-300">
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/20 border border-red-400/30 text-red-300">
                  ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl font-light text-white mb-4">Need immediate assistance?</h3>
          <p className="text-white/70 mb-6">
            For urgent inquiries or immediate support, feel free to call us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14255349380"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-white font-medium"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
            <a
              href="mailto:official@hashshopinc.com"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-white font-medium"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </ShaderBackground>
  )
}
