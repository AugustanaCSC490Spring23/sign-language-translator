import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function requireAuth(Component) {
  function AuthenticatedComponent(props) {
    const navigate = useNavigate();

    useEffect(() => {
      const jwt = localStorage.getItem("jwt");
      if (!jwt) {
        navigate("/login");
      }
    }, [navigate]);

    return <Component {...props} />;
  }

  return AuthenticatedComponent;
}

export default requireAuth;
