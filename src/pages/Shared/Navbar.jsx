import { Link } from "react-router-dom";
import logo from "../../assets/photos/slogo.jpeg";
import { useContext } from "react";
import { useAdmin } from "../../Hooks/useAdmin";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const handleLouout = () => {
    logOut().then(() => {});
  };

  const list = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/teachers"}>Teacher & stuffs</Link>
      </li>
      <li>
        <Link to={"/result"}>Result</Link>
      </li>
      <li>
        <Link to={"/admission"}>Admission</Link>
      </li>
      <li>
        <Link to={"/routine"}>Routine</Link>
      </li>
      <li>
        <Link to={"/calender"}>Calender</Link>
      </li>
      <li>
        <Link to={"/notice"}>Notice</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>
      {isAdmin && (
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
      )}
      {user?.uid ? (
        <>
          <li>
            <Link onClick={handleLouout}>Logout</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {list}
          </ul>
        </div>
        <Link to={"/"}>
          <img
            src={logo}
            alt=""
            className="w-16 rounded-full cursor-pointer ms-3"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{list}</ul>
      </div>
      <label
        tabIndex={0}
        className="btn btn-ghost lg:hidden"
        htmlFor="dashboard-drawer"
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
      </label>
      <div className="navbar-end sm:hidden md:block lg:block sm:justify-end"></div>
    </div>
  );
};

export default Navbar;
