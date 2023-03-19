import styled from "styled-components";

interface propTypes {
  movie: any;
}

interface HeroImageProps {
  imageUrl: string;
}

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

const ContentContainer = styled.div`
  width: 72%;
  align-items: center;
  display: flex;
  gap: 2rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: 1rem;
  width: 60%;
`;

const HeroMovie = (props: propTypes) => {
  const VITE_IMAGE_API_URL = import.meta.env.VITE_TMDB_IMAGE_API_URL;
  const imageUrl = `${VITE_IMAGE_API_URL}${props.movie.backdrop_path}`;
  const posterUrl = `${VITE_IMAGE_API_URL}${props.movie.poster_path}`;
  console.log(props);
  return (
    <HeroImage imageUrl={imageUrl}>
      <ContentContainer>
        <TextContainer>
          <Title>{props.movie.title}</Title>
          <Description>{props.movie.overview}</Description>
        </TextContainer>
        <ImageContainer>
          <PosterImage src={posterUrl} />
        </ImageContainer>
      </ContentContainer>
    </HeroImage>
  );
};

export default HeroMovie;
