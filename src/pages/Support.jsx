import React, { useState } from 'react'

export default function Support() {
  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => setExpanded(!expanded)

  const text = `To the fullest extent permitted by law, Razorpay Software Private Limited, its affiliates, and each of their respective officers, directors, members, employees, and agents (“Razorpay”) NEVER ask you or any individual to share their personal or financial details for the purpose of any investments, trading, employment or any other related or incidental activity. It has recently come to our attention that some unknown individuals are reaching out to gullible people through WhatsApp, Telegram & other platforms representing to be authorised personals of Razorpay and deceitfully offering unauthorized investment/employment opportunities. Kindly note that these individuals are merely imposters and not authorised by Razorpay to do any such act. Please do not share your login credentials, debit/credit card number, CVV number, OTP, UPI, ATM pin, bank account details or transfer any monies to these individuals. While we are pursuing legal recourse against these individuals, we advise you to exercise caution in sharing any information online and file a complaint with the authorities, if you come across any such instance. Razorpay disclaims responsibility for losses resulting from unauthorized information sharing or disclosure on platforms like WhatsApp or Telegram, and is not liable for any decisions or actions taken based on such content. For assistance, please click on Support. Kindly note that there is no other help channel available.`

  // Set the character limit for collapsed text
  const limit = 300

  return (
    <div className="max-w-6xl w-full border border-gray-200 bg-orange-50 mx-auto p-8 text-orange-800">
      <p className="text-sm">
        {expanded ? text : `${text.substring(0, limit)}...`}
        <span 
          onClick={toggleExpanded} 
          className="text-blue-600 cursor-pointer ml-2"
        >
          {expanded ? "Read Less" : "Read More"}
        </span>
      </p>
      <div className="mt-6">
        <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Support
        </button>
      </div>
    </div>
  )
}
