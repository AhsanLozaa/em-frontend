import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import SignUp from "./components/Auth/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { verifyAccessToken } from "./api/AuthRequests";
import AppNavBar from "./Widgets/AppNavBar";
import SellerNavBar from "./Widgets/SellerNavBar/SellerNavBar";
import Profile from "./components/Profile/profile";
import Stores from "./components/Stores/stores";
import Products from "./components/Products/products";

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
              if (window.location.pathname === "/auth") {
                navigate("/");
              }
            } else {
              console.log("Failed to authenticates the access token");
              navigate("/auth");
            }
          } catch (error) {
            console.error("Error fetching data: (error @ app.js)", error);
            navigate("/auth");
          }
        }
      } else {
        setAuthenticated(false);
        setUserRole("");
        navigate("/auth");
      }
    };

    fetchData();
  }, [user]);

  // useEffect(() => {
  //   if (!authenticated) {
  //     navigate("/auth"); // Navigate to the "/auth" route
  //   }

  //   // if (authenticated) {
  //   //   if (window.location.pathname === "/auth") {
  //   //     navigate("/");
  //   //     // navigate("/home");
  //   //   }
  //   // }
  // }, [authenticated, navigate]);

  return (
    <div>
      {authenticated && (
        <>
          <div>
            {userRole === "buyer" && <AppNavBar role={userRole} />}
            {userRole === "seller" && <SellerNavBar role={userRole} />}
          </div>
        </>
      )}
      <Routes>
        {/* Route for the auth page */}
        {!authenticated && <Route path="/auth" element={<SignUp />} />}

        {/* Route for authenticated users */}
        {/* {authenticated && (
          <Route
            path="/"
            element={userRole === "seller" ? <About /> : <Contact />}
          />
        )} */}

        <Route path="/" element={<Home role={userRole} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/stores" element={<Stores role={userRole} />} />
        <Route path="/products" element={<Products role={userRole} />} />

        {/* Default "Not Found" route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
