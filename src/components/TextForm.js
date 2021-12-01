import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setTex] = useState("");

  const handleUpclick = () => {
    setTex("");
    let newtext = text.toUpperCase();
    setTex(newtext);
    props.showAlert("Converted to upper Case", "success");
  };

  const handleUpclick2 = () => {
    setTex("");
    let newtext = text.toLowerCase();
    setTex(newtext);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleOnchange = (event) => {
    setTex(event.target.value);
  };

  const clearity = (event) => {
    setTex("");
    props.showAlert("Cleared", "");
  };

  const handlecopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleextraspaces = () => {
    let newText = text.split(/[ ]+/);
    setTex(newText.join(" "));
  };

  return (
    <>
      <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            value={text}
            onChange={handleOnchange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#535859" : "white",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "light"
          } mx-2 my-3`}
          onClick={handleUpclick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "light"
          } mx-2 my-3`}
          onClick={handleUpclick2}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "light"
          } mx-2 my-3`}
          onClick={handleextraspaces}
        >
          Remove extra spaces
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "light"
          } mx-2 my-3`}
          onClick={clearity}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "light"
          } mx-2 my-3`}
          onClick={handlecopy}
        >
          Copy Text
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Your text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.08 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read this
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing To preview"}</p>
      </div>
    </>
  );
}
