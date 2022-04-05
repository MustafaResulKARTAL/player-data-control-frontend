import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Register() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userLocation, setUserLocation] = useState("");

  let history = useHistory();

  const createUser = () => {
    fetch("/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword,
        userLocation: userLocation,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console(err));

    history.go(0);
  };

  return (
    <div
      className="container"
      style={{ padding: "150px", backgroundColor: "#EDFCFE" }}
    >
      <form>
        <div className="" style={{ paddingInline: "150px" }}>
          <div className="form-group">
            <div
              className="row align-items-start"
              style={{ width: "100%", marginTop: "10px" }}
            >
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  placeholder="name@example.com"
                  onChange={(i) => setUserName(i.target.value)}
                />
                <label for="userName" style={{ marginLeft: "15px" }}>
                  User Name
                </label>
              </div>
            </div>

            <div
              className="row align-items-center  "
              style={{ width: "100%", marginTop: "10px" }}
            >
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="name@example.com"
                  onChange={(i) => setUserPassword(i.target.value)}
                />
                <label for="password" style={{ marginLeft: "15px" }}>
                  Password
                </label>
              </div>
            </div>
            <div
              className="row align-items-center  "
              style={{ width: "100%", marginTop: "10px" }}
            >
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  onChange={(i) => setUserEmail(i.target.value)}
                />
                <label for="email" style={{ marginLeft: "15px" }}>
                  E-mail
                </label>
              </div>
            </div>
            <div
              className="row align-items-center "
              style={{ width: "100%", marginTop: "10px" }}
            >
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="name@example.com"
                  onChange={(i) => setUserLocation(i.target.value)}
                />
                <label for="location" style={{ marginLeft: "15px" }}>
                  Location
                </label>
              </div>
            </div>
            <div
              className="row align-items-center  "
              style={{ width: "100%", marginTop: "10px" }}
            >
              <div>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => createUser()}
                >
                  Register
                </button>
              </div>
            </div>

            <div
              className="row align-items-end"
              style={{ width: "100%", marginTop: "10px" }}
            >
              <div className="form-floating mb-3">
                <p>Are you already registered?</p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/auth/login";
                  }}
                  class="btn btn-success"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
