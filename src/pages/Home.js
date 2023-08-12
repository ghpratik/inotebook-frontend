import React from "react";
import Notes from "../components/Notes";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
const Home = (props) => {
  const { showAlert, setProgress } = props;
  return (
    <div>
      <Navbar setProgress={setProgress} />
      <Alert alert={alert} />
      <Notes showAlert={showAlert} setProgress={setProgress} />
    </div>
  );
};

export default Home;
