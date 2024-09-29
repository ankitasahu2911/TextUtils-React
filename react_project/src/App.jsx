import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [modes, setModes] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = " rgb(4 40 76)";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils-Darkmode";

    

      // setInterval(()=>{
      //   document.title='Textutils is amazing';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install Textutils now';
      // },1500);
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils-Lightmode";
    }
  };

  const toggleMode1 = () => {
    if (mode === "light") {
      setMode("Red");
      document.body.style.backgroundColor = " #4e0d0d";
      showAlert("Red mode has been enabled", "success");
      document.title = "Textutils-Redmode";
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils-Lightmode";
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} modes={modes} toggleMode1={toggleMode1}  />
        {/* <Navbar/> */}
        <Alert alert={alert} />
        <div className="container  my-3">
          {/* <About mode={mode}/>/ */}
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}></Route>

            <Route
              eaxct
              path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading=" Try TextUtilis-Word counter, Character counter"
                  mode={mode}
                  modes={modes}
                />
              {/* }
            ></Route>
          </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
