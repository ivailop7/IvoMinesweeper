import React, { useState } from "react";
import { Button } from "react95";
import GameOver from "./GameOver";
import Congrats from "./Congrats";
import mine from "../assets/mine.png";
import flag from "../assets/flag.png";

const numColorsMap: any = {
  x: null,
  0: "lightgrey",
  1: "blue",
  2: "green",
  3: "red",
  4: "purple",
  5: "maroon",
  6: "turquoise",
  7: "black",
  8: "grey"
};

const generateFieldOf = (width: number, height: number, value: number) => {
  let field: any = [];
  for (let i = 0; i < height; i++) {
    field[i] = [];
    for (let j = 0; j < width; j++) {
      field[i][j] = value;
    }
  }

  return [...field];
};

export const generateSolvedField = (
  width: number,
  height: number,
  numMines: number
) => {
  let field: any = generateFieldOf(width, height, 0);
  // add mines
  while (numMines > 0) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    // As it's small ints, might have duplicates, thus checking
    if (field[x][y] === "x") continue;
    field[x][y] = "x";
    numMines -= 1;
  }
  // populate numbers
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (field[i][j] === "x") {
        // increment top left
        if (typeof field[i - 1]?.[j - 1] === "number") field[i - 1][j - 1]++;
        // increment top
        if (typeof field[i - 1]?.[j] === "number") field[i - 1][j]++;
        // increment top right
        if (typeof field[i - 1]?.[j + 1] === "number") field[i - 1][j + 1]++;
        // increment right
        if (typeof field[i]?.[j + 1] === "number") field[i][j + 1]++;
        // increment bottom right
        if (typeof field[i + 1]?.[j + 1] === "number") field[i + 1][j + 1]++;
        // increment bottom
        if (typeof field[i + 1]?.[j] === "number") field[i + 1][j]++;
        // increment bottom left
        if (typeof field[i + 1]?.[j - 1] === "number") field[i + 1][j - 1]++;
        // increment left
        if (typeof field[i]?.[j - 1] === "number") field[i][j - 1]++;
      }
    }
  }
  return [...field];
};

