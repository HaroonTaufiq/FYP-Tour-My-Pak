/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useRef, FC } from "react";

import { Input } from "antd";

import { DateRange } from "react-date-range";

import { AutoComplete } from "antd";
import Mytest from "./PersonsDropdown";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space,Button } from 'antd';
import { Context } from "./StateContext";

const Hotels: FC<{ data?: any }> = ({ data }) => {
  console.log("hotels data", data)
  const airportCities = [
    { value: "Pirchinasi ", code: "PRC", airport: "MainCity " },
    {
      value: "Skardu",
      code: "SKR",
      airport: "MainCity ",
    },
    { value: "Chitral", code: "CTR", airport: "Main City " },
    { value: "Attabad", code: "ATR", airport: "Main City " },
    { value: "Naran", code: "NAR", airport: "Main City " },

  ];
  const today = new Date();
  const [airportdata,setAirportData]=useState([])
  const[dateInString,setDateInString]=useState(false)


  const [startDate, setStartDate] = useState<any>(today);
  const fourDaysLater = new Date();
  fourDaysLater.setDate(startDate.getDate() + 4);

  const [endDate, setEndDate] = useState<Date|any>(fourDaysLater);

  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [datePickerOpen2, setDatePickerOpen2] = useState(false);
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
  const navigate = useNavigate(); // Get the router object

  // Function to navigate to flight listing page with data
  const navigateToFlightListing = () => {
    if( arrivalCity==''|| travelers==0){
      alert("fill in all fields")
      console.log("in navigateToFlightListing")
      return
    }
    // Construct the data object
    const searchData = {
      tripType:"roundtrip",
      departureCity,
      arrivalCity,
      startDate: startDate ? (!dateInString? startDate.toLocaleDateString():startDate ) :``,
      endDate: endDate ? (!dateInString? endDate.toLocaleDateString():endDate ) :``,
      adults: adults?.toLocaleString(),
      child: child?.toLocaleString(),
      infant:  infant?.toLocaleString(),
      travelers:   travelers?.toLocaleString()

    };

    // Construct the query string
    const queryString= new URLSearchParams(searchData).toString();

    // Navigate to the flight listing page along with the query string
    navigate(`/hotelslisting?${queryString}`);
  };

  const handleDepartureDateChange = (value: any) => {
    setDepartureDate(value);
  };
  const handleArrivalDateChange = (value: any) => {
    setArrivalDate(value);
  };

  const handleDepartureCityChange = (value: string) => {
    setDepartureCity(value);
  };

  const handleArrivalCityChange = (value: string) => {
    setArrivalCity(value);
  };

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };


  const handleClick = () => {
    setDatePickerOpen(!datePickerOpen);
    // You can perform other actions with the selected range here
  };

  const handleClick2 = () => {
    setDatePickerOpen2(!datePickerOpen);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate ,
    key: "selection",
  };

  // const formatDate = (date:any) => {
  //   const options:any = { day: "numeric", month: "long" };
  //   return new Intl.DateTimeFormat("en-US", options).format(date);
  // };

  // travelers
  const [open, setOpen] = useState(false);


    const {adults, setAdults}:any= Context()
    const {child, setchild}:any = Context()
    const {infant, setInfant}:any = Context()
    const {travelers, setTravelers}:any = Context()
const handleIncreaseAdults = () => {
    if (adults < 9) {
        setAdults(adults+ 1);
        setTravelers(travelers + 1);
    }
};

const handleDecreaseAdults = () => {
    if (adults > 0) {
        setAdults(adults - 1);
        setTravelers(travelers - 1);
    }
};
const handleIncreasechild = () => {
    if (child < 9) {
        setchild(child + 1);
        setTravelers(travelers + 1);
    }
};

const handleDecreasechild = () => {
    if (child > 0) {
        setchild(child - 1);
        setTravelers(travelers - 1);
    }
};
const handleIncreaseInfant = () => {
    if (infant < 9) {
        setInfant(infant + 1);
        setTravelers(travelers + 1);
    }
};
const handleDecreaseInfant = () => {
    if (infant > 0) {
        setInfant(infant - 1);
        setTravelers(travelers - 1);
    }
};




const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === '4') {
        setOpen(false);
    }
};

const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
};

