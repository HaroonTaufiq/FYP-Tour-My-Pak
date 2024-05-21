/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useRef, useEffect,FC } from 'react';
import { Calendar, DateRange } from "react-date-range";
import { AutoComplete, Input } from 'antd';
import { useNavigate  } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space,Button } from 'antd';

import { Context } from "./StateContext";

// import { debounce } from "lodash"

const Multicity : FC<{data?:any }> = ({data}) => {

  const {startDate, setStartDate}:any = Context()
  const {departureCity, setDepartureCity}:any = Context()
  const {arrivalCity, setArrivalCity}:any = Context()
var mappedflights:any;



const cities = [
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
  const [airportdata,setAirportData]=useState([])
  const[dateInString,setDateInString]=useState(false)
  const[totalFlights,setTotalFlights]=useState(0)

  const today = new Date();


const [isParamData, setIsParamData]= useState('false')



  const [flights, setFlights] = useState<any>([
    { id: 0, departureCity: departureCity, arrivalCity: arrivalCity, startDate: startDate  , isDatePickerOpen: false, minDate: today },
    { id: 1, departureCity: '', arrivalCity: '', startDate: startDate , isDatePickerOpen: false, minDate: startDate }
  ]);
  
  const [selectedDepartureCity, setSelectedDepartureCity] = useState('');
  const [selectedArrivalCity, setSelectedArrivalCity] = useState('');

  const [addFlightClickCount, setAddFlightClickCount] = useState(0);
  const [selected, setSelected] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  
  const navigate = useNavigate();
  const navigateto = () => {
    if(flights.departureCity==''|| flights.arrivalCity==''||travelers==0){
      alert("fill in all fields")
      return
    }
    !localStorage.getItem('user')&&alert('plz login first')
    // Construct the data object

    const searchData = flights.map((flight: any) => ({
      tripType:"multicity",
      id:flight.id,
      departureCity: flight.departureCity,
      arrivalCity: flight.arrivalCity,
      startDate: flight.startDate ? (!dateInString? flight.startDate.toLocaleDateString() : flight.startDate): '',
      adults: adults?.toLocaleString(),
      child: child?.toLocaleString(),
      infant:  infant?.toLocaleString(),
      travelers:   travelers?.toLocaleString()

    }));
  
    // Construct the query string
    const queryString = new URLSearchParams({ flights: JSON.stringify(searchData) }).toString();
  
    // Navigate to the flight listing page along with the query string
    navigate(`/tourpackagelisting?${queryString}`);
  };


  const handleClick = (index:number) => {
    const updatedFlights = flights.map((flight:any) => {
      if (flight?.id === index) {
        
        console.log("...flight,isDatePickerOpen",{...flight, isDatePickerOpen:!flight.isDatePickerOpen})

        return {...flight,isDatePickerOpen:!flight.isDatePickerOpen };
      
      }
      return flight;
  
    });
    setFlights(updatedFlights);

  };

 
  const handleDepartureCityChange = (value:any, index:number) => {
   
    const updatedFlights = flights.map((flight:any) => {
      if(flight.id==0 && index==0){
        setDepartureCity(value)
      }
  
      if (flight?.id === index) {
          

     
      
        return {...flight, departureCity:value};
      }
    
      return flight;
     
    });
   
    setFlights(updatedFlights);
  };

  const handleArrivalCityChange = (value:any, index:number) => {
    const updatedFlights = flights.map((flight:any) => {
      if(flight.id==0 && index==0){
        setArrivalCity(value)
      }
      if (flight?.id === index) {
        // setSelectedArrivalCity(value); // Update the selected arrival city

        console.log("...flight, arrivalCityCity:value",{...flight, arrivalCity:value})
        return {...flight, arrivalCity:value};
      }
      return flight;
    
    });
    setFlights(updatedFlights);
  };

  

  const handleSelect = (item: any, index:number) => {

 
    

    const updatedFlights = flights.map((flight:any) => {
      if(flight.id==0 && index==0){
        setStartDate(item)
      }
      if (flight?.id === index) {
       
 
      // flight.selectionRange.startDate=startDate[index]
        console.log("...flight, date:value",{
          ...flight,
         startDate:item
        })
        return {
          ...flight,
          startDate:item
        };
      }
      return flight;
    
    });
    setFlights(updatedFlights);

  };


  const handleAddFlight = (index:number) => {
   
   
      setFlights([...flights,  { id: index, departureCity: '', arrivalCity: '', startDate: today  , isDatePickerOpen: false, minDate: today  },]);
      setAddFlightClickCount(addFlightClickCount + 1);
      setTotalFlights(index)
    
  
  };

  const handleRemoveFlight = (index:number) => {
    const updatedFlights = flights.filter((_:any, i:any) => i !== index);
    setFlights(updatedFlights);
    setAddFlightClickCount(addFlightClickCount - 1);
  };

  const handleFlightChange = (event:any, index:number, field:any) => {
    const updatedFlights:any = [...flights];
    updatedFlights[index][field] = event.target.value;
    setFlights(updatedFlights);
  };

  const options = [
    { value: 'Burns Bay Road' },
    { value: 'Downing Street' },
    { value: 'Wall Street' },
  ];

  // travelers

const [open, setOpen] = useState(false);
const {adults, setAdults}:any= Context()
const {child, setChild}:any = Context()
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
        setChild(child + 1);
        setTravelers(travelers + 1);
    }
};

const handleDecreasechild = () => {
    if (child > 0) {
        setChild(child - 1);
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
                <Button type="primary" block icon={<SearchOutlined />} className='bg-secondarycolor'>
                    Search
                </Button>
            </div>
        ),
        key: '4',
    },
   
];


