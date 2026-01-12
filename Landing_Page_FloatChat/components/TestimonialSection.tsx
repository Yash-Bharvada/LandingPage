import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "ContractAI has revolutionized how our legal team handles contracts. We've reduced review time by 70%.",
    author: "Sarah Johnson",
    role: "Legal Director, TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "The clause matching feature has helped us ensure compliance across all our documents. It's been a game-changer.",
    author: "Michael Chen",
    role: "Compliance Officer, FinanceHub",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    quote: "Being able to chat with the AI about our contracts has made legal knowledge accessible to our entire team.",
    author: "Emily Rodriguez",
    role: "Operations Manager, StartupX",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Trusted by legal teams and businesses worldwide
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i} 
              className="bg-gray-50 backdrop-blur p-8 rounded-2xl border border-gray-200 w-full max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="flex items-center mb-6 justify-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 border-2 border-blue-500"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-center">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;