const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("werreew",resData);
  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    imgdata
  } = resData;
console.log("trreee",name,avgRating,cuisines,costForTwo,deliveryTime,imgdata);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={imgdata}
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
