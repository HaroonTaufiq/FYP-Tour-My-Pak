// import { useParams} from "react-router-dom";
import { useEffect, useState} from "react";
import BookingWidget from "./BookingWidget";
import PlaceGallery from "./PlaceGallery";
import AddressLink from "./AddressLink";
import { Context } from "./StateContext";
export default function HotelsBooking() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // const {id} = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [place,setPlace] = useState('place');
  const {startDate}:any = Context()
  const {endDate}:any = Context()
 const photo="/public/hotel.jpeg"

  return (
    <div className="mt-4 bg-gray-100  px-8 pt-8 justify-center ">
      <h1 className="text-3xl">
        {/* {place.title} */}
        
        Stay at this spacious House in Pirchinasi
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
            🏨 Hotel Room Package Overview:

Indulge in the ultimate comfort and luxury with our meticulously designed hotel room packages, offering a serene retreat for a blissful stay. Whether you're a solo traveler or a couple seeking a romantic getaway, our hotel rooms cater to diverse preferences.

Accommodation Options:

Single Room:
A cozy haven for solo travelers.
Immerse yourself in privacy and relaxation.
Thoughtfully furnished for a comfortable stay.
Package Highlights:

Room Features:

Elegant decor and modern furnishings.
Plush bedding for a restful night's sleep.
En-suite bathroom with premium toiletries.
High-speed Wi-Fi connectivity for convenience.

          </div>
          <div className="font-bold">
          Check-in: 
          {/* {place.checkIn} */}
          {startDate ? `${startDate.toLocaleDateString()} ` : ``}
          <br />
          Check-out: 
          {endDate ? `${endDate.toLocaleDateString()} ` : ``}
          {/* {place.checkOut} */}
         
          <br />
          Max number of persons:
          4       {/* {place.maxPersons} */}
          </div>
        </div>
        <div>
          <BookingWidget  cost={5000}  />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
          {/* {place.extraInfo} */}
          
          In-Room Services:

24/7 room service for your comfort.
Mini-bar stocked with refreshing beverages.
Entertainment options with a flat-screen TV.
Complimentary Perks:

Welcome amenities to kickstart your stay.
Daily housekeeping for a neat and tidy retreat.
Access to hotel facilities and common areas.
Booking Options:

Single Occupancy:
Perfect for solo travelers seeking solitude.
Enjoy the entire room to yourself.
Pricing:

Our hotel room packages are competitively priced, offering excellent value for your accommodation needs.
Flexible booking options to suit your travel preferences.
Embark on a memorable stay with us, where every moment is crafted to perfection, and every comfort awaits your arrival.

          </div>
      </div>
    </div>
  );
}
