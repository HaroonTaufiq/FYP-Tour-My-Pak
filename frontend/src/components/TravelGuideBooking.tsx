// import { useParams} from "react-router-dom";
import { useEffect, useState} from "react";
import BookingWidget from "./BookingWidget";
import PlaceGallery from "./PlaceGallery";
import AddressLink from "./AddressLink";
export default function TravelGuideBooking() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // const {id} = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [place,setPlace] = useState('place');
  const photo='/public/travelguide.jpeg'

  return (
    <div className="mt-4 bg-gray-100  px-8 pt-8 justify-center ">
      <h1 className="text-3xl">
        {/* {place.title} */}
        
      Liaqat Ali
        </h1>
      <AddressLink>
        {/* {place.address} */}
        address
        </AddressLink>
      <PlaceGallery photo={photo} />
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl ">Description</h2>
            {/* {place.description} */}
            🚗 Liaquat Ali Travel Guide

Age: 33
Speaking: understand English, Urdu
Expertise: Deosai, Ali Malik top, Sadpara lake, Kachura lake, Soq Valley, Manthoka and Shigar
          </div>
      
        </div>
        <div>
          <BookingWidget cost={5000}  />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
          {/* {place.extraInfo} */}
          
        Have good Communication skills
          </div>
      </div>
    </div>
  );
}
