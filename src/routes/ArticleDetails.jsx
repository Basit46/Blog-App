import React from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import { ourContext } from "../context/ourContext";

const ArticleDetails = () => {
  const { articleId } = useParams();
  const { articles, username } = useContext(ourContext);
  return (
    <div className="px-5 py-2 h-5/6">
      {articles
        .filter((art) => art.id === parseFloat(articleId))
        .map((article) => (
          <div className="flex h-full" key={article.id}>
            <div className="h-full w-1/3 mr-3 mb-3 bg-red-600">
              <img
                className="object-cover h-full"
                src={article.image}
                alt="A Section"
              />
            </div>
            <div className="w-2/3 h-full overflow-scroll overflow-x-hidden">
              <h1 className="font-bold text-6xl mb-3">{article.title}</h1>
              <p className="font-bold text-xl mb-6">
                {username}
                <sup>R</sup>
              </p>
              <p className="break-words">{article.body}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ArticleDetails;