const Grid = React.forwardRef((props: any, ref) => {
  let [grid, setGrid] = useState(generateSolvedField(props.height, props.width, props.numMines));
  let [revealedGrid, setRevealedGrid] = useState(generateFieldOf(props.width, props.height, 0));
  let [numRevealedTiles, setNumRevealedTiles] = useState(0);
  let [numFlags, setNumFlags] = useState(0);

  const [openCongrats, setOpenCongrats] = React.useState(false);
  const [openGameOver, setOpenGameOver] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    newGame() {
      setNumFlags(0);
      props.setFlagsCount(0);
      setGrid([
        ...generateSolvedField(props.height, props.width, props.numMines)
      ]);
      setRevealedGrid([...generateFieldOf(props.width, props.height, 0)]);
    },
    restartGame() {
      setRevealedGrid([...generateFieldOf(props.width, props.height, 0)]);
    },
    solveGame() {
      setRevealedGrid([...generateFieldOf(props.width, props.height, 1)]);
    }
  }));

  const gameOver = () => {
    setOpenGameOver(true);
    setRevealedGrid([...generateFieldOf(props.width, props.height, 1)]);
  };

  const winGame = () => {
    setOpenCongrats(true);
    setRevealedGrid([...generateFieldOf(props.width, props.height, 1)]);
  };

  const updateTileState = (i: number, j: number) => {
    if (revealedGrid[i][j] === 1) {
      return;
    }

    if (grid[i][j] === 0) {
      revealNeighbourZeros(i, j);
    }
    if (grid[i][j] === "x") {
      gameOver();
      return;
    }
    revealedGrid[i][j] = 1;
    setNumRevealedTiles(++numRevealedTiles);
    setRevealedGrid([...revealedGrid]);
    numRevealedTiles === props.width * props.height - props.numMines && winGame();
  };

  const toggleFlag = (i: number, j: number) => {
    if (revealedGrid[i][j] === 0) {
      revealedGrid[i][j] = 2;
      setNumFlags(++numFlags);
    } else if (revealedGrid[i][j] === 2) {
      revealedGrid[i][j] = 0;
      setNumFlags(--numFlags);
    }

    props.setFlagsCount(numFlags);
    setRevealedGrid([...revealedGrid]);
  };

  const revealNeighbourZeros = (x: number, y: number) => {
    let adjacentCellsToReveal = [[x, y]];
    do {
      let [i, j] = adjacentCellsToReveal[0];
      // reveal top left
      if (grid[i - 1]?.[j - 1] >= 0 && revealedGrid[i - 1]?.[j - 1] === 0) {
        revealedGrid[i - 1][j - 1] = 1;
        setNumRevealedTiles(++numRevealedTiles);
        grid[i - 1]?.[j - 1] === 0 && adjacentCellsToReveal.push([i - 1, j - 1]);
      }
      // reveal top
      if (grid[i - 1]?.[j] >= 0 && revealedGrid[i - 1]?.[j] === 0) {
        revealedGrid[i - 1][j] = 1;
        setNumRevealedTiles(++numRevealedTiles);
        grid[i - 1]?.[j] === 0 && adjacentCellsToReveal.push([i - 1, j]);
      }
      // reveal top right
      if (grid[i - 1]?.[j + 1] >= 0 && revealedGrid[i - 1]?.[j + 1] === 0) {
        revealedGrid[i - 1][j + 1] = 1;
        setNumRevealedTiles(++numRevealedTiles);
        grid[i - 1]?.[j + 1] === 0 && adjacentCellsToReveal.push([i - 1, j + 1]);
      }
      // reveal right
      if (grid[i]?.[j + 1] >= 0 && revealedGrid[i]?.[j + 1] === 0) {
        revealedGrid[i][j + 1] = 1;
        setNumRevealedTiles(++numRevealedTiles);
        grid[i]?.[j + 1] === 0 && adjacentCellsToReveal.push([i, j + 1]);
      }
      // reveal bottom right
      if (grid[i + 1]?.[j + 1] >= 0 && revealedGrid[i + 1]?.[j + 1] === 0) {
        revealedGrid[i + 1][j + 1] = 1;
        setNumRevealedTiles(++numRevealedTiles);
        grid[i + 1]?.[j + 1] === 0 && adjacentCellsToReveal.push([i + 1, j + 1]);
      }
      // reveal bottom
      if (grid[i + 1]?.[j] >= 0 && revealedGrid[i + 1]?.[j] === 0) {
        revealedGrid[i + 1][j] = 1;
        setNumRevealedTiles(++numRevealedTiles);
        grid[i + 1]?.[j] === 0 && adjacentCellsToReveal.push([i + 1, j]);
      }
      // reveal bottom left
      if (grid[i + 1]?.[j - 1] >= 0 && revealedGrid[i + 1]?.[j - 1] === 0) {
        revealedGrid[i + 1][j - 1] = 1;
        setNumRevealedTiles(++numRevealedTiles);
        grid[i + 1]?.[j - 1] === 0 && adjacentCellsToReveal.push([i + 1, j - 1]);
      }
      // reveal left
      if (grid[i]?.[j - 1] >= 0 && revealedGrid[i]?.[j - 1] === 0) {
        revealedGrid[i][j - 1] = 1;
        setNumRevealedTiles(++numRevealedTiles);
        grid[i]?.[j - 1] === 0 && adjacentCellsToReveal.push([i, j - 1]);
      }
      adjacentCellsToReveal.shift();
    } while (adjacentCellsToReveal.length > 0);
    setNumRevealedTiles(--numRevealedTiles);
  };

  const renderTile = (i: number, j: number) => {
    if (revealedGrid[i][j] === 0) {
      // not opened
      return "_";
    } else if (revealedGrid[i][j] === 1) {
      // opened
      if (typeof grid[i][j] === "number") {
        return grid[i][j];
      } else {
        return <img src={mine} alt="mine" width={10} height={10} />;
      }
    } else if (revealedGrid[i][j] === 2) {
      // flagged
      return <img src={flag} alt="flag" width={10} height={10} />;
    }
  };

  let buttons = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      buttons.push(
        <Button
          square
          id={i + ":" + j}
          variant={revealedGrid[i][j] === 1 ? "flat" : "default"}
          style={{
            backgroundColor: "lightgrey",
            fontFamily: "Visitor",
            fontSize: "20px",
            color:
              revealedGrid[i][j] === 0 ? "lightgrey" : numColorsMap[grid[i][j]],
            border: revealedGrid[i][j] === 1 ? "0" : null
          }}
          onClick={() => updateTileState(i, j)}
          onContextMenu={() => toggleFlag(i, j)}
        >
          {renderTile(i, j)}
        </Button>
      );
    }
  }

  return (
    <>
      {openCongrats && <Congrats close={() => setOpenCongrats(false)} />}
      {openGameOver && <GameOver close={() => setOpenGameOver(false)} />}
      {buttons}
    </>
  );
});

export default Grid;
