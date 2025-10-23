// src/components/WinterCare.jsx

import React from 'react';

const WinterCare = () => {
  return (
   
    <section className="w-11/12 mx-auto p-8 my-20 rounded-xl shadow-2xl">
      
     
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 pb-3">
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#f0913f] to-pink-500'>
            Winter Care Tips for Pets
        </span> 
      </h2>
      
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        
        <div className="card bg-blue-50/70 shadow-lg border border-blue-200 transition-transform duration-300 hover:scale-[1.03]">
          <div className="card-body items-center text-center p-6 sm:p-8">
            
            <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl text-blue-700">🐾</span> 
            </div>
            
            <h3 className="card-title text-2xl font-bold text-blue-800 mb-2">
              Paw Protection
            </h3>
            <p className="text-gray-700 text-base mb-4">
              Check paws after every outing. Salt, ice, and chemicals can cause painful cracks. Wipe them clean and use paw wax or booties.
            </p>
            
            <div className="badge badge-outline text-blue-600 border-blue-300 text-sm font-semibold">
              Post-Walk Routine
            </div>
          </div>
        </div>

        
        <div className="card bg-yellow-50/70 shadow-lg border border-yellow-200 transition-transform duration-300 hover:scale-[1.03]">
          <div className="card-body items-center text-center p-6 sm:p-8">
            
            <div className="w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl text-yellow-700">🧣</span>
            </div>
            
            <h3 className="card-title text-2xl font-bold text-yellow-800 mb-2">
              Warm Shelter
            </h3>
            <p className="text-gray-700 text-base mb-4">
              Limit time outside and ensure all pets have a warm, elevated resting spot away from drafts. Check their water bowls often.
            </p>
            <div className="badge badge-outline text-yellow-600 border-yellow-300 text-sm font-semibold">
              Daily Comfort Check
            </div>
          </div>
        </div>

        {/* === CARD 3: Food and Hydration (Styled with Green/Success) === */}
        <div className="card bg-green-50/70 shadow-lg border border-green-200 transition-transform duration-300 hover:scale-[1.03]">
          <div className="card-body items-center text-center p-6 sm:p-8">
            {/* Icon with circular background: Matches the image style */}
            <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl text-green-700">🥣</span> {/* Food Bowl Emoji */}
            </div>
            
            <h3 className="card-title text-2xl font-bold text-green-800 mb-2">
              Food and Hydration
            </h3>
            <p className="text-gray-700 text-base mb-4">
              Monitor food intake; some pets need more calories to maintain body heat. Always ensure fresh, unfrozen water is available.
            </p>
            {/* Badge/Frequency Label */}
            <div className="badge badge-outline text-green-600 border-green-300 text-sm font-semibold">
              Nutrition Review
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterCare;