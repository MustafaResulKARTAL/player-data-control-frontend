import React, { useEffect, useState } from "react";
import NavbarsAdmin from "../Navbars/NavbarsAdmin";

function UserHome() {
  const [userInformation, setUserInformation] = useState([]);

  useEffect(() => {
    fetch("/users/" + localStorage.getItem("currentUserId"))
      .then((res) => res.json())
      .then((result) => {
        setUserInformation(result);
      });
  }, []);

  return (
    <div>
      <NavbarsAdmin></NavbarsAdmin>
      <div style={{ marginTop: "50px" }}>
        <div>
          {" "}
          <h3>
            {" "}
            <span style={{ color: "#53899A" }}>User Name :</span>{" "}
            {userInformation.userName}{" "}
          </h3>{" "}
        </div>
        <div>
          <h3>
            {" "}
            <span style={{ color: "#53899A" }}>User Email :</span>{" "}
            {userInformation.userEmail}{" "}
          </h3>{" "}
        </div>
        <div>
          <h3>
            {" "}
            <span style={{ color: "#53899A" }}>User Location :</span>{" "}
            {userInformation.userLocation}{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
