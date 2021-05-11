import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import notification from "../../assets/images/notification.svg";
import user from "../../assets/images/user.svg";

const Header = () => {
  return (
    <div className="border-b sticky top-0 w-full z-10 bg-white px-4">
      <div className="flex items-center justify-between py-3 xl:py-4 max-w-7xl m-auto">
        <Link to="/">
          <a href="#">
            <img className="w-24" src={logo} alt="" />
          </a>
        </Link>

        <div>
          <ul className="xl:flex lg:flex md:flex sm:flex items-center space-x-6 hidden">
            <li>
              <Link to="/my-listings">
                <a className="text-base" href="#">
                  My Listings
                </a>
              </Link>
            </li>
            <li>
              <Link to="/notification">
                <a href="#">
                  <img className="w-8" src={notification} alt="" />
                </a>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <a href="#">
                  <img className="w-8" src={user} alt="" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <button className="xl:hidden lg:hidden md:hidden sm:hidden outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400 transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 text-gray-600 fill-current" viewBox="0 0 512 512">
            <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
