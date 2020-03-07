import React from "react";
import { Window, WindowHeader, WindowContent, Button } from "react95";

function RulesPopup(props: any) {
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
          <span>How To Play</span>
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
          <Button onClick={() => props.closeFunc()}>Close</Button>
        </WindowContent>
      </Window>
    </div>
  );
}

export default RulesPopup;
