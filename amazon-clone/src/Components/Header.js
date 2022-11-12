import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import React from "react";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="h-16 flex items-center bg-slate-900  top-0 z-100">
      <Link to="/">
        <img
          className="w-24 object-contain my-0 mr-20 ml-0 mt-18"
          src="https://pngimg.com/uploads/amazon/amazon_PNG28.png"
          alt="logo"
        />
      </Link>
      <div className="flex flex-1 items-center rounded">
        <input type="text" className="h-3 p-5 border-none w-full" />
        <div className="h-full bg-amber-600">
          <SearchIcon className="header__searchIcon"></SearchIcon>
        </div>
      </div>

      <Link to="/login">
        <div className="flex justify-evenly">
          <div className="header_nav flex flex-col mx-2 text-white">
            <span className="text-sm">Hello Guest</span>
            <span className="font-bold">Sign</span>
          </div>
        </div>
      </Link>

      <div className="flex justify-evenly">
        <div className="header_nav flex flex-col mx-2 text-white">
          <span className="text-sm">Returns</span>
          <span className="font-bold">& Orders</span>
        </div>
      </div>

      <div className="flex justify-evenly">
        <div className="header_nav flex flex-col mx-2 text-white">
          <span className="text-sm">Your</span>
          <span className="font-bold">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="font-bold text-white flex items-center">
          <ShoppingBasketIcon />
          <span className="mx-2">{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
