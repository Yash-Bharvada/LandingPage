import { motion } from 'framer-motion';

const features = [
  { 
    title: "Smart Contract Review", 
    desc: "AI analyzes contracts for risks and red flags, highlighting potential issues and suggesting improvements.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ) 
  },
  { 
    title: "Clause Matching", 
    desc: "Automatically matches clauses against compliance standards and legal requirements to ensure your contracts meet all necessary criteria.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ) 
  },
  { 
    title: "Upload & Chat", 
    desc: "Simply upload your documents and chat with our AI assistant to get instant answers about your contracts and legal documents.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ) 
  },
];

const FeatureSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our AI-powered platform simplifies contract analysis and management</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-gray-200 hover:border-blue-300 shadow-xl hover:shadow-blue-100 transition-all duration-300 w-full max-w-sm"
              variants={itemVariants}
            >
              <div className="bg-blue-50 p-3 rounded-xl w-fit mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
