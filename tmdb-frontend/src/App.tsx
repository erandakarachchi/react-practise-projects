import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { Home, Movies, TVSeries, MovieDetails } from "./pages";

const Nav = styled.div`
  background-color: transparent;
  height: 80px;
  width: 100%;
  position: absolute;
  z-index: 10;
  top: 0;
`;

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv-series" element={<TVSeries />} />
      </Routes>
    </>
  );
};

export default App;
