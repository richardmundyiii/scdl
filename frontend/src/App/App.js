import { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import HomePage from "../pages/HomePage/HomePage";
import AdminPage from "../pages/AdminPage/AdminPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import ProtectedRoute from "../config/protectedRoutes";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div className="App">
      <NavBar />
      <Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/admin" element={<AdminPage />} />

          <Route exact path="/profile" element={<ProtectedRoute />}>
            <Route
              exact
              path="/profile"
              element={<ProfilePage token={token} />}
            />
          </Route>
        </Routes>
      </Fragment>
    </div>
  );
}

export default App;
