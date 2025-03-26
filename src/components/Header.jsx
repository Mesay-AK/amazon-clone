import "./Header.css";
import { BiSearch } from "react-icons/bi";
import { useStateValue } from "./StateProvider";
import {Link} from 'react-router-dom';
import { MdShoppingBasket } from "react-icons/md";

function Header() { 
const [{ basket, user }] = useStateValue(); 
    
  return (

    <div className="header">
      
      <Link to="/">
        <img
            alt="header-logo"
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              />
    </Link>
      
    <div className="header__search">
        <input className="header__searchInput" type="text" />
        <BiSearch className="header__searchIcon" />
    </div>

    
    <div className="header__nav">
            <Link to={!user ? "/Login" : "#"} className="header__clearlink">
              <div className="header__option">
                <span className="header__optionOne">Hello {user ? user.email : "Guest"}</span>
                <span className="header__optionTwo">{user ? "Sign Out" : "Sign In"}</span>
              </div>
            </Link>
    
            <Link to="/Orders" className="header__clearlink">
              <div className="header__option">
                <span className="header__optionOne">Returns</span>
                <span className="header__optionTwo">& Orders</span>
              </div>
            </Link>
    
            <div className="header__option">
              <span className="header__optionOne">Your</span>
              <span className="header__optionTwo">Prime</span>
            </div>
    
            <Link to="/checkout" className="header__clearlink">
            <div className="header__optionBasket">
                <MdShoppingBasket />
                <span className="header__optionTwo header__basketCount">{basket?.length || 0}</span>
            </div>
            </Link>
          </div>

    

    </div>
  );
}

export default Header;