import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <h1 className="text-3xl font-bold mb-4">TourMyPak: Your One-Stop Shop for Pakistani Adventures</h1>
        <p className="text-lg leading-relaxed mb-4">
       
        Experience the magic of Pakistan with TourMyPak, your trusted travel partner. We're a Pakistani travel company dedicated to crafting unforgettable experiences through a curated selection of tour packages, knowledgeable travel guides, convenient car rentals, and comfortable hotel bookings.
        </p>
        <h2 className="text-2xl font-bold mb-3">Tailored Travel Solutions for Every Need</h2>
        <p className="text-lg leading-relaxed mb-4">
        Whether you're seeking a pre-designed tour package, a personalized itinerary with a local guide, a reliable car to explore at your own pace, or a comfortable hotel to rest your head, TourMyPak has you covered. We offer a range of services to streamline your travel planning:

        </p>
        <ul>
        <li className='mb-2'><span className='font-bold '>Curated Tour Packages:</span> Explore the best of Pakistan with our expertly crafted itineraries or customize your own adventure.</li>
        
        <li className='mb-2'><span className='font-bold'>Knowledgeable Travel Guides:</span> Immerse yourself in the local culture and history with our passionate and experienced guides.</li>
        <li className='mb-2'><span className='font-bold'>Convenient Car Rentals:</span> Navigate Pakistan with ease and flexibility with our car rental options.</li>
        <li className='mb-4'><span className='font-bold'>Comfortable Hotel Bookings:</span> Choose from a variety of hotels to suit your budget and preferences.</li>
      </ul>
        <p className="text-lg leading-relaxed mb-4">
        Join us as we explore the breathtaking beauty of Pakistan together. Our dedicated
        team is here to assist you with any information or assistance you may need along the 
        way. Come and experience the wonders of Pakistan with Tour My Pak.
        </p>
      



        <h2 className="text-2xl font-bold mb-3">Innovation at Your Fingertips</h2>
      <p className="text-lg leading-relaxed mb-4">
        Our user-friendly platform makes booking your Pakistani adventure simple and efficient. Browse our tour packages, connect with local guides, reserve your car, and book your hotel – all in one place.
      </p>

      <h2 className="text-2xl font-bold mb-3">Explore, Discover, and Connect</h2>
      <p className="text-lg leading-relaxed mb-4">
        Travel with TourMyPak and discover the soul of Pakistan. Immerse yourself in breathtaking landscapes, encounter warm hospitality, and create lasting memories. Our helpful staff is always available to answer your questions and guide you throughout your journey.
      </p>

      <p className="text-lg leading-relaxed mb-4">Join us on a journey to discover the magic of Pakistan!</p>

      <h2 className="text-2xl font-bold mb-3">Our Commitment to Local Communities</h2>
      <p className="text-lg leading-relaxed mb-4">
        At TourMyPak, we believe in responsible tourism that empowers local communities. We partner with local businesses and guides, ensuring you experience the authentic Pakistan while contributing to the local economy.
      </p>

      <p className="text-lg leading-relaxed mb-4 font-semibold">Let TourMyPak be your trusted partner for an unforgettable Pakistani adventure.</p>
    </div>
 
    </div>
  );
}

export default AboutUs;