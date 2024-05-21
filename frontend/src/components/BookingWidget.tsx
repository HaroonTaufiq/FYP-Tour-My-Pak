// import { useState} from "react";
// import {differenceInCalendarDays} from "date-fns";

// import {Navigate} from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

export default function BookingWidget({cost}:any) {
  // const [checkIn,setCheckIn] = useState('');
  // const [checkOut,setCheckOut] = useState('');
  // const [numberOfGuests,setNumberOfGuests] = useState(1);
  // const [name,setName] = useState('');
  // const [phone,setPhone] = useState('');
  // const [redirect,setRedirect] = useState('');
  // const {user} = useContext(UserContext);
 
  let userString = localStorage.getItem("user");

  const [name, setName] = useState("Payment")
  // const [price, setPrice] = useState(cost)
  const price=cost
  const [quantity, setQuantity] = useState(1)
  console.log("costo",cost)
  // setPrice(cost)
  const fetchStripe= async ()=>
    {
      console.log("costo",cost)
      const stripe=await loadStripe("pk_test_51NWaa1ELjlQVNZy6WZ97HEOFMAnCkeaxoYb8Hdx3oquEc88NnVNczq2JvroQrLX3wHh1CG246ae425MRmXIMSIRj00iRPNwzLi")
   
         let result= await fetch("http://localhost:4000/create-checkout-session",{
        
         method:"post",
         body:JSON.stringify({
          cart: [
            {
              name: name,
              price: price,
              quantity: quantity,
            },
          ],
           
          }
          ),
         headers:{
           "Content-Type":"application/json"
         }
       })
       result=await result.json();
       console.log(result)
 
       const resultS= stripe.redirectToCheckout({
           sessionId:result.id
           })
           console.log(sessionId)
           if((await resultS).error){
             console.log((await resultS).error)
       
           }
    }

  // --------------stripe code here starts-----------------

  // const makePayment = async ()=>
  // {
  //   const stripe=await loadStripe("pk_live_51NWaa1ELjlQVNZy6WLDsGfNQMMKk5ZES1TuFV5dg8WfIP9jsjTgPBumvPSSxv96whSJpbGSHq7WZpZ3ofHhPu3ue00kGed2lJ6")
  //   const body={
  //     products:5
  //   }
  //   const headers={
  //     "Content-Type":"application/json"
  //   }
  //   const response=await fetch(`http://localhost:4000/create-checkout-session`,{
  //     method:"POST",
  //     headers:headers,
  //     body:JSON.stringify(body)
  //   })
  //   const session=await response.json();
  //   const result= stripe.redirectToCheckout({
  //   sessionId:session.id
  //   })
  //   if((await result).error){
  //     console.log((await result).error)

  //   }
  // }

  
  // --------------stripe code here ends-----------------

  // let numberOfNights = 0;
  // if (checkIn && checkOut) {
  //   numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  // }

 



  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">
        {/* Price: ${place.price} / per night */}
      
        Price: PKR{cost}
      </div>
      {/* <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4">
            <label>Check in:</label>
            <input type="date"
                   value={checkIn}
                   onChange={ev => setCheckIn(ev.target.value)}/>
          </div>
          <div className="py-3 px-4 border-l">
            <label>Check out:</label>
            <input type="date" value={checkOut}
                   onChange={ev => setCheckOut(ev.target.value)}/>
          </div>
        </div>
        <div className="py-3 px-4 border-t">
          <label>Number of guests:</label>
          <input type="number"
                 value={numberOfGuests}
                 onChange={(ev:any )=> setNumberOfGuests(ev.target.value)}/>
        </div>
        {numberOfNights > 0 && (
          <div className="py-3 px-4 border-t">
            <label>Your full name:</label>
            <input type="text"
                   value={name}
                   onChange={ev => setName(ev.target.value)}/>
            <label>Phone number:</label>
            <input type="tel"
                   value={phone}
                   onChange={ev => setPhone(ev.target.value)}/>
          </div>
        )}
      </div> */}
      <button  className="primary mt-4" onClick={()=>fetchStripe()}>
        Book 
        {/* {numberOfNights > 0 && (
          <span>
             ${numberOfNights * place.price}
             $40
          </span>
        )} */}
      </button>
    </div>
  );
}