import React from 'react';
import { Link } from 'react-router-dom';

import CountrySelect from './CountrySelect';

export default function Navbar() {
    return (
        // <nav className=" fixed flex items-center justify-around p-4 bg-white text-lg ">
        //     <Link to="/">
        //         <img
        //             src="https://framerusercontent.com/images/apE2tIqb1SpkFBcRkZky8sCio.gif"
        //             alt="Logo"
        //             className="h-8"
        //         />
        //     </Link>
        //     <div className="flex items-center space-x-4">
        //         <Link className="text-gray-700 hover:text-blue-500" to="/payment">Payment</Link>
        //         <Link className="text-gray-700 hover:text-blue-500" to="/banking">Banking+</Link>
        //         <Link className="text-gray-700 hover:text-blue-500" to="/payroll">Payroll</Link>
        //         <Link className="text-gray-700 hover:text-blue-500" to="/partners">Partners</Link>
        //         <Link className="text-gray-700 hover:text-blue-500" to="/resources">Resources</Link>
        //         <Link className="text-gray-700 hover:text-blue-500" to="/support">Support</Link>
        //         <Link className="text-gray-700 hover:text-blue-500  flex flex-1 w-60" to="/pricing">Pricing</Link>
        //         <Link className='w-25'><CountrySelect /></Link>
        //         <Link>
        //             <button className="px-4 py-2  text-blue-700 border border-blue-300 rounded hover:bg-gray-100">Login</button>
        //         </Link>
        //         <Link>
        //             <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Sign Up &rarr;</button>
        //         </Link>
        //     </div>
        // </nav>
        <nav className="fixed top-0 left-0 right-0 z-30 flex items-center justify-around p-4 bg-white text-lg">
            <Link to="/">
                <img
                    src="https://framerusercontent.com/images/apE2tIqb1SpkFBcRkZky8sCio.gif"
                    alt="Logo"
                    className="h-8"
                />
            </Link>
            <div className="flex items-center space-x-4">
                <Link className="text-gray-700 hover:text-blue-500" to="/payment">Payment</Link>
                <Link className="text-gray-700 hover:text-blue-500" to="/banking">Banking+</Link>
                <Link className="text-gray-700 hover:text-blue-500" to="/payroll">Payroll</Link>
                <Link className="text-gray-700 hover:text-blue-500" to="/partners">Partners</Link>
                <Link className="text-gray-700 hover:text-blue-500" to="/resources">Resources</Link>
                <Link className="text-gray-700 hover:text-blue-500" to="/support">Support</Link>
                <Link className="text-gray-700 hover:text-blue-500  flex flex-1 w-60" to="/pricing">Pricing</Link>
                <div className="relative">
                    <CountrySelect /> {/* Assuming this renders a dropdown */}
                    {/* If needed, ensure the dropdown menu element inside CountrySelect has a high z-index and proper positioning */}
                </div>
                <Link>
                    <button className="px-4 py-2 text-blue-700 border border-blue-300 rounded hover:bg-gray-100">Login</button>
                </Link>
                <Link>
                    <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Sign Up &rarr;</button>
                </Link>
            </div>
        </nav>

    );
}
