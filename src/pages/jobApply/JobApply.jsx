import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import AuthContext from "../../context/authContext/AuthContext";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };

    fetch("http://localhost:5000/applications", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Apply Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        form.reset();
        navigate("/myApplications");
      });
  };
  return (
    <div className="card bg-base-100 mt-24 w-[900px] p-10 mx-auto border border-pink-500 shadow-2xl">
      <h1 className="text-5xl font-bold text-center underline pb-5">
        Apply Job & Good Luck!
      </h1>
      {/* form structure  */}
      <form onSubmit={handleSubmit} className="card-body">
        {/* linkedIn field  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input
            type="url"
            name="linkedin"
            placeholder="Your LinkedIn URL"
            className="input input-bordered"
            required
          />
        </div>
        {/* github field  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="Your Github URL"
            className="input input-bordered"
            required
          />
        </div>
        {/* resume field  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="Your Resume URL"
            className="input input-bordered"
            required
          />
        </div>
        {/* apply button  */}
        <div className="form-control mt-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-secondary"
          >
            Apply
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
