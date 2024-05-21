// import { useParams} from "react-router-dom";
import { useEffect, useState} from "react";
import BookingWidget from "./BookingWidget";
import PlaceGallery from "./PlaceGallery";
import AddressLink from "./AddressLink";
import { Context } from "./StateContext";
export default function CarsBooking() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // const {id} = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [place,setPlace] = useState('place');
  const {startDate}:any = Context()
  const {endDate}:any = Context()
  const photo='/public/civic.jpg'
  return (
    <div className="mt-4 bg-gray-100  px-8 pt-8 justify-center ">
      <h1 className="text-3xl">
        {/* {place.title} */}
        
        Automatic Honda Civic
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
            🚗 Vehicle Rental Overview:

Explore your destination with the freedom and flexibility of our top-notch vehicle rental services. Whether you're navigating city streets or venturing into scenic landscapes, our diverse fleet of vehicles ensures a comfortable and convenient journey for every traveler.

Vehicle Options:

Compact Cars:

Ideal for solo travelers or couples.
Fuel-efficient and easy to maneuver in urban areas.
Perfect for short trips and city exploration.
Sedans:

Spacious and comfortable for small groups or families.
Well-suited for both city and highway travel.
Modern amenities for a pleasant journey.
SUVs:

Designed for comfort and versatility.
Ample space for passengers and luggage.
Excellent for longer journeys and off-road adventures.
Vans/Minibusses:

Accommodates larger groups or families.
Comfortable seating and ample storage space.
Ideal for group outings, family vacations, or events.
Rental Highlights:

Well-Maintained Fleet:

Regularly serviced vehicles for reliability.
Safety features and modern technology.
Flexible Rental Periods:

Hourly, daily, or extended rentals available.
Tailor your rental to match your itinerary.

          </div>
          <div className="font-bold">
          Departure: 
          {/* {place.checkIn} */}
          {startDate ? `${startDate.toLocaleDateString()} ` : ``}
          <br />
          Arrival: 
          {endDate ? `${endDate.toLocaleDateString()} ` : ``}
          {/* {place.checkOut} */}
         
          <br />
          Max number of persons:
          4       {/* {place.maxPersons} */}
          </div>
        </div>
        <div>
          <BookingWidget  cost={5000} />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
          {/* {place.extraInfo} */}
          
          Optional Add-Ons:

GPS navigation for hassle-free travel.
Child seats for family-friendly journeys.
Booking Options:

Self-Drive:

Take the wheel and explore at your own pace.
Enjoy the freedom to create your itinerary.
Chauffeur-Driven:

Sit back and relax while a professional driver navigates.
Perfect for those who prefer a stress-free travel experience.
Pricing:

Competitive rental rates with transparent pricing.
Special packages for extended rentals or specific travel needs.
Embark on a seamless journey with our reliable vehicle rental services, providing the mobility and convenience you need to make the most of your travel experience.
          </div>
      </div>
    </div>
  );
}
