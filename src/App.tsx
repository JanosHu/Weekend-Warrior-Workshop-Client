import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import "./App.css";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Be Vietnam Pro",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
