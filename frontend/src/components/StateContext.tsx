import React, { createContext, useContext, useState,ReactNode} from 'react';

const MyContext = createContext({});

interface ContextProps {
  children: ReactNode; // Specify children as ReactNode
}

export default function StateContext({ children }:ContextProps) {
  const today = new Date() ;

  const [statecontext, setstatecontext] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<any>(today);
  const fourDaysLater = new Date();
  fourDaysLater.setDate(today.getDate() + 4);
  const [endDate, setEndDate] = useState<any>(fourDaysLater);
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [adults, setAdults] = useState(0);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);
  const [travelers, setTravelers] = useState(0);
  const [flights, setFlights] = useState<any>([
    { id: 0, departureCity: departureCity, arrivalCity: arrivalCity, startDate: startDate, isDatePickerOpen: false, minDate: today },
    { id: 1, departureCity: '', arrivalCity: '', startDate: startDate, isDatePickerOpen: false, minDate: startDate }
  ]);

  return (
    <div>
      {/* <button onClick={() => setstatecontext(!statecontext)}>click</button> */}
      <MyContext.Provider value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        departureCity,
        setDepartureCity,
        arrivalCity,
        setArrivalCity,
        statecontext,
        setstatecontext,
        adults,
        setAdults,
        child,
        setChild,
        infant,
        setInfant,
        travelers,
        setTravelers,
        flights,
        setFlights
      }}>
        {children}
      </MyContext.Provider>
    </div>
  );
}

export const Context = () => useContext(MyContext);
