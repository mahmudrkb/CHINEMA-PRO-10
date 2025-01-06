import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMoon, IoSunny } from "react-icons/io5";

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);

  const links = (
    <>
      <li className="mr-2 font-bold ">
        <NavLink to={"/"}> Home</NavLink>
      </li>

      <li className="mr-2  font-bold">
        <NavLink to={"/allMovies"}>All Movies</NavLink>
      </li>
    {user&&   <li className="mr-2 font-bold">
        <NavLink to={"/addMovies"}>Add Movies</NavLink>
      </li>}
     {
      user&&  <li className="mr-2 font-bold">
      <NavLink to={"/favorite"}>My Favorite</NavLink>
    </li>
     }
      <li className="mr-2 font-bold">
        <NavLink to={"/pages"}>Pages </NavLink>
      </li>
    </>
  );

  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className=" fixed w-full top-0 z-10 bg-white bg-opacity-90  dark:bg-[#434342] dark:text-white ">
      <div className="container     mx-auto md:pr-5 md:pl-5 ">
        <div className="navbar  ">
          <div className="navbar-start  ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content bg-base-100 dark:bg-[#434342] dark:text-white  rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className=" font-bold  text-xl">CHINEMA PRO</a>
          </div>
          {/* <div>{user.displayName}</div> */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          {user && user.email ? (
            <div className="navbar-end  relative   space-x-3 flex gap-5">
              {" "}
              <div className="group  sm:mr-36 md:mr-6 xl:mr-20  ">
                <img
                  className="rounded-full w-10 h-10 "
                  src={user?.photoURL}
                  alt=""
                />
                <div className="absolute top-10 left-6 md:left-1/2  transform -translate-x-1/2 bg-gray-200 text-black text-sm rounded-md px-2  opacity-0 w-fit group-hover:opacity-100 transition-opacity">
                  {user.displayName}
                </div>
              </div>
              <button
                onClick={userLogOut}
                className="text-sm  font-bold hover:text-gray-300"
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <div className="navbar-end  flex ">
              <Link to={"/auth/signup"}>
                <FaRegCircleUser className="hover:text-gray-400 mr-3 w-6 h-6" />
              </Link>
              <Link
                className=" font-bold hover:text-gray-400 "
                to={"/auth/login"}
              >
                LOGIN
              </Link>
            </div>
          )}

          <div className="bg-yellow ml-3 md:ml-5 flex justify-end">
            <button className="text-3xl " onClick={() => darkModeHandler()}>
              {dark && <IoSunny />}
              {!dark && <IoMoon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
