import React from 'react'
import civic from "../../public/civic.jpg"
import hotel from '../../public/hotel.jpeg'
const Services = () => {
  return (
    <div >
      {/* <div className='flex flex-col items-start justify-center gap-[24px]'>
      <p className=" text-29xl inline-block text-black w-[469px]">      
              Our tour plan is to fulfil your dream wish
     </p>
     <p className=" text-xl leading-[160%] text-grey-1 inline-block w-[442px]">
            Understand to achieve anything requires faith and belief in
            yourself, vision, hard work, determination, and dedication.
    </p>
      </div> */}


<div className=" flex flex-col gap-y-[60px] md:gap-y-0 md:flex-row justify-between  max-w-screen-sm md:max-w-full mt-20 mb-[170px] ">
 
      
        <div className='flex flex-col items-start justify-center gap-[24px]'>
          <div className="shrink-0 flex flex-col items-start justify-start gap-[4px]">
            <b className="relative tracking-[0.2em] uppercase text-secondarycolor">Our Services</b>
            <b className="relative text-29xl inline-block text-black md:w-[469px]">
            We offer flexible services based on your preferred times.
            </b>
          </div>
          <div className="relative text-xl leading-[160%] text-grey-1 inline-block md:w-[442px]">
          We can do anything we want to if we stick to it long enough.
          </div>
          <div className="shrink-0 flex flex-row items-center justify-center md:gap-[24px] gap-[20px] md:text-21xl text-[30px]">
            <div className="shrink-0 flex flex-col items-start justify-center">
              <b className="relative text-secondarycolor">300</b>
              <div className="relative text-base text-grey-1 inline-block md:w-[100px]">
                <p className="m-0 ">Tour</p>
                <p className="m-0 ">Packages</p>
              </div>
            </div>
            <div className="shrink-0 flex flex-col  justify-center ">
              <b className="relative text-secondarycolor">200</b>
              <div className="relative text-base text-grey-1 inline-block md:w-[100px]">
                <p className="m-0 ">Travel</p>
                <p className="m-0 ">Guides</p>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-center">
              <b className="relative text-secondarycolor">400</b>
              <div className="relative text-base text-grey-1 inline-block md:w-[100px]">
                <p className="m-0 ">Hotels</p>
                <p className="m-0 ">Registered</p>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-start justify-center">
              <b className="relative text-secondarycolor">500</b>
              <div className="relative text-base text-grey-1 inline-block md:w-[100px]">
                <p className="m-0 ">Vehicles </p>
                <p className="m-0 ">Registered</p>
              </div>
            </div>
          </div>
          </div>
          <div className=' md:w-[370px] md:h-[500px]  hidden md:flex'>
        <img
              className="  absolute left-[760px] rounded-[237px] md:w-[340px] md:h-[550px] object-cover"
              alt=""
              src={civic}
            />
        <img
              className="  absolute left-[960px] top-[3000px] rounded-[237px] md:w-[250px] md:h-[350px] object-cover"
              alt=""
              src={hotel}
            />
        </div>
    
        </div>
    </div>
  )
}

export default Services