import React, { useContext, useRef, useState } from "react";
import { ourContext } from "../context/ourContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const Login = () => {
  const [signUpError, setSignUpError] = useState(false);
  const [LoginError, setLoginError] = useState(false);
  const [inputedName, setInputedName] = useState("");

  const emailSignUpRef = useRef();
  const passwordSignUpRef = useRef();
  const emailLogInRef = useRef();
  const passwordLogInRef = useRef();

  const { setusername, setUserId } = useContext(ourContext);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (
      inputedName !== "" ||
      emailSignUpRef.current.value !== "" ||
      passwordSignUpRef.current.value !== ""
    ) {
      const email = emailSignUpRef.current.value;
      const password = passwordSignUpRef.current.value;
      createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          console.log(cred.user);

          setusername(inputedName);
          console.log(inputedName);
          setSignUpError(false);
          navigate("/articles");
        })
        .catch((err) => {
          console.log(err.message);
          setSignUpError(true);
        });
    } else {
      alert("Enter appropriate value amigo");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      inputedName !== "" ||
      emailLogInRef.current.value !== "" ||
      passwordLogInRef.current.value !== ""
    ) {
      const email = emailLogInRef.current.value;
      const password = passwordLogInRef.current.value;
      signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          console.log(cred.user);
          setusername(inputedName);
          setLoginError(false);
          navigate("/articles");
        })
        .catch((err) => {
          console.log(err);
          setInputedName("");
          setLoginError(true);
        });
    } else {
      alert("Enter appropriate login values");
    }
  };

  onAuthStateChanged(auth, (user) => {
    const uidValue = user ? user.uid : user;
    setUserId(uidValue);
  });

  return (
    <div className="flex justify-center pt-14">
      <div className="w-80 h-fit">
        <form
          onSubmit={handleSignUp}
          className="h-full w-full flex flex-col items-center p-4"
        >
          <input
            onChange={(e) => setInputedName(e.target.value)}
            className="w-full p-1 border-black border-2 mb-4"
            type="text"
            placeholder="Enter Name"
          />
          <input
            ref={emailSignUpRef}
            className="w-full p-1 border-black border-2 mb-4"
            type="email"
            placeholder="Enter Email"
          />
          <input
            ref={passwordSignUpRef}
            className="w-full p-1 border-black border-2 mb-4"
            type="password"
            placeholder="Enter Password"
          />
          <button className="border-black border-2 font-semibold p-1">
            SIGNUP
          </button>
        </form>

        <h1 className="text-2xl text-center font-extrabold">OR</h1>

        <form className="h-full w-full flex flex-col items-center p-4">
          <input
            onChange={(e) => setInputedName(e.target.value)}
            className="w-full p-1 border-black border-2 mb-4"
            type="text"
            placeholder="Enter Name"
          />
          <input
            ref={emailLogInRef}
            className="w-full p-1 border-black border-2 mb-4"
            type="email"
            placeholder="Enter Email"
          />
          <input
            ref={passwordLogInRef}
            className="w-full p-1 border-black border-2 mb-4"
            type="password"
            placeholder="Enter Password"
          />
          <button
            onClick={handleLogin}
            className="border-black border-2 font-semibold p-1"
          >
            LOGIN
          </button>
        </form>

        {LoginError && (
          <h1 className="text-red-600 lowercase text-center">
            WRONG EMAIL OR PASSWORD
          </h1>
        )}
        {signUpError && (
          <h1 className="text-red-600 lowercase text-center">
            Enter at least 6 characters for password
          </h1>
        )}
      </div>
    </div>
  );
};

export default Login;
