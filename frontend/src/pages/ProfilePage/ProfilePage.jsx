import { useEffect, useState } from "react";
import AxiosInstance from "../../config/axios";

export default function ProfilePage({ token }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await AxiosInstance.get({
          headers: { Authorization: `Token ${token}` },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [token]);

  console.log(user);

  return (
    <>
      {user ? (
        <div>
          <h2>User Profile</h2>
          <p>
            Name: {user.firstName} {user.lastName}
          </p>
          <p>Email: {user.email}</p>
          {/* Display other user data as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </>
  );
}
