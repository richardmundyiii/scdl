import { useEffect, useState } from "react";
import AxiosInstance from "../../config/axios";

export default function ProfileComponent() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await AxiosInstance.get("/api/profile/");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      {userData ? (
        <div>
          <h2>User Profile</h2>
          <p>
            Name: {userData.firstName} {userData.lastName}
          </p>
          <p>Email: {userData.email}</p>
          {/* Display other user data as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </>
  );
}
