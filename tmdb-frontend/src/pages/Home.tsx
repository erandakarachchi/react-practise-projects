import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ScrollMovieList, HeroMovie } from "../components";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const HomeContainer = styled.div`
  background-color: ${(props) => props.theme.primaryBlack};
`;

const ListContainer = styled.div`
  padding: 0 5rem;
`;

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [homeMovie, setHomeMovie] = useState({});

  const getUpcomingMovies = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
    );
    response = await response.json();
    setUpcomingMovies((response as any).results);
  };

  const getPopularMovies = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    response = await response.json();
    setPopularMovies((response as any).results);
    setHomeMovie((response as any).results[0]);
    console.log("upcomingMovies", upcomingMovies);
  };
  const getTopRatedMovies = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    );
    response = await response.json();
    setTopRatedMovies((response as any).results);
    console.log("upcomingMovies", upcomingMovies);
  };

  useEffect(() => {
    getUpcomingMovies();
    getPopularMovies();
    getTopRatedMovies();
  }, []);

  return (
    <HomeContainer>
      <HeroMovie movie={homeMovie}></HeroMovie>
      <ListContainer>
        <ScrollMovieList title="Popular Movies" movies={popularMovies} />
        <ScrollMovieList title="Top Rated Movies" movies={topRatedMovies} />
        <ScrollMovieList title="Upcoming Movies" movies={upcomingMovies} />
      </ListContainer>
    </HomeContainer>
  );
};

export default Home;
