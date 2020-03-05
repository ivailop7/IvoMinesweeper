import React from "react";
import { List, Divider, ListItem, Bar, Button, Toolbar, AppBar } from "react95";
import smiley from "../../assets/smiley.png";
import pegsolitaire from "../../assets/peg_solitaire.png";
import sudoku from "../../assets/sudoku.png";
import tetris from "../../assets/tetris.png";

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
          verticalAlign="top"
          open={open}
          onClick={handleClose}
        >
          <ListItem>How to play</ListItem>
          <Divider/>
          <ListItem>About</ListItem>
        </List>
      )}
      <Button
        onClick={handleClick}
        active={open}
        style={{ fontWeight: "bold" }}
      >
        <img
          src={smiley}
          width={16}
          height={16}
          style={{ marginLeft: -2, marginRight: 4 }}
        />
        Menu
      </Button>
    </div>
  );
}


function Footer() {
  return (
    <AppBar
      fixed={true}
      style={{ position: "fixed", top: "unset", bottom: "0px" }}
    >
      
      <Toolbar style={{ justifyContent: "left" }}>
        <Menu/>
        <Bar />
        
        <Button variant={"default"} style={{ border: "none" }} square onClick={() => window.open("http://sudoku.ivaylopavlov.com/")}>
        <img src={sudoku} width={32} height={32}/>
        </Button>
        <Button variant={"default"} style={{ border: "none" }} square onClick={() => window.open("http://tetris.ivaylopavlov.com/")}>
        <img src={tetris} width={32} height={32}/>
        </Button>
        <Button variant={"default"} style={{ border: "none" }} square onClick={() => window.open("http://pegsolitaire.ivaylopavlov.com/")}>
          <img src={pegsolitaire} width={32} height={32}/>
        </Button>
        <Bar />
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
