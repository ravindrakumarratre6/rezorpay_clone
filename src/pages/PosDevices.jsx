import React, { useState } from 'react';
import "../styles/PosDeviecs.css"
export default function PosDevices() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="p-6">
      <h1 className="text-4xl text-center font-bold mb-6">POS Devices that Pack a Punch</h1>
      <div className="flex justify-center h-100 space-x-4">
        {/* Device 1 */}
        <div
          className="w-1/3 p-4 rounded shadow bg-blue-200"
          style={{ transition: 'all 0.5s', width: isHovered ? '66.6667%' : '33.3333%' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-xl font-semibold mb-2">Counter-Top / In-Store Android Smart POS</h2>
          <p className="text-gray-700 mb-2">One POS to rule them all!</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>User-friendly interface with HD touchscreen display</li>
            <li>Hassle-free billing experience with paper or e-receipts</li>
            <li>Instant audio confirmations without additional sound box</li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Get it now
          </button>
        </div>

        {/* Device 2 */}
        <div
          className="w-1/3 p-4 rounded shadow bg-blue-200"
          style={{ transition: 'all 0.5s', width: isHovered ? '66.6667%' : '33.3333%' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-xl font-semibold mb-2">In-Store Queue Busting Android Smart Mini POS</h2>
          <p className="text-gray-700 mb-2">Power packed features, Pocket sized portability</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Powerful and compact lightweight Android payment smartphone</li>
            <li>Go paperless with instant e-receipts for all transactions</li>
            <li>Instant audio confirmations without additional sound box</li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Get it now
          </button>
        </div>
      </div>
    </div>
  );
}
