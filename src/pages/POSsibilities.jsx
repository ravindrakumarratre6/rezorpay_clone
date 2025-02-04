import React from 'react'

export default function POSsibilities() {
  return (
    <div className="p-6">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">
          Enter a World of New POSsibilities
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Card 1: White Background */}
          <div className="bg-white h-80 p-4 rounded shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our customer support is the real hero
            </h3>
            <p className="text-gray-600">
              Get best in-class multi-channel support with the lowest ticket resolution time and dedicated account managers.
            </p>
          </div>
          {/* Feature Card 2: Blue Background */}
          <div className="bg-blue-500 p-4 rounded shadow">
            <h3 className="text-xl font-semibold text-white mb-2">
              Plug-and-play simplicity
            </h3>
            <p className="text-white">
              Quick and seamless integration with all billing platforms, offer management systems and loyalty programs.
            </p>
          </div>
          {/* Feature Card 3: Black Background */}
          <div className="bg-black p-4 rounded shadow">
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              Brilliance on a budget
            </h3>
            <p className="text-gray-300">
              Pricing that gives you the best value with POS device rentals and attractive MDRs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
