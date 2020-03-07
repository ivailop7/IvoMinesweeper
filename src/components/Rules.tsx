import React from "react";
import { Window, WindowHeader, WindowContent, Button } from "react95";
import { popupWindowStyle, popupWindowHeaderStyle, closeWindowButtonStyle } from "../common-styles";

function RulesPopup(props: any) {
  return (
    <div style={{ boxShadow: "5px 10px #888888" }}>
      <Window style={popupWindowStyle} >
        <WindowHeader style={popupWindowHeaderStyle}>
          <span>How To Play</span>
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
          <div style={{ fontWeight: "bold" }}>Controls</div>
          <br />
          Left-click to open a cell.
          <br />
          Right-click to toggle a flag on a cell. (Sorry mobile users.)
          <br />
          <br />
          <div style={{ fontWeight: "bold" }}>Goal</div>
          <br />
          When you open a cell, it reveals a number that shows how many mines
          are around that cell, including all diagonals.
          <br />
          Clicking on a cell without a number, will reveal all adjacent empty
          cells. The goal is to reveal all cells, without clicking on a mine.
          <br />
          <br />
          Good Luck!
          <br />
          <br />
          <Button onClick={() => props.close()}>Close</Button>
        </WindowContent>
      </Window>
    </div>
  );
}

export default RulesPopup;
