import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  // True -> White, False -> Dark And Yeah I Like False
  const isDarkMode = useSelector((state) => state.mode.dark);
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <nav
      className={`nav ${isDarkMode ? "dark-1" : "white-1"} ${
        toggleNav ? "show" : ""
      }`}
    >
      <div className="container">
        <Link to={"/"}>
          <img src="/public/logo.png" alt="logo" className="white-1" />
        </Link>
        <button
          className="nav-toggle radius-1"
          onClick={() => setToggleNav((act) => !act)}
        >
          <img src="/public/burger-menu-svgrepo-com.svg" alt="icon" />
        </button>
        <ul className="links">
          <li>
            <NavLink to={"/price"} className={"link"}>
              Price
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className={"link"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"} className={"link"}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
