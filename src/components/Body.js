import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
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

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  console.log("cards------------", Cardsdata);
  const onlineStatus = useOnlineStatus();
  console.log("cards------------", onlineStatus);
  if (onlineStatus === false)
    return <h1>Looks like you're offline!! Please check your internet</h1>;

    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
  
    const json = await data.json();
    setSearchList( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestraunt( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
    <div className="mt-10 ">
      <div className="filter flex">
        <div className="search">
          <input
            type="text"
            className="border border-solid border-black mr-4"
            onChange={handleSearch}
          />
          <button className="px-4 py-2 bg-green-100 m4 rounded-lg">
            Search
          </button>
        </div>
        <div className="px-4 py-2 bg-gray-100 ml-4 rounded-lg">
          <button
            className="filter-btn "
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
      </div>
      <div className="flex flex-wrap">
        {listOfRestaurants.map((restaurant) => (
           <Link
           key={restaurant?.info.id}
           to={"/restaurants/" + restaurant?.info.id}
         >
            {restaurant.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
