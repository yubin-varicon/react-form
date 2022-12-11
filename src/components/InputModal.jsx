import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Styles from "../assets/styles/component_styles/InputModal.module.css";

const InputModal = ({
  modalButtonLabel,
  modalTitle,
  modalSubTitle,
  inputFieldName,
  inputFieldLabel,
  inputFieldType,
}) => {
  const [open, setOpen] = useState(false);
  const [inputData, setInputData] = useState("");
  const [isFormInvalid, setIsFormInvalid] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsFormInvalid(false);
    setInputData("");
  };

  const handleEmptyError = () => {
    inputData.trim() == "" ? setIsFormInvalid(true) : setIsFormInvalid(false);
  };

  const handleSubmit = () => {
    handleEmptyError();

    if (!isFormInvalid && inputData.trim()) {
      alert(
        `Password reset link has been sent to ${inputData}. Please check your inbox.`
      );
      handleClose();
    } else {
      setIsFormInvalid(true);
    }
  };

  return (
    <div>
      <Button
        variant="outlined"
        disableRipple
        onClick={handleClickOpen}
        className={Styles.textButtonContainer}
        style={{ textTransform: "none", color: "#000" }}
      >
        <Typography className="buttonText">{modalButtonLabel}</Typography>
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        className="modalDialogContainer"
      >
        <DialogTitle>{modalTitle}</DialogTitle>

        <DialogContent>
          <DialogContentText>{modalSubTitle}</DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            name={inputFieldName}
            id={inputFieldName}
            label={inputFieldLabel}
            type={inputFieldType}
            fullWidth
            variant="standard"
            required
            onChange={(e) => {
              setInputData(e.target.value.trim());
              setIsFormInvalid(false);
            }}
            error={isFormInvalid}
            helperText={isFormInvalid && "Cannot be empty"}
            className="modalInputField"
          />
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleClose}
            style={{ fontSize: "14px" }}
            type="reset"
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} style={{ fontSize: "14px" }}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InputModal;
