import React from "react";
import { Window, WindowHeader, WindowContent, Button } from "react95";
import flag from "../../assets/flag.png";

function AboutPopup() {
  const closeAboutPopup = () => {
    console.log("close popup");
  };

  return (
    <Window
      style={{
        width: 360,
        position: "fixed",
        zIndex: "-1",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <WindowHeader
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <span>About</span>
        <Button
          style={{ marginRight: "-6px", marginTop: "1px" }}
          size={"sm"}
          square
        >
          <span style={{ fontWeight: "bold", transform: "translateY(-1px)" }}>
            x
          </span>
        </Button>
      </WindowHeader>
      <WindowContent>
        <img src={flag} height={24} width={24} />
        IvoMinesweeper
        <br />
        This game was developed as part of a learning exercise. You can read
        more about the building process in this{" "}
        <a href="TODO add link">blog post</a>.
        <br />
        <br />
        Ivaylo Pavlov (March 2020)
        <Button onClick={() => closeAboutPopup()}>Close</Button>
      </WindowContent>
    </Window>
  );
}

export default AboutPopup;
