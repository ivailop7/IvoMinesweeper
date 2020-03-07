import React from "react";
import { List, ListItem, Button, Toolbar, AppBar } from "react95";

import fbicon from "../../assets/facebook.png";
import pinteresticon from "../../assets/pinterest.png";
import lnkedinicon from "../../assets/linkedin.png";
import twittericon from "../../assets/twitter.png";
import share from "../../assets/share_icon.png";

function ShareMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {open && (
        <List
          horizontalAlign="left"
          verticalAlign="bottom"
          open={open}
          onClick={() => setOpen(false)}
          style={{ verticalAlign: "middle" }}
        >
          <ListItem
            onClick={() =>
              window.open(
                "http://www.facebook.com/sharer.php?u=http://minesweeper.ivaylopavlov.com"
              )
            }
          >
            <img width={24} height={24} src={fbicon} /> Facebook
          </ListItem>
          <ListItem
            onClick={() =>
              window.open(
                "https://twitter.com/share?url=http://minesweeper.ivaylopavlov.com&amp;text=I%20played%20IvoMinesweeper%20at&amp;hashtags=IvoMinesweeper"
              )
            }
          >
            <img width={24} height={24} src={twittericon} /> Twitter
          </ListItem>
          <ListItem
            onClick={() =>
              window.open(
                "http://www.linkedin.com/shareArticle?mini=true&amp;url=http://minesweeper.ivaylopavlov.com"
              )
            }
          >
            <img width={24} height={24} src={lnkedinicon} /> Linkedin
          </ListItem>
          <ListItem
            onClick={() =>
              window.open(
                "https://pinterest.com/pin/create/button/?url=minesweeper.ivaylopavlov.com&media=minesweeper.ivaylopavlov.com&description=IvoMinesweeper"
              )
            }
          >
            <img width={24} height={24} src={pinteresticon} /> Pinterest
          </ListItem>
        </List>
      )}
      <Button
        onClick={() => setOpen(!open)}
        active={open}
        style={{ fontWeight: "bold" }}
      >
        <img
          src={share}
          width={16}
          height={16}
          style={{ marginLeft: -2, marginRight: 4 }}
        />
        Share
      </Button>
    </div>
  );
}

function Header() {
  return (
    <AppBar>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <ShareMenu />
        <div style={{ justifyContent: "right" }}>
          <Button onClick={() => {}}>Visit Blog</Button>
          <Button onClick={() => {}}>View in GitHub</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
