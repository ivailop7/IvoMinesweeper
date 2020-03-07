import React from "react";
import { Window, WindowHeader, WindowContent, Button } from "react95";
import { popupWindowStyle, popupWindowHeaderStyle, closeWindowButtonStyle } from "../common-styles";
import flag from "../../assets/flag.png";

function AboutPopup(props: any) {
  return (
    <div style={{ boxShadow: "5px 10px #888888" }}>
      <Window style={popupWindowStyle} >
        <WindowHeader style={popupWindowHeaderStyle}>
          <span>About</span>
          <Button
            style={closeWindowButtonStyle}
            size={"sm"}
            square
            onClick={() => props.close()}
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
          This game was developed as a part of a learning exercise.
          <br />
          <br />
          You can read more about the building process in this{" "}
          <a
            href="https://www.ivaylopavlov.com/building-a-minesweeper-game-using-react-hooks"
            style={{ textDecoration: "underline" }}
          >
            Blog Post
          </a>.
          <br />
          <br />
          Ivaylo Pavlov (March 2020)
          <br />
          <br />
          <Button onClick={() => props.close()}>Close</Button>
        </WindowContent>
      </Window>
    </div>
  );
}

export default AboutPopup;