const items: MenuProps['items'] = [
    {
        label: (
            <div style={{ display: 'flex', alignItems: 'center',marginRight:'15px' }}>
                <div style={{ flex:1}}>  <h1 >Adults</h1>  </div>
                <div>
              

                 
                <Button shape='circle' onClick={handleDecreaseAdults} style={{borderColor: "gray" }}>
                    -
                </Button>
                <span style={{ margin: '0 8px', fontWeight: '600' }}> {adults}</span>
                <Button shape='circle' onClick={handleIncreaseAdults} style={{borderColor: "gray" }}>
                    +
                </Button>
            </div>
            </div>),
        key: '1',
    },
    {
        label: (
    
                <div style={{ display: 'flex', alignItems: 'center' ,marginRight:'15px' }}>
                <div style={{ flex:1}}>  <h1>child</h1>  </div>
                <div>


                <Button shape='circle' onClick={handleDecreasechild} style={{borderColor: "gray" }}>
                    -
                </Button >
                <span style={{ margin: '0 8px', fontWeight: '600' }}> {child}</span>
                <Button shape='circle' onClick={handleIncreasechild} style={{borderColor: "gray" }}>
                    +
                </Button>
            </div>
            </div>),
        key: '2',
    },
    {
        label: (
            <div style={{ display: 'flex', alignItems: 'center', marginRight:'15px' }}>
                <div style={{ flex:1}}>  <h1>Infant</h1>  </div>
                <div >
                <Button shape='circle' onClick={handleDecreaseInfant} style={{borderColor: "gray" }}>
                    -
                </Button >
                <span style={{ margin: '0 8px', fontWeight: '600' }}> {infant}</span>
                <Button shape='circle' onClick={handleIncreaseInfant} style={{borderColor: "gray" }}>
                    +
                </Button>
            </div>
            </div>),
        key: '3',
    },
    {
        label: (
            <div>
                <Button type="primary" block icon={<SearchOutlined />} className='bg-teal-700'>
                    Search
                </Button>
            </div>
        ),
        key: '4',
    },
   
];

if(data)
{




useEffect(() => {
  
 
  if (data && data.endDate) {

  // Set state variables using the parsed query parameters
  setDepartureCity(data.departureCity );
  setArrivalCity(data.arrivalCity);
  setDateInString(true)
  setStartDate(new Date(data.startDate) );
  if(data.endDate){
  setEndDate(new Date(data.endDate) );
  }
  // setAdults(parseInt(data.adult)) ;
  // setchild(parseInt(data.child) );
  // setInfant(parseInt(data.infant) );
  // setTravelers(parseInt(data.travelers));
}

async function fetchData() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
   console.log('countries data is', data[0].name.common)

   setAirportData(data)
   console.log("setAirportData",data)
   if(data){
    const searchdata= data.map((city:any) => 
    city?.name.common
  )
  console.log("search data after mapping",searchdata)
   }
 
  } catch (error) {
    console.error('Error fetching country data:', error);
  }
}
fetchData();

}, [data]);
}
  return (
    <div className="bg-primarycolor px-5">
      <div className="relative p-1 ">
        {/* <MyDropdown/> */}

        <Mytest data={data} />
      </div>
      <div className="flex flex-row custom-screen  mr-3 md:space-x-2  w-full ">
      

        <div className="max-h-[50px] min-w-[60px]  mb-2 md:w-[380px]">
          <AutoComplete
            className="min-w-[300px] max-h-[200px] w-full"
            defaultValue={arrivalCity}
            options={airportCities.map((city) => ({
              value: `${city.value} (${city.code}) `,
              code: city.code,
              label: (
                <div className="flex mb-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 -rotate-90 mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

                  <p className=" font-semibold">
                    {`${city.value} (${city.code})`}
                    <br />
                    <span className="text-[12px]">{`${city.airport}`}</span>
                  </p>
                </div>
              ),
            }))}
            filterOption={(inputValue, option) =>
              option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
            onSelect={(value, option) => {
              handleArrivalCityChange(value);
            }}
          >
            <Input
              style={{ height: 50 }}
              placeholder="Enter Destination"
              onChange={(e) => setArrivalCity(e.target.value)}
            />
          </AutoComplete>
        </div>

        <div className="max-h-[50px] min-w-[60px] relative mb-2 md:w-[380px]">
          <AutoComplete
             className='min-w-[300px] w-full '
         
            value={
              startDate && endDate
                ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}` 
                : ""
                
            }
            onClick={handleClick}
            onSelect={handleDepartureDateChange}
          >
            <Input
            className="w-full"
              style={{ height: 50 }}
              placeholder="Checkin-Checkout"
              suffix={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-calendar-days"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
              }
            />
          </AutoComplete>

          {datePickerOpen && (
            <div className=" flex  absolute z-10 top-0 mx-3 bg-white  ">
              <DateRange
              className="w-full  "
                ranges={[selectionRange]}
                minDate={new Date()}
              
                onChange={handleSelect}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e11414"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-x-circle"
                onClick={handleClick}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </div>
          )}
        </div>

      </div>
      <div className="flex justify-center ">
        <button
          type="submit"
          className=" mt-2 bg-secondarycolor text-white px-7 py-4 rounded-md shadow-lg text-lg font-medium hover:shadow-lg hover:scale-105 duration-300 w-40"
          onClick={navigateToFlightListing}
        >
          Book now
        </button>
      </div>
    </div>
  );
};

export default Hotels;
