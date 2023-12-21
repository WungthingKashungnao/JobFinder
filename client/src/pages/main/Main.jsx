import styles from "./main.module.css";
import Header from "../../components/header/Header";
import JobDetailCard from "../../components/jobdetailcard/JobDetailCard";

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { context } from "../../context/ContextApi";
const Main = () => {
  const { resultOfFilter, setResultOfFilter } = useContext(context);
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const [filterJob, setFilterJob] = useState({
    title: "",
    skills: "",
  });

  const findTheJOb = async (e) => {
    e.preventDefault();
    const result = await axios.post(
      "https://job-listing-green.vercel.app/api/job/filterJOb",
      filterJob
    );
    console.log(result.data.filteredJob);
    setResultOfFilter(result.data.filteredJob);
  };

  return (
    <div className={styles.container}>
      <Header />
      {/* job list container start */}
      <div className={styles.jobListCon}>
        {/* job filter start */}
        <div className={styles.filerJob}>
          <form onSubmit={findTheJOb}>
            <div className={styles.inputFrm}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Type any job title"
                name="position"
                value={filterJob.title}
                onChange={(e) =>
                  setFilterJob({ ...filterJob, title: e.target.value })
                }
              />
            </div>
            {/* skill select start  */}
            <div className={styles.skillSelect}>
              <div className={styles.skillDisplay}>
                <select
                  name="skills"
                  onChange={(e) =>
                    setFilterJob({ ...filterJob, skills: e.target.value })
                  }
                  defaultValue={filterJob.skills}
                >
                  <option value="" disabled>
                    select
                  </option>
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  <option value="javascript">JavaScript</option>
                  <option value="c++">C++</option>
                  <option value="java">Java</option>
                  <option value="php">PHP</option>
                  <option value="go">GO</option>
                  <option value="python">Python</option>
                  <option value="kotlin">Kotlin</option>
                  <option value="wordpress">Wordpress</option>
                  <option value="shopify">Shopify</option>
                </select>

                <div className={styles.slectedSkills}>
                  {filterJob.skills !== "" && (
                    <div className={styles.skillCon}>
                      <span className={styles.skillName}>
                        {filterJob.skills}
                      </span>
                      <span
                        className={styles.skillDelete}
                        onClick={() =>
                          setFilterJob({ ...filterJob, skills: "" })
                        }
                      >
                        x
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <button
                type="reset"
                className={styles.clearSkill}
                onClick={() =>
                  setFilterJob({ ...filterJob, skills: "", title: "" })
                }
              >
                Clear
              </button>

              {token && token !== "null" && (
                <button
                  className={styles.addJob}
                  type="button"
                  onClick={() => navigate("/addjob")}
                >
                  + Add Job
                </button>
              )}
            </div>
            {/* skill select start end */}
          </form>
        </div>
        {/* job filter end */}

        {/* job details card section start*/}
        <section className={styles.jobDetailCardSection}>
          {resultOfFilter !== undefined &&
            resultOfFilter.map((data, idx) => (
              <JobDetailCard key={idx} data={data} />
            ))}
        </section>
        {/* job details card section end */}
      </div>
      {/* job list container end */}
    </div>
  );
};

export default Main;
