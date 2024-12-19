import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/energyLogo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const HotJobCard = ({ job }) => {
  const {
    title,
    location,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
    _id,
  } = job;
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        y: -10,
        backgroundColor: "#f0f8ff",
        boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.3)",
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
      whileTap={{ scale: 0.95 }}
      className="card p-4 hover:cursor-pointer card-compact bg-base-100 shadow-xl border"
    >
      <div className="flex justify-between gap-2 m-2">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="flex items-center gap-1">
            <FaMapMarkerAlt></FaMapMarkerAlt> {location}
          </p>
        </div>
        <img className="h-10 w-8" src={logo} alt="" />
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">New</div>
        </h2>
        <p>{description}</p>
        <div className="flex gap-2 mt-4 flex-wrap">
          {requirements.map((skill, idx) => (
            <p
              className="border rounded-md text-center px-2 hover:text-purple-600 hover:border-r-gray-400"
              key={idx}
            >
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center mt-4">
          <p>
            Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-secondary"
            >
              Job Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HotJobCard;
