// Home.js
import React, { useEffect, useState } from "react";
import { fetchAllSellersByPagination } from "../../../api/SellerRequests";
import { fetchAllProductsByPagination } from "../../../api/ProductRequests";
import SellerCard from "../cards/sellerCard";
import ProductCard from "../cards/productCard";
import "./styles.scss";

const Buyer = () => {
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

  // For the Products
  const [productsPage, setProductsPage] = useState(1);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await fetchAllProductsByPagination({
          page: productsPage,
          limit: limit,
        });
        if (data.products) {
          setProducts(data.products);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {/* <h1>Buyer View</h1> */}

      {/* Sellers */}
      <div style={{ margin: "20px" }}>
        <h5>Stores</h5>

        <div className="seller-grid">
          {sellers.map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </div>

        <div className="view-all-link">
          <a href="/stores">Stores (View all)</a>
        </div>
      </div>

      {/* Products */}
      <div style={{ margin: "20px" }}>
        <h5>Products</h5>
        <div className="seller-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="view-all-link">
          <a href="/products">Products (View all)</a>
        </div>
      </div>
    </>
  );
};

export default Buyer;
