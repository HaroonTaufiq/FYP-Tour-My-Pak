import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Admin from './components/Admin'
import StateContext from './components/StateContext'
import { ConfigProvider } from 'antd';
import theme from './theme/themeConfig';
import Home from './components/Home'
import Header from "./components/layout/Header";
import MyFooter from "./components/MyFooter";
import Hotelslisting from "./components/Hotelslisting";
import Carslisting from "./components/Carslisting";
import Carlisting from "./components/Carlisting";
import Hotellisting from "./components/Hotellisting"
import Guidelisting from "./components/Guidelisting"
import AddPackage from "./components/AddPackage";
import BookedPackages from "./components/BookedPackages";
import BookedHotels from "./components/BookedHotels";
import BookedCars from "./components/BookedCars";
import BookedGuides from "./components/BookedGuides";
import AddCar from "./components/AddCar"
import AddHotel from './components/AddHotel'
import AddGuide from './components/AddGuide'
import PackageList from "./components/PackageList";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UpdatePackage from "./components/UpdatePackage";
import UpdateCar from './components/UpdateCar'
import UpdateHotel from './components/UpdateHotel'
import UpdateGuide from './components/UpdateGuide'
import ProtectedRoutes from "./components/ProtectedRoutes";
import AddPlaces from "./components/AddPlaces";
import Register from "./components/Register";
import HotelsBooking from "./components/HotelsBooking";
import TourPackageBooking from "./components/TourPackageBooking";
import CarsBooking from "./components/CarsBooking";
import CarBooking from "./components/CarBooking";
import HotelBooking from "./components/HotelBooking";
import GuideBooking from "./components/GuideBooking";
import TourPackageListing from "./components/TourPackageListing";
import TravelGuideBooking from "./components/TravelGuideBooking";
import TravelGuideListing from "./components/TravelGuideListing";
import Error from "./components/Error";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SafetyPolicy from "./components/SafetyPolicy";
import Terms from "./components/Terms";

function App() {
  return (
    <Router>
      <Header />
      <StateContext>
        <ConfigProvider theme={theme}>
        </ConfigProvider>
        <Routes>

          <Route

            path="/"
            element={<Home />}
          ></Route>
          <Route

            path="/admin"
            element={<Admin />}
          ></Route>
          <Route

            path="booked-packages"
            element={<ProtectedRoutes><BookedPackages /></ProtectedRoutes>}
          ></Route>
          <Route

            path="booked-hotels"
            element={<ProtectedRoutes><BookedHotels /></ProtectedRoutes>}
          ></Route>
          <Route

            path="booked-cars"
            element={<ProtectedRoutes><BookedCars /></ProtectedRoutes>}
          ></Route>
          <Route

            path="booked-guides"
            element={<ProtectedRoutes><BookedGuides /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/tourpackagelisting"
            element={<ProtectedRoutes><TourPackageListing /></ProtectedRoutes>}
          ></Route>

          {/* <Route

            path="/hotelslisting"
            element={<ProtectedRoutes><Hotelslisting /></ProtectedRoutes>}
          ></Route> */}
          <Route

            path="/hotel-list"
            element={<ProtectedRoutes><Hotellisting /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/guide-list"
            element={<ProtectedRoutes><Guidelisting /></ProtectedRoutes>}
          ></Route>
          {/* <Route

            path="/carslisting"
            element={<ProtectedRoutes><Carslisting /></ProtectedRoutes>}
          ></Route> */}
          <Route

            path="/car-list"
            element={<ProtectedRoutes><Carlisting /></ProtectedRoutes>}
          ></Route>
          {/* <Route

            path="/travelguidelisting"
            element={<ProtectedRoutes><TravelGuideListing /></ProtectedRoutes>}
          ></Route> */}


          <Route

            path="/add-package"
            element={<ProtectedRoutes><AddPackage /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/add-car"
            element={<ProtectedRoutes><AddCar /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/add-hotel"
            element={<ProtectedRoutes><AddHotel /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/add-guide"
            element={<ProtectedRoutes><AddGuide /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/package-list"
            element={<ProtectedRoutes><PackageList /></ProtectedRoutes>}
          ></Route>



          <Route

            path="/update/:id"
            element={<ProtectedRoutes><UpdatePackage /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/updateCar/:id"
            element={<ProtectedRoutes><UpdateCar /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/updateHotel/:id"
            element={<ProtectedRoutes><UpdateHotel /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/updateGuide/:id"
            element={<ProtectedRoutes><UpdateGuide /></ProtectedRoutes>}
          ></Route>






          <Route

            path="/login"
            element={<Login />}
          ></Route>
          <Route

            path="/signup"
            element={<Signup />}
          ></Route>
          <Route

            path="/admin"
            element={<ProtectedRoutes><AddPlaces /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/register"
            element={<Register />}
          ></Route>
          <Route

            path="/hotelsbooking"
            element={<ProtectedRoutes><HotelsBooking /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/tourpackagebooking/:id"
            element={<ProtectedRoutes><TourPackageBooking /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/carsbooking"
            element={<ProtectedRoutes><CarsBooking /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/carbooking/:id"
            element={<ProtectedRoutes><CarBooking /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/hotelbooking/:id"
            element={<ProtectedRoutes><HotelBooking /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/guidebooking/:id"
            element={<ProtectedRoutes><GuideBooking /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/travelguidebooking"
            element={<ProtectedRoutes><TravelGuideBooking /></ProtectedRoutes>}
          ></Route>
          <Route
            path="/aboutus"
            element={<AboutUs />}
          ></Route>
          <Route

            path="/contactus"
            element={<ContactUs />}
          ></Route>
          <Route

            path="/privacypolicy"
            element={<PrivacyPolicy />}
          ></Route>
          <Route

            path="/safetypolicy"
            element={<SafetyPolicy />}
          ></Route>
          <Route

            path="/terms"
            element={<Terms />}
          ></Route>

          <Route

            path="*"
            element={<Error />}
          ></Route>

        </Routes>

        <ConfigProvider />
      </StateContext>
      <MyFooter />
    </Router>
  );
}

export default App;
