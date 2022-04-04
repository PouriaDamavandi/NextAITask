import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import middle from "../img/middle.svg";
import styled from "styled-components";

const IMG = styled.img`
  height: 70vh;
  max-width: 100%;
  position: fixed;
  top: 10;
  left: 0;
  margin-top:100px;
`;

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container
      component="main"
      dir="rtl"
      sx={{
        display: "flex",
        alignContent: "space-between",
        alignItems: "center",
        flexdirection: "column",
        mt: 10,
        mr: 2,
        fontFamily:"Vazirmatn",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "Vazirmatn",
        }}
      >
        <Typography component="h1" variant="h4" fontFamily="Vazirmatn">
          ورود
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 6, fontFamily: "Vazirmatn" }}
        >
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="ایمیل"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{ fontFamily: "Vazirmatn" }}
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="گذرواژه"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{ fontFamily: "Vazirmatn" }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="مرا بخاطر بسپار"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 6, mb: 2, borderRadius: "10px" }}
          >
            وارد شوید
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                گذرواژه خود را فراموش کرده اید؟
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                هنوز حساب کاربری ندارید {"ثبت نام کنید"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <IMG src={middle} alt="Log in image" />
    </Container>
  );
}
