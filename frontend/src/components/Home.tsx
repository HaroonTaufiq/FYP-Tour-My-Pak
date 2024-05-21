

import React, { useState, useEffect } from "react";
import TravelForm from "./TravelForm";
import FallIntoTravel from "./FallIntoTravel";
import FallIntoTravel2 from "./FallIntoTravel2";
import FallIntoTravel3 from "./FallIntoTravel3";
// import MyFooter from "./MyFooter";
import mainimage from '../../public/mountain.jpg'
import AboutUs from "./AboutUs";
import Services from "./Services";
import { Link, useNavigate } from 'react-router-dom';
import Journey from "./journey";

function Home() {
  // @ts-ignore
  // @ts-ignore: Argument of type 'string | null' is not assignable to parameter of type 'string'.


  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem("user") && JSON.parse(localStorage.getItem('user')).email=='admin@test.com' && JSON.parse(localStorage.getItem('user')).password=='admin1234' && navigate('/admin')
  }, [])
  useEffect(() => {
    localStorage.getItem("user") && JSON.parse(localStorage.getItem('user')).email!=='admin@test.com' && JSON.parse(localStorage.getItem('user')).password!=='admin1234' && navigate('/')
  }, [])

  const [recommendation,setRecommendation]=useState([])

  useEffect(() => {
    window.scrollTo(0, 0)

    
    let id = '';
try {
  const user = JSON.parse(localStorage.getItem('user'));
   id = user._id;
    console.log("id of user", id);
    console.log("type of userid", id.constructor);
} catch (error) {
    console.error("Error parsing user data from localStorage:", error);
}


    //  const id='34343' // for testing because with above id variable frontend dont render
    if(id!=''){

  fetch(`http://localhost:4000/ml/${id}`).then((resp) => resp.json().then((result) => {
    console.log("ml get id result",result)
if(result.length > 0){
    const resultString=result[0]
     console.log("resultstring",resultString) //resultstring ['District', 'Jhang', 'Pushkalavati', 'Ishkoman Valley']
  
    let parsedResult = resultString?.substring(1, resultString.length - 1).split(',')
     .map(item => item.replace(/'/g, ''));
     console.log("parsedResult",parsedResult )
     // shuffle array 
     for (let i = parsedResult.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [parsedResult[i], parsedResult[j]] = [parsedResult[j], parsedResult[i]];
    }
    const capitalizedResult = parsedResult.map((phrase) =>
      phrase 
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    );
    setRecommendation(capitalizedResult)


}
  }))
   
    }
  }, [])

  console.log("recommendation",recommendation)

  return (
   
 
    <div className="">
      {/* <Header/> */}
     <div className="">
        <div className=" ">
                 <p className='absolute top-[150px] font-bold  md:mx-[400px] text-xl md:text-4xl text-white   '>Trips, Hotels, Rentals & more.<br></br>
 Your Trip Starts Here</p>
         <img src={mainimage} alt="Heroposter" className=" w-full h-[600px] object-cover"/>
         </div>
     
      <div className=" absolute top-[250px]  left-1 right-1">
        <TravelForm />
      </div>
 
      </div>
     <div className="mx-2 md:ml-[70px]">
     <FallIntoTravel
      heading={"Recommended Cities to Explore"}
      title={"Unlock Your Wanderlust"}
      details={"chekout"}
      description1={recommendation[0]}
      description2={recommendation[1]}
      description3={recommendation[2]}
      description4={recommendation[3]}
      i1={'/public/travelposter.png'}
      i2={'/public/travelposter.png'}
      i3={'/public/travelposter.png'}
      i4={'/public/travelposter.png'}
      type={"package"}
      />
    
      <Journey/>
      <FallIntoTravel2
      heading={"Top Rated Hotels"}
      title={"Luxury Residences"}
      details={"Book Hotel"}
      description1={"serena hotel gilgit"}
      description2={"hunza serena inn"}
      description3={"shangrila resort skardu"}
      description4={"pearl continental bhurban"}
      i1={'/public/hotelposter.png'}
      i2={'/public/hotelposter.png'}
      i3={'/public/hotelposter.png'}
      i4={'/public/hotelposter.png'}
      type={"chekout"}
      />
      <Services/>
    
      
      <FallIntoTravel3
      heading={"Top Rated Car Rentals"}
      title={"Drive with Excellence"}
      details={"chekout"}
      description1={"toyota corolla"}
      description2={"honda civic"}
      description3={"ford mustang"}
      description4={"bmw 5 series"}
      i1={'../../public/carposter.png'}
      i2={'../../public/carposter.png'}
      i3={'../../public/carposter.png'}
      i4={'../../public/carposter.png'}
      type={"car"}
      />
    </div>

 
      
    </div>
   
   
  );
}

export default Home;