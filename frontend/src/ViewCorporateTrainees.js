import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import Users from "./Users";

const ViewCorporateTrainees = (props) => {
  const [users, setUsers] = React.useState([]);
  const [username, setName] = React.useState("");
  const [password, setPass] = React.useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/getCorporateTrainees").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const add = () => {
    axios
      .post("http://localhost:3000/addCopTrainee", {
        username: username,
        password: password,
      })
      .then((response) => {
        alert("Discount Added Successfully!");
      });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{ marginLeft: "auto", display: "flex" }}>
        <Button
          onClick={handleClickOpen}
          sx={{
            marginLeft: "5px",
          }}
          variant={"outlined"}
        >
          Add Corporate Trainee
        </Button>
      </div>
      <Stack alignItems={"end"} direction="column">
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Corporate Trainee</DialogTitle>
          <DialogContent>
            <Stack direction="column" spacing={1} marginTop={0.7}>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={(e) => setPass(e.target.value)}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={add} href="/admin">
              Add Corporate Trainee
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
      <Users users={users} />
    </>
  );
};

export default ViewCorporateTrainees;
