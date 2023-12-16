import React, { useContext } from "react";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";
import { context } from "../../context/ContextApi";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(context);
  return (
    <header>
      <p className={styles.brand}>Jobfinder</p>

      {isLoggedIn ? (
        <>
          {/* logout start  */}
          <div className={styles.logoutCon}>
            <p>Logout</p>
            <div className={styles.logooutRecruiter}>
              <span>Hello! Recruiter</span>
              <img
                src="https://xsgames.co/randomusers/avatar.php?g=female"
                alt=""
              />
            </div>
          </div>
          {/* logout end */}
        </>
      ) : (
        <>
          {/* login start */}
          <div className={styles.loginCon}>
            <button
              className={styles.login}
              onClick={() => navigate("/signin")}
            >
              Login
            </button>
            <button
              className={styles.register}
              onClick={() => navigate("/signup")}
            >
              Register
            </button>
          </div>
          {/* login end */}
        </>
      )}

      {/* header end */}
    </header>
  );
};

export default Header;
