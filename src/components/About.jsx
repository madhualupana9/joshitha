import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Target, TrendingUp } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: Award,
      title: 'Class-I Contractor',
      description: 'Registered with Telangana Government'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled Engineering Professionals'
    },
    {
      icon: Target,
      title: 'Diverse Projects',
      description: 'Infrastructure to Power Projects'
    },
    {
      icon: TrendingUp,
      title: 'Since 2010',
      description: 'Operations commenced FY2017'
    }
  ]

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>

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
            About Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Building Excellence Since{' '}
            <span className="text-gradient">2010</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your trusted partner in comprehensive construction solutions
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                JOSHITHA Infratech Private Limited
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Established in 2010 as a comprehensive Civil, Electrical, Mechanical, Design, 
                Engineering and Construction company. Our operations commenced from FY2017, and 
                we are presently involved in diverse construction activities.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                We are proud to have bagged significant work orders from various clients in the 
                year of commencement of operations itself. Registered as Class-I Civil Contractor 
                with Telangana Government and holding Electrical "A" Grade Licence.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our company has its beginnings through the amalgamation of common interests of 
                our promoters - to provide services to the industry through skilled and experienced 
                Engineering Professionals.
              </p>
            </div>

            {/* Certifications */}
            <div className="glass p-6 rounded-2xl">
              <h4 className="text-lg font-semibold text-white mb-4">Certifications & Licenses</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Class-I Civil Contractor - Telangana State</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Grade 'A' Electrical License (All Voltages)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>GST Registered (Telangana, AP, Karnataka)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl group cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500/30 transition-colors">
                  <item.icon className="w-7 h-7 text-primary-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Director Profile Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass p-8 rounded-2xl"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-primary-500/50">
              MB
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Mr. Manohar Budarapu
              </h3>
              <p className="text-primary-400 font-medium mb-3">Director</p>
              <p className="text-gray-300 leading-relaxed">
                A well-experienced Engineer with a vision for developing and establishing a company 
                specializing in execution of infrastructure projects. With a career spanning over 32 years, 
                he has handled several dynamic projects including Industrial, Transmission & Distribution Lines, 
                Buildings, Airport Terminal Buildings, Power Projects up to 660 MW, Metro Rail, and more.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

