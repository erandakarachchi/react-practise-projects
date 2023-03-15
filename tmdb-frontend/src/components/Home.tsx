import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${(props) => props.theme.primaryBlack};
`;

const Home = () => {
  return <HomeContainer></HomeContainer>;
};

export default Home;
