import { Link } from "react-router-dom";
import ToggleBtn from "../assets/toggle.png";
import SearchBtn from "../assets/icons/search-icon.svg";
import CartBtn from "../assets/icons/cart-icon.svg";
import Avatar from "../assets/icons/avatar-icon.svg";
import CloseBtn from "../assets/icons/btn_x.png";
import { useState } from "react";

import RegisterForm from "../pages/RegisterForm";

function Header() {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [close, setClose] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    if (!menuDisplay) {
      setMenuDisplay(true);
    } else {
      setMenuDisplay(false);
    }
  }

  function handleClose() {
    if (!close) {
      setClose(true);
    } else {
      setClose(false);
    }
  }

  return (
    <>
      <header className="fixed w-full z-1">
        <div
          className={
            close
              ? "hidden"
              : "bg-black text-white text-center top-0 flex justify-center h-8"
          }
        >
          <span className="font-satoshi text-xs leading-8">
            Sign up and get 20% off to your first order.{" "}
            <button
              type="button"
              className="underline font-medium hover:cursor-pointer"
              onClick={() => {
                setIsOpen(true);
                console.log("open form");
              }}
            >
              Sign Up Now
            </button>
          </span>
          <button
            className="w-4 hidden md:block ml-4 md:hover:cursor-pointer"
            type="button"
            onClick={handleClose}
          >
            <img className="" src={CloseBtn} alt="close btn" />
          </button>
        </div>
        <nav
          className={
            "bg-white px-4 md:px-16 lg:px-24 py-3 flex flex-row justify-between items-center shadow-sm"
          }
        >
          <div className="flex flex-row">
            <button
              className="toggle-btn px-2 hover:cursor-pointer lg:hidden "
              type="button"
              onClick={handleToggle}
            >
              <img src={ToggleBtn} alt="menu" />
            </button>
            <div>
              <ul
                className={
                  menuDisplay
                    ? "block fixed left-5.5 top-22 bg-white px-3 shadow-md rounded"
                    : "hidden"
                }
              >
                <li className="my-2 hover:cursor-pointer hover:opacity-70 border-b">
                  Shop
                </li>
                <li className="my-2 hover:cursor-pointer hover:opacity-70 border-b">
                  On Sale
                </li>
                <li className="my-2 hover:cursor-pointer hover:opacity-70 border-b">
                  New Arivals
                </li>
                <li className="my-2 hover:cursor-pointer hover:opacity-70">
                  Brands
                </li>
              </ul>
            </div>
            <Link to="/">
              <span className="pl-2 font-integral font-bold text-2xl mr-4 leading-9.5">
                SHOP.CO
              </span>
            </Link>
            <div className="nav-items">
              <ul className="lg:flex hidden ">
                <li className="my-2 ml-5 hover:cursor-pointer hover:opacity-70">
                  Shop
                </li>
                <li className="my-2 ml-6 hover:cursor-pointer hover:opacity-70">
                  On Sale
                </li>
                <li className="my-2 ml-6 hover:cursor-pointer hover:opacity-70">
                  New Arivals
                </li>
                <li className="my-2 ml-6 mr-4 hover:cursor-pointer hover:opacity-70">
                  Brands
                </li>
              </ul>
            </div>
          </div>
          <div className="search-input bg-[#F0F0F0] rounded-2xl flex-1 md:flex hidden px-4 py-1">
            <img className="h-5 mr-2 relative top-0.5" src={SearchBtn} alt="" />
            <input
              className="w-full outline-0"
              type="search"
              placeholder="Search for products..."
            />
          </div>
          <div className="flex flex-row ml-4">
            <img
              className="w-6 h-6 mr-3 hover:cursor-pointer hover:opacity-70 md:hidden"
              src={SearchBtn}
              alt="search btn"
            />
            <img
              className="w-6 h-6 mr-3 hover:cursor-pointer hover:opacity-70"
              src={CartBtn}
              alt="cart"
            />
            <img
              className="w-6 h-6 hover:cursor-pointer hover:opacity-70"
              src={Avatar}
              alt="avatar"
            />
          </div>
        </nav>
      </header>

      <RegisterForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default Header;
