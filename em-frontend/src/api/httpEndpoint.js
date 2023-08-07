import axios from "axios";
import { logOut } from "../redux/actions/AuthActions";
import store from "../redux/store/store";

// Create an instance of Axios with a base URL
const API_ENDPOINT = axios.create({
  baseURL: "http://localhost:5002",
});

// Add an interceptor to handle responses
API_ENDPOINT.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      // If the response status is 403 (Forbidden), JWT expired, trigger logout
      store.dispatch(logOut());
    }
    return Promise.reject(error);
  }
);

// Function to fetch the client's location from an API
const fetchClientLocation = async () => {
  try {
    const response = await axios.get("https://api.example.com/location");
    return response.data.location;
  } catch (error) {
    console.error("Error fetching client location:", error);
    return null;
  }
};

// Configuration object to specify which endpoints require location
const locationRequiredConfig = {
  "/api/location/": true,
};

// Add an interceptor to modify requests
API_ENDPOINT.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    // Include the JWT token in the Authorization header
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  // Check if the current request URL matches any of the location required endpoints
  const requireLocation = Object.keys(locationRequiredConfig).some((url) =>
    config.url.startsWith(url)
  );

  if (requireLocation) {
    // Fetch the client's location and include it in the request headers
    const location = await fetchClientLocation();
    if (location) {
      config.headers["Location"] = location;
    }
  }

  return config;
});

export default API_ENDPOINT;
