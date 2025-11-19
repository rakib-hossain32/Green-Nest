import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { motion } from "motion/react";
import { CircleUserRound } from "lucide-react";

const Header = () => {
  const { user, userSignOut } = use(AuthContext);

  // console.log(user);
  const { displayName, photoURL } = user || {};

  

  const handleSignOut = () => {
    userSignOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const links = (
    <>
      <NavLink
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={({ isActive }) =>
          isActive ? "underline text-[#2D5A3D]" : ""
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={({ isActive }) =>
          isActive ? "underline text-[#2D5A3D]" : ""
        }
        to={"/plants"}
      >
        Plants
      </NavLink>
    </>
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // console.log(isMobileMenuOpen)
  return (
    <header className="fixed top-0 left-0 right-0  backdrop-blur-sm border-b border-[rgba(45,90,61,0.12)]  z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={"/"} className=" flex items-center gap-3">
            <div className="w-8 h-8 bg-[#2D5A3D] rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </div>
            <span className="text-xl  font-semibold text-[#1A2E1A]">
              GreenNest
            </span>
          </Link>
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-3">
              <div className=" *:ml-5 *:hover:text-[#2D5A3D] *:font-medium">
                {links}
              </div>
              {user ? (
                <>
                  <NavLink
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={({ isActive }) =>
                      isActive
                        ? "underline text-[#2D5A3D]  font-medium ml-3 "
                        : " font-medium ml-3"
                    }
                    to={"/profile"}
                  >
                    My Profile
                  </NavLink>
                  <div className="dropdown dropdown-end hover:bg-[#2D5A3D]/20 transition-colors rounded-full p-1 cursor-pointer">
                    <div tabIndex={0} role="button" className=" m-1">
                      {photoURL ? (
                        <img
                          referrerPolicy="no-referrer"
                          src={photoURL}
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                      ) : (
                        <CircleUserRound size={28} />
                      )}
                    </div>
                    <ul
                      tabIndex="-1"
                      className="dropdown-content menu bg-base-100 rounded-box z-1 w-56 p-2 shadow-sm space-y-3"
                    >
                      <li>
                        <h2 className=" font-semibold text-[#2D5A3D] ">
                          {displayName}
                        </h2>
                      </li>
                      <li>
                        <button
                          onClick={handleSignOut}
                          className="btn bg-[#2D5A3D] text-white  rounded-md px-3 w-56 "
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <NavLink
                    to={"/login"}
                    className={({ isActive }) =>
                      isActive
                        ? "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors  disabled:opacity-50 bg-[#2D5A3D] text-white  h-9 rounded-md px-3 underline"
                        : "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors  disabled:opacity-50 hover:bg-[#2D5A3D] hover:text-white  h-9 rounded-md px-3"
                    }
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to={"/signup"}
                    className={({ isActive }) =>
                      isActive
                        ? "inline-flex  text-white items-center justify-center whitespace-nowrap text-sm font-medium  transition-colors disabled:opacity-50 bg-[#2D5A3D]  h-9 rounded-md px-3 underline"
                        : "inline-flex  text-white items-center justify-center whitespace-nowrap text-sm font-medium  transition-colors disabled:opacity-50 bg-[#2D5A3D] hover:bg-[#2D5A3D]/90 h-9 rounded-md px-3"
                    }
                  >
                    Sign Up
                  </NavLink>
                </>
              )}
            </div>
          </div>
          <div className="lg:hidden">
            <div className=" flex items-center ">
              {user && (
                <div className="dropdown dropdown-end hover:bg-[#2D5A3D]/20 transition-colors rounded-full p-1 cursor-pointer">
                  <div tabIndex={0} role="button" className=" m-1">
                    {photoURL ? (
                      <img
                        referrerPolicy="no-referrer"
                        src={photoURL}
                        alt=""
                        className="w-7 h-7 rounded-full"
                      />
                    ) : (
                      <CircleUserRound size={28} />
                    )}
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-56 p-2 shadow-sm space-y-3"
                  >
                    <li>
                      <h2 className=" font-semibold text-[#2D5A3D] ">
                        {displayName}
                      </h2>
                    </li>
                    <li>
                      <button
                        onClick={handleSignOut}
                        className="btn bg-[#2D5A3D] text-white  rounded-md  w-full "
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg   focus:outline-none focus:ring-2 "
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0   bg-white right-0 border-t border-[rgba(45,90,61,0.12)]  z-40 "
              >
                <div className="mt-3 *:rounded-md   px-4 *:px-4 *:py-2   *:hover:bg-[#2D5A3D] *:hover:text-white *:font-medium *:flex *:mb-2">
                  {links}
                </div>

                {user ? (
                  <div className="mt-3 *:rounded-md   px-4 *:px-4 *:py-2   *:hover:bg-[#2D5A3D] *:hover:text-white *:font-medium *:flex *:mb-2">
                    <NavLink
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className={({ isActive }) =>
                        isActive
                          ? "underline text-[#2D5A3D]  font-medium  px-4    hover:bg-[#2D5A3D] rounded-md hover:text-white  flex mb-2 "
                          : " font-medium  px-4    hover:bg-[#2D5A3D] hover:text-white  flex mb-2 rounded-md"
                      }
                      to={"/profile"}
                    >
                      My Profile
                    </NavLink>
                  </div>
                ) : (
                  <div className="px-4 pb-4 space-y-3">
                    <NavLink
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      to={"/login"}
                      className={({ isActive }) =>
                        isActive
                          ? "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors  bg-accent  h-10 px-4 py-2 justify-start w-full underline text-white"
                          : "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors  hover:bg-accent  h-10 px-4 py-2 justify-start w-full hover:text-white"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                        <polyline points="10 17 15 12 10 7"></polyline>
                        <line x1="15" x2="3" y1="12" y2="12"></line>
                      </svg>
                      Login
                    </NavLink>
                    <NavLink
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      to={"/signup"}
                      className={({ isActive }) =>
                        isActive
                          ? "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors   disabled:opacity-50 bg-primary  h-10 px-4 py-2 justify-start w-full underline text-white"
                          : "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors   disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 justify-start w-full text-white"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <line x1="19" x2="19" y1="8" y2="14"></line>
                        <line x1="22" x2="16" y1="11" y2="11"></line>
                      </svg>
                      Sign Up
                    </NavLink>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
