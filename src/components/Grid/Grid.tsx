import React, {useState} from "react";
import { Button } from "react95";
import mine from "../../assets/mine.png";
import flag from "../../assets/flag.png";
import smiley from "../../assets/smiley.png";

const generateEmptyField = (width: number, height: number, emptyItem: number | boolean) => {
  let field: any = [];
  for (let i = 0; i < height; i++) {
    field[i] = [];
    for (let j = 0; j < width; j++) {
      field[i][j] = emptyItem;
    }
  }

  return [...field];
};
export const generateSolvedField = (
  width: number,
  height: number,
  numMines: number
) => {
  let field: any = generateEmptyField(width, height, 0);
  // add mines
  for (let k = 0; k < numMines; k++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    field[x][y] = "x";
  }
  // populate numbers
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (field[i][j] === "x") {
        // increment top left
        if (field[i - 1] && typeof field[i - 1][j - 1] === "number")
          field[i - 1][j - 1]++;
        // increment top
        if (field[i - 1] && typeof field[i - 1][j] === "number")
          field[i - 1][j]++;
        // increment top right
        if (field[i - 1] && typeof field[i - 1][j + 1] === "number")
          field[i - 1][j + 1]++;
        // increment right
        if (typeof field[i][j + 1] === "number") field[i][j + 1]++;
        // increment bottom right
        if (field[i + 1] && typeof field[i + 1][j + 1] === "number")
          field[i + 1][j + 1]++;
        // increment bottom
        if (field[i + 1] && typeof field[i + 1][j] === "number")
          field[i + 1][j]++;
        // increment bottom left
        if (field[i + 1] && typeof field[i + 1][j - 1] === "number")
          field[i + 1][j - 1]++;
        // increment left
        if (typeof field[i][j - 1] === "number") field[i][j - 1]++;
      }
    }
  }
  return [...field];
};

const numColorsMap: any = {
  "x": null,
  0: "lightgrey",
  1: "blue",
  2: "green",
  3: "red",
  4: "purple",
  5: "maroon",
  6: "turquoise",
  7: "black",
  8: "grey",   
}

const Grid = (props: any) => {
  let [grid, setGrid] = useState(generateSolvedField(props.height, props.width, props.numMines));
  let [revealedGrid, setRevealedGrid] = useState(generateEmptyField(props.width, props.height, false));

  const updateTileState = (i: number, j: number) => {
    grid[i][j] === 0 && revealNeighbourZeros(i,j);
    revealedGrid[i][j] = true;
    setRevealedGrid([...revealedGrid]);
  }

  const revealNeighbourZeros = (i: number, j: number) => {
    
  }

  let buttons = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      buttons.push(
          <Button square id={i + ":" + j}
            variant={revealedGrid[i][j] ? "flat" : "default"}
            style={{
              backgroundColor: "lightgrey",
              fontFamily: "Visitor",
              fontSize: "20px",
              color: numColorsMap[grid[i][j]],
              border: revealedGrid[i][j] ? "0" : null
            }}
            onClick={() => updateTileState(i,j)}
          >
            {typeof(grid[i][j]) === "number" ?
              grid[i][j] : 
              <img src={mine} alt="mine" width={10} height={10} />
            }
          </Button>
        );
    }
  }
  return <>{buttons}</>;
};

export default Grid;
