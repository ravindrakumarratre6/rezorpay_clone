
import React from 'react';
import CompanyLogo from './CompanyLogo';

export default function HomeFooter() {

    return (
        <div className="p-4 flex flex-col items-center space-y-2">
            <div className="flex space-x-2 border-l-4 p-1 border-blue-700 text-blue-900 pointer">
                <p className="text-m py-2 text-gray-700 ">I'm here to</p>
                <button className=" cursor-pointer px-2 py-1 text-blue-700 border border-blue-100">
                    Accept Payments
                </button>
                <button className="text-black-700 cursor-pointer px-2 py-1 border border-blue-100 rounded hover:bg-gray-200">
                    Make Payments
                </button>
                <button className="text-black-700 cursor-pointer px-2 py-1 border border-blue-100 rounded hover:bg-gray-200">
                    Start Business Banking
                </button>
                <button className="text-black-700 cursor-pointer px-2 py-1 border border-blue-100 rounded hover:bg-gray-200">
                    Get Credit Loans
                </button>
                <button className="text-black-700 cursor-pointer px-2 py-1 border border-blue-100 rounded hover:bg-gray-200">
                    Automate Payroll
                </button>
                <input
                    type="text"
                    placeholder="//Find the best product for your business"
                    className="text-black border border-gray-300 p-1 rounded"
                />
            </div>
            <CompanyLogo/>
        </div>


    );
}

