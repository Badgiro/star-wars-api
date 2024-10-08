import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={styles.error__text}>
      The dark side of the force has won. <br />
      We cannot display data. <br />
      Come back when we fix everything. <br />
    </p>
  );
};

export default ErrorMessage;
