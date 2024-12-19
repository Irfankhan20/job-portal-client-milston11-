import { useContext } from "react";
import AuthContext from "../context/authContext/AuthContext";

const SocialLogin = () => {
  const { signInGoogle } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="">
      <div className="divider">OR</div>
      <button onClick={handleGoogleLogin} className="btn my-4 w-full mx-auto">
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
