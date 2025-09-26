"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Users, Scale, TrendingUp, ChevronLeft, ChevronRight, Building, Briefcase, Heart } from "lucide-react"

export function UseCasesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const useCases = [
    {
      icon: Users,
      title: "Recruiter & HR",
      description:
        "HR teams use NFC cards to quickly share contact info, resumes, or job links making hiring and networking faster and more efficient.",
      image: "/hr.jpeg",
      benefits: ["Instant resume sharing", "Quick candidate contact", "Professional networking", "Event recruiting"],
    },
    {
      icon: Scale,
      title: "Lawyers",
      description:
        "Lawyers use NFC cards to instantly share contact details, firm info, or booking links offering a smart, professional way to connect with clients.",
      image: "/lawyer.jpeg",
      benefits: [
        "Client consultation booking",
        "Firm information sharing",
        "Professional credibility",
        "Case referrals",
      ],
    },
    {
      icon: TrendingUp,
      title: "Sales",
      description:
        "Sales professionals use NFC cards to share contact info, product pages, or brochures instantly boosting leads and closing deals faster.",
      image: "/sales.jpeg",
      benefits: ["Lead generation", "Product catalogs", "Instant follow-ups", "Deal closing"],
    },
    {
      icon: Building,
      title: "Real Estate",
      description:
        "Real estate agents use NFC cards to share property listings, virtual tours, and contact information instantly with potential buyers.",
      image: "/real.jpeg",
      benefits: ["Property listings", "Virtual tours", "Market analysis", "Client testimonials"],
    },
    {
      icon: Briefcase,
      title: "Consultants",
      description:
        "Business consultants leverage NFC cards to share portfolios, case studies, and booking calendars for seamless client acquisition.",
      image: "/consul.jpeg",
      benefits: ["Portfolio showcase", "Case studies", "Calendar booking", "Service packages"],
    },
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "Healthcare professionals use NFC cards to share practice information, appointment booking, and patient resources efficiently.",
      image: "/health.jpeg",
      benefits: ["Appointment booking", "Practice information", "Patient resources", "Telehealth links"],
    },
  ]

  const itemsPerPage = 3
  const totalPages = Math.ceil(useCases.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentItems = () => {
    const startIndex = currentIndex * itemsPerPage
    return useCases.slice(startIndex, startIndex + itemsPerPage)
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Digital Business Card Use Cases</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Discover the many ways digital business cards are used by professionals worldwide to increase sales, expand
            networks, and secure new job opportunities.
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 dark:bg-blue-400"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          <div className="flex space-x-2">
            <motion.button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.button>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-3 gap-8 min-h-[500px]">
          {getCurrentItems().map((useCase, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full border border-gray-100 dark:border-gray-700">
                <motion.div
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={useCase.image || "/placeholder.svg"}
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      Professional
                    </div>
                  </div>
                </motion.div>

                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-grow">
                    {useCase.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing {currentIndex * itemsPerPage + 1}-{Math.min((currentIndex + 1) * itemsPerPage, useCases.length)} of{" "}
            {useCases.length} use cases
          </p>
        </div>
      </div>
    </section>
  )
}
