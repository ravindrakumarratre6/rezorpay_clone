import React from 'react'

export default function Supercharge() {
  return (
    <div className="flex flex-col items-start justify-start py-12 px-4 bg-white">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">
        Supercharge your business
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        with Razorpay
      </p>
      <button className="flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-700 transition-colors">
        Sign Up Now <span className="ml-2">&rarr;</span>
      </button>
    </div>
  )
}
