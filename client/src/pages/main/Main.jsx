import React from "react";
import styles from "./main.module.css";
import Header from "../../components/header/Header";
const Main = () => {
  return (
    <div className={styles.container}>
      <Header />
      {/* job list container start */}
      <div className={styles.jobListCon}>
        {/* job filter start */}
        <div className={styles.filerJob}>
          <form>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Type any job title" />
          </form>
          {/* skill select start  */}
          <div className={styles.skillSelect}>
            <div className={styles.skillDisplay}>
              <select>
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
                <div className={styles.skillCon}>
                  <span className={styles.skillName}>Frontend</span>
                  <span className={styles.skillDelete}>x</span>
                </div>
                <div className={styles.skillCon}>
                  <span className={styles.skillName}>Wordpress</span>
                  <span className={styles.skillDelete}>x</span>
                </div>
                <div className={styles.skillCon}>
                  <span className={styles.skillName}>JavaScript</span>
                  <span className={styles.skillDelete}>x</span>
                </div>
                <div className={styles.skillCon}>
                  <span className={styles.skillName}>CSS</span>
                  <span className={styles.skillDelete}>x</span>
                </div>
              </div>
            </div>
            <p className={styles.clearSkill}>Clear</p>

            <button className={styles.addJob}>+ Add Job</button>
          </div>
          {/* skill selecet end */}
        </div>
        {/* job filter end */}
      </div>
      {/* job list container end */}
    </div>
  );
};

export default Main;
