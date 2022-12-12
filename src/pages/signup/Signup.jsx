import React, { useEffect } from "react";
import { Grid, TextField, Button, MenuItem, Select } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Styles from "../../assets/styles/page_styles/Signup.module.css";
import { TiArrowBackOutline } from "react-icons/ti";

const Signup = () => {
  useEffect(() => {
    document.title = "Signup";
  });

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={Styles.mainContainer}
    >
      <Grid
        item
        xlg={4}
        lg={4}
        md={6}
        sm={10}
        xs={12}
        className={Styles.signupFormContainer}
      >
        <div className={Styles.formHeaderContainer}>
          <Link
            to="/login"
            style={{ color: "rgb(34, 34, 34)", position: "absolute", left: 0 }}
          >
            <TiArrowBackOutline
              style={{ fontSize: "1.5rem", marginTop: "3px" }}
            />
          </Link>

          <h1 className={Styles.formHeading}>Create an account</h1>
        </div>

        <form id="signupForm">
          <div className={Styles.inputContainer}>
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              type="text"
              className={Styles.inputField}
            />
          </div>

          <div className={Styles.inputContainer}>
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              type="text"
              className={Styles.inputField}
            />
          </div>

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

          <div className={Styles.inputContainer}>
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              className={Styles.inputField}
            />
          </div>

          <div className={Styles.inputContainer}>
            <TextField
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              type="number"
              className={Styles.inputField}
              onKeyPress={() => {
                return "/[0-9]/i.test(event.key)";
              }}
            />
          </div>

          <div className={Styles.inputContainer}>
            <Select
              id="designation"
              name="designation"
              defaultValue="Select one"
              className={Styles.inputField}
            >
              <MenuItem value="Select one" disabled>
                Choose your designation
              </MenuItem>

              <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>

              <MenuItem value="Backend Developer">Backend Developer</MenuItem>

              <MenuItem value="Fullstack Developer">
                Fullstack Developer
              </MenuItem>

              <MenuItem value="Finance">Finance</MenuItem>

              <MenuItem value="Human Resource">Human Resource</MenuItem>

              <MenuItem value="Product Designer">Product Designer</MenuItem>

              <MenuItem value="Marketing">Marketing</MenuItem>
            </Select>
          </div>

          <div className={Styles.buttonContainer}>
            <Button
              type="submit"
              variant="contained"
              className={Styles.signupButton}
              // onClick={handleSubmit}
            >
              Signup
            </Button>

            <Button
              type="reset"
              variant="outlined"
              className={Styles.cancelButton}
              // onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};

export default Signup;
