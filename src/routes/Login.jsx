import React, { useContext, useRef } from "react";
import { ourContext } from "../context/ourContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setusername } = useContext(ourContext);
  const nameRef = useRef();

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (nameRef.current.value === "") {
      alert("Enter Your name!");
    }
    setusername(nameRef.current.value);
    nameRef.current.value = "";
    navigate("/articles");
  };

  return (
    <div className="flex justify-center pt-14">
      <form
        className="border-black border-2 rounded-lg w-fit p-5 h-52"
        action="onClick"
      >
        <label className="block text-center text-2xl font-semibold" htmlFor="">
          Enter Your Name
        </label>
        <input
          ref={nameRef}
          className="border-black border-2 block mt-1 mb-10 p-1 "
          type="text"
          id="usernmae"
        />
        <button
          onClick={handleClick}
          className="bg-black text-white p-2 active:bg-red-700"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
