import React from "react";
import { Window, WindowHeader, WindowContent, Button } from "react95";
import { popupWindowStyle, popupWindowHeaderStyle, closeWindowButtonStyle } from "../common-styles";
import mine from "../../assets/mine.png";

function GameOverPopup(props: any) {
  const shareOnFb = () => {
    const sharerURL = `https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fminesweeper.ivaylopavlov.com&
        title=I+played+IvoMinesweeper`;
    window.open(sharerURL, "facebook-share-dialog", "width=626,height=436");
    return false;
  };
  return (
    <div style={{ boxShadow: "5px 10px #888888" }}>
      <Window style={popupWindowStyle}>
        <WindowHeader style={popupWindowHeaderStyle}>
          <span>Game Over!</span>
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
          <img src={mine} height={24} width={24} />
          <div style={{ fontWeight: "bold" }}>Sorry! You lost. Try again!</div>
          <br />
          <br />
          You can close this popup and click "New Game" for a fresh start.
          <br />
          <br />
          <Button onClick={() => shareOnFb()}>
            Share The Game on Facebook
          </Button>
          <br />
          <br />
          <Button onClick={() => props.close()}>Close</Button>
        </WindowContent>
      </Window>
    </div>
  );
}

export default GameOverPopup;
