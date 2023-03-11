import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Card from "./Card";

const Container = styled.div`
  flex: 10;
  background-color: ${(props) => props.theme.primaryBlack};
`;

const NavBar = styled.div`
  background-color: ${(props) => props.theme.primaryBlack};
  display: flex;
  height: 60px;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

const Search = styled.div`
  display: flex;
  height: 40px;
  border: 1px solid ${(props) => props.theme.secondaryGray};
  border-radius: 40px;
  width: 50%;
  /* padding: 5px 20px; */
  box-sizing: border-box;
  justify-content: space-between;
  overflow: hidden;
`;

const Input = styled.input`
  border: 0px;
  background-color: ${(props) => props.theme.primaryBlack};
  border-radius: 40px;
  color: ${(props) => props.theme.primaryWhite};
  margin-left: 20px;
  padding: 2px;
  &:focus {
    border: none;
    outline: 0;
  }
`;

const SearchButton = styled.button`
  background-color: ${(props) => props.theme.secondaryGray};
  color: ${(props) => props.theme.primaryWhite};
  border: none;
  min-width: 50px;
  cursor: pointer;
`;

const LoginButton = styled.button`
  border: 1px solid ${(props) => props.theme.secondaryGray};
  border-radius: 20px;
  background-color: transparent;
  height: 40px;
  color: ${(props) => props.theme.primaryBlue};
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  min-width: 7rem;
  font-weight: bold;
`;

const EmptyContainer = styled.div`
  height: 40px;
`;

const VideoLibraryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 50px;
`

const VideoGallery = () => {
  return (
    <Container>
      <NavBar>
        <EmptyContainer />
        <Search>
          <Input placeholder="Search" />
          <SearchButton>
            <SearchOutlinedIcon />
          </SearchButton>
        </Search>
        <LoginButton>
          <AccountCircleOutlinedIcon />
          Sign In
        </LoginButton>
      </NavBar>
      <VideoLibraryWrapper>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </VideoLibraryWrapper>
    </Container>
  );
};

export default VideoGallery;
