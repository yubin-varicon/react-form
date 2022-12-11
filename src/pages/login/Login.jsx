import { Grid, Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import Styles from "../../assets/styles/page_styles/Login.module.css";
import { InputModal } from "../../components";

const Login = () => {
  useEffect(() => {
    document.title = "Login Page";
  }, []);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={Styles.mainContainer}
      //   style={{ backgroundColor: "red" }}
    >
      <Grid
        item
        xlg={4}
        lg={4}
        md={6}
        sm={10}
        xs={12}
        className={Styles.loginFormContainer}
      >
        <h1 className={Styles.formHeading}>Login</h1>

        <form>
          <div className={Styles.inputContainer}>
            <TextField
              id="email"
              name="email"
              label="Email Address"
              type="text"
              className={Styles.inputField}
            />
          </div>

          <div className={Styles.inputContainer}>
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              className={Styles.inputField}
            />
          </div>

          <div className={Styles.forgotPasswordContainer}>
            <InputModal
              modalButtonLabel="Reset password"
              modalTitle="Reset your password"
              modalSubTitle="To reset your password, please enter your email address here."
              inputFieldName="passwordReset"
              inputFieldLabel="Email Address"
              inputFieldType="text"
            />
          </div>

          <div className={Styles.loginSubmitButtonContainer}>
            <Button
              type="button"
              variant="contained"
              className={Styles.loginSubmitButton}
              // onClick={handleSubmit}
            >
              Login
            </Button>
          </div>
        </form>

        <p className={Styles.registerParagraph}>
          Don't have an account yet?{" "}
          <a href="signup" className={Styles.registerLink}>
            Sign Up
          </a>
        </p>
      </Grid>
    </Grid>
  );
};

export default Login;
