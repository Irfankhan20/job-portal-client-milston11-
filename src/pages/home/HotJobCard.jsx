import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/energyLogo.png";

const HotJobCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    company_logo,
    hr_email,
    hr_name,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl border">
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
          <button className="btn btn-secondary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
