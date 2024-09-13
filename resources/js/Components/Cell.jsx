import React from "react";
import styled from "styled-components";
import { TETROMINOS } from "../Tetrominos";

const Cell = ({ type }) => {
  return <CellWrapper type={type} color={TETROMINOS[type].color}></CellWrapper>;
};

export default React.memo(Cell);

const CellWrapper = styled.div`
  width: 2rem;
  background: rgba(${(props) => props.color}, 0.7);
  border: ${(props) => (props.type === 0 ? "4px solid" : "4px solid")};
  border-bottom-color: rgba(${(props) => props.color}, 0.1);
  border-right-color: rgba(${(props) => props.color}, 1);
  border-top-color: rgba(${(props) => props.color}, 1);
  border-left-color: rgba(${(props) => props.color}, 0.3);
`;
