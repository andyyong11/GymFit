import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiUserPlus } from 'react-icons/fi';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSignUp = () => {
    alert("Registration form would open here - sign up for your free account");
  };

  const navLinkClass = ({ isActive }) => 
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-primary' : 'text-gray-800 hover:text-primary'
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-3xl font-heading font-extrabold text-primary">Gym</span>
                <span className="text-3xl font-heading font-extrabold text-secondary">Fit</span>
              </motion.div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink end to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <button 
              onClick={handleSignUp}
              className="btn-primary ml-4 flex items-center"
            >
              <FiUserPlus className="mr-2" />
              Sign Up
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-800 hover:text-primary focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-inner"
        >
          <div className="container-custom px-2 pt-2 pb-3 space-y-1">
            <NavLink 
              end to="/"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <div className="py-1"></div>
            <NavLink 
              to="/about"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
            <div className="py-1"></div>
            <NavLink 
              to="/services"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <div className="py-1"></div>
            <button 
              className="btn-primary w-full mt-3 flex items-center justify-center"
              onClick={() => {
                setIsOpen(false);
                handleSignUp();
              }}
            >
              <FiUserPlus className="mr-2" />
              Sign Up
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar; 