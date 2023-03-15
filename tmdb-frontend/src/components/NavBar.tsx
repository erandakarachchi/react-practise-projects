import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.primaryBlack};
  padding: 0 20px;
  color: ${(props) => props.theme.primaryWhite};
  position: sticky;
  top: 0;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  height: 2.5rem;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const MenuItem = styled.a`
  font-size: 1.3rem;
  font-weight: 500;
  color: ${(props) => props.theme.primaryWhite};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.primaryGreen};
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <MenuContainer>
        <MenuItem>Home</MenuItem>
        <MenuItem>Movies</MenuItem>
        <MenuItem>TV Series</MenuItem>
      </MenuContainer>
    </NavBarContainer>
  );
};

export default NavBar;
