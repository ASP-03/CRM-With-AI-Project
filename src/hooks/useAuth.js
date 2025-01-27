import { useState, useEffect } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Logic for checking user authentication
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated;
};

export default useAuth;
