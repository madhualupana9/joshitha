import { motion } from 'framer-motion'
import { ArrowRight, Building2, Zap, Shield } from 'lucide-react'
import Scene3D from './Scene3D'

const Hero = () => {
  const features = [
    { icon: Building2, text: 'Infrastructure Excellence' },
    { icon: Zap, text: 'Innovative Solutions' },
    { icon: Shield, text: 'Quality Assured' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-900/30 to-dark-900 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-transparent to-primary-900/20 z-10"></div>

      {/* Animated Grid */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(244, 63, 117, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244, 63, 117, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">Established 2010 • Class-I Contractor</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight"
              >
                <span className="block text-white">Building</span>
                <span className="block text-gradient glow-text">Tomorrow's</span>
                <span className="block text-white">Infrastructure</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-400 max-w-2xl"
              >
                JOSHITHA Infratech Private Limited - Your trusted partner in Civil, Electrical, 
                Mechanical, Design, Engineering and Construction excellence.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-2 px-4 py-3 glass rounded-lg cursor-pointer group"
                >
                  <feature.icon className="w-5 h-5 text-primary-400 group-hover:text-primary-300 transition-colors" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-200 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-4 glass hover:bg-white/10 text-white rounded-lg font-medium transition-all duration-200 border border-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Floating Card 1 */}
            {/* <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-64 p-6 glass rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">500+</h3>
                  <p className="text-xs text-gray-400">Projects Completed</p>
                </div>
              </div>
            </motion.div> */}

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-40 right-20 w-64 p-6 glass rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Class-I</h3>
                  <p className="text-xs text-gray-400">Civil Contractor</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 3 */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-80 right-10 w-64 p-6 glass rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Grade-A</h3>
                  <p className="text-xs text-gray-400">Electrical License</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

