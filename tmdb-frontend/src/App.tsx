import React, { useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { NavBar, Home } from "./components";

const StyledApp = styled.div`
  background-color: blue;
  width: 100%;
  height: 100vh;
`;

const NewStyledApp = styled.div`
  background-color: green;
  width: 100%;
  height: 100vh;
`;

const App = () => {
  useEffect(() => {
    (async () => {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      response = await response.json();
      console.log("response", response);
    })();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<NewStyledApp>Hello</NewStyledApp>} />
      </Routes>
    </>
  );
};

export default App;
