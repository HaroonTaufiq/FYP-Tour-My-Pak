
import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";
import skardu from '/skardu.jpg'
import UpdateDelete from "./UpdateDelete";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import TravelGuideBooking from "./TravelGuideBooking";

function SearchPage() 
{
  const [cssclass,setCssClass]=useState('')
  const [cssclassone,setCssClassOne]=useState('')
  useEffect(() => {
    if(JSON.parse(localStorage.getItem('user')).email=='admin@test.com' ){
      setCssClass('md:ml-[251px] md:-mt-[620px] md:overflow-y-scroll md:max-h-screen')
    
      setCssClassOne('md:fixed md:z-10 md:!mt-[-85px] md:!w-[1040px]')
   
      
    }
    window.scrollTo(0, 0)
  }, [])
  const navigate = useNavigate()
  const [recommended, setRecommended] = useState<boolean>(true)
  const [highRated, setHighRated] = useState<boolean>(false)
  const [lowPrice, setLowPrice] = useState<boolean>(false)


  const handleClickRecommended = () => {
    setRecommended(true)
    setHighRated(false)
    setLowPrice(false)
  }
  const handleClickHighRated = () => {
    setRecommended(false)
    setHighRated(true)
    setLowPrice(false)
  }
  const handleClickLowPrice = () => {
    setRecommended(false)
    setHighRated(false)
    setLowPrice(true)
  }

  ////////////////////////////////////////////////////////////////////////////

  const [state, setState] = useState([])
  const [items, setItems] = useState()
  useEffect(() => {
    getProducts()
  }, [])
  async function getProducts() {
    await fetch("http://localhost:4000/booked-packages", {
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
       
        // Initialize a flag
// let matchFound = false;

// // Loop through usersId array
// for (let i = 0; i < usersId.length; i++) {
//     // Check if the current entry of usersId exists in localID
//     if (localID.includes(usersId[i])) {
//         matchFound = true;
        // If a match is found, update the state only once for the last matching entry
       
            setState(result);
        
        // Break the loop if you only want to update the state once
        // Remove this line if you want to update the state for every matching entry
        // break;
    // }
// }

      
       
      })
    })
  }
  function search(key) {
    if (key) {
      fetch('http://localhost:4000/searchBookedPackages/' + key).then((resp) => resp.json().then((result) => {
        console.log(result)
        setState(result)
      }))
    }
    else {
      getProducts()
    }

  }

  function deleteProducts(id) {
  
      JSON.parse(localStorage.getItem('user')).email!=='admin@test.com' && JSON.parse(localStorage.getItem('user')).password!=='admin1234' && navigate('/')
    
    fetch("http://localhost:4000/package-list/" + id, {
      method: 'delete'

    }).then(async (resp) => {
      resp.json().then((result) => {
        // console.log(result.map((i)=>i.name))
        console.log(result)
        if (result) {

          getProducts()
        }
        else {
          alert("no products available")
        }

      })
    })
  }
const render=()=>{
  if (state.map((i)=>i.uid==[JSON.parse(localStorage.getItem("user")).email])){
    console.log("hellotruthww")
  }

}


  return (
    <div className={`SearchPage ${cssclass} `}>
      <div className="searchPage__info">
        <input type="text" placeholder='Search Packages' className={`search-product-box marginLeft-9   ${cssclassone}`}  onChange={(event) => { search(event.target.value.toLowerCase()) }} />

        
        {/* <button className={`border rounded-xl p-2   hover:text-white hover:bg-secondarycolor  ${recommended? 'bg-secondarycolor text-white' : 'bg-primarycolor'}`} onClick={handleClickRecommended} >Recommended</button>
        <button className={`border rounded-xl p-2   hover:text-white hover:bg-secondarycolor  ${highRated? 'bg-secondarycolor text-white' : 'bg-primarycolor'}`}  onClick={handleClickHighRated}>High rated</button>
        <button className={`border rounded-xl p-2   hover:text-white hover:bg-secondarycolor  ${lowPrice? 'bg-secondarycolor text-white' : 'bg-primarycolor'}`} onClick={handleClickLowPrice}>Low Price</button> */}
      </div>
      {/* {console.log("STAER",state.map((i)=>i.uid==[JSON.parse(localStorage.getItem("user")).email]))}
      {
        state.length 
         > 0 && state.map((i)=>i.uid==[JSON.parse(localStorage.getItem("user")).email])  ? state.map((item, i) =>

          <div className="flex" >
            <Link to={'/tourpackagebooking/' + item._id}>
              <SearchResult
                img={item.img}
                location={item.name}
                title={item.price}
                description={item.perk}
                star={4.73}
                price={"PKR " + item.cost + " per person"}
                total=""

              />
            </Link>

         
          </div>

        ) : <div className="h1 ml-[35px]">No Packages found</div>
      } */}
     <div>
            {/* Mapping over the state array */}
            {state.map((item, index) => {
                // Checking the condition
                if (item.uid === JSON.parse(localStorage.getItem("user")).email) {
                    // Render what you need if the condition is met
                    return (
                        <div key={index}>
                          
                           
                         

                            <div className="flex" >
                        
                                <SearchResult
                                  img={item.img}
                                  location={item.name}
                                  title={item.price}
                                  description={item.perk}
                                  star={4.73}
                                  price={"PKR " + item.cost + " per person"}
                                  total=""
                  
                                />
                              
                  
                              
                            </div>
                  
                          
                        </div>
                    );
                } else if(JSON.parse(localStorage.getItem('user')).email=='admin@test.com' ){
                  // Render what you need if the condition is met
                  return (
                    <div key={index}>
                      
                       
                     

                        <div className="flex" >
                     
                            <SearchResult
                              img={item.img}
                              location={item.name}
                              title={item.price}
                              description={item.perk}
                              star={4.73}
                              price={"PKR " + item.cost + " per person"}
                              total=""
              
                            />
                       
              
                          
                        </div>
              
                      
                    </div>
                );

              }else {
                 
                
                    // Render null if the condition is not met
                    return null;
                }
            })}
        </div>
      
    </div>
  );
}

export default SearchPage;
