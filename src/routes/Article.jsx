import React, { useContext } from "react";
import { ourContext } from "../context/ourContext";
import { useNavigate } from "react-router";

const Article = ({ article }) => {
  const { username } = useContext(ourContext);
  const navigate = useNavigate();
  function readArticle() {
    navigate(`/articles/${article.id}`);
  }

  return (
    <div className="article relative h-60 flex border-2 bordr-black overflow-hidden">
      <div className="h-full w-2/5">
        <img
          className="object-cover h-full"
          src={article.image}
          alt="article img"
        />
      </div>
      <div className="w-3/5 ml-1">
        <p className="mb-2">{username}</p>
        <p className="text-red-700 font-semibold">{article.category}</p>
        <h1 className="font-semibold text-xl mb-1">{article.title}</h1>
        <button
          onClick={readArticle}
          className="absolute bottom-8 bg-black text-white p-1 rounded-lg
        "
        >
          Read Article
        </button>
        <p className="absolute bottom-1">{article.date}</p>
      </div>
    </div>
  );
};

export default Article;
