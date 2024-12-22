import { Link, useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const applicationCount = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-2xl font-bold mb-8 mt-24">
        Total Applications: {applicationCount.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Applicant Email</th>
              <th>Linkedin URL</th>
              <th>Github URL</th>
              <th>Resume URL</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {applicationCount.map((job, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{job.applicant_email}</td>
                <td>{job.linkedIn}</td>
                <td>{job.github}</td>
                <td>{job.resume}</td>
                <td>
                  <select
                    defaultValue={job.status || "Change Status"}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled>Change Status</option>
                    <option>Under Review</option>
                    <option>Call For Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
                <td>
                  <Link>
                    <button className="btn btn-secondary">Update Status</button>
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

export default ViewApplications;
