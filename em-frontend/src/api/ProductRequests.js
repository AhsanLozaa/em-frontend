import API_ENDPOINT from "./httpEndpoint";

export const fetchAllProductsByPagination = ({ page, limit }) =>
  API_ENDPOINT.get(`/products/all`, { params: { page, limit } });

export const fetchAllProductsBySellerId = ({
  sellerId,
  page = 1,
  limit = 10,
}) => API_ENDPOINT.get(`/products/${sellerId}`, { params: { page, limit } });
