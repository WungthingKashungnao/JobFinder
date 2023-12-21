import React, { useState } from "react";
import styles from "./styleSignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const registerUrl =
    "https://job-listing-green.vercel.app/api/auth/registerUser";
  // state for user details
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    check: false,
  });
  // function to register start
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${registerUrl}`, userDetails);
      // setIsLoggedIn(true);
      localStorage.setItem("user", result.data.newUser.name); //storing user name in localstorage on succesful signup
      localStorage.setItem("access_token", result.data.token); //storing the token in localstorage on succesful signup
      navigate("/");
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  // function to register end
  return (
    <div className={styles.container}>
      {/* left start */}
      <div className={styles.left}>
        {/* leftinner start */}
        <div className={styles.leftInner}>
          <h1>Create an account</h1>
          <p>Your personal job finder is here</p>
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Name"
              value={userDetails.name}
              onChange={(e) =>
                setUserDetails({ ...userDetails, name: e.target.value })
              }
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
            />
            <input
              required
              type="number"
              value={userDetails.mobile}
              // prevent entering unwanted characters in input field
              onKeyDown={(e) =>
                ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
              }
              onChange={(e) =>
                setUserDetails({ ...userDetails, mobile: e.target.value })
              }
              placeholder="Mobile"
            />
            <input
              required
              type="password"
              placeholder="Password"
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
            />
            <div className={styles.checkbox}>
              <input
                required
                type="checkbox"
                value={userDetails.check}
                onClick={(e) =>
                  setUserDetails({ ...userDetails, check: !userDetails.check })
                }
              />{" "}
              <label>
                By creating an account, I agree to our terms of use and privacy
                policy
              </label>
            </div>

            <button>Create Account</button>
            <p>
              Already have an account?{" "}
              <Link to={"/signin"} className={styles.highlight}>
                Sign In
              </Link>
            </p>
          </form>
        </div>
        {/* leftinner end */}
      </div>
      {/* left end */}
      {/* right start */}
      <div className={styles.right}>
        <h2>Your Personal Job Finder</h2>
      </div>
      {/* right end */}
      <ToastContainer />
    </div>
  );
};

export default SignUp;
