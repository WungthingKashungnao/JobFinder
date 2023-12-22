import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const recruiter = localStorage.getItem("user");
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  // function to handle  logout start
  const handleLogout = async () => {
    // setIsLoggedIn(false);
    localStorage.setItem("user", null);
    localStorage.setItem("access_token", null);
    await axios.get(
      "https://job-listing-api-za8o.onrender.com/api/auth/logoutUser"
    );
    navigate("/signin");
  };
  // function to handle logout end
  return (
    <header>
      <p className={styles.brand} onClick={() => navigate("/")}>
        Jobfinder
      </p>

      {token && token !== "null" ? (
        <>
          {/* logout start  */}
          <div className={styles.logoutCon}>
            <p onClick={handleLogout}>Logout</p>
            <div className={styles.logooutRecruiter}>
              <span>Hello! {recruiter}</span>
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
