import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);

  const links = (
    <>
      <li className="mr-2">
        <NavLink to={"/"}> Home</NavLink>
      </li>

      <li className="mr-2">
        <NavLink to={"/allMovies"}>All Movies</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to={"/addMovies"}>Add Movies</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to={"/favorite"}>My Favorite</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to={"/pages"}>Pages </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 container mx-auto p-5 my3 p">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="  text-xl">CHINEMA PRO</a>
        </div>
        {/* <div>{user.displayName}</div> */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {user && user.email ? (
          <div className="navbar-end   space-x-3 relative flex gap-5">
            {" "}
          <div className="group  ">
          <img
            
              className="rounded-full w-10 h-10 "
              src={user?.photoURL}
              alt="Medium avatar"
            />
             <div className="absolute top-12 left-6 md:left-1/2  transform -translate-x-1/2 bg-gray-200 text-black text-sm rounded-md px-2  opacity-0 w-fit group-hover:opacity-100 transition-opacity">
                  {user.displayName}
                </div>

          </div>
            <button
              onClick={userLogOut}
              className="text-sm hover:text-gray-300"
            >
              LOGOUT
            </button>
          </div>
        ) : (
          <div className="navbar-end  space-x-3 flex gap-5">
            <Link to={"/auth/signup"}>
              <FaRegCircleUser className="hover:text-gray-400 w-10 h-10" />
            </Link>
            <Link className=" hover:text-gray-400 pl-2" to={"/auth/login"}>
              LOGIN
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
