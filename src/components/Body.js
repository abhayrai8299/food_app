import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import "../index.css";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Cardsdata from "./CardsData";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
 console.log("cards------------",Cardsdata);
 const onlineStatus=useOnlineStatus();
 console.log("cards------------",onlineStatus);
 if(onlineStatus===false)return <h1>Looks like you're offline!! Please check your internet</h1>

  const fetchData = async () => {
    setSearchList(Cardsdata);
    setListOfRestraunt(Cardsdata);
  };
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  const handleSearch = (event) => {
    const val = event.target.value;

    if (val) {
      const list = listOfRestaurants.filter((it) => {
        return it.data.name.toLowerCase().includes(val);
      });
      setListOfRestraunt(list);
    } else {
      console.log("trigger");
      setListOfRestraunt(searchList);
    }
  };
  
 
  console.log("dsv", listOfRestaurants);
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" onChange={handleSearch} />
          <button>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <Link
            key={Math.random()}
            to={"/restaurants/" + 1}
          >
            {" "}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
