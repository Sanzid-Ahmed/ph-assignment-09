// src/components/ExpertVets.jsx

import React from 'react';

const ExpertVets = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 my-16">
      

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-12 text-pink-600">
        Meet Our Expert Vets
      </h2>
      
    
      <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 md:mx-0">

    
        <div className="snap-center flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="card w-full bg-base-100 shadow-xl border border-gray-100 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl h-[400px]">
            <div className="card-body items-center text-center p-6">
              
              <div className="avatar mb-4">
                <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=50" alt="Dr. Sarah Paws" className="object-cover w-full h-full" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Sarah Paws</h3>
              
              <p className="text-primary text-md mb-4">Small Animal Specialist</p>
              
              <div className="flex flex-wrap justify-center gap-2">
                <div className="badge badge-outline badge-success text-sm font-medium">Vaccinations</div>
                <div className="badge badge-outline badge-success text-sm font-medium">Nutrition</div>
                <div className="badge badge-outline badge-success text-sm font-medium">Behavior</div>
              </div>
            </div>
          </div>
        </div>

    
        <div className="snap-center flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="card w-full bg-base-100 shadow-xl border border-gray-100 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl h-[400px]">
            <div className="card-body items-center text-center p-6">
              
              <div className="avatar mb-4">
                <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=60" alt="Dr. John Woof" className="object-cover w-full h-full" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. John Woof</h3>
              
              <p className="text-primary text-md mb-4">Veterinary Surgeon</p>
              
              <div className="flex flex-wrap justify-center gap-2">
                <div className="badge badge-outline badge-success text-sm font-medium">Surgery</div>
                <div className="badge badge-outline badge-success text-sm font-medium">Orthopedics</div>
                <div className="badge badge-outline badge-success text-sm font-medium">Emergency Care</div>
              </div>
            </div>
          </div>
        </div>

    
        <div className="snap-center flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="card w-full bg-base-100 shadow-xl border border-gray-100 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl h-[400px]">
            <div className="card-body items-center text-center p-6">
              
              <div className="avatar mb-4">
                <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=53" alt="Dr. Emily Furr" className="object-cover w-full h-full" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Emily Furr</h3>
              
              <p className="text-primary text-md mb-4">Exotic Pet Vet</p>
              
              <div className="flex flex-wrap justify-center gap-2">
                <div className="badge badge-outline badge-success text-sm font-medium">Reptiles</div>
                <div className="badge badge-outline badge-success text-sm font-medium">Birds</div>
                <div className="badge badge-outline badge-success text-sm font-medium">Small Mammals</div>
              </div>
            </div>
          </div>
        </div>

        <div className="snap-center flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="card w-full bg-base-100 shadow-xl border border-gray-100 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl h-[400px]">
            <div className="card-body items-center text-center p-6">
              
              <div className="avatar mb-4">
                <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=65" alt="Dr. Michael Bark" className="object-cover w-full h-full" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Michael Bark</h3>
              
              <p className="text-primary text-md mb-4">Holistic & Geriatric Care</p>
              
              <div className="flex flex-wrap justify-center gap-2">
                <div className="badge badge-outline badge-success text-sm font-medium">Acupuncture</div>
                <div className="badge badge-outline badge-success text-sm font-medium">Senior Pet Care</div>
                <div className="badge badge-outline badge-success text-sm font-medium">Pain Management</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ExpertVets;