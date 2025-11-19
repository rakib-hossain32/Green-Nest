import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { Atom } from "react-loading-indicators";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();
    // console.log(location);
    
    // console.log(loading)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Atom color="#32cd32" size="medium" text="" textColor="" />
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/login"} />;
  }
};

export default PrivateRouter;
