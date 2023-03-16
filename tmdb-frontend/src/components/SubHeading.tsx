import React from "react";
import styled from "styled-components";

interface PropTypes {
  text: string;
}

const SubHeader = styled.span`
  font-size: 1.8rem;
  color: ${(props) => props.theme.primaryWhite};
  font-weight: 600;
`;

const SubHeading = (props: PropTypes) => {
  return <SubHeader>{props.text}</SubHeader>;
};

export default SubHeading;
