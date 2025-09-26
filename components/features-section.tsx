"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Link,
  Zap,
  Palette,
  Share2,
  Clock,
  Briefcase,
  Camera,
  MessageCircle,
  Youtube,
  CreditCard,
  MapPin,
  Sparkles,
} from "lucide-react"

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Link,
      title: "Unique Link",
      description: "Your name or business whatever it is. You can generate your business card link as per your choice.",
    },
    {
      icon: Zap,
      title: "Faster Loading",
      description: "Your name or business whatever it is. You can generate your business card link as per your choice.",
    },
    {
      icon: Palette,
      title: "Modern Theme",
      description: "We used modern theme for user interface. It is fully responsive.",
    },
    {
      icon: Share2,
      title: "Social Media Links",
      description: "Your all social media presence in one digital business card. Stay connect with your customers.",
    },
    {
      icon: Clock,
      title: "Business Hours",
      description:
        "You can display your business opening hours. Your customer can easily understand when you are available.",
    },
    {
      icon: Briefcase,
      title: "Service Section",
      description: "You can list your all services with image and description in this section.",
    },
    {
      icon: Camera,
      title: "Photo Gallery",
      description: "You can upload product photos or any business related photos in your gallery section.",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Enabled",
      description: "You can enable and disable WhatsApp Chat Feature in your digital business card.",
    },
    {
      icon: Youtube,
      title: "YouTube Link",
      description: "You can integrate your YouTube Link with your digital business card.",
    },
    {
      icon: CreditCard,
      title: "Payment Details",
      description: "You can list your all accepted payment methods in your digital business card.",
    },
    {
      icon: MapPin,
      title: "Google Maps",
      description: "You can display your shop / business location in google maps. Visitors can easily find you.",
    },
    {
      icon: Sparkles,
      title: "Clean UI Design",
      description: "We crafted all designs professionally. It made with latest frameworks.",
    },
  ]

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Tap2k Is{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Smarter?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
