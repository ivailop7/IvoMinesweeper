import React from "react";
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

const Tiles = () => {
  let a = [];
  for (let i = 0; i < 100; i++) {
    a.push(<Button square id={i}>{i}</Button>);
  }
  return <>{a}</>;
}

function App() {
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
        <Tiles/>
      </WindowContent>
    </Window>
    </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
