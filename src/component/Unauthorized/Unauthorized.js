import React from "react";
import NavbarsAdmin from "../Navbars/NavbarsAdmin";

function Unauthorized() {
  return (
    <div>
      <NavbarsAdmin></NavbarsAdmin>
      <h3 style={{ marginTop: "50px", color: "red" }}>Unauthorized User !!</h3>
    </div>
  );
}

export default Unauthorized;
