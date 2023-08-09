// Home.js
import React from "react";
import Buyer from "./buyer/buyer";

const Home = ({ role }) => {
  return (
    <>
      {/* Buyer */}
      {role === "buyer" && (
        <div>
          <Buyer />
        </div>
      )}
      {/* Seller */}
      {role === "seller" && <div></div>}
    </>
  );
};

export default Home;
