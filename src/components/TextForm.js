import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // const [btnText, SetBtnText] = useState("Dark mode");

  const handleUpClick = () => {
    let convertUpText = text.toUpperCase();
    setText(convertUpText);
    props.showAlert("success", "Converted to UpperCase");
  };
  const handleLoClick = () => {
    let convertLoText = text.toLowerCase();
    setText(convertLoText);
    props.showAlert("success", "Converted to LowerCase");
  };
  const handleClear = () => {
    setText("");
    props.showAlert("success", "Text Cleared");
  };
  const handleCopy = () => {
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("success", "Copy to Clipboard");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className={`text-${props.textColor}`}>
        <div className={`p-4`}>
          <h3 className="mb-3">{props.textHeading}</h3>
          <textarea
            placeholder="Enter Someting Here and convert it into another Cases"
            className={`form-control mb-3 text-${props.textColor}`}
            style={{ backgroundColor: props.bgColor }}
            id="myBox"
            rows="5"
            value={text}
            onChange={handleChange}
          ></textarea>
          <div className="text-center">
            <button className="btn btn-primary m-1" onClick={handleUpClick}>
              Convert to Uppercase
            </button>
            <button className="btn btn-primary  m-1 " onClick={handleLoClick}>
              Convert to Lowercase
            </button>
            <button className="btn btn-primary m-1" onClick={handleClear}>
              Clear Text
            </button>
            <button className="btn btn-primary m-1" onClick={handleCopy}>
              Copy Text
            </button>
          </div>
        </div>
      </div>
      <div className={`container text-${props.textColor} ms-2`}>
        <h3>Your Text Summary</h3>
        <p>
          <b> {text.split(" ").length - 1}</b> Words and <b>{text.length}</b>{" "}
          Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something to the above text box to preview it here"}
        </p>
      </div>
    </>
  );
}
