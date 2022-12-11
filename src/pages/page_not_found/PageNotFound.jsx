import React from "react";
import Styles from "../../assets/styles/page_styles/PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <div className={Styles.mainContainer}>
      <h1 className={Styles.headingText}>This Page Does Not Exist</h1>
    </div>
  );
}
