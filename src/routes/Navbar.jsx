import React from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ourContext } from "../context/ourContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { username } = useContext(ourContext);
  return (
    <nav className="h-1/6 flex justify-around items-center py-2 bg-black text-white cursor-pointer">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="font-bold text-2xl sm:text-4xl"
      >
        The Blog
      </h1>
      <div className="flex items-center sm:space-x-4 space-x-2 text-xl sm:text-2xl ">
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/publish">Publish</NavLink>
        {username === "" && <NavLink to="/login">Login</NavLink>}
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
