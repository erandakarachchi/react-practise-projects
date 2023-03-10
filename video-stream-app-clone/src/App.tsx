import React from "react";
import styled from "styled-components";
import Menu from "./components/Menu";
import VideoGallery from "./components/VideoGallery";

const Container = styled.div`
  background-color: aliceblue;
  display: flex;
`;

const App = () => {
  return (
    <Container>
      <Menu />
      <VideoGallery />
    </Container>
  );
};

export default App;
