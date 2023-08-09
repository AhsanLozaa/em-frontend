import API_ENDPOINT from "./httpEndpoint";

export const fetchAllSellersByPagination = ({ page = 1, limit = 10 }) =>
  API_ENDPOINT.get(`/users/seller`, { params: { page, limit } });
