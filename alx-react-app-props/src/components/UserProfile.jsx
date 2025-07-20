import React, { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const userData = useContext(UserContext);
  return (
    <div style={{ border: "1px solid grey", padding: "10px", margin: "10px" }}>
      <h2 style={{ color: "blue" }}></h2>
      <p>
        Age: {userData.age}
        <span style={{ fontWeight: "bold" }}></span>
      </p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
};

export default UserProfile;
