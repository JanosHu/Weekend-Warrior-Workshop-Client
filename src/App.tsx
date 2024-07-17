import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import MainLayout from "./layouts/mainLayout/mainLayout";
import HomePage from "./pages/homePage/homePage";
import ProjectsPage from "./pages/projectsPage/projectsPage";
import WorkshopPage from "./pages/workshopPage/workshopPage";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Be Vietnam Pro",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="workshop" element={<WorkshopPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
