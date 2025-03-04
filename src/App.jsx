import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Login from "./forms/Login/Login";
import Register from "./forms/Register";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import FlightSearchPage from "./pages/VIajes";
import NavBar from "./layouts/UserNavbar/index";
import UnRegisterNavBar from "./layouts/NoRegisterNavbar/index";
import MyTickets from "./pages/MyTickets/index";

const theme = createTheme({
  typography: { fontFamily: "Nunito, sans-serif" },
  palette: { background: { default: "#1f0648" } },
});

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <NavbarWrapper />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search" element={<FlightSearchPage />} />
            <Route path="/my-tickets" element={<MyTickets />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

const NavbarWrapper = () => {
  const { user } = useAuth();
  return user ? <NavBar /> : <UnRegisterNavBar />;
};

export default App;
