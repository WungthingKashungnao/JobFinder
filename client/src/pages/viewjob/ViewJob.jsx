import styles from "./viewjob.module.css";
// import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { context } from "../../context/ContextApi";

const ViewJob = () => {
  const { jobDescription } = useContext(context);
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  // const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* job info section start */}
      <section className={styles.jobInfoSection}>
        {/* job info bar start */}
        <div className={styles.jobInfoBar}>
          {jobDescription?.position} {jobDescription?.jobPlace}{" "}
          {jobDescription?.jobType} at {jobDescription?.name} Private Limited
        </div>
        {/* job info section end */}

        {/* job info card start */}
        <div className={styles.jobInfoCard}>
          {/* job info meta data start */}
          <div className={styles.jobInfoMetaData}>
            <div className={styles.companyDetails}>
              {token && token !== "null" ? (
                <>
                  <img src={jobDescription?.logoUrl} alt="" />
                  <p>{jobDescription?.name}</p>
                </>
              ) : (
                <>
                  <p className={styles.jobPostedTimePast}>
                    {jobDescription?.name}
                  </p>
                </>
              )}
            </div>

            <div className={styles.jobTitle}>
              <h2>{jobDescription?.position}</h2>
              {token && token !== "null" && (
                <button onClick={() => navigate("/editjob")}>Edit job</button>
              )}
            </div>
            <p className={styles.jobLocation}>{jobDescription?.location}</p>
            <div className={styles.salaryJobINfo}>
              <p>
                <i className="fa-regular fa-money-bill-1"></i> Salary
              </p>
              <p>Rs {jobDescription?.salary}/month</p>
            </div>
          </div>
          {/* job info meta data end */}

          {/* about company start */}
          <div className="aboutCompany">
            <h3 className={styles.secTitle}>About company</h3>
            <p>{jobDescription?.about}</p>
          </div>
          {/* about company end */}

          {/* about job stat */}
          <div className="aboutJob">
            <h3 className={styles.secTitle}>About the job/intership</h3>
            <p>{jobDescription?.description}</p>
          </div>
          {/* about job end */}

          {/* skills start */}
          <div className={styles.skillsRequired}>
            <h3 className={styles.secTitle}>Skill(s) required</h3>
            <div className={styles.skillList}>
              {jobDescription?.skills?.map((val, idx) => (
                <p className={styles.skills} key={idx}>
                  {val}
                </p>
              ))}
            </div>
          </div>
          {/* skills end */}

          {/* additional information start */}
          <div className="additionalInformation">
            <h3 className={styles.secTitle}>Additional Information</h3>
            <p>{jobDescription?.description}</p>
          </div>
          {/* additional information end */}
        </div>
        {/* job info card end */}
      </section>
      {/* job info card end */}
    </div>
  );
};

export default ViewJob;
