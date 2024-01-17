// Documentation.js
import React from "react";
import { FaFileDownload } from "react-icons/fa"; // Import an icon library (e.g., react-icons)

const Documentation = () => {
  return (
    <div className="p-8">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center text-[--primary-color] border-2 border-[--primary-color]">
        <h2 className="text-4xl font-bold mb-4">Explore Our Documentations</h2>
        <p className="text-lg mb-6">
          Discover a wealth of resources in our carefully curated collection of
          documentations for your business.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <button className="button bg-[--primary-color] text-white p-4 rounded-xl hover:bg-brown-600 flex items-center">
            <FaFileDownload className="mr-2" /> Documentation 1
          </button>
          <button className="button bg-[--primary-color] text-white p-4 rounded-xl hover:bg-brown-600 flex items-center">
            <FaFileDownload className="mr-2" /> Documentation 2
          </button>
          <button className="button bg-[--primary-color] text-white p-4 rounded-xl hover:bg-brown-600 flex items-center">
            <FaFileDownload className="mr-2" /> Documentation 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
