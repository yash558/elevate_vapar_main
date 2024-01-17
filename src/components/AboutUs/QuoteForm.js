// QuoteForm.js
import React from 'react';

const QuoteForm = () => {
  return (
    <div className="bg-gradient-to-r bg-brown-400 via-brown-500 to-brown-600 flex items-center justify-center flex-col p-8 rounded-lg shadow-md">
      <img
        src="path-to-your-logo.png" 
        alt="Company Logo"
        className="mb-4"
        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
      />
      <h2 className="text-4xl font-bold text-white mb-6">Request a Quote for Our Services</h2>
      <form className="space-y-4 w-full max-w-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="text-white">First Name</label>
            <input type="text" id="firstName" name="firstName" className="input" placeholder="Your First Name" />
          </div>
          <div>
            <label htmlFor="lastName" className="text-white">Last Name</label>
            <input type="text" id="lastName" name="lastName" className="input" placeholder="Your Last Name" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="text-white">Email</label>
          <input type="email" id="email" name="email" className="input" placeholder="Your Email" />
        </div>

        <div>
          <label htmlFor="message" className="text-white">Message</label>
          <textarea id="message" name="message" rows="4" className="input" placeholder="Your message"></textarea>
        </div>

        <button type="submit" className="button bg-white text-brown-600 hover:text-white hover:bg-brown-700 py-2 px-4 rounded-md">
          Request Quote
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
