import "./App.css";
import "./index.css";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Buy_Property from "./components/pages/Buy_Property";
import Sell_Property from "./components/pages/Sell_Property";
import Profile from "./components/pages/Profile";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Buy_Property" element={<Buy_Property />} />
        <Route path="/Sell_Property" element={<Sell_Property />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;