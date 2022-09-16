import React from "react";
import Navbar from "./routes/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Articles from "./routes/Articles";
import Publish from "./routes/Publish";
import Login from "./routes/Login";
import Profile from "./routes/Profile";
import ArticleDetails from "./routes/ArticleDetails";
import RequireAuth from "./auth/RequireAuth";

const App = () => {
  return (
    <div className="h-screen relative overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="articles"
          element={
            <RequireAuth>
              <Articles />
            </RequireAuth>
          }
        />
        <Route path="articles/:articleId" element={<ArticleDetails />} />
        <Route
          path="publish"
          element={
            <RequireAuth>
              <Publish />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
