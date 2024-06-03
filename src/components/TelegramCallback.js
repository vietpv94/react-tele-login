// src/components/TelegramCallback.js
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TelegramCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      // Store token and redirect or set login state
      localStorage.setItem("authToken", token);
      navigate("/");
    } else {
      // Handle error or failed login
      console.error("Login failed or token not received");
    }
  }, [location, navigate]);

  return <div>Logging in...</div>;
};

export default TelegramCallback;