useEffect(() => {
if(data?.flights){
try{  
    setIsParamData('true')

   const  mappedflights2=JSON.parse(data?.flights)
   console.log("parsed data.flights",mappedflights2)
   console.log("simple startdata ",mappedflights2[0].startDate)
   const mappedflights3=mappedflights2.map((mappedflight:any)=>{

   
    return{...mappedflight,startDate:new Date(mappedflight.startDate)}
   })
   console.log("mappedflights3",mappedflights3)
  setDateInString(true)
      
       setFlights(mappedflights3);

  }
  catch(error){
    console.log('not multicity',error)
   

  }
}



}, [isParamData]);

console.log("flights", flights)
  return (
    <div className=''>

      <div className='relative  p-1'>
      {/*  travelers dropdown */}
 
 
      {/* <MyDropdown/> */}
      <Dropdown overlayStyle={{ minWidth: '350px',height:'50%' } } 
            menu={{
                items,
                onClick: handleMenuClick,
            }}
            onOpenChange={handleOpenChange}
            open={open}
            placement="bottomLeft"  // Add this line to set the placement to "bottomLeft"
            getPopupContainer={(trigger:any) => trigger.parentNode} // Add this line to set the popup container
        >
            <a onClick={(e) => e.preventDefault()}>
            <Space className="text-white bg-secondarycolor  hover:bg-tertiarycolor focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center  mb-2" >
                    {`${travelers}Persons`}
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
        
         
        
            
      </div>    
        
        {flights.map((flight:any, index:number) => (
      
          <div className='mb-2' key={index}>
            
            <div className="flex flex-row custom-screen  mr-3 space-y-2  space-x-2  w-full  " >
              <button className="pb-1 md:pr-1 pt-3 font-bold left-0 min-w-[30px] text-start text-white">{`T${index + 1}`}</button>
              
              <div className="max-h-[50px]    ">
          <AutoComplete
                 key={isParamData}
            defaultValue={ flight.departureCity}
          className='min-w-[300px] mb-2'
            options={cities.map((city) => ({
              value: `${city.value} (${city.code}) `,
              code: city.code,
              label: (
                <div className="flex mb-2">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 -rotate-90 mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
                  <p className=' font-semibold'>
                  {`${city.value} (${city.code})`}
                  <br />
                  <span className='text-[12px]'>
                  {`${city.airport}`}
                 </span>
                  </p>
             
                 
                </div>
              ),
            }))}
            filterOption={(inputValue, option) =>
              option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
            onSelect={(value, option) => {
              console.log(`Selected City: ${value}`);
              console.log(`Selected City Code: ${option.code}`);
              
              console.log("printing departure city in autocomplete",flight?.departureCity)
              handleDepartureCityChange(value,index);
            }}
          >
            <Input style={{ height: 50 }} 
            placeholder="Departure City"
            onChange={(e) => {
            
                handleDepartureCityChange(e.target.value, index);
           
            }}
            />
          </AutoComplete>
        </div>


        

             
        <div className="max-h-[50px]  ">
          <AutoComplete
          key={isParamData}
               defaultValue={  flight.arrivalCity}
             className='min-w-[300px]  mb-2'
            options={cities.map((city) => ({
              value: `${city.value} (${city.code})`,
              code: city.code,
              label: (
                <div className="flex mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 -rotate-90 mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
                  <p className=' font-semibold'>
                  {`${city.value} (${city.code})`}
                  <br />
                  <span className='text-[12px]'>
                  {`${city.airport}`}
                 </span>
                  </p>
             
                </div>
              ),
            }))}
            filterOption={(inputValue, option) =>
              option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
            onSelect={(value, option) => {
              console.log(`Selected City: ${value}`);
              console.log(`Selected City Code: ${option.code}`);
              handleArrivalCityChange(value,index);
            }}
          >
            <Input style={{ height: 50 }} placeholder="Arrival City" onChange={((e) => handleArrivalCityChange(e.target.value, index))} />
          </AutoComplete>
        </div>
        <div className="max-h-[50px]  relative">
          <AutoComplete
             className='min-w-[300px] '
           value={
             flight?.startDate instanceof Date
              ?   `${flight.startDate.toLocaleDateString()}`
              
              : `${flight.startDate}`
            }
            onClick={() => handleClick(index)}
            // onSelect={(date) => handlestartDateChange(date, index)}
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

          {flight?.isDatePickerOpen && (
            <div className=" flex  absolute z-10 top-0  bg-white ">
           
              <Calendar
 onChange={(item: any) => handleSelect(item, index)}

  date={flight.startDate} 
  minDate={flight.minDate}

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
                onClick={()=>handleClick(index)}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </div>
          )}
        </div>


              {index > 1 && (
                <button
                  type="submit"
                  className="text-red-500 px-1 py-1 mb-1 rounded-xl text-lg font-medium hover: hover:scale-105 duration-300"
                  onClick={() => handleRemoveFlight(index)}
                >
               ╳  
                </button>
              )}
              
            </div>
         
          </div>
        ))}


        <div className="flex">
        {flights.length < 5 && (
          <button
            type="submit"
            className="text-secondarycolor px-1 pt-3 pb-1 mb-1 rounded-md text-lg font-medium hover: hover:scale-105 duration-300"
            onClick={()=>{handleAddFlight(addFlightClickCount + 2)}}

          >
            + Add flight
          </button>
        )}
        </div>


        <div className='flex-none sm:flex-col w-full'>
        
        </div>
        <div className="flex justify-center ">
  
        <button type="submit"className=' mt-2 bg-secondarycolor text-white px-7 py-4 rounded-md shadow-lg text-lg font-medium hover:shadow-lg hover:scale-105 duration-300 w-40' onClick={navigateto} >Book now</button>

    
</div>
      </div> 

  );
};

export default Multicity;





