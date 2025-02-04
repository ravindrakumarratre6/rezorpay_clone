import React from 'react'

export default function Convenient() {
  return (
    <div className="bg-green-300 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Looking for a convenient and cost-effective way to accept payments online?
      </h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        No Coding Required
      </h2>
      <p className="text-gray-600 mb-6">
        Your business can go online with zero integration and tech efforts. We build and operate for you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Automated Receipts</h3>
          <p className="text-gray-600">
            Eliminate manual intervention by sending automated receipts on payment confirmation.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Memorable URLs</h3>
          <p className="text-gray-600">
            Look professional with a custom URL that is as easy to remember and is an extension of your business.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom Branded Page</h3>
          <p className="text-gray-600">
            Customise the look and feel of your payment pages to reflect your brand colours for a seamless customer experience.
          </p>
        </div>
        {/* Feature 4 */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom Fields</h3>
          <p className="text-gray-600">
            Collect information relevant and important to your business by adding and modifying fields on the Payment Page.
          </p>
        </div>
        {/* Feature 5 */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Track Your Payments</h3>
          <p className="text-gray-600">
            Make better business decisions using insights from real-time data and reports available on the dashboard.
          </p>
        </div>
        {/* Optionally, add a sixth feature or leave the cell empty */}
        <div className="bg-white p-4 rounded shadow flex items-center justify-center text-gray-500">
          {/* Placeholder for future feature */}
          More Coming Soon
        </div>
      </div>
    </div>
  )
}
