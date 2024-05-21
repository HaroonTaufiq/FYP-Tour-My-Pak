import React, { useEffect } from 'react'

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      },[])
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 lg:px-20">
    <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
      <p className="text-gray-600 mb-6">
        At Tour My Pak, your privacy is of utmost importance to us. This privacy policy document outlines the types of personal information that is received and collected by Tour My Pak and how it is used.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
      <p className="text-gray-600 mb-6">
        When you use our services, we may collect the following types of information:
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Personal Information: Name, email address, phone number, and other contact details.</li>
          <li>Payment Information: Credit card details and billing information.</li>
          <li>Travel Preferences: Destination preferences, accommodation preferences, and travel dates.</li>
          <li>Usage Data: Information on how you use our website, such as search queries, page views, and interaction with our services.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
      <p className="text-gray-600 mb-6">
        The information we collect is used in the following ways:
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>To provide, operate, and maintain our website and services.</li>
          <li>To improve, personalize, and expand our website and services.</li>
          <li>To understand and analyze how you use our website and services.</li>
          <li>To develop new products, services, features, and functionality.</li>
          <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
          <li>To process your transactions and manage your bookings.</li>
        </ul>
      </p>
      </div>
      </div>
  )
}

export default PrivacyPolicy
