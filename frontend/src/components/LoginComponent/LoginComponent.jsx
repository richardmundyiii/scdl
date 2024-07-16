import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../../config/axios";
import { Box, Button, Container, TextField } from "@mui/material";

export default function LoginComponent({ handleRegToggle }) {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  //   const [disableButton, setDisableButton] = useState(false);

  function handleChange(evt) {
    setCredentials({
      ...credentials,
      [evt.target.name]: evt.target.value,
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const response = await AxiosInstance.post("/api/login/", {
        email: credentials.email,
        password: credentials.password,
      });
      console.log("Login Response:", response.data); // Log the response for debugging
      localStorage.setItem("token", response.data.token);
      console.log("Stored Token:", localStorage.getItem("token")); // Log the stored token
      //   window.location.href = "/profile";
    } catch (error) {
      console.error("Login Failed -  ", error);
    }
  }

  //   function submitDisabled() {
  //     while (
  //       registrationData.password < 5 ||
  //       registrationData.password !== registrationData.confirmPassword
  //     ) {
  //       setDisableButton(true);
  //     }
  //   }

  return (
    <>
      <Container
        sx={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                id="email"
                label="Email Address"
                variant="outlined"
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                type="password"
              />
            </Box>
            <Button type="submit">Login</Button>
          </form>
          <Box>
            <Button onClick={handleRegToggle}>Need an account?</Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
