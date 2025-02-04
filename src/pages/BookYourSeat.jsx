import React from 'react';
import FinancePlatform from './financePlatfrom';



export default function BookYourSeat() {
  return (
    <div className="">
        <div className="relative">
        <img
        src="https://framerusercontent.com/images/S7nKyy1udDmfOdlOTLEbOZww.png?scale-down-to=2048"
        alt="img"
        className="w-full"
      />
      <button className="absolute top-1/2 right-10 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-4 rounded hover:bg-bwhite-600">
        BOOK YOUR SEAT
      </button>
        </div>
      
      <FinancePlatform/>
    </div>
  );
}


