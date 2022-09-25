import React from "react";
import { useNavigate } from "react-router-dom";
import homeImg from "../images/homemg.jpg";

const Home = () => {
  const navigate = useNavigate();
  const ourDate = new Date();
  let currentHour = ourDate.getHours();

  return (
    <div className="home h-88% text-black sm:flex justify-around items-center px-6">
      <div className="mb-[30px] sm:mb-0">
        <div className="text text-3xl sm:text-4xl font-bold mb-2 text-center sm:text-left ">
          {currentHour >= 12 ? "Good Afternoon" : "Good Morning"}, Welcome To
          Your Personal Blog
        </div>
        <div className=" text-3xl sm:text-4xl font-bold mb-2">
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
      <img src={homeImg} className="md:w-1/3 w-full  h-[80%]" alt="home img" />
    </div>
  );
};

export default Home;
