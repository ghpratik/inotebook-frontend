import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import GetStarted from "./pages/GetStarted";
import ForgotPass from "./pages/ForgotPass";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import PrivateRoute from "./pages/PrivateRoute";
import LoadingBar from "react-top-loading-bar";

library.add(fas);
export const host = process.env.REACT_APP_BACKEND_URL;
function App() {
  const [alert, setAlert] = useState(null);
  const [progress, setProgress] = useState(0);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
      <NoteState>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Router>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route
                exact
                path="/"
                element={
                  <Home showAlert={showAlert} setProgress={setProgress} />
                }
                setProgress={setProgress}
              />
            </Route>

            <Route
              exact
              path="/about"
              element={<About />}
              setProgress={setProgress}
            />
            <Route
              exact
              path="/getstarted"
              element={
                <GetStarted showAlert={showAlert} setProgress={setProgress} />
              }
            />
            <Route
              exact
              path="/login"
              element={
                <Login showAlert={showAlert} setProgress={setProgress} />
              }
            />
            <Route
              exact
              path="/signup"
              element={
                <SignUp showAlert={showAlert} setProgress={setProgress} />
              }
            />
            <Route
              exact
              path="/forgotPass"
              element={
                <ForgotPass showAlert={showAlert} setProgress={setProgress} />
              }
            />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
