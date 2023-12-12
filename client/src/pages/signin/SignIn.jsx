import React from "react";
import styles from "./stylesSignIn.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.leftInner}>
          <h1>Already have an account?</h1>
          <p>Your personal job finder is here</p>

          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
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
    </div>
  );
};

export default SignUp;
