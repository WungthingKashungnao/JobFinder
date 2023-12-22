import React, { useState } from "react";
import styles from "./addjob.module.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token"); //accessing the stored in localstorage
  const decodedToken = jwtDecode(token); //using jwt-decode package to decode the token
  const userId = decodedToken.id;
  const [job, setJob] = useState({
    name: "",
    recruiter: "",
    logoUrl: "",
    position: "",
    salary: "",
    jobType: "",
    jobPlace: "",
    location: "",
    description: "",
    about: "",
    skills: "",
    information: "",
    token: token,
  });

  // function to submit job
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        `https://job-listing-api-za8o.onrender.com/api/job/createJob/${userId}`,
        job
      );
      console.log({
        message: "successfully added a new job",
        result,
      });
      toast.success("Successfully created a new job!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      {/* left start */}
      <div className={styles.left}>
        {/* left inner start */}
        <div className={styles.leftInner}>
          <h1>Add job description</h1>
          {/* form start */}
          <form onSubmit={handleSubmit}>
            <div className={styles.inptCon}>
              <label>Conpmay Name</label>{" "}
              <input
                required
                type="text"
                placeholder="Enter your company name here"
                value={job.name}
                onChange={(e) => setJob({ ...job, name: e.target.value })}
              />
            </div>

            <div className={styles.inptCon}>
              <label>Add logo URL</label>{" "}
              <input
                required
                type="url"
                placeholder="Enter the link"
                value={job.logoUrl}
                onChange={(e) => setJob({ ...job, logoUrl: e.target.value })}
              />
            </div>

            <div className={styles.inptCon}>
              <label>Job position</label>{" "}
              <input
                required
                type="text"
                placeholder="Enter job position"
                value={job.position}
                onChange={(e) => setJob({ ...job, position: e.target.value })}
              />
            </div>

            <div className={styles.inptCon}>
              <label>Monthly Salaary</label>{" "}
              <input
                required
                type="number"
                placeholder="Enter amount in rupees"
                // prevent entering unwanted characters in input field
                onKeyDown={(e) =>
                  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
                }
                value={job.salary}
                onChange={(e) => setJob({ ...job, salary: e.target.value })}
              />
            </div>

            <div className={styles.inptCon}>
              <label>Job Type</label>{" "}
              <select
                required
                onChange={(e) => setJob({ ...job, jobType: e.target.value })}
                defaultValue={job.jobType}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="fulltime">Fulltime</option>
                <option value="contract">Contract</option>
                <option value="parttime">Parttime</option>
                <option value="intern">Intern</option>
              </select>
            </div>

            <div className={styles.inptCon}>
              <label>Remote/Office</label>{" "}
              <select
                required
                onChange={(e) => setJob({ ...job, jobPlace: e.target.value })}
                defaultValue={job.jobPlace}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="remote">Remote</option>
                <option value="office">Office</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>

            <div className={styles.inptCon}>
              <label>Location</label>{" "}
              <input
                required
                type="text"
                placeholder="Enter location"
                value={job.location}
                onChange={(e) => setJob({ ...job, location: e.target.value })}
              />
            </div>

            <div className={styles.inptCon}>
              <label className={styles.txtLbl}>Job Description</label>{" "}
              <textarea
                required
                placeholder="Type the job description"
                value={job.description}
                onChange={(e) =>
                  setJob({ ...job, description: e.target.value })
                }
              ></textarea>
            </div>

            <div className={styles.inptCon}>
              <label className={styles.txtLbl}>About Company</label>{" "}
              <textarea
                required
                placeholder="Type about your company"
                value={job.about}
                onChange={(e) => setJob({ ...job, about: e.target.value })}
              ></textarea>
            </div>

            <div className={styles.inptCon}>
              <label>Skills Required</label>{" "}
              <input
                required
                type="text"
                placeholder="Enter the must have skills"
                value={job.skills}
                onChange={(e) => setJob({ ...job, skills: e.target.value })}
              />
            </div>

            <div className={styles.inptCon}>
              <label>Information</label>{" "}
              <input
                required
                type="text"
                placeholder="Enter the additional information"
                value={job.information}
                onChange={(e) =>
                  setJob({ ...job, information: e.target.value })
                }
              />
            </div>

            <div className={styles.btnCon}>
              <button
                type="reset"
                className={styles.resetBtn}
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <button type="submit" className={styles.sbmtBtn}>
                +Add Job
              </button>
            </div>
          </form>
          {/* form end */}
        </div>
        {/* left inner end */}
      </div>
      {/* left end */}
      {/* right start */}
      <div className={styles.right}>
        <h2>Recruiter add job details here</h2>
      </div>
      {/* right end */}
      <ToastContainer />
    </div>
  );
};

export default AddJob;
