
import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const[recommended, setRecommended]=useState<boolean>(true)
  const[highRated, setHighRated]=useState<boolean>(false)
  const[lowPrice, setLowPrice]=useState<boolean>(false)

const navigate=useNavigate()
  const handleClick=()=>{
    navigate(`/hotelsbooking`);
  }
  const handleClickRecommended=() => {
    setRecommended(true)
    setHighRated(false)
    setLowPrice(false)
  }
  const handleClickHighRated=() => {
    setRecommended(false)
    setHighRated(true)
    setLowPrice(false)
  }
  const handleClickLowPrice=() => {
    setRecommended(false)
    setHighRated(false)
    setLowPrice(true)
  }
  return (
    <div className="searchPage">
      <div className="searchPage__info">
   

        <button className={`border rounded-xl p-2   hover:text-white hover:bg-secondarycolor  ${recommended? 'bg-secondarycolor text-white' : 'bg-primarycolor'}`} onClick={handleClickRecommended} >Recommended</button>
        <button className={`border rounded-xl p-2   hover:text-white hover:bg-secondarycolor  ${highRated? 'bg-secondarycolor text-white' : 'bg-primarycolor'}`}  onClick={handleClickHighRated}>High rated</button>
        <button className={`border rounded-xl p-2   hover:text-white hover:bg-secondarycolor  ${lowPrice? 'bg-secondarycolor text-white' : 'bg-primarycolor'}`} onClick={handleClickLowPrice}>Low Price</button>

      </div>
   <div onClick={handleClick}>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room "
        title="Stay at this spacious House in Pirchinasi"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing machine"
        star={4.73}
        price="PKR9000 / night"
        total=""
      />
</div>

          <div onClick={handleClick}>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room "
        title="Stay at this spacious House in Pirchinasi"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing machine"
        star={4.73}
        price="PKR9000 / night"
        total=""
      />
</div>
          <div onClick={handleClick}>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room "
        title="Stay at this spacious House in Pirchinasi"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing machine"
        star={4.73}
        price="PKR9000 / night"
        total=""
      />
</div>
          <div onClick={handleClick}>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room "
        title="Stay at this spacious House in Pirchinasi"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing machine"
        star={4.73}
        price="PKR9000 / night"
        total=""
      />
</div>
          <div onClick={handleClick}>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room "
        title="Stay at this spacious House in Pirchinasi"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing machine"
        star={4.73}
        price="PKR9000 / night"
        total=""
      />
</div>
          <div onClick={handleClick}>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room "
        title="Stay at this spacious House in Pirchinasi"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing machine"
        star={4.73}
        price="PKR9000 / night"
        total=""
      />
</div>
          <div onClick={handleClick}>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room "
        title="Stay at this spacious House in Pirchinasi"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing machine"
        star={4.73}
        price="PKR9000 / night"
        total=""
      />
</div>
     
     
     
     
     
     
     
    </div>
  );
}

export default SearchPage;
