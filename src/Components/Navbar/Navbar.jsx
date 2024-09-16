import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContex } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const {user, logOut } = useContext(AuthContex);
    const handelSignOut = () =>{
        logOut()
        .then()
        .catch()
    }
  const activeNavlinks = (
    <div className="flex gap-10">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-green-500 font-bold" : "font-bold"
        }
      >
        HOME
      </NavLink>
      <NavLink
        to="/updateprofile"
        className={({ isActive }) =>
          isActive ? "text-green-500 font-bold" : "font-bold"
        }
      >
        UPDATE PROFILE
      </NavLink>
      <NavLink
        to="/userprofile"
        className={({ isActive }) =>
          isActive ? "text-green-500 font-bold" : "font-bold"
        }
      >
        USER PROFILE
      </NavLink>
    </div>
  );
  return (
    <div className="navbar bg-base-100 px-10">
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
            {activeNavlinks}
          </ul>
        </div>
        <div className="w-36">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{activeNavlinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handelSignOut}>Log Out</button>
        ) : (
          <Link to="/login">
            <button>Log In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
