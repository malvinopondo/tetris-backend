import React from "react";
import Cell from "./Cell";

import styled from "styled-components";
const Stage = ({ stage }) => {
  return (
    <StageWrapper width={stage[0].length} height={stage.length}>
      {stage.map((row) => {
        return row.map((cell, index) => {
          return <Cell key={index} type={cell[0]} />;
        });
      })}
    </StageWrapper>
  );
};

export default Stage;

const StageWrapper = styled.div`
  display: grid;
  background: #2a2a2a;
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  box-shadow: 2px 5px 20px 4px #0000009f;
`;
