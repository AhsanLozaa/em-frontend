// Products.js
import React, { useEffect, useState } from "react";
import SellerCard from "../Home/cards/sellerCard";
import { fetchAllProductsByPagination } from "../../api/ProductRequests";
import { Button } from "react-bootstrap";
import ProductCard from "../Home/cards/productCard";

const Products = ({ role }) => {
  // For the products
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(18);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await fetchAllProductsByPagination({ page, limit });
        if (data.products) {
          setProducts(data.products);
        }

        if (data.pagination.hasNextPage) {
          setHasMore(true);
        } else {
          setHasMore(false);
        }

        setPage(page + 1);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const loadMoreProducts = async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchAllProductsByPagination({ page, limit });
      if (data.products) {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
      }

      if (data.pagination.hasNextPage) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }
      setPage(page + 1);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h4>All Products ({products.length})</h4>

      <div className="seller-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {hasMore && (
        <>
          <Button
            disabled={isLoading}
            onClick={async () => {
              await loadMoreProducts();
            }}
          >
            Load More
          </Button>
        </>
      )}
    </div>
  );
};

export default Products;
