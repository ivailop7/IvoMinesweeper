import React from "react";
import { List, ListItem, Button, Divider, Toolbar, AppBar } from "react95";
import smiley from "../../assets/smiley.png";

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
          <ListItem>👨‍💻 How to play</ListItem>
          <Divider/>
          <ListItem>👨‍💻 About</ListItem>
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

function Header() {
  return (
    <AppBar>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Menu />
        <div style={{ justifyContent: "right" }}>
          <Button onClick={() => {}}>Visit Blog</Button>
          <Button onClick={() => {}}>View in GitHub</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
