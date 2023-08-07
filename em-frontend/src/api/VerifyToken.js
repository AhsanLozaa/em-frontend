import API_ENDPOINT from './httpEndpoint';

let intervalId = null;

/**
 * Function to verify the token by making a request to the backend.
 */
const verifyToken = () => {
  /**
   * Function to perform the token verification process.
   */
  const verify = async () => {
    try {
      const { data } = await API_ENDPOINT.post('/auth/verify-token');
      console.log('Token verification response:', data);
      if (data && data.success) {
        console.log('Token: VALID');
        return;
      }
      if (data && !data.success) {
        stopTokenVerification();
        console.log('Token: EXPIRED');
        clearInterval(intervalId);
        localStorage.clear();
        window.location.href = '/auth';
      }
    } catch (error) {
      console.error('Token verification error:', error);
    }
  };

  /**
   * Start the token verification process by setting up the interval.
   */
  const startTokenVerification = () => {
    // intervalId = setInterval(verify, 30 * 1000); // 30 seconds
    // intervalId = setInterval(verify, 30 * 60 * 1000); // 30 minutes || 60 seconds || 1000 milliseconds
    intervalId = setInterval(verify, 15 * 60 * 1000); // 10 minutes
  };

  /**
   * Stop the token verification process by clearing the interval.
   */
  const stopTokenVerification = () => {
    clearInterval(intervalId);
  };

  // Return an object with startTokenVerification and stopTokenVerification functions
  return {
    startTokenVerification,
    stopTokenVerification,
  };
};

export default verifyToken;
