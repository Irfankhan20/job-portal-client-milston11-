// import { motion } from "framer-motion";

import { useContext } from "react";
import Swal from "sweetalert2";
import AuthContext from "../../context/authContext/AuthContext";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Job Create Successfully!",
            icon: "success",
            draggable: true,
          });
          //   formData.reset();
        }
      });
  };
  return (
    <div className="w-10/12 mx-auto mt-28 mb-24">
      <h1 className="text-center text-2xl font-semibold underline mb-8">
        Add A Job
      </h1>
      <form onSubmit={handleSubmit}>
        {/* row 1 */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* job title box */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <label htmlFor="foodName" className="mb-1">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="Enter Job Title"
                className="px-4 py-2 border rounded focus:outline-[#E21B70]"
              />
            </div>
          </div>

          {/* job location box */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <label htmlFor="addByName" className="mb-1">
                Job Location
              </label>
              <input
                id="addBy"
                name="location"
                required
                placeholder="Enter Job Location"
                type="text"
                className="px-4 py-2 border rounded focus:outline-[#E21B70]"
              />
            </div>
          </div>
        </div>

        {/* row 2 */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* job type box */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <label htmlFor="addByEmail" className="mb-1">
                Job Type
              </label>
              <select
                defaultValue="Select Your Job Type"
                name="jobType"
                required
                className="select  select-bordered w-full"
              >
                <option disabled>Select Your Job Type</option>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Intern</option>
                <option>Hybrid</option>
                <option>Remote</option>
                <option>Contractual</option>
              </select>
            </div>
          </div>

          {/* category box */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <label htmlFor="price" className="mb-1">
                Job Field
              </label>
              <select
                defaultValue="Select Your Job Field"
                name="category"
                required
                className="select  select-bordered w-full"
              >
                <option disabled>Select Your Job Field</option>
                <option>Marketing</option>
                <option>Data Science</option>
                <option>Web Design</option>
                <option>Web Development</option>
                <option>Project Management</option>
                <option>Teaching</option>
                <option>Finance</option>
              </select>
            </div>
          </div>
        </div>

        {/* row 3  */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* MinsalaryRange box */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <label htmlFor="origin" className="mb-1">
                Min-Salary
              </label>
              <input
                name="min"
                required
                placeholder="Write Min-Salary"
                type="text"
                className="px-4 py-2 border rounded focus:outline-[#E21B70]"
              />
            </div>
          </div>
          {/* MaxsalaryRange box */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <label htmlFor="origin" className="mb-1">
                Max-Salary
              </label>
              <input
                name="max"
                required
                placeholder="Write Max-Salary"
                type="text"
                className="px-4 py-2 border rounded focus:outline-[#E21B70]"
              />
            </div>
          </div>
          {/* currency box */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <label htmlFor="origin" className="mb-1">
                Currency
              </label>
              <select
                defaultValue="Select Currency"
                name="currency"
                required
                className="select select-bordered w-full"
              >
                <option disabled>Select Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EUR</option>
                <option>JPY</option>
                <option>GBP</option>
                <option>AUD</option>
                <option>CAD</option>
                <option>CHF</option>
                <option>CNY</option>
                <option>INR</option>
                <option>NZD</option>
              </select>
            </div>
          </div>
        </div>

        {/* row 4 */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* applicationDeadline box */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <label htmlFor="foodCategory" className="mb-1">
                ApplicationDeadline
              </label>
              <input
                name="applicationDeadline"
                required
                placeholder="Enter ApplicationDeadline"
                type="text"
                className="px-4 py-2 border rounded focus:outline-[#E21B70]"
              />
            </div>
          </div>

          {/* company name box */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <label htmlFor="ratings" className="mb-1">
                Company Name
              </label>
              <input
                name="company"
                required
                placeholder="Enter Company Name"
                type="text"
                className="px-4 py-2 border rounded focus:outline-[#E21B70]"
              />
            </div>
          </div>
        </div>

        {/* row 5 */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* job status box */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <label htmlFor="photo" className="mb-1">
                Job status
              </label>
              <input
                name="status"
                required
                placeholder="active / inactive"
                type="text"
                className="px-4 py-2 border rounded focus:outline-[#E21B70]"
              />
            </div>
          </div>

          {/* hr_email box  */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <label htmlFor="details" className="mb-1">
                Hr_email
              </label>
              <input
                name="hr_email"
                required
                defaultValue={user?.email}
                placeholder="Write hr_email"
                type="email"
                className="px-4 py-2 border rounded focus:outline-[#E21B70]"
              />
            </div>
          </div>
        </div>
        {/* row 6 */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* hr_name box */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <label htmlFor="photo" className="mb-1">
                Hr_name
              </label>
              <input
                name="hr_name"
                required
                placeholder="Write hr_name "
                type="text"
                className="px-4 py-2 border rounded focus:outline-[#E21B70]"
              />
            </div>
          </div>

          {/* company_logo box  */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <label htmlFor="details" className="mb-1">
                Company_logo
              </label>
              <input
                name="company_logo"
                required
                placeholder="Enter Company_logo url"
                type="url"
                className="px-4 py-2 border rounded focus:outline-[#E21B70]"
              />
            </div>
          </div>
        </div>

        {/* row 7 */}

        {/* description box */}
        <div className="w-full mt-4">
          <div className="flex flex-col">
            <label htmlFor="quantity" className="mb-1">
              Job Description
            </label>

            <textarea
              name="description"
              required
              className="textarea textarea-bordered"
              placeholder="Enter Job Description"
            ></textarea>
          </div>
        </div>

        {/* row 8  */}
        {/* job requirements box */}
        <div className="w-full mt-4">
          <div className="flex flex-col">
            <label htmlFor="photo" className="mb-1">
              Job Requirements
            </label>
            <textarea
              name="requirements"
              required
              className="textarea textarea-bordered"
              placeholder="Put each requirement write in a new line"
            ></textarea>
          </div>
        </div>

        {/* row 9 */}

        {/* responsibilities box  */}
        <div className="w-full mt-4 ">
          <div className="flex flex-col">
            <label htmlFor="details" className="mb-1">
              Job Responsibilities
            </label>
            <textarea
              name="responsibilities"
              required
              className="textarea textarea-bordered"
              placeholder="Put each resposibilities write in a new line"
            ></textarea>
          </div>
        </div>

        {/* add food button */}
        <div className="mt-4">
          <button className="w-full px-4 py-2 bg-[#fc3d90] hover:bg-[#E21B70] hover:text-white text-white font-bold text-lg  rounded-lg shadow-2xl duration-300">
            Add A Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
