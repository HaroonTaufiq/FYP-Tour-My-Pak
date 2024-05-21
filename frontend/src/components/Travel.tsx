import React, { FC, useEffect, useState } from "react";
// import { Box } from '@mui/material';
import Oneway from "./Oneway";
import Roundtrip from "./Roundtrip";
import Multicity from "./Multicity";


const Travel: FC<{ data?: any }> = ({ data }) => {
  const [travelOption, setTravelOption] = useState("oneway");

  useEffect(() => {
    if(data?.flights) // for multicity data
    {
      const flightsArray = JSON.parse(data.flights);
      const flightTripType=flightsArray[0].tripType.toString()
       setTravelOption(flightTripType)

    }

    else if(data?.tripType)// for oneway and roundtrip data
    {

    console.log('data trip type is', data.tripType)

    setTravelOption(data.tripType)
    }

  }, []);

  const handleSelectOption = (option: any) => {
    setTravelOption(option);
  };

  return (
    <div className="p-2 px-5 bg-primarycolor">
      <div className="flex flex-row">
        {/* <button
          className={`   px-3 py-2 mb-2 rounded-xl border-gray-600  shadow-lg text-lg font-medium hover:shadow-lg hover:scale-105 duration-300  ${
            travelOption === "oneway" ? "bg-secondarycolor text-white" : ""
          }`}
          onClick={() => handleSelectOption("oneway")}
        >
          One way
        </button> */}
        {/* <button
          className={` px-3 py-2 mb-2 rounded-xl shadow-lg text-lg font-medium hover:shadow-lg hover:scale-105 duration-300 ${
            travelOption === "roundtrip" ? "bg-secondarycolor text-white" : ""
          }`}
          onClick={() => handleSelectOption("roundtrip")}
        >
          Round Trip
        </button>
        <button
          className={` px-3 py-2 mb-2 rounded-xl shadow-lg text-lg font-medium hover:shadow-lg hover:scale-105 duration-300 ${
            travelOption === "multicity" ? "bg-secondarycolor text-white" : ""
          }`}
          onClick={() => handleSelectOption("multicity")}
        >
          Multicity
        </button> */}
      </div>
      <div>
        {<Oneway data={data} />}
        {/* {travelOption === "roundtrip" && <Roundtrip data={data} />}
        {travelOption === "multicity" && <Multicity data={data} />} */}
      </div>
    </div>
  );
};

export default Travel;