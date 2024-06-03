// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import TelegramCallback from "./components/TelegramCallback";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />}  />
          <Route path="/auth/telegram/callback" element={<TelegramCallback />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
