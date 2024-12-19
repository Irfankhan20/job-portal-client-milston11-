import { useContext } from "react";
import AuthContext from "../context/authContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className=" h-screen justify-center flex">
        <span className="self-center text-9xl text-secondary loading loading-bars loading-lg lg:w-14"></span>
      </div>
    );
  } else if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/signin"></Navigate>;
};

export default PrivateRoute;
