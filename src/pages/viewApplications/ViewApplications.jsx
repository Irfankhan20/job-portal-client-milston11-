import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applicationCount = useLoaderData();
  const handleStatus = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };
    fetch(`https://job-portal-sever-lilac.vercel.app/applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Applicant Status Changed Successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };
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
                    onChange={(e) => handleStatus(e, job._id)}
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
