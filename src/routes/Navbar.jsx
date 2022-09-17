import React from "react";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ourContext } from "../context/ourContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { username } = useContext(ourContext);
  const [show, setShow] = useState(true);

  const showMenu = () => {
    setShow(!show);
  };
  return (
    <nav className="h-12% flex justify-around items-center py-2 bg-black text-white cursor-pointer">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="font-bold text-2xl sm:text-4xl"
      >
        The Blog
      </h1>
      <div
        className={`links ${
          show && "showlinks"
        } flex items-center sm:space-x-4 space-x-2 text-xl sm:text-2xl`}
      >
        <NavLink onClick={showMenu} to="/articles">
          Articles
        </NavLink>
        <NavLink onClick={showMenu} to="/publish">
          Publish
        </NavLink>
        {username === "" && (
          <NavLink onClick={showMenu} to="/login">
            Login
          </NavLink>
        )}
        <NavLink onClick={showMenu} to="/profile">
          Profile
        </NavLink>
      </div>
      <div onClick={showMenu} className="hamburger z-10 sm:hidden space-y-2">
        <div
          style={{ height: "2px" }}
          className="bg-white text-white w-8"
        ></div>
        <div
          style={{ height: "2px" }}
          className="bg-white text-white w-8"
        ></div>
        <div
          style={{ height: "2px" }}
          className="bg-white text-white w-8"
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
