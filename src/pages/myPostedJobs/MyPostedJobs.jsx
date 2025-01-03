import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext/AuthContext";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`https://job-portal-sever-lilac.vercel.app/job?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-2xl font-bold mb-8 mt-24">
        my posted jobs: {jobs.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Application Count</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
                <td>
                  <Link to={`/viewApplications/${job._id}`}>
                    <button className="btn btn-secondary">
                      View Applications
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
