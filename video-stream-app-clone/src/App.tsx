import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: red;
  height: 100vh;
`;

const Text = styled.p`
  font-size: 20px;
`;

const App = () => {
  return (
    /* <Container>
      <Text>Hello</Text>
    </Container> */
    <div style={{ background: "green", height: "100vh" }}>
      <span>HEy</span>
    </div>
  );
};

export default App;
