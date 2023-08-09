// StoreDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StoreDetails = ({ role }) => {
  const { sellerId } = useParams();

  const [currentSellerData, setCurrentSellerData] = useState();

  useEffect(() => {
    const fetchSellerData = async () => {
      try {
        if (sellerId) {
          // make the api call here to fetch the seller data.
          setCurrentSellerData();
        }
      } catch (error) {}
    };

    fetchSellerData();
  }, []);

  return (
    <>
      <h1>Thi is store details page</h1>
      <p>{sellerId}</p>
      {/* write the code here to show the seller information and the seler products information */}
      {/* make use of the components created previously */}
    </>
  );
};

export default StoreDetails;
