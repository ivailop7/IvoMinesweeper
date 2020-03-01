import React, {useState} from "react";
import { Button } from "react95";
import mine from "../../assets/mine.png";
import flag from "../../assets/flag.png";
import smiley from "../../assets/smiley.png";

const generateEmptyField = (width: number, height: number) => {
  let field: any = [];
  for (let i = 0; i < height; i++) {
    field[i] = [];
    for (let j = 0; j < width; j++) {
      field[i][j] = 0;
    }
  }

  return [...field];
};
export const generateSolvedField = (
  width: number,
  height: number,
  numMines: number
) => {
  let field: any = generateEmptyField(width, height);
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

const Grid = (props: any) => {
  let [grid, setGrid] = useState(generateSolvedField(props.height, props.width, props.numMines));
  let [revealedGrid, setRevealedGrid] = useState(generateEmptyField(props.width, props.height));

  console.log("grid", grid);

  let a = [];
  let style = {
    backgroundColor: "lightgrey",
    fontFamily: "Visitor",
    color: "black"
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "x") {
        let xstyle = {
          backgroundColor: "lightgrey",
          fontFamily: "Visitor",
          color: "black",
          // "border": "0",
          padding: "0",
          margin: "0"
        };
        a.push(
          <Button
            variant={grid[i][j] === 0 ? "flat" : "default"}
            style={xstyle}
            square
            id={i + ":" + j}
            size="md"
            onClick={() => {
                revealedGrid[i][j] = true;
                setRevealedGrid([...revealedGrid]);
            }}
          >
            <img src={mine} alt="mine" width={10} height={10} />
          </Button>
        );
      } else if (grid[i][j] === 0) {
        let xstyle = {
          backgroundColor: "lightgrey",
          fontFamily: "Visitor",
          color: "lightgrey",
          border: "0"
        };
        a.push(
          <Button
            variant={grid[i][j] === 0 ? "flat" : "default"}
            style={xstyle}
            square
            id={i + j}
            onClick={() => {
                revealedGrid[i][j] = true;
                setRevealedGrid([...revealedGrid]);
            }}
          >
            {0}
          </Button>
        );
      } else if (grid[i][j] === 1) {
        let xstyle = {
          backgroundColor: "lightgrey",
          fontFamily: "Visitor",
          color: "blue",
          fontSize: "20px"
        };
        a.push(
          <Button
            variant={grid[i][j] === 0 ? "flat" : "default"}
            style={xstyle}
            square
            id={i + j}
            onClick={() => {
                revealedGrid[i][j] = true;
                setRevealedGrid([...revealedGrid]);
            }}
          >
            {grid[i][j]}
          </Button>
        );
      } else if (grid[i][j] === 2) {
        let xstyle = {
          backgroundColor: "lightgrey",
          fontFamily: "Visitor",
          color: "green",
          fontSize: "20px"
        };
        a.push(
          <Button
            variant={grid[i][j] === 0 ? "flat" : "default"}
            style={xstyle}
            square
            id={i + j}
            onClick={() => {
                revealedGrid[i][j] = true;
                setRevealedGrid([...revealedGrid]);
            }}
          >
            {grid[i][j]}
          </Button>
        );
      } else if (grid[i][j] === 3) {
        let xstyle = {
          backgroundColor: "lightgrey",
          fontFamily: "Visitor",
          color: "red",
          fontSize: "20px"
        };
        a.push(
          <Button
            variant={grid[i][j] === 0 ? "flat" : "default"}
            style={xstyle}
            square
            id={i + j}
            onClick={() => {
                revealedGrid[i][j] = true;
                setRevealedGrid([...revealedGrid]);
            }}
          >
            {grid[i][j]}
          </Button>
        );
      } else if (grid[i][j] === 4) {
        let xstyle = {
          backgroundColor: "lightgrey",
          fontFamily: "Visitor",
          color: "purple",
          fontSize: "20px"
        };
        a.push(
          <Button
            variant={grid[i][j] === 0 ? "flat" : "default"}
            style={xstyle}
            square
            id={i + j}
            onClick={() => {
                revealedGrid[i][j] = true;
                setRevealedGrid([...revealedGrid]);
            }}
          >
            {grid[i][j]}
          </Button>
        );
      } else if (grid[i][j] === 5) {
        let xstyle = {
          backgroundColor: "lightgrey",
          fontFamily: "Visitor",
          color: "maroon",
          fontSize: "20px"
        };
        a.push(
          <Button
            variant={grid[i][j] === 0 ? "flat" : "default"}
            style={xstyle}
            square
            id={i + j}
            onClick={() => {
                revealedGrid[i][j] = true;
                setRevealedGrid([...revealedGrid]);
            }}
          >
            {grid[i][j]}
          </Button>
        );
      } else if (grid[i][j] === 6) {
        let xstyle = {
          backgroundColor: "lightgrey",
          fontFamily: "Visitor",
          color: "turquoise",
          fontSize: "20px"
        };
        a.push(
          <Button
            variant={grid[i][j] === 0 ? "flat" : "default"}
            style={xstyle}
            square
            id={i + j}
            onClick={() => {
                revealedGrid[i][j] = true;
                setRevealedGrid([...revealedGrid]);
            }}
          >
            {grid[i][j]}
          </Button>
        );
      } else if (grid[i][j] === 7) {
        let xstyle = {
          backgroundColor: "lightgrey",
          fontFamily: "Visitor",
          color: "black",
          fontSize: "20px"
        };
        a.push(
          <Button
            variant={grid[i][j] === 0 ? "flat" : "default"}
            style={xstyle}
            square
            id={i + j}
            onClick={() => {
                revealedGrid[i][j] = true;
                setRevealedGrid([...revealedGrid]);
            }}
          >
            {grid[i][j]}
          </Button>
        );
      } else if (grid[i][j] === 8) {
        let xstyle = {
          backgroundColor: "lightgrey",
          fontFamily: "Visitor",
          color: "grey",
          fontSize: "20px"
        };
        a.push(
          <Button
            variant={grid[i][j] === 0 ? "flat" : "default"}
            style={xstyle}
            square
            id={i + j}
            onClick={() => {
                revealedGrid[i][j] = true;
                setRevealedGrid([...revealedGrid]);
            }}
          >
            {grid[i][j]}
          </Button>
        );
      } else {
        a.push(
          <Button
            variant={grid[i][j] === 0 ? "flat" : "default"}
            style={style}
            square
            id={i + j}
            onClick={() => {
                revealedGrid[i][j] = true;
                setRevealedGrid([...revealedGrid]);
            }}
          >
            {grid[i][j]}
          </Button>
        );
      }
    }
  }
  console.log(revealedGrid);
  return <>{a}</>;
};

export default Grid;
