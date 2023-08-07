import React, { useEffect, useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import SignUp from "./components/Auth/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { verifyAccessToken } from "./api/AuthRequests";
import AppNavBar from "./Widgets/AppNavBar";
import SellerNavBar from "./Widgets/SellerNavBar/SellerNavBar";

const App = () => {
  const user = useSelector((state) => state.authReducer.authData);

  // const authenticated = isAuthenticated();
  const [authenticated, setAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const { accessToken, role } = user;
        if (accessToken) {
          setUserRole(role);
          try {
            const { data } = await verifyAccessToken();
            if (data.success) {
              setAuthenticated(true);
              navigate("/home");
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
      }
    };

    fetchData();
  }, [user]);

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
          <div>
            {userRole === "buyer" && <AppNavBar userRole={userRole} />}
            {userRole === "seller" && <SellerNavBar role={userRole} />}
            {/* <AppNavBar role={userRole} /> */}
          </div>
          {/* <AppNavBar /> */}
          {/* <h1>My App</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav> */}
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
