import React, { useEffect } from "react";
import mailbox from "/public/mailbox.svg";

import fb from "/public/fb.svg";
import instagram from "/public/instagram.svg";
import twitter from "/public/twitter.svg";
import youtube from "/public/youtube.svg";
import { Link } from "react-router-dom";
const MyFooter = () => {
  // let admin=localStorage.getItem("user") && JSON.parse(localStorage.getItem('user'))?.email=='admin@test.com'?JSON.parse(localStorage.getItem('user')).email=='admin@test.com':null;
  // console.log("userFooter",admin)
 
  // const admin = JSON.parse(localStorage.getItem('user'));
  // const admin_email=admin.email=="admin@test.com"
  // console.log("admin email",admin_email)
  return (
   <>
   {/* {JSON.parse(localStorage.getItem('user'))?.email!=='admin@test.com' && */}
   {/* {!admin_email && */}
    <div className="bg-primarycolor w-fit md:w-full   ">
    <div className="mt-[240px] md:mx-[70px] ">
      <div className=" relative rounded-[20px] bg-secondarycolor  min-w-[350px] -top-[140px] mx-2 md:mx-0   ">
        <div className="ml-4 md:ml-[24px] flex flex-row md:justify-between ">
          <div >
            <p className="relative w-[100px] md:w-[364px]  text-[44px] leading-[54px] font-bold top-5 text-white  ">
              Contact Us
            </p>
            <p className="mt-[24px] text-[20px] font-bold  text-white">
              {" "}
              Call us on +921234567895 
              <br></br>
              Email us at info@tourmypakistan.com
            </p>
            <p className="mt-[8px] text-white ">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
          
          </div>
          <div className="hidden md:block">
            <img className="md:h-60" src={mailbox} alt="mailbox" />
          </div>
        </div>
      </div>

  
    </div>

        <div className=" relative grid md:grid-cols-6 grid-cols-3 -top-12 mx-2 md:ml-[70px] ">
        <div className="flex flex-col space-y-7 md:col-span-2 md:mr-[65px]  ">
          <div className="flex items-center gap-1">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90 hidden md:visible">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
        </div>
        <div>
     <div>
        <p className="font-bold text-xl">TourMyPak</p>
        </div>
        <div className="mt-2  ">
        <p>Tour My Pak is your gateway to unforgettable adventures across Pakistan. Discover hidden gems,
        
          iconic landmarks, and cultural treasures as you embark on a journey of exploration and discovery. 
       
         With personalized itineraries, expert guidance, and unparalleled support, we're here to make your
        travel dreams a reality. Explore Pakistan like never before with Tour My Pak</p>
        </div>
        </div>
          </div>
          <div className="flex space-x-2">
            <img src={fb} alt="fb icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={twitter} alt="twitter icon" />
            <img src={youtube} alt="youtube icon" />
          </div>
        </div>

     
        <div className="flex flex-col">
          <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px]  font-bold">
            {" "}
            Our Services
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
            <Link to={'/package-list'}>Tour Packages</Link>
       
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
           <Link to={'/guide-list'}>Travel Guide</Link>
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
          <Link to={'/hotel-list'}>Hotels</Link>
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
          <Link to={'/car-list'}>Cars</Link>

          </p>
        </div>

        <div className="flex flex-col">
          <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px] font-bold">
            
            Quick Links
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px]  ">
          <Link to={'/privacypolicy'}>Privacy Policy</Link>
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
          <Link to={'/safetypolicy'}>SafetyPolicy</Link>
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
          <Link to={'/terms'}>Terms and Conditions</Link>
          </p>
        
        </div>

        <div className="flex flex-col">
          <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px]  font-bold">
            About Us
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
          <Link to={'/aboutus'}>Our Story</Link>
          </p>
         
        </div>

        <div className="flex flex-col">
          <p className=" text-[color:var(--blackish-green,#121)] text-base    mb-[16px]  font-bold">
          Contact Us
          </p>
          <p className="text-[color:var(--blackish-green,#121)] text-sm  mb-[12px] ">
          <Link to={'/contactus'}>Contact Information</Link> 
          </p>
         
        
        </div>

      
      </div>
      </div>

          {/* } */}
      </>
  );
};

export default MyFooter;