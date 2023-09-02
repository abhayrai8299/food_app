import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo:{
          name:"Dummy",
          location:"Lucknow",
          avatar_url:"",


        }
    };
    console.log(props);
  }

  async componentDidMount() {
       const data=await fetch("https://api.github.com/users/abhayrai8299");
       const json=await data.json();
       this.setState(
        {
          userInfo:json,
        }
       )
       console.log("jssssssssssss",json);
  }

  render() {
     

const {name,location,avatar_url}=this.state.userInfo;
    return (
      <div className="user-card"> 
      <img src={avatar_url} alt={"avatar"} />
        <h2>Name: {name}</h2>
        <h3>Location:{location?location:"Lucknow"}</h3>
        <h3>Contact: @abhay</h3>
      </div>
    );
  }
}
export default UserClass;
