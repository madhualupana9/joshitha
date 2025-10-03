import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Calendar, DollarSign, CheckCircle } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState('completed')

  const completedProjects = [
    {
      title: 'HPCL Bangalore',
      location: 'Bangalore, Karnataka',
      value: '₹45 Crores',
      year: '2018-2019',
      category: 'Industrial',
      description: 'Complete civil and electrical works for HPCL facility',
    },
    {
      title: 'NTPC Korba',
      location: 'Korba, Chhattisgarh',
      value: '₹120 Crores',
      year: '2019-2020',
      category: 'Power',
      description: 'Power plant infrastructure development',
    },
    {
      title: 'Prestige Ivyl',
      location: 'Hyderabad, Telangana',
      value: '₹85 Crores',
      year: '2020-2021',
      category: 'Residential',
      description: 'Premium residential complex construction',
    },
    {
      title: 'RFCL Ramagundam',
      location: 'Ramagundam, Telangana',
      value: '₹95 Crores',
      year: '2021-2022',
      category: 'Industrial',
      description: 'Fertilizer plant civil works',
    },
  ]

  const ongoingProjects = [
    {
      title: 'Metro Rail Phase-II',
      location: 'Hyderabad, Telangana',
      value: '₹250 Crores',
      progress: 65,
      category: 'Infrastructure',
      description: 'Metro rail corridor construction',
    },
    {
      title: 'Smart City Development',
      location: 'Visakhapatnam, AP',
      value: '₹180 Crores',
      progress: 45,
      category: 'Infrastructure',
      description: 'Integrated smart city infrastructure',
    },
    {
      title: 'Industrial Park',
      location: 'Bangalore, Karnataka',
      value: '₹320 Crores',
      progress: 30,
      category: 'Industrial',
      description: 'Multi-purpose industrial park development',
    },
  ]

  const projects = activeTab === 'completed' ? completedProjects : ongoingProjects

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-800"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-4"
          >
            Our Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Delivering excellence across diverse construction projects
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass p-2 rounded-xl inline-flex gap-2">
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'completed'
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Completed Projects
            </button>
            <button
              onClick={() => setActiveTab('ongoing')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'ongoing'
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Ongoing Projects
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass p-8 rounded-2xl group cursor-pointer"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-medium rounded-full">
                  {project.category}
                </span>
                {activeTab === 'completed' && (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6">
                {project.description}
              </p>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <DollarSign className="w-4 h-4 text-primary-400" />
                  <span>Contract Value: {project.value}</span>
                </div>
                {activeTab === 'completed' ? (
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Calendar className="w-4 h-4 text-primary-400" />
                    <span>{project.year}</span>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                      <span>Progress</span>
                      <span className="text-primary-400 font-semibold">{project.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${project.progress}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-600"
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 glass hover:bg-white/10 text-white rounded-lg font-medium transition-all duration-200 border border-white/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <span className="ml-2 px-2 py-0.5 text-xs bg-primary-500/20 text-primary-400 rounded">
              
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

