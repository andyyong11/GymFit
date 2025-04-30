import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiSend, FiMap, FiMail, FiPhone, FiChevronRight } from 'react-icons/fi';

const About = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log("Form submitted:", contactForm);
    setSubmitted(true);
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    // Reset the submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <div>
      {/* About Us Hero */}
      <section className="bg-gradient-to-r from-primary to-indigo-800 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About GymFit</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your AI-powered fitness companion designed to help you create and maintain personalized fitness routines.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Mission and Values */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our mission is to provide people of any fitness level with comprehensive workout programs, nutritional assistance, and an active community that supports them throughout their fitness journey.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-3">
                {[
                  "Personalization: Every fitness journey is unique",
                  "Accessibility: Fitness should be available to everyone",
                  "Community: Support and motivation are key to success",
                  "Innovation: Leveraging technology to enhance fitness experiences",
                  "Integrity: Providing honest, science-based guidance"
                ].map((value, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-secondary mr-2 mt-1">
                      <FiCheckCircle />
                    </span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gray-100 p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold mb-6">Business Goals</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-primary mr-2"><FiChevronRight /></span>
                    User Growth
                  </h3>
                  <p className="text-gray-700">
                    Attain 5,000 downloads within the first year of launch, building a strong user base.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-primary mr-2"><FiChevronRight /></span>
                    Premium Subscribers
                  </h3>
                  <p className="text-gray-700">
                    Convert 1,250 users to paid premium subscribers in the first 12 months, establishing revenue stability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-primary mr-2"><FiChevronRight /></span>
                    User Satisfaction
                  </h3>
                  <p className="text-gray-700">
                    Maintain a stellar user rating of 4 stars or higher in app stores, ensuring quality service.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Have questions about GymFit or need personalized assistance? Reach out to our team and we'll be happy to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 text-primary">
                    <FiMap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Address</h3>
                    <p className="text-gray-600">123 Fitness Ave, Sioux Falls, SD 57106</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-primary">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-gray-600">info@gymfit.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-primary">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 flex items-center"
                  >
                    <FiCheckCircle className="mr-2" />
                    <span>Thank you for your message! We'll get back to you soon.</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={contactForm.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full flex justify-center items-center"
                    >
                      <FiSend className="mr-2" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 