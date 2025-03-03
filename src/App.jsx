import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";


import Login from "./forms/Login/Login";
import UnRegisterNavBar from "./layouts/NoRegisterNavbar/UnRegisterNavBar";
import NavBar from "./layouts/UserNavbar/NavBar";
import Landing from "./pages/Landing/Landing";




const theme = createTheme({
  typography: {
    fontFamily: "Nunito, serif",
    h1: { fontFamily: "Poppins, serif" },
    h2: { fontFamily: "Poppins, serif" },
    h3: { fontFamily: "Poppins, serif" },
    h4: { fontFamily: "Poppins, serif" },
    h5: { fontFamily: "Poppins, serif" },
    h6: { fontFamily: "Poppins, serif" },
  },
  palette: {
    background: {
      default: "#1f0648",
    },
    text: {},
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/landing" element={<Landing />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
