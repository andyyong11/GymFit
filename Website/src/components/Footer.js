import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-heading font-extrabold text-primary">Gym</span>
              <span className="text-2xl font-heading font-extrabold text-secondary">Fit</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your AI-powered fitness companion for personalized workout and nutrition plans.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">Email: info@gymfit.com</p>
            <p className="text-gray-300 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-300">Address: 123 Fitness Ave, Sioux Falls, SD</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        </div>
      </div>
    </footer>
  );
};

export default Footer; 