import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CryptoProvider } from "./context/CryptoContext";

import Home from "./pages/Home";
import Analysis from "./pages/Analysis";

import "./App.css";

function App() {

  return (

    <CryptoProvider>

      <BrowserRouter>

        <div className="app-container">

          <nav className="navbar">

            <h2 className="logo">CRYPTO-PULSE</h2>

            <div className="nav-links">
              <Link to="/">Market</Link>
              <Link to="/analysis">Analysis</Link>
            </div>

          </nav>

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/analysis" element={<Analysis />} />

          </Routes>

        </div>

      </BrowserRouter>

    </CryptoProvider>

  );
}

export default App;