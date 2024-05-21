
import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";
import skardu from '/skardu.jpg'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

function TourPackageListing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('tripType'))
  const [recommended, setRecommended] = useState<boolean>(true)
  const [highRated, setHighRated] = useState<boolean>(false)
  const [lowPrice, setLowPrice] = useState<boolean>(false)
  const [state, setState] = useState([])
  const navigate = useNavigate()
 

  const handleClick = () => {
    navigate(`/tourpackagebooking`)
  }
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

useEffect(()=>{
  console.log("depart",searchParams.get('departureCity').split(' ')[0].toLowerCase())
  console.log("arriv",searchParams.get('arrivalCity').split(' ')[0].toLowerCase())
  search(searchParams.get('arrivalCity').split(' ')[0].toLowerCase())
},[])
  function search(key) {
 
      fetch('http://localhost:4000/search/' + key).then((resp) => resp.json().then((result) => {
        console.log(result)
        setState(result)
      }))
    

  }
  return (
    <div className="searchPage">
      <div className="searchPage__info">


      
      <button className={`border rounded-xl p-2   hover:text-white hover:bg-secondarycolor  ${recommended? 'bg-secondarycolor text-white' : 'bg-primarycolor'}`} onClick={handleClickRecommended} >Recommended</button>
        <button className={`border rounded-xl p-2   hover:text-white hover:bg-secondarycolor  ${highRated? 'bg-secondarycolor text-white' : 'bg-primarycolor'}`}  onClick={handleClickHighRated}>High rated</button>
        <button className={`border rounded-xl p-2   hover:text-white hover:bg-secondarycolor  ${lowPrice? 'bg-secondarycolor text-white' : 'bg-primarycolor'}`} onClick={handleClickLowPrice}>Low Price</button>
      </div>


      {
        state.length > 0 ? state.map((item, i) =>

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

            <div className="">
           
          
            </div>
          </div>

        ) : <div className="h1 ml-[35px]">No Packages found</div>
      }



    
    </div>
  );
}

export default TourPackageListing;
