import { createContext, useEffect, useReducer, useState } from "react";
import image2 from "../images/liverpool.jpg";

export const ACTION = {
  ADD_ARTICLE: "add_article",
  DEL_ARTICLE: "del_article",
};

export const ourContext = createContext();

const reducer = (articles, action) => {
  switch (action.type) {
    case ACTION.ADD_ARTICLE:
      return [
        ...articles,
        {
          id: Date.now(),
          category: action.payload.categRef.current.value,
          image: action.payload.img,
          title: action.payload.titleRef.current.value,
          body: action.payload.bodyRef.current.value,
          date: new Date().toUTCString(),
        },
      ];
    case ACTION.DEL_ARTICLE:
      return articles.filter(
        (article) => article.id !== action.payload.article.id
      );
    default:
      return articles;
  }
};
const myDate = new Date().toUTCString();

export const OurProvider = ({ children }) => {
  const [username, setusername] = useState("");

  const returned = localStorage.getItem("articles");
  const articlesToUse = returned
    ? JSON.parse(returned)
    : [
        {
          id: 2,
          category: "Football",
          image: image2,
          title: "Liverpool boys running riot",
          body: "Create Your Own Article, YOu can delete this article or the ones you created on profile page",
          date: myDate,
        },
      ];
  const [articles, dispatch] = useReducer(reducer, articlesToUse);

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);
  return (
    <ourContext.Provider value={{ username, setusername, articles, dispatch }}>
      {children}
    </ourContext.Provider>
  );
};
