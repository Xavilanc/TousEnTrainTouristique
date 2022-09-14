import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import Administrator from "./pages/Administrator";
import CreateUser from "./pages/CreateUser";
import Train from "./pages/Train";
import UserConnection from "./pages/UserConnection";
import User from "./pages/User";
import "./App.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/administrateur" element={<Administrator />} />
          <Route path="/creation-de-compte" element={<CreateUser />} />
          <Route path="/train" element={<Train />} />
          <Route path="/connexion" element={<UserConnection />} />
          <Route path="/utilisateur" element={<User />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
