import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import Administrator from "./pages/Administrator";
import CreateUser from "./pages/CreateUser";
import Train from "./pages/Train";
import UserConnection from "./pages/UserConnection";
import User from "./pages/User";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/Administrator" element={<Administrator />} />
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/Train" element={<Train />} />
          <Route path="/UserConnection" element={<UserConnection />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
