import Lottie from "lottie-react";
import registerLottiData from "../../assets/lotties/register.json";
import { useContext, useState } from "react";
import AuthContext from "../../context/authContext/AuthContext";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;

    if (!hasUppercase) {
      return "Password must include at least one uppercase letter.";
    }
    if (!hasLowercase) {
      return "Password must include at least one lowercase letter.";
    }
    if (!isValidLength) {
      return "Password must be at least 6 characters long.";
    }
    return null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);

    // Validate password
    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      return;
    }
    setPasswordError("");

    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log("ERROR", error.message));
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-[550px]">
          <Lottie animationData={registerLottiData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl ml-8 mt-5 font-bold">Register now!</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              {/* Password Error Message */}
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
