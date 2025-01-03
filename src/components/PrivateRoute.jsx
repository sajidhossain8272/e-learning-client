import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true); // To handle async checking
  const [showModal, setShowModal] = useState(false); // Modal state

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Verify token with backend (optional)
      fetch("https://study-lab-server-side.vercel.app/api/protected", {
        headers: {
          Authorization: `Bearer ${token}`, // Ensure the token format is correct
        },
      })
        .then((response) => {
          if (response.ok) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        })
        .catch(() => setIsAuthenticated(false))
        .finally(() => setIsChecking(false));
    } else {
      setIsAuthenticated(false);
      setIsChecking(false);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated && !isChecking) {
      setShowModal(true);
    }
  }, [isAuthenticated, isChecking]);

  // Show a loading spinner or message while checking authentication
  if (isChecking) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg font-semibold">Loading...</div>
      </div>
    );
  }

  // Show modal if not authenticated
  if (!isAuthenticated && showModal) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg text-center">
          <h2 className="text-xl font-bold mb-4">Access Denied</h2>
          <p>You must login first to access this page.</p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
            onClick={() => (window.location.href = "/login")}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  // Render children if authenticated
  return children;
};

export default PrivateRoute;
