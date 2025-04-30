import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiActivity, FiAward, FiBarChart2, FiCalendar, FiUsers, FiTarget, FiArrowRight, FiMessageSquare, FiHeart, FiStar, FiClock, FiCheck } from 'react-icons/fi';

// Mock image imports (in a real project, you'd have these files)
const heroImageUrl = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const appScreenshotUrl = "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

const Home = () => {
  // Fitness goal quiz state
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  
  // Handle quiz answers
  const handleQuizAnswer = (answer) => {
    setQuizAnswers({...quizAnswers, [quizStep]: answer});
    if (quizStep < 2) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizStep(3); // Results
    }
  };
  
  // Reset quiz
  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({});
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
  
  // Mock forum posts
  const forumPosts = [
    {
      id: 1,
      user: "FitnessJunkie",
      title: "How did you overcome your workout plateau?",
      replies: 24,
      likes: 35,
      time: "2 hours ago",
      tags: ["Motivation", "Progress"]
    },
    {
      id: 2,
      user: "NutritionNewbie",
      title: "Best protein options for vegetarians?",
      replies: 16,
      likes: 22,
      time: "5 hours ago",
      tags: ["Nutrition", "Diet"]
    },
    {
      id: 3,
      user: "MarathonMaster",
      title: "Training schedule for my first 10K",
      replies: 31,
      likes: 43,
      time: "1 day ago",
      tags: ["Running", "Training"]
    }
  ];
  
  // Quiz questions
  const quizQuestions = [
    {
      question: "What's your primary fitness goal?",
      options: ["Lose Weight", "Build Muscle", "Improve Endurance", "Overall Health"]
    },
    {
      question: "How much time can you commit weekly?",
      options: ["1-2 hours", "3-4 hours", "5-6 hours", "7+ hours"]
    },
    {
      question: "Where do you prefer to work out?",
      options: ["At home", "At the gym", "Outdoors", "Mix of locations"]
    }
  ];
  
  // Preview cards data
  const previewCards = [
    {
      title: "About Our Mission",
      description: "Learn how GymFit is revolutionizing fitness through AI personalization.",
      icon: <FiTarget className="text-primary" size={24} />,
      link: "/about",
      linkText: "Our Story"
    },
    {
      title: "Premium Services",
      description: "Explore our subscription options and personalized training services.",
      icon: <FiAward className="text-secondary" size={24} />,
      link: "/services",
      linkText: "See Plans"
    },
    {
      title: "Get In Touch",
      description: "Questions about GymFit? Our team is ready to help you succeed.",
      icon: <FiMessageSquare className="text-accent" size={24} />,
      link: "/about",
      linkText: "Contact Us"
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImageUrl} 
            alt="Fitness background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10 py-20 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-extrabold mb-4"
                variants={fadeIn}
              >
                Your AI-Powered <br/>
                <span className="text-secondary">Fitness</span> Companion
              </motion.h1>
              <motion.p 
                className="text-lg mb-8 text-gray-100"
                variants={fadeIn}
              >
                Personalized workout plans, nutrition guidance, and progress tracking - all powered by advanced AI to meet your unique fitness goals.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                variants={fadeIn}
              >
                <Link to="/services" className="btn-secondary text-center">
                  Get Started
                </Link>
                <Link to="/about" className="bg-white text-primary hover:bg-gray-100 font-bold py-2 px-6 rounded-md transition duration-300 text-center">
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-lg shadow-xl overflow-hidden bg-white"
            >
              <img 
                src={appScreenshotUrl} 
                alt="GymFit App" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Preview Cards Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {previewCards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  {card.icon}
                  <h3 className="text-xl font-bold ml-2">{card.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <Link 
                  to={card.link} 
                  className="text-primary font-medium flex items-center hover:underline"
                >
                  {card.linkText}
                  <FiArrowRight className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets GymFit Apart</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform creates personalized fitness experiences tailored to your body, goals, and preferences.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <FiActivity size={28} />,
                title: "AI-Powered Personalization",
                description: "Advanced algorithms create workout and nutrition plans that adapt to your progress and preferences."
              },
              {
                icon: <FiAward size={28} />,
                title: "Professional Guidance",
                description: "Access to certified trainers who can provide expert advice and personalized coaching."
              },
              {
                icon: <FiBarChart2 size={28} />,
                title: "Progress Tracking",
                description: "Comprehensive analytics to monitor your fitness journey and celebrate achievements."
              },
              {
                icon: <FiCalendar size={28} />,
                title: "Flexible Scheduling",
                description: "Workouts that fit your life, not the other way around, with adaptable schedules."
              },
              {
                icon: <FiUsers size={28} />,
                title: "Supportive Community",
                description: "Connect with like-minded individuals for motivation, challenges, and support."
              },
              {
                icon: <FiTarget size={28} />,
                title: "Goal-Oriented Approach",
                description: "Set and achieve meaningful fitness milestones with structured progression."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Interactive Quiz Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Fitness Plan</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take our quick quiz to get a personalized recommendation based on your goals and preferences.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8"
          >
            {quizStep < 3 ? (
              <>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-500">Question {quizStep + 1} of 3</span>
                    <span className="text-sm text-primary font-medium">{Math.round((quizStep / 3) * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: `${((quizStep + 1) / 3) * 100}%` }}></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">{quizQuestions[quizStep].question}</h3>
                <div className="space-y-3">
                  {quizQuestions[quizStep].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuizAnswer(option)}
                      className="w-full text-left p-4 border border-gray-200 rounded-md hover:border-primary hover:bg-indigo-50 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="bg-green-100 text-green-800 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FiCheck size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Your Personalized Recommendation</h3>
                <p className="text-gray-600 mb-6">
                  Based on your goals to <strong>{quizAnswers[0]}</strong>, 
                  with <strong>{quizAnswers[1]}</strong> weekly availability, 
                  and preference to train <strong>{quizAnswers[2]}</strong>, 
                  we recommend our:
                </p>
                
                {/* Dynamic recommendation based on answers */}
                {(() => {
                  // Weight loss or endurance with limited time
                  if ((quizAnswers[0] === "Lose Weight" || quizAnswers[0] === "Improve Endurance") && 
                      (quizAnswers[1] === "1-2 hours" || quizAnswers[1] === "3-4 hours")) {
                    return (
                      <div className="bg-primary text-white p-4 rounded-lg mb-6">
                        <h4 className="text-xl font-bold mb-1">Premium Monthly Plan</h4>
                        <p>With AI-guided workouts optimized for efficient results</p>
                      </div>
                    );
                  }
                  // Muscle building with more time
                  else if (quizAnswers[0] === "Build Muscle" && 
                          (quizAnswers[1] === "5-6 hours" || quizAnswers[1] === "7+ hours")) {
                    return (
                      <div className="bg-secondary text-white p-4 rounded-lg mb-6">
                        <h4 className="text-xl font-bold mb-1">Premium Annual Plan</h4>
                        <p>With 4 personal training sessions monthly for optimal strength gains</p>
                      </div>
                    );
                  }
                  // Home-based workouts with any goal
                  else if (quizAnswers[2] === "At home" && quizAnswers[1] === "1-2 hours") {
                    return (
                      <div className="bg-gray-700 text-white p-4 rounded-lg mb-6">
                        <h4 className="text-xl font-bold mb-1">Free Plan</h4>
                        <p>Start with our basic home workout routines to build consistency</p>
                      </div>
                    );
                  }
                  // General health focus
                  else if (quizAnswers[0] === "Overall Health") {
                    return (
                      <div className="bg-primary text-white p-4 rounded-lg mb-6">
                        <h4 className="text-xl font-bold mb-1">Premium Monthly Plan</h4>
                        <p>With balanced workout routines and nutrition guidance</p>
                      </div>
                    );
                  }
                  // Default for all other combinations
                  else {
                    return (
                      <div className="bg-primary text-white p-4 rounded-lg mb-6">
                        <h4 className="text-xl font-bold mb-1">Premium Monthly Plan</h4>
                        <p>With 2 personal training sessions per month</p>
                      </div>
                    );
                  }
                })()}
                
                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3">
                  <Link to="/services" className="btn-secondary">
                    View this Plan
                  </Link>
                  <button 
                    onClick={resetQuiz}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-md transition duration-300"
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* Community Forum Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with fitness enthusiasts, share your journey, and get inspired by others' success stories.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {forumPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-4 cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-gray-500 text-sm">Posted by <span className="font-medium">{post.user}</span> • {post.time}</p>
                    <div className="flex flex-wrap mt-2">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4 text-gray-500">
                    <div className="flex items-center">
                      <FiMessageSquare className="mr-1" />
                      <span>{post.replies}</span>
                    </div>
                    <div className="flex items-center">
                      <FiHeart className="mr-1" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <div className="text-center mt-8">
              <button 
                onClick={() => alert("Community forum would open here - connect with fitness enthusiasts, share tips, and get motivated!")}
                className="btn-primary"
              >
                Explore Community Forum
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Join 5,000+ members sharing fitness tips and motivation
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how GymFit has helped people transform their fitness journey.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                name: "Sarah J.",
                quote: "GymFit's personalized approach helped me lose 15 pounds and build the strength I never thought possible. The AI adjusts as I progress, keeping my workouts challenging and effective.",
                role: "Premium Member, 8 months",
                rating: 5
              },
              {
                name: "Michael T.",
                quote: "As someone with a busy schedule, I love how GymFit adapts to my availability. The nutrition guidance has been a game-changer for my energy levels and recovery.",
                role: "Premium Member, 1 year",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-primary text-xl mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <button 
              onClick={() => alert("More success stories would be displayed here - read how our members achieved their fitness goals!")}
              className="inline-flex items-center text-primary font-bold hover:underline border-none bg-transparent cursor-pointer"
            >
              Read more success stories
              <FiArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-green-500 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Fitness Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of users who have achieved their fitness goals with GymFit's personalized approach.
            </p>
            <Link to="/services" className="bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition duration-300 inline-block text-lg">
              Get Started Today
            </Link>
            <div className="flex justify-center mt-6 space-x-6 text-sm">
              <div className="flex items-center">
                <FiClock className="mr-2" />
                <span>Start in 5 minutes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 