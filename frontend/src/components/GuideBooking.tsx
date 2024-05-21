// import { useParams} from "react-router-dom";
import { useEffect, useState} from "react";
import BookingWidget from "./BookingWidget";
import PlaceGallery from "./PlaceGallery";
import AddressLink from "./AddressLink";
import { Context } from "./StateContext";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
export default function TourPackageBooking() {
  const [cssclass,setCssClass]=useState('')
  useEffect(() => {

    if(JSON.parse(localStorage.getItem('user')).email=='admin@test.com' ){
      setCssClass('md:!ml-[261px] md:!-mt-[700px] md:!overflow-y-scroll md:!max-h-screen ')
    }
    window.scrollTo(0, 0)
  }, [])
  const {id}=useParams();
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [departure, setdeparture] = useState('')
  const [arrival, setarrival] = useState('')
  const [error, setError] = useState(false)
  let [perk,setperk]=useState('');
  const [description, setDescription] = useState('');
  let [perks, setPerks] = useState('');
  const [extraInfo, setExtraInfo] = useState('');
  const [maxPersons, setmaxPersons] = useState();
  const [cost,setCost] = useState(100);
  const [img, setImg] = useState();
  useEffect(()=>{
    fetch("http://localhost:4000/guide-list/"+id,{
      headers:{
        authorization:"bearer "+JSON.parse(localStorage.getItem('token'))
      }
    }).then((resp) => {
      resp.json().then((result) => {
        console.log(result);
        setName(result.name);
        setPrice(result.price);
        setdeparture(result.departure);
        setarrival(result.arrival);
        setImg(result.img);
        setDescription(result.description);
        setExtraInfo(result.extraInfo);
        setmaxPersons(result.maxPersons);
        setCost(result.cost);
        setperk(result.perk)
        setPerks([result.perk.split(',')].flatMap((i)=>i));
  
  
      })
    })
  },[])
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [place,setPlace] = useState('place');
  const {startDate}:any = Context()
  const {endDate}:any = Context()
const photo='/public/skardu.jpg'



//booking widget
let userString = localStorage.getItem("user");

const [nameo, setNameo] = useState("Payment")
const [uid,setUid]=useState()
useEffect(()=>{
  setUid( JSON.parse(localStorage.getItem('user')).email)
},[])

// const [price, setPrice] = useState(cost)
const priceo=cost
const [quantity, setQuantity] = useState(1)
console.log("costo",cost)
// setPrice(cost)
const fetchStripe= async ()=>
  {
        // const userId = JSON.parse(localStorage.getItem('user'))._id;
    fetch("http://localhost:4000/book-guide", {
      method: "post",
      headers: {
        'Content-Type': "application/json",
        // authorization:"bearer "+JSON.parse(localStorage.getItem('token'))
      },
      body: JSON.stringify({uid, name, price,img, description,extraInfo,departure, arrival,maxPersons,cost,perk })
    }).then((resp) => {
      resp.json().then((result) => {
        console.log("result",result)
      
        

      })
    })






    console.log("costo",cost)
    const stripe=await loadStripe("pk_test_51NWaa1ELjlQVNZy6WZ97HEOFMAnCkeaxoYb8Hdx3oquEc88NnVNczq2JvroQrLX3wHh1CG246ae425MRmXIMSIRj00iRPNwzLi")
 
       let result= await fetch("http://localhost:4000/create-checkout-session",{
      
       method:"post",
       body:JSON.stringify({
        cart: [
          {
            name: nameo,
            price: priceo,
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


    
  return (
    <div className={`mt-4 bg-gray-100  px-8 pt-8 justify-center  ${cssclass}` }>
      <h1 className="text-3xl">
        {/* {place.title} */}
        
         {name} trip
        </h1>
      <AddressLink>
        {/* {place.address} */}
        {price}
        </AddressLink>
      <PlaceGallery photo={img} />
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl ">Description</h2>
            {/* {place.description} */}
       {description}


          </div>
          <div className="font-bold">
          Departure: 
          {/* {place.checkIn} */}
          {departure }
          <br />
          Arrival: 
          {arrival}
          {/* {place.checkOut} */}
         
          <br />
          Max number of persons:
         {maxPersons}      {/* {place.maxPersons} */}
          </div>
    
        </div>
        <div>
          {console.log("cost",cost)}
          {/* <BookingWidget cost={cost} />------------------------------------------ */}
{
    localStorage.getItem("user") && JSON.parse(localStorage.getItem('user')).email!=='admin@test.com' &&
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
}
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
          {/* {place.extraInfo} */}
          {extraInfo}
          </div>
                <div className="font-bold flex">
            Perks:{perks.toString()}
          </div>
      </div>
    </div>
  );
}
