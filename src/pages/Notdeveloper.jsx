import React from 'react'

export default function Notdeveloper() {
  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-sm text-gray-600">what html</p>
      <h1 className="text-5xl font-bold mt-4 text-green-500">Not a developer?</h1>
      <h2 className="text-2xl font-semibold mt-2">
        Our No-Code products have you covered
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 h-70">
        {/* Card 1 */}
        <div className="bg-white shadow rounded p-6 py-4 ">
          <h3 className="text-xl font-semibold mb-2">Invoices</h3>
          <p className="text-gray-700 mb-4">
            Generate GST invoices, get instant payments from customers
          </p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100 transition-colors">
              Know More
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow rounded p-6">
          <h3 className="text-xl font-semibold mb-2">Invoices</h3>
          <p className="text-gray-700 mb-4">
            Generate GST invoices, get instant payments from customers
          </p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100 transition-colors">
              Know More
            </button>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow rounded p-6">
          <h3 className="text-xl font-semibold mb-2">Invoices</h3>
          <p className="text-gray-700 mb-4">
            Generate GST invoices, get instant payments from customers
          </p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100 transition-colors">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
