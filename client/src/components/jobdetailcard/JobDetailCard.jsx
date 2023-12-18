import { useContext } from "react";
import styles from "./jobdetailcard.module.css";
import people from "./people.png";
import { useNavigate } from "react-router-dom";
import { context } from "../../context/ContextApi";

const JobDetailCard = ({ data }) => {
  const { setJobDescription } = useContext(context);
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  // function to handle job view stat
  const handleJobView = () => {
    setJobDescription(data);
    navigate("/viewjob");
  };
  // function to handle job view end

  // function to handle edit job start
  const handleJobEdit = () => {
    setJobDescription(data);
    navigate("/editjob");
  };
  // function to handle edit job end
  return (
    <div className={styles.container}>
      {/* job details start */}
      <div className={styles.jobDetailsCon}>
        {/* logo start */}
        <div className={styles.logo}>
          <img src={data.logoUrl} alt="" />
        </div>
        {/* logo end */}
        {/* description start */}
        <div className={styles.jobDescrption}>
          <p className={styles.jobPosition}>{data.position}</p>
          <div className={styles.jobInfo}>
            <div>
              <span>
                <img src={people} alt="" />
                116,500 - 156,500
              </span>
            </div>
            <div>&#x20B9; {data.salary}</div>
            <div>{data.location}</div>
          </div>
          <div className={styles.jobLocation}>
            <p>{data.jobPlace} </p>
            <p>{data.jobType}</p>
          </div>
        </div>
        {/* description end */}
      </div>
      {/* job details end */}
      {/* job skills start */}
      <div className={styles.jobSkills}>
        <div className={styles.skillList}>
          {data?.skills?.map((val, idx) => (
            <p className={styles.skillData} key={idx}>
              {val}
            </p>
          ))}
        </div>
        <div className={styles.viewEditJob}>
          {token && token !== "null" && (
            <button className={styles.editJobBtn} onClick={handleJobEdit}>
              Edit job
            </button>
          )}

          <button className={styles.viewJobBtn} onClick={handleJobView}>
            View details
          </button>
        </div>
      </div>
      {/* job skills */}
    </div>
  );
};

export default JobDetailCard;
