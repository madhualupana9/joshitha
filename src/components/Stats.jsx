import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Building2, Briefcase, Users, Award } from 'lucide-react'

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { icon: Building2, value: 500, suffix: '+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-500' },
    { icon: Briefcase, value: 2900, suffix: '+', label: 'Crores Contract Value', color: 'from-purple-500 to-pink-500' },
    { icon: Users, value: 1000, suffix: '+', label: 'Skilled Professionals', color: 'from-orange-500 to-red-500' },
    { icon: Award, value: 15, suffix: '+', label: 'Years Experience', color: 'from-green-500 to-emerald-500' },
  ]

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-900 to-dark-900"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(244, 63, 117, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

const StatCard = ({ stat, index, isInView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = stat.value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, stat.value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative group"
    >
      <div className="glass p-6 rounded-2xl h-full">
        {/* Icon */}
        <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-shadow`}>
          <stat.icon className="w-7 h-7 text-white" />
        </div>

        {/* Number */}
        <div className="mb-2">
          <span className="text-4xl font-display font-bold text-white">
            {count}
          </span>
          <span className="text-3xl font-display font-bold text-primary-400">
            {stat.suffix}
          </span>
        </div>

        {/* Label */}
        <p className="text-sm text-gray-400 font-medium">{stat.label}</p>

        {/* Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
      </div>
    </motion.div>
  )
}

export default Stats

