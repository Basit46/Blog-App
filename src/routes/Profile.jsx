import React from "react";
import { useContext } from "react";
import { ourContext } from "../context/ourContext";
import { useNavigate } from "react-router";
import { ACTION } from "../context/ourContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Profile = () => {
  const { articles, dispatch, username, setusername } = useContext(ourContext);
  const navigate = useNavigate();

  var num = 0;
  function getNum() {
    articles.map((art) => {
      num += 1;
      return num;
    });
  }
  getNum();

  function logOut() {
    setusername("");
    navigate("/");
    signOut(auth).then(() => {
      alert("Signed Out Successfully");
    });
  }

  return (
    <div className="px-2 sm:px-9 pt-4">
      <div className="sm:flex block items-center ">
        <div className="bg-gray-400 flex justify-center items-center w-52 h-52 rounded-full">
          <p className="font-extrabold text-9xl">{username.slice(0, 1)}</p>
        </div>
        <div className="sm:ml-24">
          <h1 className="mb-2 text-4xl font-bold">{username}</h1>
          <p className="text-2xl font-semibold">Writer</p>
          <p className="text-red-600 text-xl mt-3">{num} Articles Published</p>
          <button
            onClick={logOut}
            className="bg-red-700 text-white p-1 font-semibold text-xl mt-2"
          >
            Logout
          </button>
        </div>
      </div>
      <h1 className="font-bold text-2xl mb-3 mt-5">List of Articles</h1>
      <div>
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex justify-between items-center mb-3 p-1 border-b-gray-600 border-b-2"
          >
            <h1>{article.title}</h1>
            <button
              onClick={() =>
                dispatch({ type: ACTION.DEL_ARTICLE, payload: { article } })
              }
              className="bg-red-700 text-white"
            >
              DELETE ARTICLE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
