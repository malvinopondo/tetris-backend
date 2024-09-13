import React from "react";
import styled from "styled-components";
const StartButton = (props) => {
  return (
    <ButtonWrapper onClick={() => props.callBack()}>Start Game</ButtonWrapper>
  );
};

export default StartButton;
const ButtonWrapper = styled.div`
  padding: 0.7rem 2.7rem;
  background: #8787879a;
  margin-bottom: 1rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 1px 2px 10px #090909;
  cursor: pointer;
  font-family: pixel, Arial, Helvetica, sans-serif;
`;
