import React from "react";
import styles from "./addjob.module.css";

const AddJob = () => {
  return (
    <div className={styles.container}>
      {/* left start */}
      <div className={styles.left}>
        {/* left inner start */}
        <div className={styles.leftInner}>
          <h1>Add job description</h1>
          {/* form start */}
          <form>
            <div className={styles.inptCon}>
              <label>Conpmay Name</label>{" "}
              <input type="text" placeholder="Enter your company name here" />
            </div>

            <div className={styles.inptCon}>
              <label>Add logo URL</label>{" "}
              <input type="url" placeholder="Enter the link" />
            </div>

            <div className={styles.inptCon}>
              <label>Job position</label>{" "}
              <input type="text" placeholder="Enter job position" />
            </div>

            <div className={styles.inptCon}>
              <label>Monthly Salaary</label>{" "}
              <input type="number" placeholder="Enter amount in rupees" />
            </div>

            <div className={styles.inptCon}>
              <label>Job Type</label>{" "}
              <select>
                <option value="">Select</option>
                <option value="fulltime">Fulltime</option>
                <option value="contract">Contract</option>
                <option value="parttime">Parttime</option>
                <option value="intern">Intern</option>
              </select>
            </div>

            <div className={styles.inptCon}>
              <label>Remote/Office</label>{" "}
              <select>
                <option value="">Select</option>
                <option value="remote">Remote</option>
                <option value="office">Office</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>

            <div className={styles.inptCon}>
              <label>Location</label>{" "}
              <input type="text" placeholder="Enter location" />
            </div>

            <div className={styles.inptCon}>
              <label className={styles.txtLbl}>Job Description</label>{" "}
              <textarea placeholder="Type the job description"></textarea>
            </div>

            <div className={styles.inptCon}>
              <label className={styles.txtLbl}>About Company</label>{" "}
              <textarea placeholder="Type about your company"></textarea>
            </div>

            <div className={styles.inptCon}>
              <label>Skills Required</label>{" "}
              <input type="text" placeholder="Enter the must have skills" />
            </div>

            <div className={styles.inptCon}>
              <label>Information</label>{" "}
              <input
                type="text"
                placeholder="Enter the additional information"
              />
            </div>

            <div className={styles.btnCon}>
              <button type="reset" className={styles.resetBtn}>
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
    </div>
  );
};

export default AddJob;
