import { motion } from 'framer-motion';

const DemoSection = () => {
  return (
    <section id="demo" className="py-20 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            See ContractAI in Action
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Watch how our platform transforms contract management
          </motion.p>
        </div>
        
        <motion.div 
          className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-blue-200 border border-gray-200"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          {/* Video placeholder - in a real implementation, this would be replaced with an actual video player */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-blue-600 transition-colors shadow-lg shadow-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-600">Click to watch demo</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;