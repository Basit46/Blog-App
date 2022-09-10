import React, { useContext } from "react";
import { ourContext } from "../context/ourContext";
import Article from "./Article";

const Articles = () => {
  const { articles } = useContext(ourContext);
  return (
    <div className="articles mt-3">
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
