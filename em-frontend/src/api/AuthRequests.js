import API_ENDPOINT from "./httpEndpoint";

/**
 * Logs in the user with the provided form data.
 *
 * @param {Object} formData - The user login form data.
 * @returns {Promise} - A promise that resolves to the login response.
 */
export const logIn = (formData) => API_ENDPOINT.post("/auth/login", formData);

/**
 * Signs up the user with the provided form data.
 *
 * @param {Object} formData - The user signup form data.
 * @returns {Promise} - A promise that resolves to the signup response.
 */
export const signUp = (formData) => API_ENDPOINT.post("/auth/signup", formData);

export const getSignupVerificationCode = (reqBodyData) =>
  API_ENDPOINT.post("/auth/register", reqBodyData);
