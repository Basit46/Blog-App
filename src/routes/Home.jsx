import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const ourDate = new Date();
  let currentHour = ourDate.getHours();

  return (
    <div className="home h-88% text-white flex justify-center items-center">
      <div>
        <div className="text text-3xl sm:text-5xl font-bold mb-2">
          {currentHour >= 12 ? "Good Afternoon" : "Good Morning"}, Welcome To
          Your Personal Blog
        </div>
        <div className=" text-3xl sm:text-5xl font-bold mb-2">
          Head on to the{" "}
          <p
            className="text-blue-400 inline underline cursor-pointer"
            onClick={() => navigate("/articles")}
          >
            Articles
          </p>{" "}
          Page.
        </div>
      </div>
    </div>
  );
};

export default Home;
