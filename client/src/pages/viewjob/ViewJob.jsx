import React, { useContext } from "react";
import styles from "./viewjob.module.css";
// import { useNavigate } from "react-router-dom";
import { context } from "../../context/ContextApi";
import Header from "../../components/header/Header";

const ViewJob = () => {
  const { isLoggedIn } = useContext(context);
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
          WordPress Development work from home job/internship at Adyaka Infosec
          Private Limited
        </div>
        {/* job info section end */}

        {/* job info card start */}
        <div className={styles.jobInfoCard}>
          {/* job info meta data start */}
          <div className={styles.jobInfoMetaData}>
            <div className={styles.companyDetails}>
              <p className={styles.jobPostedTimePast}>1w ago - Full time </p>
              {isLoggedIn && (
                <>
                  <img
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                    alt=""
                  />
                  <p>Google</p>
                </>
              )}
            </div>

            <div className={styles.jobTitle}>
              <h2>WordPress Development</h2>
              {isLoggedIn && <button>Edit job</button>}
            </div>
            <p className={styles.jobLocation}>Bangalore | India</p>
            <div className={styles.salaryJobINfo}>
              <p>
                <i class="fa-regular fa-money-bill-1"></i> Stipened
              </p>
              <p>Rs 250000/month</p>
            </div>
          </div>
          {/* job info meta data end */}

          {/* about company start */}
          <div className="aboutCompany">
            <h3 className={styles.secTitle}>About company</h3>
            <p>
              We provide technology-based services to help businesses and
              organizations achieve their goals. We offer a wide range of
              services, including software development, system integration,
              network and security services, cloud computing, and data
              analytics. Our primary focus is on leveraging technology to
              streamline business processes, improve productivity, and enhance
              overall efficiency.
            </p>
          </div>
          {/* about company end */}

          {/* about job stat */}
          <div className="aboutJob">
            <h3 className={styles.secTitle}>About the job/intership</h3>
            <p>
              We are looking for a responsible PHP/WordPress/Laravel/Shopify
              Developer. He/She will be liable for managing services and
              therefore the interchange of knowledge between the server and the
              users. The candidate's primary focus is going to be the event of
              all server-side logic, definition, and maintenance of the central
              database and ensuring high performance and responsiveness to
              requests from the front end. Selected intern's day-to-day
              responsibilities include: 1. Work on the development of theme
              customization, liquid programming language, and corresponding apps
              2. Implement system integrations that are crucial to our success
              3. Contribute to the development of HTML5/CSS/JavaScript and
              standard web technologies integral to building seamless
              multi-channel experiences 4. Work on speed optimization and making
              a mobile-friendly website
            </p>
          </div>
          {/* about job end */}

          {/* skills start */}
          <div className={styles.skillsRequired}>
            <h3 className={styles.secTitle}>Skill(s) required</h3>
            <div className={styles.skillList}>
              <p className={styles.skills}>html</p>
              <p className={styles.skills}>css</p>
              <p className={styles.skills}>javascript</p>
            </div>
          </div>
          {/* skills end */}

          {/* additional information start */}
          <div className="additionalInformation">
            <h3 className={styles.secTitle}>Additional Information</h3>
            <p>
              Stipend structure: This is a performance-based internship. In
              addition to the minimum-assured stipend, you will also be paid a
              performance-linked incentive (₹ 2500 per design).
            </p>
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
