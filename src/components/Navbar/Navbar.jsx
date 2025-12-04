import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import Button from "daisyui/components/button";
import { toast, ToastContainer } from "react-toastify";
import Logo from "../logo/Logo";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        toast("You loged out successfully");
      })
      .catch((error) => {
        // An error happened.
        toast(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-pink-600">
    <div className="navbar w-11/12 lg:w-10/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-pink-600 text-white font-bold"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <Logo></Logo>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-bold">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div
            className="relative w-10 h-10 mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-visible cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={user?.photoURL || ""}
              alt="User"
              className="object-cover w-full h-full rounded-full"
            />
            {isHovered && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap shadow-lg z-20">
                {user.displayName || "User"}
              </div>
            )}
          </div>
        ) : (
          ""
        )}

        {/* Login and Logout button control */}
        {user ? 
          (<button onClick={handleLogOut}className="btn text-pink-300">LogOut</button>): 
          (<Link to="/auth/login" className="btn text-pink-600">Login</Link>)
        }

        <ToastContainer/>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
