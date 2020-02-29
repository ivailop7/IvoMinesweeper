import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Hourglass, reset, Table, TableHeadCell, TableRow, TableDataCell, TableHead, TableBody, themes, Bar, Window, WindowHeader, WindowContent, List, ListItem, Button, Avatar, Divider, Toolbar, AppBar } from "react95";

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
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {open && (
        <List horizontalAlign="left" verticalAlign="bottom" open={open} onClick={handleClose}>
          <ListItem>👨‍💻 Change Size</ListItem>
          <Divider />
          <ListItem disabled>🔙 About</ListItem>
        </List>
      )}
      <Button onClick={handleClick} active={open} style={{ fontWeight: 'bold' }}>
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
    field[x][y] = 'x';
  }
  // populate numbers
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (field[i][j] === 'x') {
        // increment top left
        if (field[i-1] && typeof(field[i-1][j-1]) === "number") field[i-1][j-1]++;
        // increment top
        if (field[i-1] && typeof(field[i-1][j]) === "number") field[i-1][j]++;
        // increment top right
        if (field[i-1] && typeof(field[i-1][j+1]) === "number") field[i-1][j+1]++;
        // increment right
        if (typeof(field[i][j+1]) === "number") field[i][j+1]++;
        // increment bottom right
        if (field[i+1] && typeof(field[i+1][j+1]) === "number") field[i+1][j+1]++;
        // increment bottom
        if (field[i+1] && typeof(field[i+1][j]) === "number") field[i+1][j]++;
        // increment bottom left
        if (field[i+1] && typeof(field[i+1][j-1]) === "number") field[i+1][j-1]++;
        // increment left
        if (typeof(field[i][j-1]) === "number") field[i][j-1]++;
      }
    }    
  }  
  return [...field];
}

const Tiles = (field: any) => {
  let grid = field.field;
  console.log("Field", field);
  let a = [];
  const opened = {"backgroundColor": "lightgrey"};
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      a.push(<Button variant={grid[i][j] === 0 ? "flat" : "default"} style={grid[i][j] === 0 ? {...opened} : null} square id={i+j}>{grid[i][j]}</Button>);
    }
  }
  return <>{a}</>;
}

function App() {
  const field = generateField(10,10,20);
  const [field1, setField] = useState("");
  return (
    <div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <AppBar>
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <Menu/>
            <Bar/>
              <Button square>🌿</Button>
              <Button square>🔥</Button>
              <Button square>⚡</Button>
            <Bar/>
            <Button onClick={()=>{}}>Visit Blog</Button>
            <Button onClick={()=>{}}>View in GitHub</Button>
          </Toolbar>
        </AppBar>
        <div
      style={{
        padding: '8rem',
      }}
    >
      <Window style={{ width: 400 }}>
      <WindowHeader
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>IvoMinesweeper</span>
        <Button style={{ marginRight: '-6px', marginTop: '1px' }} size={'sm'} square>
          <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
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
                <TableHeadCell>Lvl.</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableDataCell style={{ textAlign: 'center' }}>🌿</TableDataCell>
                <TableDataCell>Cells Revealed</TableDataCell>
                <TableDataCell>64</TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell style={{ textAlign: 'center' }}>🔥</TableDataCell>
                <TableDataCell>Charizard</TableDataCell>
                <TableDataCell>209</TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell style={{ textAlign: 'center' }}>⚡</TableDataCell>
                <TableDataCell>Pikachu</TableDataCell>
                <TableDataCell>82</TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
      <WindowContent>
        <Tiles field={field}/>
      </WindowContent>
    </Window>
    </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
