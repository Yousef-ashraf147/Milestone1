import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./mystyle.module.css";

function HomePage() {
  return (
    <>
      <Stack
        maxWidth={"150px"}
        paddingTop={"50px"}
        marginLeft={"auto"}
        marginRight={"auto"}
        direction="column"
        spacing={5}
      >
        <a className={styles.clickme} href="/Signup">
          Sign Up
        </a>
        <a className={styles.clickme} href="/Login">
          Login
        </a>
      </Stack>
    </>
  );
}

export default HomePage;
