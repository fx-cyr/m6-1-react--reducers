import React from "react";
import styled from "styled-components";
import loader from "../assets/loader.gif";

const Loader = () => {
  return (
    <Wrapper>
      <Title>Loading</Title>
      <LoadingGif src={loader} />
    </Wrapper>
  );
};
const Title = styled.h2`
  color: white;
  margin-right: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LoadingGif = styled.img`
  width: 50px;
`;

export default Loader;
