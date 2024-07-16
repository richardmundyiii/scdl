import { useState } from "react";
import RegisterComponent from "../../components/RegisterComponent/RegisterComponent";
import LoginComponent from "../../components/LoginComponent/LoginComponent";

export default function AuthPage() {
  const [isRegistering, setIsRegistering] = useState(true);

  function handleRegToggle() {
    setIsRegistering(!isRegistering);
  }

  return (
    <>
      <h1>Auth Page</h1>
      {isRegistering ? (
        <RegisterComponent handleRegToggle={handleRegToggle} />
      ) : (
        <LoginComponent handleRegToggle={handleRegToggle} />
      )}
    </>
  );
}
