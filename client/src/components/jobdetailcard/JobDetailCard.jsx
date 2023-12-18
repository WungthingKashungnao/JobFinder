import styles from "./jobdetailcard.module.css";
import people from "./people.png";
import { useNavigate } from "react-router-dom";

const JobDetailCard = () => {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {/* job details start */}
      <div className={styles.jobDetailsCon}>
        {/* logo start */}
        <div className={styles.logo}>
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt=""
          />
        </div>
        {/* logo end */}
        {/* description start */}
        <div className={styles.jobDescrption}>
          <p className={styles.jobPosition}>Frontend Developer</p>
          <div className={styles.jobInfo}>
            <div>
              <span>
                <img src={people} alt="" /> 11-50
              </span>
            </div>
            <div>&#x20B9; 50,0000</div>
            <div>Delhi</div>
          </div>
          <div className={styles.jobLocation}>
            <p>Office </p>
            <p>Fulltime</p>
          </div>
        </div>
        {/* description end */}
      </div>
      {/* job details end */}
      {/* job skills start */}
      <div className={styles.jobSkills}>
        <div className={styles.skillList}>
          <p className={styles.skillData}>Frontend</p>
          <p className={styles.skillData}>CSS</p>
          <p className={styles.skillData}>JavaScript</p>
        </div>
        <div className={styles.viewEditJob}>
          {token && token !== "null" && (
            <button
              className={styles.editJobBtn}
              onClick={() => navigate("/editjob")}
            >
              Edit job
            </button>
          )}

          <button
            className={styles.viewJobBtn}
            onClick={() => navigate("/viewjob")}
          >
            View details
          </button>
        </div>
      </div>
      {/* job skills */}
    </div>
  );
};

export default JobDetailCard;
