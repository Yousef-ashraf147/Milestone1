import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const LoginCorporateTrainee = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const Submit = async () => {
    const input = { username, password };
    axios
      .post(
        "http://localhost:3000/loginCorp",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data == "200") {
          cookie.save("username", username, { path: "/" });
          cookie.save("type", "corporate", { path: "/" });

          navigate("/CorpTraineeHome");
          alert("Successful Login!");
        } else if (username.length == 0 || password.length == 0) {
          alert("The password or the username is empty");
        } else {
          alert("The password or the username is Wrong");
        }
      });
  };
  const navigate = useNavigate();
  function oNavigate() {
    navigate("/CorpTraineeHome");
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack spacing={2} direction={"column"}>
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          id="outlined-basic"
          label="Username"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          id="filled-basic"
          label="Password"
          variant="outlined"
        />

        <Button onClick={Submit} variant="contained">
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default LoginCorporateTrainee;
