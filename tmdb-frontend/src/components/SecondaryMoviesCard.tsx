import React from "react";
import styled from "styled-components";

interface PropTypes {
  image: string;
  name: string;
}

const SecondaryMoviesCardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
  cursor: pointer;
`;

const PosterImage = styled.img`
  width: 250px;
  border-radius: 1rem;
`;

const MovieName = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.primaryWhite};
  font-weight: 600;
  width: 200px;
`;

const SecondaryMoviesCard = (props: PropTypes) => {
    const imagePath = "https://image.tmdb.org/t/p/w500/" + props.image;
  return (
    <SecondaryMoviesCardContainer>
      <PosterImage src={imagePath} />
      <MovieName>{props.name}</MovieName>
    </SecondaryMoviesCardContainer>
  );
};

export default SecondaryMoviesCard;
