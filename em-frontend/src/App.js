import React, { useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import SignUp from "./components/Auth/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";

const isAuthenticated = () => {
  // Implement your authentication logic here and return true if authenticated, false otherwise.
  // For example, you can check if the user has a valid token or session.
  // This is just a placeholder function.
  return false; // Change this to your actual authentication logic.
};

const getUserRole = () => {
  // Implement your logic to get the user's role (seller or buyer).
  // For example, you can fetch the role from the backend after successful authentication.
  // This is just a placeholder function.
  return "seller"; // Change this to your actual role retrieval logic.
};

const App = () => {
  const authenticated = isAuthenticated();
  const userRole = authenticated ? getUserRole() : null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      navigate("/auth"); // Navigate to the "/auth" route
    }

    if (authenticated) {
      navigate("/");
    }
  }, [authenticated, navigate]);

  return (
    <div>
      {authenticated && (
        <>
          <h1>My App</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </>
      )}
      <Routes>
        {/* Route for the auth page */}
        {!authenticated && <Route path="/auth" element={<SignUp />} />}

        {/* Route for authenticated users */}
        {authenticated && (
          <Route
            path="/"
            element={userRole === "seller" ? <About /> : <Contact />}
          />
        )}

        {/* Default "Not Found" route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
