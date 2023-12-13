import React, { useState } from "react";
import styles from "./stylesSignIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const SignUp = () => {
  const loginUrl = `http://localhost:3001/api/auth/loginUser`;
  const navigate = useNavigate();
  // use details
  const [user, setUser] = useState({
    email: null,
    password: null,
  });
  // function to login start
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${loginUrl}`, user);
      localStorage.setItem("user", result.data.user.name); //storing user name in localstorage on succesful login
      localStorage.setItem("access_token", result.data.token); //storing the token in localstorage on succesful login
      // navigate("/main");
      navigate("/addjob");
    } catch (error) {
      toast.error("Icorrect email or password!", {
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
  // function to login end
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.leftInner}>
          <h1>Already have an account?</h1>
          <p>Your personal job finder is here</p>

          <form onSubmit={handleSubmit}>
            <input
              required
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              required
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button>Sign in</button>
            <p>
              Don't have an account?{" "}
              <Link to={"/signup"} className={styles.highlight}>
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className={styles.right}>
        <h2>Your Personal Job Finder</h2>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
