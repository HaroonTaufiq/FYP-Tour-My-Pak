import React, { useEffect } from 'react';
import Map from './Map';
function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0)
      },[])
  return (
    <div className=" bg-gray-100 pb-2">
              <Map/>
      <h1 className="text-4xl font-bold text-center text-gray-800 py-10">
        Contact TourMyPak
      </h1>
      
      <p className="text-lg text-center text-gray-600 px-20 mb-10">
        Get in touch with us and we'll be happy to answer your questions and help you plan your dream Pakistani adventure.
      </p>

    <div className='flex justify-between mx-8'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
         stroke="currentColor"strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-phone">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <p className="text-lg leading-relaxed mb-4 font-semibold">    Call us on +921234567895 </p>

       
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        <p className="text-lg leading-relaxed mb-4 font-semibold">   Email us at info@tourmypak.com </p>
 
        </div>
        <div >
        <a className=' gap-1 font-semibold underline' target="_blank" href={'https://maps.google.com/?q=bluearea'} >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <p className="text-lg leading-relaxed mb-4 font-semibold">Bluea Area Islamabad</p>
        </a>
      
        </div>
    </div>
    </div>
  );
}

export default ContactUs;
