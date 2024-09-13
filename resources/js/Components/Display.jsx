import React from "react";
import styled from "styled-components";
const Display = ({ text }) => {
  return <DisplayWrapper>{text}</DisplayWrapper>;
};

export default Display;

const DisplayWrapper = styled.div`
  padding: 0.5rem 2.5rem;
  background: #0000008a;
  margin-bottom: 1rem;
  border: 3px solid gray;
  border-radius: 10px;
  text-align: center;
  box-shadow: 1px 2px 10px #090909;
  cursor: pointer;
  font-family: pixel, Arial, Helvetica, sans-serif;
`;
