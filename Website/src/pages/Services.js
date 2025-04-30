import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX, FiInfo, FiShoppingCart, FiTrash2, FiShield, FiUserPlus } from 'react-icons/fi';

const Services = () => {
  // State for shopping cart
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Subscription plans
  const plans = [
    {
      id: 1,
      name: "Free",
      price: 0,
      billingCycle: "Forever Free",
      features: [
        { text: "Basic workout library access", included: true },
        { text: "Limited nutritional guidance", included: true },
        { text: "Progress tracking (basic)", included: true },
        { text: "AI workout recommendations", included: false },
        { text: "Personalized meal plans", included: false },
        { text: "Advanced analytics", included: false },
        { text: "Professional coaching", included: false },
      ],
      color: "gray",
      popular: false
    },
    {
      id: 2,
      name: "Premium Monthly",
      price: 9.99,
      billingCycle: "per month",
      features: [
        { text: "Full workout library access", included: true },
        { text: "Complete nutritional guidance", included: true },
        { text: "Unlimited progress tracking", included: true },
        { text: "AI workout recommendations", included: true },
        { text: "Personalized meal plans", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Professional coaching (2 sessions/month)", included: false },
      ],
      color: "primary",
      popular: true
    },
    {
      id: 3,
      name: "Premium Annual",
      price: 99.99,
      billingCycle: "per year",
      features: [
        { text: "Full workout library access", included: true },
        { text: "Complete nutritional guidance", included: true },
        { text: "Unlimited progress tracking", included: true },
        { text: "AI workout recommendations", included: true },
        { text: "Personalized meal plans", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Professional coaching (4 sessions/month)", included: true },
      ],
      color: "secondary",
      popular: false
    }
  ];
  
  // Add-on products
  const addOns = [
    {
      id: 101,
      name: "Personal Training Session",
      price: 49.99,
      description: "One-on-one virtual training session with a certified fitness coach.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Zml0bmVzc3x8fHx8fDE2ODM5MDg0NDg&ixlib=rb-4.0.3&q=80&w=300"
    },
    {
      id: 102,
      name: "Nutrition Consultation",
      price: 39.99,
      description: "Personalized nutrition planning session with our nutrition expert.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bnV0cml0aW9ufHx8fHx8MTY4MzkwODQ4OA&ixlib=rb-4.0.3&q=80&w=300"
    }
  ];
  
  // Add to cart function
  const addToCart = (item, type) => {
    const newItem = {
      ...item,
      type,
      quantity: 1
    };
    
    // Check if item already in cart
    const existingItemIndex = cart.findIndex(
      cartItem => cartItem.id === item.id && cartItem.type === type
    );
    
    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, newItem]);
    }
    
    // Show cart after adding item
    setIsCartOpen(true);
  };
  
  // Remove from cart function
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  
  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  
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
      {/* Services Hero */}
      <section className="bg-gradient-to-r from-secondary to-green-600 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Choose the perfect plan to support your fitness journey with AI-powered personalization.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Subscription Plans */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select from our flexible subscription options designed to fit your fitness needs and budget.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border ${
                  plan.popular ? 'border-primary' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-500"> {plan.billingCycle}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        {feature.included ? (
                          <span className="text-green-500 mr-2 mt-1">
                            <FiCheck />
                          </span>
                        ) : (
                          <span className="text-red-500 mr-2 mt-1">
                            <FiX />
                          </span>
                        )}
                        <span className={!feature.included ? 'text-gray-400' : ''}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={plan.price === 0 ? 
                      () => alert("Registration form would open here - no payment required for free plan") : 
                      () => addToCart(plan, 'subscription')}
                    className={`w-full font-bold py-2 px-4 rounded-md transition duration-300 ${
                      plan.color === 'primary' 
                        ? 'bg-primary hover:bg-indigo-700 text-white' 
                        : plan.color === 'secondary'
                          ? 'bg-secondary hover:bg-green-700 text-white'
                          : 'bg-gray-700 hover:bg-gray-800 text-white'
                    }`}
                  >
                    {plan.price === 0 ? 
                      <span className="flex items-center justify-center">
                        <FiUserPlus className="mr-2" />
                        Sign Up Free
                      </span> : 
                      'Subscribe Now'}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Additional Products/Services */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enhance your fitness journey with these premium coaching and consultation services.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {addOns.map((addOn, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img 
                  src={addOn.image} 
                  alt={addOn.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{addOn.name}</h3>
                  <p className="text-gray-600 mb-4">{addOn.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">${addOn.price}</span>
                    <button
                      onClick={() => addToCart(addOn, 'addon')}
                      className="btn-secondary"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our services and subscriptions.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                question: "Can I cancel my subscription at any time?",
                answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
              },
              {
                question: "How do the AI workout recommendations work?",
                answer: "Our AI analyzes your fitness level, goals, and progress to create personalized workout plans that adapt as you grow stronger."
              },
              {
                question: "Are the nutrition plans suitable for dietary restrictions?",
                answer: "Absolutely! Our nutrition plans can be customized for various dietary needs, including vegetarian, vegan, gluten-free, and more."
              },
              {
                question: "How often will my workout plan be updated?",
                answer: "Your AI workout plan adjusts automatically based on your progress. You'll typically see changes every 2-4 weeks as you advance."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start">
                  <div className="text-primary mr-3 mt-1">
                    <FiInfo size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Shopping Cart */}
      <div className={`fixed bottom-0 right-0 z-50 transition-transform duration-300 transform ${isCartOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="relative">
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="absolute -top-12 right-0 bg-primary text-white p-3 rounded-t-md flex items-center"
          >
            <FiShoppingCart className="mr-2" />
            Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
          </button>
          
          <div className="bg-white shadow-lg rounded-t-lg w-full md:w-96 p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Your Cart</h3>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={20} />
              </button>
            </div>
            
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-4">Your cart is empty</p>
            ) : (
              <>
                <div className="max-h-64 overflow-y-auto mb-4">
                  {cart.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">
                          ${item.price} x {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold mr-4">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between mb-4">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold">${cartTotal.toFixed(2)}</span>
                  </div>
                  <button className="btn-primary w-full">
                    Proceed to Checkout
                  </button>
                  <div className="flex items-center justify-center text-xs text-gray-500 mt-3">
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 