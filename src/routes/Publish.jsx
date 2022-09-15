import React, { useRef, useContext } from "react";
import { useEffect } from "react";
import { ourContext } from "../context/ourContext";
import { useNavigate } from "react-router";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const Publish = () => {
  const { username, userId } = useContext(ourContext);
  // const [img, setimg] = useState(null);
  const navigate = useNavigate();

  const titleRef = useRef();
  const categRef = useRef();
  const bodyRef = useRef();
  const inputs = useRef();
  const outputs = useRef();

  useEffect(() => {
    inputs.current.addEventListener("change", () => {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        // setimg(reader.result);
        outputs.current.style.backgroundImage = `url(${reader.result})`;
      });
      reader.readAsDataURL(inputs.current.files[0]);
    });
  }, [inputs]);

  const handlePublish = (e) => {
    e.preventDefault();
    if (
      titleRef.current.value === "" ||
      categRef.current.value === "" ||
      bodyRef.current.value === ""
    ) {
      alert("Enter all values");
    } else {
      const colRef = collection(db, "articles");
      addDoc(colRef, {
        category: categRef.current.value,
        author: username,
        userId,
        image: "image",
        title: titleRef.current.value,
        body: bodyRef.current.value,
        date: new Date().toUTCString(),
      }).then(() => {
        navigate("/articles");
      });
    }
  };

  return (
    <div className="publish mt-3 p-1 sm:p-3">
      <h1 className="font-semibold text-2xl mb-4">
        Publish Your New Article Here{" "}
        <p className="underline inline">{username}.</p>
      </h1>
      <div>
        <label htmlFor="title">Add Title:</label>
        <input
          type="text"
          ref={titleRef}
          id="title"
          placeholder="How To Null"
        />

        <label htmlFor="category">Add Category:</label>
        <input type="text" ref={categRef} id="category" placeholder="Tech" />

        <input className="mt-4" ref={inputs} type="file" accept="image/*" />
        <div
          className="flex justify-center items-center"
          ref={outputs}
          style={{
            height: "250px",
            width: "330px",
            border: "2px black solid",
            backgroundSize: "contain",
          }}
        >
          <p className="text-2xl text-center font-bold text-gray-700 bg-cover">
            Image You Chose Will be Displayed Here
          </p>
        </div>

        <label htmlFor="text">Write your article:</label>
        <textarea ref={bodyRef} className="w-full "></textarea>

        <button
          onClick={handlePublish}
          className="bg-green-700 text-white text-xl font-extrabold p-3 mt-2 active:bg-red-700"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default Publish;
