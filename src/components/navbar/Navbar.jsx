import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AuthContext from "../../context/authContext/AuthContext";
import logo from "../../assets/favicon.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const userSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result?.user);
      })
      .catch((error) => console.error(error));
  };

  const navlinks = (
    <>
      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mr-2 btn"
        >
          Home
        </motion.button>
      </Link>
      <Link to="/myApplications">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mr-2 btn"
        >
          My Applications
        </motion.button>
      </Link>
      <Link to="/addJob">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="btn"
        >
          Add Job
        </motion.button>
      </Link>
      <Link to="/myPostedJob">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="btn"
        >
          My Posted Jobs
        </motion.button>
      </Link>
    </>
  );

  return (
    <div className="navbar  fixed backdrop-blur-lg bg-white/30 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost">
          <img className="w-12" src={logo} alt="Logo" />
          <h3 className="text-xl font-bold">Job Portal</h3>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={userSignOut}
            className="btn"
          >
            Logout
          </motion.button>
        ) : (
          <>
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="btn"
              >
                Register
              </motion.button>
            </Link>
            <Link to="/signin">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="btn"
              >
                Sign In
              </motion.button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
