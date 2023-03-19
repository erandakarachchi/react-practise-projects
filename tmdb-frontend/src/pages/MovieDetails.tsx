import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const VITE_IMAGE_API_URL = import.meta.env.VITE_TMDB_IMAGE_API_URL;

const API_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

interface HeroImageProps {
  imageUrl: string;
}

const Container = styled.div`
  display: flex;
`;

const DetailContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  width: 70%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const HeroImage = styled.div<HeroImageProps>`
  display: flex;
  justify-content: center;
  position: relative;
  background-image: linear-gradient(
      to bottom,
      rgba(48, 48, 48, 0.5),
      rgba(0, 0, 0, 1)
    ),
    url(${(props) => props.imageUrl});
  width: 100%;
  height: 100vh;
  background-size: cover;
  color: white;
`;

const ImageContainer = styled.div`
  display: flex;
`;

const PosterImage = styled.img`
  height: 32rem;
  border-radius: 1rem;
`;

const Title = styled.h2`
  font-size: 6rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  width: 60%;
`;

const GenreTagContainer = styled.span`
  display: flex;
  gap: 1rem;
`;
const GenreTag = styled.span`
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${(props) => props.theme.primaryGreen};
  }
`;

const MovieDetails = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const getMovieDetails = async () => {
    let response = await fetch(
      `${API_URL}/movie/${params.id}?api_key=${API_KEY}`
    );
    response = await response.json();
    setMovieDetails(response);
  };

  useEffect(() => {
    getMovieDetails();
  }, [params.id]);

  const renderMovieDetails = () => {
    if (movieDetails && (movieDetails as any).id) {
      console.log("movieDetails", movieDetails);

      const imageUrl = `${VITE_IMAGE_API_URL}/${
        (movieDetails as any).backdrop_path
      }`;
      console.log("imageUrl", imageUrl);

      return (
        <>
          <HeroImage imageUrl={imageUrl}>
            <DetailContainer>
              <ImageContainer>
                <PosterImage
                  src={`${VITE_IMAGE_API_URL}/${
                    (movieDetails as any).poster_path
                  }`}
                />
              </ImageContainer>
              <InfoContainer>
                <Title>{(movieDetails as any).title}</Title>
                <GenreTagContainer>
                  {(movieDetails as any).genres.map((genre: any) => {
                    return <GenreTag>{genre.name}</GenreTag>;
                  })}
                </GenreTagContainer>
                <Description>{(movieDetails as any).overview}</Description>
              </InfoContainer>
            </DetailContainer>
          </HeroImage>
        </>
      );
    }
  };

  return <Container>{renderMovieDetails()}</Container>;
};

export default MovieDetails;
