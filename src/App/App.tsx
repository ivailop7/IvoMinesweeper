import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  Hourglass,
  reset,
  Table,
  TableHeadCell,
  TableRow,
  TableDataCell,
  TableHead,
  TableBody,
  themes,
  Bar,
  Window,
  WindowHeader,
  WindowContent,
  List,
  ListItem,
  Button,
  Divider,
  Toolbar,
  AppBar
} from "react95";
import mine from "../assets/mine.png";
import flag from "../assets/flag.png";
import smiley from "../assets/smiley.png";
import fbicon from "../assets/facebook.png";
import pinteresticon from "../assets/pinterest.png";
import lnkedinicon from "../assets/linkedin.png";
import twittericon from "../assets/twitter.png";

// Easy = 9x9, 10 mines
// Medium = 16x16, 40 mines
// Hard = 30x30, 160 mines
// maybe "Shift + Click" to flag
const ResetStyles = createGlobalStyle`
  ${reset}
`;

function Menu() {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {open && (
        <List
          horizontalAlign="left"
          verticalAlign="bottom"
          open={open}
          onClick={handleClose}
        >
          <ListItem>👨‍💻 Change Size</ListItem>
          <Divider />
          <ListItem disabled>🔙 About</ListItem>
        </List>
      )}
      <Button
        onClick={handleClick}
        active={open}
        style={{ fontWeight: "bold" }}
      >
        <img src={smiley} width={16} height={16} style={{ marginLeft: -2, marginRight: 4 }} />
        Menu
      </Button>
    </div>
  );
}

const generateField = (width: number, height: number, numMines: number) => {
  let field: any = [];
  for (let i = 0; i < height; i++) {
    field[i] = [];
    for (let j = 0; j < width; j++) {
      field[i][j] = 0;
    }
  }
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

const Tiles = (field: any) => {
  let grid = field.field;
  console.log("Field", field);
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
            id={i + j}
            size="md"
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
          >
            {grid[i][j]}
          </Button>
        );
      }
    }
  }
  return <>{a}</>;
};

function App() {
  const field = generateField(9, 9, 10);
  const [field1, setField] = useState("");
  return (
    <div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <AppBar>
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Menu />
            <div style={{ justifyContent: "right" }}>
              <Button onClick={() => {}}>Visit Blog</Button>
              <Button onClick={() => {}}>View in GitHub</Button>
            </div>
          </Toolbar>
        </AppBar>
        <div
          style={{
            padding: "8rem",
          }}
        >
          <Window style={{ width: 380 }}>
            <WindowHeader
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <span>IvoMinesweeper</span>
              <Button
                style={{ marginRight: "-6px", marginTop: "1px" }}
                size={"sm"}
                square
              >
                <span
                  style={{ fontWeight: "bold", transform: "translateY(-1px)" }}
                >
                  x
                </span>
              </Button>
            </WindowHeader>
            <Toolbar>
              <Button variant="menu" size="sm">
                New Game
              </Button>
              <Button variant="menu" size="sm">
                Restart
              </Button>
              <Button variant="menu" size="sm">
                Solve
              </Button>
              {/* <Hourglass size={32} /> */}
            </Toolbar>
            <Table>
              <TableHead>
                <TableRow head>
                  <TableHeadCell>Type</TableHeadCell>
                  <TableHeadCell>Name</TableHeadCell>
                  <TableHeadCell></TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableDataCell style={{ textAlign: "center" }}>
                    <Hourglass size={16} />
                  </TableDataCell>
                  <TableDataCell>Time Left</TableDataCell>
                  <TableDataCell>4:50</TableDataCell>
                </TableRow>
                <TableRow>
                  <TableDataCell style={{ textAlign: "center" }}>
                    <img src={flag} alt="flag" width={16} height={16} />
                  </TableDataCell>
                  <TableDataCell>Flags</TableDataCell>
                  <TableDataCell>5</TableDataCell>
                </TableRow>
                <TableRow>
                  <TableDataCell style={{ textAlign: "center" }}>
                    <img src={mine} alt="mine" width={16} height={16} />
                  </TableDataCell>
                  <TableDataCell>Mines</TableDataCell>
                  <TableDataCell>10</TableDataCell>
                </TableRow>
              </TableBody>
            </Table>
            <WindowContent>
              <Tiles field={field} />
            </WindowContent>
          </Window>
        </div>
        <AppBar fixed={true} style={{"position": "fixed", "top": "unset", "bottom": "0px"}}>
      <Toolbar style={{"justifyContent": "center"}}>
        <Bar />
        <Button variant={"default"} style={{"border": "none"}} square><img src={fbicon}/></Button>
        <Button variant={"default"} style={{"border": "none"}} square><img src={twittericon}/></Button>
        <Button variant={"default"} style={{"border": "none"}} square><img src={lnkedinicon}/></Button>
        <Button variant={"default"} style={{"border": "none"}} square><img src={pinteresticon}/></Button>
        <Bar />
      </Toolbar>
      </AppBar>
      </ThemeProvider>
    </div>
  );
}

export default App;
