import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 202px;
  background-color: green;
  border-radius: 10px;
`;

const ChannelImg = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
`;

const DetailsWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 10px;
  color: ${(props) => props.theme.primaryWhite};
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const ChannelName = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

const StatisticsText = styled.p`
  font-size: 14px;
`;

const Card = () => {
  return (
    <Container>
      <Img src="https://cdn.create.vista.com/downloads/50022683-5dcf-4f22-aea7-aaf342f0a502_1024.jpeg" />
      <DetailsWrapper>
        <ChannelImg src="https://img.freepik.com/free-vector/3d-cartoon-young-woman-smiling-circle-frame-character-illustration-vector-design_40876-3100.jpg?w=826&t=st=1678551549~exp=1678552149~hmac=c52fda5004f8b50f1e48234c13a592af00843bc947e4af22d22446e2c8545f80" />
        <TextContent>
          <Title>The Process of Making the Interior of the Room</Title>
          <ChannelName>TheWebDev</ChannelName>
          <StatisticsText> 11K Views • 10 hours ago</StatisticsText>
        </TextContent>
      </DetailsWrapper>
    </Container>
  );
};

export default Card;
