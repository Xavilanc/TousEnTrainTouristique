import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import Administrator from "./pages/Administrator";
import CreateUser from "./pages/CreateUser";
import Train from "./pages/Train";
import UserConnexion from "./pages/UserConnexion";
import ModifyPasswordPage from "./pages/ModifyPasswordPage";
import AdminReviews from "./pages/AdminReviews";
import AdminReview from "./pages/AdminReview";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/administrateur" element={<Administrator />} />
          <Route path="/administrateur/reviews" element={<AdminReviews />} />
          <Route path="/administrateur/reviews/:id" element={<AdminReview />} />
          <Route path="/creation-de-compte" element={<CreateUser />} />
          <Route path="/train" element={<Train />} />
          <Route path="/connexion" element={<UserConnexion />} />
          <Route path="/modification/" element={<ModifyPasswordPage />} />
          <Route path="/modification/:id" element={<ModifyPasswordPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
