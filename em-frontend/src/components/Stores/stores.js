// Stores.js
import React, { useEffect, useState } from "react";
import { fetchAllSellersByPagination } from "../../api/SellerRequests";
import SellerCard from "../Home/cards/sellerCard";

const Stores = ({ role }) => {
  // For the Sellers
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const { data } = await fetchAllSellersByPagination(page, limit);
        if (data.sellers) {
          setSellers(data.sellers);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSellers();
  }, []);

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h4>All Stores</h4>

        <div className="seller-grid">
          {sellers.map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Stores;
