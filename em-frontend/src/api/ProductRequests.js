import API_ENDPOINT from "./httpEndpoint";

export const fetchAllProductsByPagination = ({ page, limit }) =>
  API_ENDPOINT.get(`/products/all`, { params: { page, limit } });
