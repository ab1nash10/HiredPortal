import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { pathName } = useLocation();
  if (isLoaded && !isSignedIn && isSignedIn !== "undefined") {
    return <Navigate to={"/?sign-in=true"} />;
  }
};

export default ProtectedRoutes;
