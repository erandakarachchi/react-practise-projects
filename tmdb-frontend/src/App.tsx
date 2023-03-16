import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { Home, Movies, TVSeries } from "./pages";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-series" element={<TVSeries />} />
      </Routes>
    </>
  );
};

export default App;
