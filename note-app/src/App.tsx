import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./Pages/Homepage";
import { Intropage } from "./Pages/Intropage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intropage />} />
        <Route path="/Home" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
