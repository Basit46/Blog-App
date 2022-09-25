import React, { useContext } from "react";
import { ourContext } from "../context/ourContext";
import Article from "./Article";

const Articles = () => {
  const { articles } = useContext(ourContext);
  console.log(articles);
  return (
    <div className="articles pt-3 h-88%">
      {articles.length < 1 && (
        <h1 className="text-white text-4xl z-20 text-center">Loading...</h1>
      )}
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
