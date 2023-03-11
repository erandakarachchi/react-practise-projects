import React from "react";
import styled from "styled-components";
import logo from "./../assets/images/logo.png";

import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistorySharpIcon from "@mui/icons-material/HistorySharp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import OutlinedFlagOutlinedIcon from "@mui/icons-material/OutlinedFlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

const Container = styled.div`
  flex: 2;
  height: 100vh;
  background-color: ${(props) => props.theme.primaryBlack};
  position: sticky;
  top: 0;
  left: 0;
  color: ${(props) => props.theme.primaryWhite};
  overflow: scroll;
`;

const Wrapper = styled.div`
  padding: 25px 20px;
`;

const Logo = styled.div`
  display: flex;
  padding: 0px 5px;
  gap: 10px;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 20px;
`;

const Item = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 5px;
  cursor: pointer;
  align-items: center;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.theme.secondaryGray};
  }
`;

const Hr = styled.div`
  height: 0.5px;
  background-color: ${(props) => props.theme.secondaryGray};
  margin: 25px 0px;
`;

const LoginPrompt = styled.div`
  padding: 0px 5px;
  display: flex;
  flex-direction: column;
`;

const LoginButton = styled.button`
  border: 1px solid ${(props) => props.theme.secondaryGray};
  border-radius: 20px;
  background-color: transparent;
  width: 50%;
  height: 40px;
  color: ${(props) => props.theme.primaryBlue};
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
  cursor: pointer;
  min-width: 6rem;
  font-weight: bold;
`;

const SubHeading = styled.p`
  padding: 0px 5px;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={logo} />
          MyTube
        </Logo>
        {/* Menu Items */}
        <Item>
          <HomeSharpIcon />
          Home
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistorySharpIcon />
          History
        </Item>
        <Hr />
        <LoginPrompt>
          Sign in to like videos, comment, and subscribe.
          <LoginButton>
            <AccountCircleOutlinedIcon />
            Sign In
          </LoginButton>
        </LoginPrompt>
        <Hr />
        <SubHeading>Explore</SubHeading>
        <Item>
          <LocalFireDepartmentIcon />
          Trending
        </Item>
        <Item>
          <MusicNoteOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <EmojiEventsOutlinedIcon />
          Sports
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <OutlinedFlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item>
          <SettingsBrightnessOutlinedIcon />
          Toggle Theme
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
