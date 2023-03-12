import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Card from "./Card";

const cardData = [
  {
    name: "Kitchen Chronicles",
    title: "My Puppy Training Secret",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1163/1163076.png?w=826&t=st=1678611858~exp=1678612458~hmac=205f3bbcb38a9877e4d8647bc878c33e3657c3b5f9c4c2113b77557e18c341f1",
    image:
      "https://imgv3.fotor.com/images/blog-richtext-image/Blue-Yellow-Puppy-Training.png",
  },
  {
    name: "Creative Hive",
    title: "10 Easy Knitting Ideas",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1163/1163083.png?w=826&t=st=1678611873~exp=1678612473~hmac=b81f7c4a73b7d640e4df695373a9f4578edbe7e52d6220522d5fc26d4a6df3ea",
    image:
      "https://cdn.create.vista.com/downloads/242e4827-6048-48eb-a1db-de6170a8d38f_1024.jpeg",
  },
  {
    name: "Wellness World",
    title: "Top Song Covers #10",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1163/1163104.png?w=826&t=st=1678611903~exp=1678612503~hmac=67022d48da11a7ddd89fc2e4373952fcdf4266c334d679e6297e78a358c2fcd4",
    image:
      "https://www.fotor.com/blog/wp-content/uploads/2019/10/Untitled-design-17.jpg",
  },
  {
    name: "Nature's Wonderland",
    title: "Study With Me",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1154/1154452.png?w=826&t=st=1678611661~exp=1678612261~hmac=31ac2e86e8a93a143f66e30835f6f121960efaab5109125f335fca6bd786958e",
    image:
      "https://www.fotor.com/blog/wp-content/uploads/2019/10/study-with-me.jpg",
  },
  {
    name: "Science Sphere",
    title: "Handy Craft With Me | EP 10",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1154/1154452.png?w=826&t=st=1678611661~exp=1678612261~hmac=31ac2e86e8a93a143f66e30835f6f121960efaab5109125f335fca6bd786958e",
    image:
      "https://cdn.create.vista.com/downloads/a04778d4-db95-47d6-a216-067d962b3595_1024.jpeg",
  },
  {
    name: "Foodie Frenzy",
    title: "Top Home Decor Must Haves",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1163/1163083.png?w=826&t=st=1678611873~exp=1678612473~hmac=b81f7c4a73b7d640e4df695373a9f4578edbe7e52d6220522d5fc26d4a6df3ea",
    image:
      "https://cdn.create.vista.com/downloads/cd962c9e-2b73-48e4-9419-f9c965713c16_1024.jpeg",
  },
  {
    name: "DIY Dreamers",
    title: "Interior Design Making Process",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1163/1163104.png?w=826&t=st=1678611903~exp=1678612503~hmac=67022d48da11a7ddd89fc2e4373952fcdf4266c334d679e6297e78a358c2fcd4",
    image:
      "https://cdn.create.vista.com/downloads/50022683-5dcf-4f22-aea7-aaf342f0a502_1024.jpeg",
  },
  {
    name: "Creative Hive",
    title: "Tips for Trendy Spring Outfits",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1163/1163076.png?w=826&t=st=1678611858~exp=1678612458~hmac=205f3bbcb38a9877e4d8647bc878c33e3657c3b5f9c4c2113b77557e18c341f1",
    image:
      "https://cdn.create.vista.com/downloads/6ef3df41-5806-4984-92b4-250433f43032_1024.jpeg",
  },
  {
    name: "Kitchen Chronicles",
    title: "Playlist Offer with Spring Songs",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1163/1163104.png?w=826&t=st=1678611903~exp=1678612503~hmac=67022d48da11a7ddd89fc2e4373952fcdf4266c334d679e6297e78a358c2fcd4",
    image:
      "https://cdn.create.vista.com/downloads/789b2dfb-653a-4452-b142-5b1bd5d01669_1024.jpeg",
  },
  {
    name: "Kitchen Chronicles",
    title: "Interior Design Making Process",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1154/1154452.png?w=826&t=st=1678611661~exp=1678612261~hmac=31ac2e86e8a93a143f66e30835f6f121960efaab5109125f335fca6bd786958e",
    image:
      "https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148904957.jpg?w=1480&t=st=1678611455~exp=1678612055~hmac=1a41a4054c6b1035bfc29db7ff48d5122f6ad15ba17c588e31b7bdc3dd4f6ee0",
  },
  {
    name: "Kitchen Chronicles",
    title: "Shoot like a pro",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1154/1154452.png?w=826&t=st=1678611661~exp=1678612261~hmac=31ac2e86e8a93a143f66e30835f6f121960efaab5109125f335fca6bd786958e",
    image:
      "https://www.fotor.com/blog/wp-content/uploads/2019/10/Untitled-design-16.jpg",
  },
  {
    name: "Kitchen Chronicles",
    title: "Tips for Trendy Spring Outfits",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1163/1163104.png?w=826&t=st=1678611903~exp=1678612503~hmac=67022d48da11a7ddd89fc2e4373952fcdf4266c334d679e6297e78a358c2fcd4",
    image:
      "https://www.fotor.com/blog/wp-content/uploads/2019/10/Untitled-design-18.jpg",
  },
  {
    name: "Nature's Wonderland",
    title: "Study With Me",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1154/1154452.png?w=826&t=st=1678611661~exp=1678612261~hmac=31ac2e86e8a93a143f66e30835f6f121960efaab5109125f335fca6bd786958e",
    image:
      "https://www.fotor.com/blog/wp-content/uploads/2019/10/study-with-me.jpg",
  },
  {
    name: "Science Sphere",
    title: "Handy Craft With Me | EP 10",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1154/1154452.png?w=826&t=st=1678611661~exp=1678612261~hmac=31ac2e86e8a93a143f66e30835f6f121960efaab5109125f335fca6bd786958e",
    image:
      "https://cdn.create.vista.com/downloads/a04778d4-db95-47d6-a216-067d962b3595_1024.jpeg",
  },
  {
    name: "Kitchen Chronicles",
    title: "Playlist Offer with Spring Songs",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1163/1163104.png?w=826&t=st=1678611903~exp=1678612503~hmac=67022d48da11a7ddd89fc2e4373952fcdf4266c334d679e6297e78a358c2fcd4",
    image:
      "https://cdn.create.vista.com/downloads/789b2dfb-653a-4452-b142-5b1bd5d01669_1024.jpeg",
  },
  {
    name: "Kitchen Chronicles",
    title: "Interior Design Making Process",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1154/1154452.png?w=826&t=st=1678611661~exp=1678612261~hmac=31ac2e86e8a93a143f66e30835f6f121960efaab5109125f335fca6bd786958e",
    image:
      "https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148904957.jpg?w=1480&t=st=1678611455~exp=1678612055~hmac=1a41a4054c6b1035bfc29db7ff48d5122f6ad15ba17c588e31b7bdc3dd4f6ee0",
  },
  {
    name: "Kitchen Chronicles",
    title: "My Puppy Training Secret",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1163/1163076.png?w=826&t=st=1678611858~exp=1678612458~hmac=205f3bbcb38a9877e4d8647bc878c33e3657c3b5f9c4c2113b77557e18c341f1",
    image:
      "https://imgv3.fotor.com/images/blog-richtext-image/Blue-Yellow-Puppy-Training.png",
  },
  {
    name: "Creative Hive",
    title: "10 Easy Knitting Ideas",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1163/1163083.png?w=826&t=st=1678611873~exp=1678612473~hmac=b81f7c4a73b7d640e4df695373a9f4578edbe7e52d6220522d5fc26d4a6df3ea",
    image:
      "https://cdn.create.vista.com/downloads/242e4827-6048-48eb-a1db-de6170a8d38f_1024.jpeg",
  },
  {
    name: "Wellness World",
    title: "Top Song Covers #10",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1163/1163104.png?w=826&t=st=1678611903~exp=1678612503~hmac=67022d48da11a7ddd89fc2e4373952fcdf4266c334d679e6297e78a358c2fcd4",
    image:
      "https://www.fotor.com/blog/wp-content/uploads/2019/10/Untitled-design-17.jpg",
  },
  {
    name: "Kitchen Chronicles",
    title: "My Puppy Training Secret",
    channelImage:
      "https://cdn-icons-png.flaticon.com/512/1163/1163076.png?w=826&t=st=1678611858~exp=1678612458~hmac=205f3bbcb38a9877e4d8647bc878c33e3657c3b5f9c4c2113b77557e18c341f1",
    image:
      "https://imgv3.fotor.com/images/blog-richtext-image/Blue-Yellow-Puppy-Training.png",
  },
];

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
`;

const getCards = () => {
  return cardData.map((card) => <Card card={card} />);
};

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
      <VideoLibraryWrapper>{getCards()}</VideoLibraryWrapper>
    </Container>
  );
};

export default VideoGallery;
