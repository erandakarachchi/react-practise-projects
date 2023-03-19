import styled from "styled-components";
import { Link } from "react-router-dom";
import { SubHeading, SecondaryMoviesCard } from "../components";

interface PropTypes {
  movies: any;
  title: string;
}

const ScrollContainer = styled.div`
  display: flex;
  gap: 2rem;
  /* padding: 2rem 0; */
  /* trbl */
  padding-top: 2rem;
  padding-right: 0;
  padding-bottom: 6rem;
  padding-left: 0;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 10px; //Remove scrollbar space
    background: transparent;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ViewAll = styled.button`
  border: 1px solid ${(props) => props.theme.primaryWhite};
  border-radius: 8px;
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  background-color: transparent;
  color: ${(props) => props.theme.primaryWhite};
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  &:hover {
    color: ${(props) => props.theme.primaryWhite};
    border: 0.15rem solid ${(props) => props.theme.primaryWhite};
    background-color: ${(props) => props.theme.primaryGreen};
    box-shadow: none;
  }
`;

const ScrollMovieList = (props: PropTypes) => {
  return (
    <>
      <TitleContainer>
        <SubHeading text={props.title} />
        <ViewAll>View All</ViewAll>
      </TitleContainer>
      <ScrollContainer>
        {props.movies.map((movie: any, index: number) => {
          if (index <= 5)
            return (
              <Link key={index} to={`/movie/${movie.id}`}>
                <SecondaryMoviesCard
                  name={movie.title}
                  image={movie.poster_path}
                />
              </Link>
            );
          return null;
        })}
      </ScrollContainer>
    </>
  );
};

export default ScrollMovieList;
