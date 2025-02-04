
import React from 'react';
import IconScroll from './IconScroll';
import Supercharge from './Supercharge';
import Support from './Support';
import Notdeveloper from './Notdeveloper';
import Convenient from './Convenient';
import POSsibilities from './POSsibilities';
import PosDevices from './PosDevices';

export default function FinancePlatform() {
    return (
        <div className="py-6 bg-gray-100">
            <h1 className="text-6xl font-bold ">
                The all-in-one <span className="text-green-700">finance platform</span>
                <br />
                you’ve been looking for
            </h1>


            <div className="py-2">

                <ul className="flex flex-row items-center list-none space-x-4">
                    <h3 className="text-xl py-2">With Razorpay, you can:</h3>|
                    <li className="text-lg py-2 font-bold">Accept Payments</li>
                    <li className="text-lg py-2 font-bold">Make Payouts</li>
                    <li className="text-lg py-2 font-bold">Start Business Banking</li>
                    <li className="text-lg py-2 font-bold">Automate Payroll</li>
                    <li className="text-lg py-2 font-bold">Get Credit & Loans</li>
                </ul>
            </div>
{/* <IconScroll/> */}
            <PosDevices />
            <POSsibilities />
            <Convenient />
            <Notdeveloper />
            <Support />
            <Supercharge />
        </div>
    );
}
