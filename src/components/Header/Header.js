import React from "react";
import "../../App.css"
import Login from "../Authenticator/signIn"
import { useContext } from "react";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const {user}=useContext(UserContext);

  const cart=useSelector(store=>store.cart.items)
  return (
    <div className="Navbar">
      <a href="/">
        <img
          src="https://c8.alamy.com/comp/RKH90R/chef-cooky-food-logo-icon-vector-concept-flat-design-RKH90R.jpg"
          className="logo"
        ></img>
      </a>
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className="nav_right_container">
        <p style={{color:"green"}}>{user.email}</p>
        <Login/>
        card {cart.length}
      </div>
    </div>
  );
};

export default Header;
