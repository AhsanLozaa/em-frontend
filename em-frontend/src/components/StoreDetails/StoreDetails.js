// StoreDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSellerBySellerId } from "../../api/SellerRequests";
import { fetchAllProductsBySellerId } from "../../api/ProductRequests";
import ProductCard from "../Home/cards/productCard";
import "../../styles/styles.scss";

const StoreDetails = ({ role }) => {
  const { sellerId } = useParams();

  const [currentStoreProducts, setCurrentStoreProducts] = useState([]);
  const [currentSellerData, setCurrentSellerData] = useState();
  const [page, setPage] = useState(1);
  const [limit, Limit] = useState(12);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    hasNextPage: true,
    hasPreviousPage: false,
    pageSize: limit,
    totalItems: 0,
    totalPages: 0,
  });

  useEffect(() => {
    const fetchSellerData = async () => {
      try {
        if (sellerId) {
          setCurrentSellerData();
          const sellerResponse = await fetchSellerBySellerId({
            sellerId: sellerId,
          });
          const productsResponse = await fetchAllProductsBySellerId({
            sellerId: sellerId,
            page: page,
            limit: limit,
          });
          const { data } = sellerResponse;
          const { pagination, products } = productsResponse.data;
          setCurrentStoreProducts(products);
          setCurrentSellerData(data);
          setPagination({ ...pagination });
        }
      } catch (error) {}
    };

    fetchSellerData();
  }, []);

  const fetchMoreProducts = async ({ selectedPage }) => {
    let toQueryPage = pagination.currentPage + 1;
    if (selectedPage) {
      toQueryPage = selectedPage;
    }

    const { data } = await fetchAllProductsBySellerId({
      sellerId: sellerId,
      page: toQueryPage,
      limit: limit,
    });
    const { products } = data;
    setPagination({ ...data.pagination });
    setCurrentStoreProducts([...products]);
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h3>{currentSellerData?.businessName}</h3>
        <p>{currentSellerData?.description}</p>

        <div className="seller-grid">
          {currentStoreProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination Code */}
        <div style={{ marginTop: "20px" }}>
          <nav aria-label="...">
            <ul className="pagination">
              <li
                className={`page-item ${
                  pagination.hasPreviousPage ? "enabled" : "disabled"
                }`}
              >
                <a
                  className="page-link"
                  tabIndex="-1"
                  onClick={async () => {
                    await fetchMoreProducts({
                      selectedPage: pagination.currentPage - 1,
                    });
                  }}
                >
                  Previous
                </a>
              </li>

              {Array.from({ length: pagination.totalPages }, (_, index) => (
                <li
                  key={index + 1}
                  className={`page-item ${
                    pagination.currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <a
                    className="page-link"
                    onClick={async () => {
                      await fetchMoreProducts({ selectedPage: index + 1 });
                    }}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}

              <li
                className={`page-item ${
                  pagination.hasNextPage ? "enabled" : "disabled"
                }`}
              >
                <a
                  className="page-link"
                  onClick={async () => {
                    await fetchMoreProducts({ selectedPage: undefined });
                  }}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default StoreDetails;
