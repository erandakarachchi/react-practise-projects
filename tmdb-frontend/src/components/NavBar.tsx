import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  padding: 0 2rem;
  color: ${(props) => props.theme.primaryWhite};
  position: fixed;
  top: 0;
  z-index: 10;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  height: 2rem;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const MenuItem = styled.a`
  font-size: 1.2rem;
  font-weight: 300;
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
