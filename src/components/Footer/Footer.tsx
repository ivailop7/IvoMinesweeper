import React from "react";
import { Bar, Button, Toolbar, AppBar } from "react95";
import fbicon from "../../assets/facebook.png";
import pinteresticon from "../../assets/pinterest.png";
import lnkedinicon from "../../assets/linkedin.png";
import twittericon from "../../assets/twitter.png";

function Footer() {
  return (
    <AppBar
      fixed={true}
      style={{ position: "fixed", top: "unset", bottom: "0px" }}
    >
      <Toolbar style={{ justifyContent: "center" }}>
        <Bar />
        <Button variant={"default"} style={{ border: "none" }} square>
          <img src={fbicon} />
        </Button>
        <Button variant={"default"} style={{ border: "none" }} square>
          <img src={twittericon} />
        </Button>
        <Button variant={"default"} style={{ border: "none" }} square>
          <img src={lnkedinicon} />
        </Button>
        <Button variant={"default"} style={{ border: "none" }} square>
          <img src={pinteresticon} />
        </Button>
        <Bar />
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
