import React from "react";
import styles from "./styleSignUp.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={styles.container}>
      {/* left start */}
      <div className={styles.left}>
        {/* leftinner start */}
        <div className={styles.leftInner}>
          <h1>Create an account</h1>
          <p>Your personal job finder is here</p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input
              type="number"
              // prevent entering unwanted characters in input field
              onKeyDown={(e) =>
                ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
              }
              placeholder="Mobile"
            />
            <input type="password" placeholder="Password" />
            <div className={styles.checkbox}>
              <input type="checkbox" />{" "}
              <label>
                By creating an account, I agree to our terms of use and privacy
                policy
              </label>
            </div>

            <button>Create Account</button>
            <p>
              Already have an account?{" "}
              <Link to={"/"} className={styles.highlight}>
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
    </div>
  );
};

export default SignUp;
