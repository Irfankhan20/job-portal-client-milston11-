import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext/AuthContext";

const MyApplications = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);
  return (
    <div className="w-11/12 mx-auto pt-8">
      <h1 className="text-2xl font-semibold">
        my applications: {jobs.length}{" "}
      </h1>
      <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Select</th>
              <th>Company Name & Location</th>
              <th>Job Category</th>
              <th>Your Info Links</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job) => (
              <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost p-5 badge-sm">
                    {job.title}
                  </span>
                </td>
                <td>
                  LinkedIn: {job.linkedIn} <br /> <br /> Github: {job.github}{" "}
                  <br /> <br /> Resume: {job.resume}
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">Update</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
