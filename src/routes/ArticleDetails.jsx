import React from "react";
import { useContext, useState } from "react";
import { useParams } from "react-router";
import { ourContext } from "../context/ourContext";
import { db } from "../firebase";
import { onSnapshot, doc } from "firebase/firestore";
import { useEffect } from "react";
import image2 from "../images/liverpool.jpg";

const ArticleDetails = () => {
  const { articleId } = useParams();
  const { username } = useContext(ourContext);

  const [article, setArticle] = useState([]);

  const docRef = doc(db, "articles", articleId);
  useEffect(() => {
    onSnapshot(docRef, (thedoc) => {
      setArticle(thedoc.data());
      console.log(thedoc.data());
    });
  }, [docRef]);
  return (
    <div className="sm:px-5 px-3 py-2 h-88%">
      <div className="sm:flex h-full" key={article.id}>
        <div className="sm:h-full h-1/5 sm:w-1/3 sm:mr-3 mb-3">
          <img className="object-cover h-full" src={image2} alt="A Section" />
        </div>
        <div className="sm:w-2/3 sm:h-full overflow-scroll overflow-x-hidden">
          <p className="text-xl mb-2 underline">{username}</p>
          <h1 className="font-bold text-3xl sm:text-6xl mb-3">
            {article.title}
          </h1>

          <p className="break-words">{article.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
