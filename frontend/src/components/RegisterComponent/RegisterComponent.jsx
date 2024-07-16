import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../../config/axios";
import { Box, Button, Container, TextField } from "@mui/material";

export default function RegisterComponent({ handleRegToggle }) {
  const navigate = useNavigate();

  const [registrationData, setRegistrationData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //   const [disableButton, setDisableButton] = useState(false);

  function handleChange(evt) {
    setRegistrationData({
      ...registrationData,
      [evt.target.name]: evt.target.value,
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await AxiosInstance.post("/api/register/", {
        first_name: registrationData.first_name,
        last_name: registrationData.last_name,
        email: registrationData.email,
        password: registrationData.password,
      });
      navigate("/");
      console.log("Reg submitted");
    } catch (error) {}
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
            <Box sx={{ flexDirection: "row" }}>
              <TextField
                id="first_name"
                label="First Name"
                variant="outlined"
                name="first_name"
                value={registrationData.first_name}
                onChange={handleChange}
              />
              <TextField
                id="last_name"
                label="Last Name"
                variant="outlined"
                name="last_name"
                value={registrationData.last_name}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                id="email"
                label="Email Address"
                variant="outlined"
                name="email"
                value={registrationData.email}
                onChange={handleChange}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                name="password"
                value={registrationData.password}
                onChange={handleChange}
                type="password"
              />
              <TextField
                id="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                name="confirmPassword"
                value={registrationData.confirmPassword}
                onChange={handleChange}
                type="password"
              />
            </Box>
            <Button type="submit">Register</Button>
          </form>
          <Box>
            <Button onClick={handleRegToggle}>Already have an account?</Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
