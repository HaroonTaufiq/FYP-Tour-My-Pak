import React, { useState,useEffect,useRef } from 'react'

import { Link } from 'react-router-dom'
import packages from '../../../public/chitral.jpg' 
import hotels from '../../../public/hotel.jpeg' 
import cars from '../../../public/civic.jpg' 
import guides from '../../../public/travelguide.jpeg' 
import Admin from '../Admin'

import menu from '/public/menu.svg'
import DropdownMenu from "../../components/shared/DropdownMenu";

import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';


const Header = () => {
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

  //dropdown
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const [open,setOpen]=useState(false)
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
   let handler=(e:any)=>{
   if(menuRef.current && !menuRef.current.contains(e.target)){
     setOpen(false)
   }
   
   }
   document.addEventListener("mousedown",handler);
   return()=>{
    document.removeEventListener("mousedown",handler)
   }
  })



  //mobile screen
  const isMobile = useMediaQuery({ maxWidth: 767 });



  return (
    <>
     {
      localStorage.getItem("user") && JSON.parse(localStorage.getItem('user')).email=='admin@test.com' && JSON.parse(localStorage.getItem('user')).password=='admin1234' &&
      <div className=''>
      
           {/* <button
            className=" text-gray-600 focus:outline-none mb-0"
            onClick={toggleMenu}
          >
            <img src={menu} alt='menu image' />

            
          </button> */}
       

      
        {/* {isMenuOpen && (
          <nav className=" bg-white px-8 space-y-4 absolute  left-0  shadow-2xl rounded-xl justify-center z-10">
            

            {localStorage.getItem('user') ? <>
        

              <Link to='/' className='flex gap-1 hover:bg-secondarycolor hover:text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round hover:text-white bg-white h-[28px] ml-[-12px]"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>

                <span className='mt-1 font-bold ml-[-3px] '>  {"( " + user ? user.name : '' + " )"} </span>
              </Link>

             
              {JSON.parse(localStorage.getItem('user')).email == 'admin@test.com' && JSON.parse(localStorage.getItem('user')).password == 'admin1234' && <Link to='/add-package' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' >
                Add Package
              </Link>}

              <Link to='/package-list' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' >
                Tour Package
              </Link>

              <Link to='/guide-list' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold'>
                Travel Guide

              </Link>
              <Link to='/car-list' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold'>
                Cars

              </Link>

              <Link to='/hotel-list' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold'>
                Hotels

              </Link>

              <Link to='/booked-packages' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' >
                Booked Packages
              </Link>
              <Link to='/booked-hotels' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' >
                Booked Hotels
              </Link>
              <Link to='/booked-cars' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' >
                Booked Cars
              </Link>
              <Link to='/booked-guides' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' >
                Booked Guides
              </Link>
              


              <Link to="/" className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' onClick={() => logout()}>


                <span> Logout  </span></Link>

            </> : <>
             
              <Link to='/login' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' >

                <span className='mt-1 block mb-3'> Login</span>
              </Link>
              <Link to='/signup' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' >

                <span className='mt-1 block mb-3'> Signup</span>
              </Link>
            </>}







          </nav>
        )} */}





        {/* //new admoin----------------------- */}
{isMobile&& <button
            className=" text-gray-600 focus:outline-none mb-0"
            onClick={toggleMenu}
          >
            <img src={menu} alt='menu image' />

            
          </button>}
          {(isMobile&& isMenuOpen)}
      
      {/* Sidebar */}
      {
        (isMobile&& isMenuOpen)||
        <>
      <aside className="w-64 bg-gray-800 text-white h-[700px] ">
        <div>
        <div className="p-4">
          <h1 className="text-2xl font-semibold ">Admin Dashboard</h1>
        </div>
        <nav className="mt-5">
          <Link to="/admin" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Dashboard</Link>
          <Link to="/package-list" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Package List</Link>
          <Link to="/hotel-list" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Hotel List</Link>
          <Link to="/car-list" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Car List</Link>
          <Link to="/guide-list" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Guide List</Link>
          <Link to="/add-package" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Add Package</Link>
          <Link to="/add-hotel" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Add Hotel</Link>
          <Link to="/add-car" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Add Car</Link>
          <Link to="/add-guide" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Add Guide</Link>
          <Link to="/booked-packages" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Booked Packages</Link>
          <Link to="/booked-hotels" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Booked Hotels</Link>
          <Link to="/booked-cars" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Booked Cars</Link>
          <Link to="/booked-guides" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Booked Guides</Link>
          <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" onClick={() => logout()}><span> Logout  </span></Link>
        
        </nav>
        </div>
      </aside>
      
</>
}

    </div>










     }
   
{
  (!localStorage.getItem("user") ||
  (
    localStorage.getItem("user") &&
    JSON.parse(localStorage.getItem('user')).email !== 'admin@test.com' &&
    JSON.parse(localStorage.getItem('user')).password !== 'admin1234'
  )) && 
  <header className="sticky top-0 z-10 bg-white w-full">
      

      <div className="bg-white">
        <div className="flex justify-between mx-auto py-0  ml-2 mr-[32px]">
          <div className="mt-6 ml-[20px] ">
            <Link to={'/'} className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              <span className="font-bold text-xl">TourMyPak</span>
            </Link>
          </div>
          <div>

          </div>

          <nav className="hidden md:flex space-x-8 font-semibold my-6 ">
            <div className='flex mr-8 -mt-1'>
              {/* <img src={profileicon} alt='profileicon' className='h-[45px] w-[45px] rounded-full'/> */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6b3729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>
              <p className='mt-2 ml-1'>Talha</p> */}
            </div>
            {localStorage.getItem('user') ? <>
            
         
              {/* <Link to="/" className='mt-1'>
              About Us
            </Link>
              <Link to="/" className='mt-1'>
                Contact
              </Link> */}

<div>
  <div className='menu-container' onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} >

    <div className='menu-trigger' onClick={()=>{setOpen(!open)}} >
     <h1 >Bookings</h1>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>

    </div>
    {isDropdownVisible &&
    <div className={` dropdown-menu ${open? 'active':'inactive'} `} >
      {/* <h3>Booking <br /><span>Store</span></h3> */}
      <ul>
    <Link to="/booked-packages"><DropdownMenu  text={"BOOKED PACKAGES"}/></Link>  
    <Link to="/booked-hotels"><DropdownMenu  text={"BOOKED HOTELS"}/></Link> 
    <Link to="/booked-cars"><DropdownMenu text={"BOOKED VEHICLES"}/></Link>
    <Link to="/booked-guides"> <DropdownMenu  text={"BOOKED GUIDES"}/></Link> 
       
      </ul>

    </div>}

  </div>
</div>
        


              {JSON.parse(localStorage.getItem('user')).email == 'admin@test.com' && JSON.parse(localStorage.getItem('user')).password == 'admin1234' && <Link to='/add-package' className='mt-1' >
                Add Package
              </Link>}
              
              <Link to='/package-list' className='mt-1' >
                Tour Package
              </Link>

              <Link to='/guide-list' className='mt-1  '>
                Travel Guide

              </Link>


              
              <Link to='/car-list' className='mt-1 '>
                Car

              </Link>
              <Link to='/hotel-list' className='mt-1 '>
                Hotel

              </Link>
              <Link to='/' className='flex gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round h-[28px] mt-[3px]"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>

                <span className='mt-1 ml-[-8px]'>  {"( " + user ? user.name : '' + " )"}  </span>
              </Link>

              <Link to="/" className='mt-1 flex' onClick={() => logout()}>


                <span> Logout  </span></Link>

            </> : <>
              {/* <Link to='/' className='flex gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round h-[28px] mt-[3px]"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>
              </Link> */}

              <Link to='/login' className='mt-1 ' >

                <span className='mt-1 '> Login</span>
              </Link>
              <Link to='/signup' className='mt-1 ' >

                <span className='mt-1'> Signup</span>
              </Link>

            </>
            }






          </nav>

          {/* Side Menu Button for Small Screens */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <img src={menu} alt='menu image' />

            {/* <Menu className="h-6 w-6" /> */}
          </button>
        </div>

        {/* Side Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-4 px-8 space-y-4 absolute top-20 left-[100px] right-0 shadow-2xl rounded-xl justify-center">
            {/* <div className="block px-4 py-2  hover:bg-secondarycolor rounded-md hover:text-white text-gray-800"> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6b3729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>
              <p className='mt-2 ml-1'>Talha</p> */}
            {/* </div> */}

            {localStorage.getItem('user') ? <>
              {/* <Link to="/" className='mt-1'>
              About Us
            </Link>
              <Link to="/" className='mt-1'>
                Contact
              </Link> */}


              <Link to='/' className='flex gap-1 hover:bg-secondarycolor hover:text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round hover:text-white bg-white h-[28px] ml-[-12px]"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>

                <span className='mt-1 font-bold ml-[-3px] '>  {"( " + user ? user.name : '' + " )"} </span>
              </Link>

             
              {JSON.parse(localStorage.getItem('user')).email == 'admin@test.com' && JSON.parse(localStorage.getItem('user')).password == 'admin1234' && <Link to='/add-package' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' >
                Add Package
              </Link>}

              <Link to='/package-list' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' >
                Tour Package
              </Link>

              <Link to='/guide-list' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold'>
                Travel Guide

              </Link>
              <Link to='/car-list' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold'>
                Cars

              </Link>
              {/* //dropdown starts */}
{/* <div>

<label>

  What do we eat?

  <select>

    <option value="fruit">Fruit</option>

    <option value="vegetable">Vegetable</option>

    <option value="meat">Meat</option>

  </select>

</label>

</div> */}
{/* //dropdown ends */}
              <Link to='/hotel-list' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold'>
                Hotels

              </Link>

              <Link to='/booked-packages' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' >
                Booked Packages
              </Link>
              <Link to='/booked-hotels' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' >
                Booked Hotels
              </Link>
              <Link to='/booked-cars' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' >
                Booked Cars
              </Link>
              <Link to='/booked-guides' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' >
                Booked Guides
              </Link>
              


              <Link to="/" className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' onClick={() => logout()}>


                <span> Logout  </span></Link>

            </> : <>
              {/* <Link to='/' className='flex gap-1 hover:bg-secondarycolor '>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round h-[28px] mt-[3px]"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>
              </Link> */}
              <Link to='/login' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' >

                <span className='mt-1 block mb-3'> Login</span>
              </Link>
              <Link to='/signup' className='mt-1 block hover:bg-secondarycolor hover:text-white font-bold' >

                <span className='mt-1 block mb-3'> Signup</span>
              </Link>
            </>}







          </nav>
        )}
      </div>

    </header>
}
    </>
  )
}

export default Header