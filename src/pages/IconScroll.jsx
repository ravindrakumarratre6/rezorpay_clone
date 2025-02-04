import React from 'react';
import "../styles/IconScroll.CSS";

const icons = [
  '🛒', '📦', '💳', '💰', '💸', 
  '💵', '💎', '🏦', '📈', '📉',
  '💼', '🧾', '💡', '📊', '📚',
  '📝', '📅', '📂', '📁', '📋',
];

export default function IconScroll() {
    return (
        <div className="border border-blue-100 h-30">
        <div className="relative h-20 overflow-hidden">
          <h1>Powering every industry.</h1>
          <br />
          <h1>Powering all disruptors.</h1>
        </div>
        <div className="relative h-40 overflow-hidden">
          <div className="absolute w-20 inset-0 animate-scroll grid grid-cols-5 gap-4">
            {icons.map((icon, index) => (
              <div key={index} className="flex justify-end items-end">
                <span className="text-2xl">{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
