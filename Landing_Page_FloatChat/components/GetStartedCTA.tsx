import { motion } from 'framer-motion';

const GetStartedCTA = () => {
  return (
    <motion.div 
      className="flex flex-col md:flex-row gap-6 justify-center items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.8 }}
    >
      <a href="#features">
        <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 text-lg">
          Get Started
        </button>
      </a>
      <a href="#demo" className="px-10 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all text-lg">
        Watch Demo
      </a>
    </motion.div>
  );
};

export default GetStartedCTA;
