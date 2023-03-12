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
  gap: 15px;
  color: ${(props) => props.theme.primaryWhite};
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.theme.textPrimary};
  font-family: "Roboto", "Arial", sans-serif;
`;

const ChannelName = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.softColor};
`;

const StatisticsText = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.softColor};
`;

interface PropTypes {
  card: any;
}

const Card = (props: PropTypes) => {
  return (
    <Container>
      <Img src={props.card.image} />
      <DetailsWrapper>
        <ChannelImg src={props.card.channelImage} />
        <TextContent>
          <Title>{props.card.title}</Title>
          <ChannelName>{props.card.name}</ChannelName>
          <StatisticsText> 11M Views • 10 hours ago</StatisticsText>
        </TextContent>
      </DetailsWrapper>
    </Container>
  );
};

export default Card;
