"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function ClientHighlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0)

  const testimonials = [
    {
      name: "Oliyad Chala",
      role: "UI/UX Designer and Web Developer",
      image: "/man.jpeg",
      rating: 5,
      testimonial:
        "Tap2k has revolutionized how I network at design conferences. The instant sharing of my portfolio and contact info has led to 3x more meaningful connections.",
      company: "Design Studio Pro",
    },
    {
      name: "Sarah Johnson ",
      role: "Software Engineer",
      image: "/girl.jpeg",
      rating: 5,
      testimonial:
        "As a developer, I appreciate the clean tech behind Tap2k. It's seamless, fast, and has helped me land several freelance projects through networking events.",
      company: "Tech Innovations Inc",
    },
    {
      name: "Kebek Chala",
      role: "Project Manager / Co-Founder At 2k Grand",
      image: "/man.jpeg",
      rating: 5,
      testimonial:
        "Managing multiple projects means meeting lots of people. Tap2k makes it effortless to share my contact info and project portfolios instantly.",
      company: "2k Grand",
    },
    {
      name: "Michael Chen",
      role: "ERP Consultant | Project Manager | Developer",
      image: "/man.jpeg",
      rating: 5,
      testimonial:
        "In consulting, first impressions matter. Tap2k gives me a professional edge and has increased my client conversion rate by 40%.",
      company: "Enterprise Solutions",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image: "/girl.jpeg",
      rating: 5,
      testimonial:
        "The analytics feature helps me track which connections are most valuable. It's like having a CRM built into my business card!",
      company: "Growth Marketing Co",
    },
    {
      name: "David Kim",
      role: "Sales Executive",
      image: "/man.jpeg",
      rating: 5,
      testimonial:
        "My sales have increased 60% since using Tap2k. Prospects love the instant access to product catalogs and my calendar booking link.",
      company: "SalesForce Pro",
    },
  ]

  const companies = [
    {
      name: "2K Grand",
      logo: "/grand.png",
      description: "Leading project management and development company",
      industry: "Technology Services",
      employees: "5-10",
    },
    {
      name: "Chilalo Food Complex",
      description: "Distinguished food manufacturing company, renowned for its exceptional range of products",
      logo: "/chilalo.svg",
      industry: "Food Manufacturing",
      employees: "200-500",
    },
    {
      name: "Design Studio Pro",
      logo: "/placeholder.svg?height=60&width=120&text=DESIGN+STUDIO+PRO+LOGO",
      description: "Creative design agency specializing in digital experiences and brand identity",
      industry: "Design & Creative",
      employees: "10-50",
    },
    {
      name: "Tech Innovations Inc",
      logo: "/placeholder.svg?height=60&width=120&text=TECH+INNOVATIONS+LOGO",
      description: "Cutting-edge software development and technology consulting firm",
      industry: "Software Development",
      employees: "100-200",
    },
    {
      name: "Enterprise Solutions",
      logo: "/placeholder.svg?height=60&width=120&text=ENTERPRISE+SOLUTIONS+LOGO",
      description: "ERP implementation and business process optimization specialists",
      industry: "Business Consulting",
      employees: "25-75",
    },
    {
      name: "Growth Marketing Co",
      logo: "/placeholder.svg?height=60&width=120&text=GROWTH+MARKETING+LOGO",
      description: "Data-driven marketing agency focused on scalable growth strategies",
      industry: "Marketing & Advertising",
      employees: "15-30",
    },
  ]

  const testimonialsPerPage = 3
  const companiesPerPage = 2
  const totalTestimonialPages = Math.ceil(testimonials.length / testimonialsPerPage)
  const totalCompanyPages = Math.ceil(companies.length / companiesPerPage)

  const nextTestimonials = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % totalTestimonialPages)
  }

  const prevTestimonials = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + totalTestimonialPages) % totalTestimonialPages)
  }

  const nextCompanies = () => {
    setCurrentCompanyIndex((prev) => (prev + 1) % totalCompanyPages)
  }

  const prevCompanies = () => {
    setCurrentCompanyIndex((prev) => (prev - 1 + totalCompanyPages) % totalCompanyPages)
  }

  const getCurrentTestimonials = () => {
    const startIndex = currentTestimonialIndex * testimonialsPerPage
    return testimonials.slice(startIndex, startIndex + testimonialsPerPage)
  }

  const getCurrentCompanies = () => {
    const startIndex = currentCompanyIndex * companiesPerPage
    return companies.slice(startIndex, startIndex + companiesPerPage)
  }

  return (
    <section
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Client Highlights</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Showcasing the amazing brands and businesses we've worked with from startups to established companies
            bringing their digital ideas to life.
          </p>
        </motion.div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">What Our Clients Say</h3>
            <div className="flex space-x-2">
              <motion.button
                onClick={prevTestimonials}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </motion.button>
              <motion.button
                onClick={nextTestimonials}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </motion.button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 min-h-[300px]">
            {getCurrentTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${currentTestimonialIndex}-${index}`}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-blue-100 dark:border-blue-800"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-blue-600 dark:text-blue-400 opacity-50 mb-2" />
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed italic">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalTestimonialPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonialIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonialIndex
                    ? "bg-blue-600 dark:bg-blue-400"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Company Logos Section */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Trusted by Leading Companies</h3>
            <div className="flex space-x-2">
              <motion.button
                onClick={prevCompanies}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </motion.button>
              <motion.button
                onClick={nextCompanies}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </motion.button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto min-h-[200px]">
            {getCurrentCompanies().map((company, index) => (
              <motion.div
                key={`${currentCompanyIndex}-${index}`}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 mb-4">
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="h-16 mx-auto object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{company.name}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{company.description}</p>
                <div className="flex justify-center space-x-4 text-xs text-gray-500 dark:text-gray-500">
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{company.industry}</span>
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{company.employees} employees</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalCompanyPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCompanyIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentCompanyIndex
                    ? "bg-blue-600 dark:bg-blue-400"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
