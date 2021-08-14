import React from "react";
import styles from "styles/Homepage/Homepage.module.scss";
import Information from "components/Homepage/Information.js";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Information/>
    </div>
  );
};

export default Homepage;
