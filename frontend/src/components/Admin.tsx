
import React, { useState,useEffect,useRef } from 'react'

import { Link } from 'react-router-dom'
import packages from '../../../public/chitral.jpg' 
import hotels from '../../../public/hotel.jpeg' 
import cars from '../../../public/civic.jpg' 
import guides from '../../../public/travelguide.jpeg' 

import menu from '/public/menu.svg'


import { useNavigate } from 'react-router-dom'
export default function Admin() {










    
    const [packages, setPackages] = useState([])
    const [hotels, setHotels] = useState([])
    const [cars, setCars] = useState([])
    const [guides, setGuides] = useState([])
useEffect(()=>{
    {!localStorage.getItem("user") && navigate("/") }
   
  

    fetch("http://localhost:4000/booked-packages", {
      headers: {
        authorization: "bearer " + JSON.parse(localStorage.getItem('token'))
      }
    }).then(async (resp) => {
      await resp.json().then((result) => {
       
        console.log("result",result.map((i)=>i.uid))
       let  usersId=result.map((i)=>i.uid);
       console.log("usersIdLength",usersId.length)
      
       let  localID=[JSON.parse(localStorage.getItem("user")).email]
        console.log("localStorage",[JSON.parse(localStorage.getItem("user")).email])
        console.log("localIdLength",localID.length)
        const arraysAreEqual =  usersId.every((value, index) => value === localID[index]);
       

       console.log("result in booking page",result)
            setPackages(result);

      })
    })
    fetch("http://localhost:4000/booked-cars", {
      headers: {
        authorization: "bearer " + JSON.parse(localStorage.getItem('token'))
      }
    }).then(async (resp) => {
      await resp.json().then((result) => {
       
        console.log("result",result.map((i)=>i.uid))
       let  usersId=result.map((i)=>i.uid);
       console.log("usersIdLength",usersId.length)
      
       let  localID=[JSON.parse(localStorage.getItem("user")).email]
        console.log("localStorage",[JSON.parse(localStorage.getItem("user")).email])
        console.log("localIdLength",localID.length)
        const arraysAreEqual =  usersId.every((value, index) => value === localID[index]);
       

       console.log("result in booking page",result)
            setCars(result);

      })
    })
    fetch("http://localhost:4000/booked-hotels", {
      headers: {
        authorization: "bearer " + JSON.parse(localStorage.getItem('token'))
      }
    }).then(async (resp) => {
      await resp.json().then((result) => {
       
        console.log("result",result.map((i)=>i.uid))
       let  usersId=result.map((i)=>i.uid);
       console.log("usersIdLength",usersId.length)
      
       let  localID=[JSON.parse(localStorage.getItem("user")).email]
        console.log("localStorage",[JSON.parse(localStorage.getItem("user")).email])
        console.log("localIdLength",localID.length)
        const arraysAreEqual =  usersId.every((value, index) => value === localID[index]);
       

       console.log("result in booking page",result)
            setHotels(result);

      })
    })
    fetch("http://localhost:4000/booked-guides", {
      headers: {
        authorization: "bearer " + JSON.parse(localStorage.getItem('token'))
      }
    }).then(async (resp) => {
      await resp.json().then((result) => {
       
        console.log("result",result.map((i)=>i.uid))
       let  usersId=result.map((i)=>i.uid);
       console.log("usersIdLength",usersId.length)
      
       let  localID=[JSON.parse(localStorage.getItem("user")).email]
        console.log("localStorage",[JSON.parse(localStorage.getItem("user")).email])
        console.log("localIdLength",localID.length)
        const arraysAreEqual =  usersId.every((value, index) => value === localID[index]);
       

       console.log("result in booking page",result)
            setGuides(result);

      })
    })


},[])


    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    function logout() {
      localStorage.clear();
      console.log("logout")
      navigate("/");
    }
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
  
  return (
    <>
 <div className="flex min-h-screen bg-gray-100 md:ml-[259px] md:mt-[-700px] ">
 {/* <button
            className=" text-gray-600 focus:outline-none mb-0 "
            onClick={toggleMenu}
          >
            <img src={menu} alt='menu image' className='mt-[-300px]'/>

            
          </button> */}
      {/* Sidebar */}
      {
      // <aside className="w-64 bg-gray-800 text-white ">
      //   <div className="p-4">
      //     <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      //   </div>
      //   <nav className="mt-5">
      //     <Link to="/admin" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Dashboard</Link>
      //     <Link to="/package-list" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Package List</Link>
      //     <Link to="/hotel-list" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Hotel List</Link>
      //     <Link to="/car-list" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Car List</Link>
      //     <Link to="/guide-list" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Guide List</Link>
      //     <Link to="/booked-packages" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Booke Packages</Link>
      //     <Link to="/booked-hotels" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Booked Hotels</Link>
      //     <Link to="/booked-cars" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Booked Cars</Link>
      //     <Link to="/booked-guides" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Booked Guides</Link>
      //     <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" onClick={() => logout()}><span> Logout  </span></Link>
        
      //   </nav>
      // </aside>
}

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold">Welcome to the Admin Dashboard</h2>
        {/* <div className="mt-5">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Total Booked Packages </h3>
              <p className="mt-4 text-8xl font-black ">{packages.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Total Booked Hotels</h3>
              <p className="mt-4 text-8xl font-black ">{packages.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Total Booked Cars</h3>
              <p className="mt-4 text-8xl font-black ">{packages.length}</p>
            </div>
          </div>
        </div> */}
         <div className="mt-5">
          {/* Add your main content here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Total Booked Packages</h3>
              <p className="mt-4 text-8xl font-black">{packages.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Total Booked Hotels</h3>
              <p className="mt-4 text-8xl font-black">{ hotels.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold"> Total Booked Vehicles</h3>
              <p className="mt-4 text-8xl font-black">{ cars.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Total Booked Guides</h3>
              <p className="mt-4 text-8xl font-black">{ guides.length}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}
