import React, { useRef } from "react";

const App = () => {
  const inputs = useRef();
  const outputs = useRef();

  var upload = "";
  inputs.current.addEventListener("change", () => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      upload = reader.result;
      console.log(upload);
      outputs.current.style.backgroundImage = `url(${upload})`;
    });
    reader.readAsDataURL(inputs.current.files[0]);
  });

  return (
    <div>
      <input ref={inputs} type="file" accept="image/*" />
      <div
        ref={outputs}
        style={{
          height: "250px",
          width: "330px",
          border: "2px black solid",
          backgroundSize: "contain",
        }}
      >
        s
      </div>
    </div>
  );
};

export default App;
