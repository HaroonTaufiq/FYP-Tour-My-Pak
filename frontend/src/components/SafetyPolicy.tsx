import React, { useEffect } from 'react'

const SafetyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      },[])
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Safety Policy</h1>
        <p className="text-gray-600 mb-6">
          At Tour My Pak, the safety and well-being of our customers is our top priority. We are committed to ensuring that all our tours and travel services are conducted in the safest manner possible. Please read our safety policy carefully to understand our safety measures and protocols.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Health and Safety Measures</h2>
        <p className="text-gray-600 mb-6">
          We have implemented comprehensive health and safety measures to protect our travelers:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Regular health screenings for all staff and tour guides.</li>
            <li>Frequent sanitation of vehicles and equipment.</li>
            <li>Provision of hand sanitizers and masks to travelers.</li>
            <li>Adherence to social distancing guidelines wherever possible.</li>
            <li>Immediate isolation and medical assistance for any traveler showing symptoms of illness.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Emergency Protocols</h2>
        <p className="text-gray-600 mb-6">
          In case of an emergency, we have clear protocols in place to ensure the safety of our travelers:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>All tour guides are trained in first aid and emergency response.</li>
            <li>Emergency contact numbers are provided to all travelers.</li>
            <li>Immediate access to local emergency services and medical facilities.</li>
            <li>Clear evacuation plans for each travel destination.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Safety Training</h2>
        <p className="text-gray-600 mb-6">
          Our team undergoes regular safety training to stay updated on the best practices and latest safety protocols:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Regular workshops on health and safety measures.</li>
            <li>Training on handling emergency situations and providing first aid.</li>
            <li>Updates on the latest travel advisories and safety guidelines.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Traveler Responsibilities</h2>
        <p className="text-gray-600 mb-6">
          We expect our travelers to adhere to the following responsibilities to ensure their own safety and the safety of others:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Follow the instructions of tour guides and staff at all times.</li>
            <li>Maintain personal hygiene and use provided sanitation facilities.</li>
            <li>Report any health issues or injuries immediately to the tour guide.</li>
            <li>Respect local laws and customs of the travel destinations.</li>
          </ul>
        </p>

      

        <p className="text-gray-600 mb-6">
          We are committed to making your travel experience safe and enjoyable. Should you have any questions or need further information about our safety policies, please do not hesitate to contact us.
        </p>

        <p className="text-gray-600 mb-6">
          Thank you for choosing Tour My Pak. Travel safely and discover the beauty of Pakistan with peace of mind!
        </p>
      </div>
    </div>
  )
}

export default SafetyPolicy
