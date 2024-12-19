import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
const JobDetails = () => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
  } = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-bold mx-10 underline">
        Company Name: {company}
      </h1>
      <div className="border-2 border-purple-600 shadow-2xl p-5 min-h-96 mt-5 mx-10">
        <h1 className="text-2xl font-medium mt-1">Job Title: {title}</h1>
        <div className="mt-3">
          <p className="text-xl">Job Location: {location}</p>
          <p className="text-xl">Job Type: {jobType}</p>
          <p className="text-xl">Job Category: {category}</p>
          <p className="text-xl">Application Deadline: {applicationDeadline}</p>
          <p className="text-xl">Job Description : {description}</p>
          <p className="text-xl">
            Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </p>
        </div>
        <div className="flex gap-5 mt-5">
          <Link to={`/jobApply/${_id}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-secondary"
            >
              Apply Job
            </motion.button>
          </Link>
          <Link>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-secondary"
            >
              Save Job
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
