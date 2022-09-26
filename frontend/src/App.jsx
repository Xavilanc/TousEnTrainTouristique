/* eslint-disable object-shorthand */
/* eslint-disable react/jsx-no-constructed-context-values */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import Administrator from "./pages/Administrator";
import CreateUser from "./pages/CreateUser";
import Train from "./pages/Train";
import UserConnexion from "./pages/UserConnexion";
import ModifyPasswordPage from "./pages/ModifyPasswordPage";
import ProfilPage from "./pages/ProfilPage";
import AdminReviews from "./pages/AdminReviews";
import AdminReview from "./pages/AdminReview";
import UserContext from "./services/UserContext";
import "./App.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [refresh, setRefresh] = React.useState(false);
  return (
    <Router>
      <div className="App">
        <UserContext.Provider
          value={{ refresh: refresh, setRefresh: setRefresh }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/administrateur" element={<Administrator />} />
            <Route path="/administrateur/reviews" element={<AdminReviews />} />
            <Route
              path="/administrateur/reviews/:id"
              element={<AdminReview />}
            />
            <Route path="/creation-de-compte" element={<CreateUser />} />
            <Route path="/train/:id" element={<Train />} />
            <Route path="/connexion" element={<UserConnexion />} />
            <Route path="/modification/" element={<ModifyPasswordPage />} />
            <Route path="/modification/:id" element={<ModifyPasswordPage />} />
            <Route path="/profil/" element={<ProfilPage />} />
          </Routes>
          <Footer />
        </UserContext.Provider>
      </div>
    </Router>
  );
}
export default App;
