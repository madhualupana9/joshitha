import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Building, Factory, Zap, Home, Lightbulb, Briefcase } from 'lucide-react'

const BusinessSectors = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const sectors = [
    {
      icon: Building,
      title: 'Infrastructure Development',
      description: 'Comprehensive infrastructure solutions including roads, bridges, and urban development projects.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Factory,
      title: 'Industrial Structures',
      description: 'Design and construction of industrial facilities, warehouses, and manufacturing plants.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Building,
      title: 'Institutional Buildings',
      description: 'Educational institutions, hospitals, and government buildings with modern amenities.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Home,
      title: 'Residential & Commercial',
      description: 'High-quality residential complexes and commercial spaces designed for modern living.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Power Projects',
      description: 'Electrical infrastructure and power generation projects up to 660 MW capacity.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Briefcase,
      title: 'Project Management',
      description: 'End-to-end project management consultancy and execution services.',
      gradient: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <section id="services" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-4"
          >
            Our Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Business <span className="text-gradient">Sectors</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive construction solutions across multiple sectors
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveIndex(index)}
              className="group relative"
            >
              <div className={`glass p-8 rounded-2xl h-full transition-all duration-300 ${
                activeIndex === index ? 'scale-105 shadow-2xl' : ''
              }`}>
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${sector.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                  <sector.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {sector.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {sector.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                {/* Border Glow */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, rgba(244, 63, 117, 0.1) 50%, transparent 100%)`,
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-200"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default BusinessSectors

