import React from "react";
import { Window, WindowHeader, WindowContent, Button } from "react95";
import flag from "../../assets/flag.png";

function AboutPopup(props: any) {
  return (
    <div style={{ boxShadow: "5px 10px #888888" }}>
      <Window
        style={{
          width: 380,
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
            onClick={() => props.closeFunc()}
          >
            <span style={{ fontWeight: "bold", transform: "translateY(-1px)" }}>
              x
            </span>
          </Button>
        </WindowHeader>
        <WindowContent>
          <div style={{ fontWeight: "bold" }}>
            <img src={flag} height={24} width={24} /> IvoMinesweeper
          </div>
          <br />
          <br />
          <br />
          This game was developed as a part of a learning exercise.
          <br />
          <br />
          You can read more about the building process in this{" "}
          <a
            href="https://www.ivaylopavlov.com/building-a-minesweeper-game-using-react-hooks"
            style={{ textDecoration: "underline" }}
          >
            Blog Post
          </a>
          .
          <br />
          <br />
          Ivaylo Pavlov (March 2020)
          <br />
          <br />
          <Button onClick={() => props.closeFunc()}>Close</Button>
        </WindowContent>
      </Window>
    </div>
  );
}

export default AboutPopup;
