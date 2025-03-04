import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";

import Landing from "./pages/Landing/Landing";

//forms
import Login from "./forms/Login/Login.jsx";

//componentes
import AccordionFlight from "./components/AccordionFlight.jsx";
import PassengerForm from "./components/PassengerForm.jsx";
import TicketSum from "./components/TicketSum.jsx";

//pages
import MyTickets from "./pages/MyTickets.jsx";
import SelectedFlight from "./pages/SelectedFlight.jsx";
import Payment from "./pages/Payment.jsx";
import PurchaseSumary from "./pages/PurchaseSumary.jsx";

import Seats from "./pages/seats.jsx";

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
            {/* Rutas para forms */}
            <Route path="/login" element={<Login />} />

            {/* Rutas para componentes */}
            <Route path="/accordion-flight" element={<AccordionFlight />} />
            <Route path="/passenger-form" element={<PassengerForm />} />
            <Route path="/ticket-sum" element={<TicketSum />} />

            {/* Rutas para pages */}
            <Route path="/my-tickets" element={<MyTickets />} />
            <Route path="/selected-flight" element={<SelectedFlight />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/purchase-sumary" element={<PurchaseSumary />} />
            <Route path="/seats" element={<Seats />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
