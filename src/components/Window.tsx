import React from "react";
import {
  Table,
  TableHeadCell,
  TableRow,
  TableDataCell,
  TableHead,
  TableBody,
  Window,
  WindowHeader,
  WindowContent,
  Button,
  Toolbar
} from "react95";
import mine from "../assets/mine.png";
import flag from "../assets/flag.png";
import Grid from "./Grid";

function WindowFrame() {
  const gridRef: any = React.useRef();
  let [numFlags, setNumFlags] = React.useState(0);

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
        <span>IvoMinesweeper</span>
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
      <Toolbar>
        <Button
          variant="menu"
          size="sm"
          onClick={() => gridRef.current.newGame()}
        >
          New Game
        </Button>
        <Button
          variant="menu"
          size="sm"
          onClick={() => gridRef.current.restartGame()}
        >
          Restart
        </Button>
        <Button
          variant="menu"
          size="sm"
          onClick={() => gridRef.current.solveGame()}
        >
          Solve
        </Button>
      </Toolbar>
      <Table>
        <TableHead>
          <TableRow head>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableDataCell style={{ textAlign: "center" }}>
              <img src={flag} alt="flag" width={16} height={16} />
            </TableDataCell>
            <TableDataCell>Flags</TableDataCell>
            <TableDataCell>{numFlags}</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell style={{ textAlign: "center" }}>
              <img src={mine} alt="mine" width={16} height={16} />
            </TableDataCell>
            <TableDataCell>Mines</TableDataCell>
            <TableDataCell>10</TableDataCell>
          </TableRow>
        </TableBody>
      </Table>
      <WindowContent style={{
        marginRight: "1px"
      }}>
        <Grid
          ref={gridRef}
          height={9}
          width={9}
          numMines={10}
          setFlagsCount={setNumFlags}
        />
      </WindowContent>
    </Window>
  );
}

export default WindowFrame;
