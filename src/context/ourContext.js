import { createContext, useEffect, useState } from "react";
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

  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      setArticles(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const returnedId = localStorage.getItem("userId") || "";
  const [userId, setUserId] = useState(returnedId);
  useEffect(() => {
    localStorage.setItem("userId", userId);
  }, [userId]);

  return (
    <ourContext.Provider
      value={{ username, setusername, articles, userId, setUserId }}
    >
      {children}
    </ourContext.Provider>
  );
};
