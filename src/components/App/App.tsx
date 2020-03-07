import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from "react95";
import Header from "../Header/Header";
import WindowFrame from "../Window/Window";
import Footer from "../Footer/Footer";

// Left to do: lose game, win game, about, rules pop ups
// update link in the about to blog

const ResetStyles = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <Header />
        <WindowFrame />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
