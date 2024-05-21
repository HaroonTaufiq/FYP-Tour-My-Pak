/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useRef, FC } from "react";
import Mytest from "./PersonsDropdown";
import { Input } from "antd";

import { DateRange, Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { AutoComplete } from "antd";
import { useNavigate  } from 'react-router-dom';
import { Context } from "./StateContext";

// import AirportData from '@/app/airportdata'

const Oneway: FC<{ data?: any }> = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  console.log("oneway data", data);
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

  const [airportdata, setAirportData] = useState([]);
  const today = new Date();

  const [startDate, setStartDate] = useState<any>(today);
  const [dateInString, setDateInString] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");

 
const {adults, setAdults}:any= Context()
const {child, setChild}:any = Context()
const {infant, setInfant}:any = Context()
const {travelers, setTravelers}:any = Context()

  const defaultFocusRef = useRef<any>(null);
  const navigate = useNavigate(); // Get the router object

  // Function to navigate to flight listing page with data
  const navigateToFlightListing = () => {
    if (departureCity == "" || arrivalCity == ""||travelers=="") {
      alert("fill in all fields");
      return;
    }
    // Construct the data object
    const searchData = {
      tripType: "oneway",
      departureCity,
      arrivalCity,
      startDate: startDate
        ? !dateInString
          ? startDate.toLocaleDateString()
          : startDate
        : "",
      adults: adults?.toLocaleString(),
      child: child?.toLocaleString(),
      infant: infant?.toLocaleString(),
      travelers: travelers?.toLocaleString(),
    };

    // Construct the query string
    const queryString = new URLSearchParams(searchData).toString();

    // Navigate to the flight listing page along with the query string
    navigate(`/carslisting?${queryString}`);
  };

  const handleDepartureCityChange = (value: string) => {
    console.log("departure change oneway", value);
    setDepartureCity(value);
  };

  const handleArrivalCityChange = (value: string) => {
    setArrivalCity(value);
  };

  const handleClick = () => {
    setDatePickerOpen(!datePickerOpen);
    // You can perform other actions with the selected range here
  };

  // travelers


  useEffect(() => {
    async function fetchData() {
      console.log("in use effect");
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        console.log("airportdata after fetch", data);
        setAirportData(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array to ensure this runs only once on mount

  if (data) {
    useEffect(() => {
      if (data && data.tripType == "oneway") {
        // Set state variables using the parsed query parameters
        console.log("onway data in use effect", data);
        setDepartureCity(data.departureCity);
        setArrivalCity(data.arrivalCity);
        setDateInString(true);
        setStartDate(new Date(data.startDate));
        // setAdults(parseInt(data.adult)) ;
        // setchild(parseInt(data.child) );
        // setInfant(parseInt(data.infant) );
        // setTravelers(parseInt(data.travelers));
      }
    }, [data]);
  }

  return (
    <div className="bg-primarycolor px-5">
      <div className="relative p-1">
        {/* <MyDropdown/> */}

        <Mytest data={data} />
      </div>
      <div className="flex flex-row custom-screen  mr-3 md:space-x-2  w-full ">
        <div className="max-h-[200px] min-w-[60px] mb-2 ">
          <AutoComplete
            defaultValue={departureCity}
            style={{ width: 300 }}
            onChange={handleDepartureCityChange}
            className="min-w-[300px] "
            options={airportCities.map((city: any) => ({
              value: `${city.value} (${city.code}) `,
              code: city.code,
              label: (
                <div className="flex mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 -rotate-90 mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
                  <p className=" font-semibold">
                  {`${city.value} (${city.code})`}
                    <br />
                    <span className="text-[12px]">
                    {`${city.airport}`}
                    </span>
                  </p>
                </div>
              ),
            }))}
            filterOption={(inputValue, option) => {
              return (
                option!.value
                  .toUpperCase()
                  .indexOf(inputValue.toUpperCase()) !== -1 ||
                option!.code.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                  -1
              );
            }}
            onSelect={(value, option) => {
              handleDepartureCityChange(value);
            }}
          >
            <Input
              style={{ height: 50 }}
              placeholder="Departure City"
              onChange={(e) => setDepartureCity(e.target.value)}
            />
          </AutoComplete>
        </div>

        <div className="max-h-[50px] min-w-[60px] mb-2">
          <AutoComplete
            className="min-w-[300px] max-h-[200px] "
            defaultValue={arrivalCity}
            options={airportCities.map((city) => ({
              value: `${city.value} (${city.code})`,
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
              placeholder="Arrival City"
              onChange={(e) => setArrivalCity(e.target.value)}
            />
          </AutoComplete>
        </div>

        <div className="max-h-[50px] min-w-[60px] relative mb-2">
          <AutoComplete
            className="min-w-[300px] "
            value={startDate ? `${startDate.toLocaleDateString()} ` : ``}
            onClick={handleClick}
          >
            <Input
              style={{ height: 50 }}
              placeholder="Departure Date"
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
          <div>
            {datePickerOpen && (
              <div className=" flex  absolute z-10 top-0  bg-white ">
                <Calendar
                  onChange={(item) => setStartDate(item)}
                  date={startDate}
                  minDate={new Date()}
                  rangeColors={["#0f766e"]}
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

export default Oneway;
