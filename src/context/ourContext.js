import { createContext, useEffect, useState } from "react";
// import image2 from "../images/liverpool.jpg";
import { db } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";

export const ourContext = createContext();

const colRef = collection(db, "articles");

export const OurProvider = ({ children }) => {
  const nameToUse = localStorage.getItem("username") || "";
  const [username, setusername] = useState(nameToUse);
  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  const [articles, setArticles] = useState([]);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      setArticles(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <ourContext.Provider
      value={{ username, setusername, articles, userId, setUserId }}
    >
      {children}
    </ourContext.Provider>
  );
};
