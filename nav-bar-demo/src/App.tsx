import { useState } from "react";
import { NavBar } from "./components/index";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="content">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
