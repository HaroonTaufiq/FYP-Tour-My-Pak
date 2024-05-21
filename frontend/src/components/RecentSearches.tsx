import React from 'react'
import recentSearchpic1 from '/public/pirchinasi.jpg';
import recentSearchpic2 from '/public/hunza.jpg';
import recentSearchpic3 from '/public/naran.jpg';
import recentSearchpic4 from '/public/waterfall.jpg';


const RecentSearches = () => {
  return (
    <div className=" mx-[70px] mt-4 sm:relative md: ">
    <p className=" text-[32px] font-bold h-10  md:mb-10 mb-20 text-primarycolor">Your recent searches</p>
    <div className="flex flex-col md:flex-row md:gap-x-14 gap-y-7 mt-[25px]">
      <div className="flex">
      <img src={recentSearchpic1} alt="recent search icon" className='w-[90px] h-[75px] object-cover border rounded-md' />
      <p className="text-[14px] font-bold  mt-6 ml-2 text-secondarycolor">Pirchinasi</p>
      </div>
      <div className="flex">
      <img src={recentSearchpic2} alt="recent search icon" className='w-[90px] h-[75px] object-cover border rounded-md' />
      <p className="text-[14px] font-bold mt-6 ml-2 text-secondarycolor">Hunza Valley</p>
      </div>
      <div className="flex">
      <img src={recentSearchpic3} alt="recent search icon" className='w-[90px] h-[75px] object-cover border rounded-md'/>
      <p className="text-[14px] font-bold mt-6 ml-2 text-secondarycolor">Naran,Kaghan</p>
      </div>
      <div className="flex">
      <img src={recentSearchpic4} alt="recent search icon" className='w-[90px] h-[75px] object-cover border rounded-md' />
      <p className="text-[14px] font-bold mt-6 ml-2 text-secondarycolor">Umberalla Waterfall</p>
      </div>
    </div>
  </div>
  )
}

export default RecentSearches