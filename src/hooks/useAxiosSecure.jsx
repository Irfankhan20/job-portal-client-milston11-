import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../context/authContext/AuthContext";
import { useNavigate } from "react-router-dom";

const axiosConstance = axios.create({
  baseURL: "https://job-portal-sever-lilac.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosConstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error caught in interceptors", error);
        if (error.status === 401 || error.status === 403) {
          console.log("need to logout user");
          signOutUser()
            .then(() => {
              console.log("logout user");
              navigate("/signin");
            })
            .catch((error) => console.log(error));
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, signOutUser]);
  return axiosConstance;
};

export default useAxiosSecure;
