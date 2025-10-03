import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-900"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="relative w-32 h-32 mx-auto mb-8"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0 border-4 border-primary-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary-500 rounded-full"></div>
        </motion.div>
        
        <motion.h2
          className="text-3xl font-display font-bold text-gradient mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          JOSHITHA GROUP
        </motion.h2>
        
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Building Tomorrow's Infrastructure
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Loader

