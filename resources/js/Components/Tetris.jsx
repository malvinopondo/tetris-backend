import React, { useState } from "react";
import styled from "styled-components";
import { createStage } from "..//GameHelper";

//assets
import bg from "../Image/bg.jpg";

//customHooks
import usePlayer from "../Hooks/usePlayer";
import useStage from "../Hooks/useStage";
import { checkCollision } from "..//GameHelper";
import { useInterval } from "../Hooks/useInterval";
import { useGameStatuss } from "../Hooks/useGameStatus";
//Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import Auth from "./auth";
const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();

  const [stage, setStage, rowsCleared] = useStage({ player, resetPlayer });

  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatuss(rowsCleared);
  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game Over
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    drop();
  };

  useInterval(() => {
    drop();
  }, dropTime);

  const gameStart = () => {
    //reset everything
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
    setDropTime(1000 / (level + 1) + 300);
    setScore(0);
    setLevel(0);
    setRows(0);
  };

  const move = ({ keyCode }) => {
    //up = 38, down = 40;
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(+1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  return (
    <Main img={bg} tabIndex={0} onKeyDown={(e) => move(e)}>
      <GameBox>
        <Stage stage={stage} />
        <aside>
          {!gameOver ? (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Level: ${level}`} />
              <Display text={`Rows: ${rows}`} />
            </div>
          ) : (
            <Display gameOver="true" text={"Game Over"} />
          )}
          <StartButton callBack={gameStart} />
        </aside>
      </GameBox>
      <Auth />
    </Main>
  );
};

export default Tetris;

const Main = styled.div`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
const GameBox = styled.div`
  padding: 2rem 8rem;
  display: flex;
  height: 100%;
  gap: 2rem;
  color: white;
`;
