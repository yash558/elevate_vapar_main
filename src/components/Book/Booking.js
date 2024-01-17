// ConsultingSessionBooking.js
import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'react-feather';
import book from "../../assets/book.jpg";

const ConsultingSessionBooking = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-brown-400">

      <div className="w-full md:w-1/2">
        <img
          src={book}
          alt="Consulting Session"
          className="w-full h-[627px] object-cover rounded-l-md shadow-md"
        />
      </div>

      {/* Right side card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="bg-[--main-color] p-8 rounded-r-md shadow-md mt-8 md:mt-0 w-full md:w-1/3">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Book a Free 30-Min Business Consulting Session</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form fields */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input type="text" id="name" name="name" className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea id="message" name="message" rows="4" className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500" required />
          </div>

          {/* Submit button with icon */}
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-3 rounded-md hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition duration-300 flex items-center justify-center">
            <span>Book Now</span>
            <Send className="ml-2" size={18} />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ConsultingSessionBooking;
