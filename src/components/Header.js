import React from "react";
import logo_r from "../assets/logo_r.png";
import "./Header.css";
import { ShoppingCart, Search } from "@material-ui/icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useStateValue } from "../stateprovider";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
function Header() {
  //pulling fromthe data layer
  const [{ cart ,user}, dispatch] = useStateValue();
  const history=useHistory();
  //handle auth
  const handleAuth=()=>{
    if(user){
      auth.signOut();
    }else{
      history.push('/login')
    }
  }
  
  var username= user?.email;

  return (
    <div className="header">
      <Link to="/">
        <img className="headerLogo" src={logo_r} />
      </Link>

      {/*search bar*/}
      <div className="headerSearch">
        <input className="headerSearchinput" type="text" />
        <Search className="headerSearchIcon" />
      </div>

      <div onClick={handleAuth} className="headerNav">
        <div  className="headerOption">
          <span className="hOLineone">{user? username:"Hello Guest"} </span>
          <span className="hOLinetwo">{user? "Sign Out":"Sign In"}</span>
        </div>

        <div className="headerOption">
          <span className="hOLineone">Returns</span>
          <span className="hOLinetwo">Orders</span>
        </div>
        <div className="headerOption">
          <span className="hOLineone">Your</span>
          <span className="hOLinetwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="headerOptionbasket">
            <ShoppingCart className="headerShoppingbasket" />
            <span className="headerBasketcount hOLineTwo">{cart?.length} </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
