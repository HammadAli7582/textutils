import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [textColor, setTextColor] = useState("dark");
  const [bgColor, setBgColor] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (type, msg) => {
    setAlert({
      type,
      msg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTextColor("light");
      setBgColor("#050A30");
      document.body.style.backgroundColor = "#050A30";
      showAlert("success", "Dark mode has been enabled");
    } else {
      setMode("light");
      setTextColor("dark");
      setBgColor("");
      document.body.style.backgroundColor = "";
      setAlert("Dark mode has been enabled");
      showAlert("success", "Light mode has been enabled");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          textColor={textColor}
        />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route path="/about" element={<About />} />

            <Route
              path="/"
              element={
                <TextForm
                  textHeading="Enter Your Text Here"
                  textColor={textColor}
                  mode={mode}
                  bgColor={bgColor}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
