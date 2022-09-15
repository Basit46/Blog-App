import { createContext, useEffect, useState } from "react";
// import image2 from "../images/liverpool.jpg";
import { db } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";

// id: Date.now(),
//           category: action.payload.categRef.current.value,
//           image: action.payload.img,
//           title: action.payload.titleRef.current.value,
//           body: action.payload.bodyRef.current.value,
//           date: new Date().toUTCString(),

export const ourContext = createContext();

const colRef = collection(db, "articles");

export const OurProvider = ({ children }) => {
  const nameToUse = localStorage.getItem("username") || "";
  const [username, setusername] = useState(nameToUse);
  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      setArticles(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  console.log(articles);

  return (
    <ourContext.Provider value={{ username, setusername, articles }}>
      {children}
    </ourContext.Provider>
  );
};
