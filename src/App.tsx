import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "./styles/GlobalStyles";

import { Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <ToastContainer className="toast-container" />
    </BrowserRouter>
  );
}

export default App;
