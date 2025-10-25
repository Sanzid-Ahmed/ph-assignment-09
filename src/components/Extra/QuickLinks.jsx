import React from 'react';
import { Link } from 'react-router-dom';
// The following icons are placeholders. Ensure you have 'react-icons' installed 
// (e.g., FaHeart, FaPaw, FaFirstAid, FaCalendarAlt from 'react-icons/fa')

const QuickLinks = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 my-16">
      
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-800">
        Need Help Now?
      </h2>
      
      <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Jump straight to our most frequently used tools and advice pages.
      </p>

      {/* Grid for Quick Links (4 Columns on large screens) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* --- Card 1: Emergency --- */}
        <div className="block">
          <div className="card bg-red-50 shadow-lg border-2 border-red-300 hover:bg-red-100 transition-all duration-300 transform hover:-translate-y-1">
            <div className="card-body p-6 items-center text-center">
              <span className="text-5xl text-red-600 mb-3">🚨</span> 
              <h3 className="card-title text-xl font-bold text-red-800">Emergency Protocol</h3>
              <p className="text-sm text-gray-600">What to do in a sudden crisis or injury.</p>
            </div>
          </div>
        </div>

        {/* --- Card 2: Vaccine Schedule --- */}
        <div className="block">
          <div className="card bg-blue-50 shadow-lg border-2 border-blue-300 hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1">
            <div className="card-body p-6 items-center text-center">
              <span className="text-5xl text-blue-600 mb-3">💉</span>
              <h3 className="card-title text-xl font-bold text-blue-800">Vaccination Charts</h3>
              <p className="text-sm text-gray-600">Downloadable schedules for dogs and cats.</p>
            </div>
          </div>
        </div>
        
        {/* --- Card 3: New Pet Checklist --- */}
        <div className="block">
          <div className="card bg-green-50 shadow-lg border-2 border-green-300 hover:bg-green-100 transition-all duration-300 transform hover:-translate-y-1">
            <div className="card-body p-6 items-center text-center">
              <span className="text-5xl text-green-600 mb-3">🐶</span>
              <h3 className="card-title text-xl font-bold text-green-800">New Pet Checklist</h3>
              <p className="text-sm text-gray-600">Everything you need before adoption day.</p>
            </div>
          </div>
        </div>
        
        {/* --- Card 4: Ask an Expert --- */}
        <div className="block">
          <div className="card bg-purple-50 shadow-lg border-2 border-purple-300 hover:bg-purple-100 transition-all duration-300 transform hover:-translate-y-1">
            <div className="card-body p-6 items-center text-center">
              <span className="text-5xl text-purple-600 mb-3">💬</span>
              <h3 className="card-title text-xl font-bold text-purple-800">Ask An Expert</h3>
              <p className="text-sm text-gray-600">Submit your non-emergency health questions.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default QuickLinks;