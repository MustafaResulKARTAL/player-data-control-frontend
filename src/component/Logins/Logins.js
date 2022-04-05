import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Logins() {
  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState();
  let history = useHistory();

  const handleUserName = (value) => {
    setUserName(value);
    console.log(userName);
  };
  const handlePassword = (value) => {
    setUserPassword(value);
    console.log(userPassword);
  };
  const handleSubmit = () => {
    console.log(userName);
    console.log(userPassword);
    loginRequest();
    setTimeout(yonlendir, 500);
  };
  const yonlendir = () => {
    history.go(0);
  };
  const loginRequest = () => {
    fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        userPassword: userPassword,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.userId != null && result.userName != null) {
          localStorage.setItem("currentUserId", result.userId);
          localStorage.setItem("userName", result.userName);
          localStorage.setItem("role", result.userRole);
          console.log("userName");
        } else {
          console.log("hata bloğu");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="container"
      style={{ padding: "150px", backgroundColor: "#EDFCFE", height: "800px" }}
    >
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
                onChange={(i) => handleUserName(i.target.value)}
              />
              <label htmlFor="userName" style={{ marginLeft: "15px" }}>
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
                onChange={(i) => handlePassword(i.target.value)}
              />
              <label htmlFor="password" style={{ marginLeft: "15px" }}>
                Password
              </label>
            </div>
          </div>
          <div
            className="row align-items-end"
            style={{ width: "100%", marginTop: "10px" }}
          >
            <div className="form-floating mb-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleSubmit()}
              >
                Login
              </button>
            </div>
          </div>
          <div
            className="row align-items-end"
            style={{ width: "100%", marginTop: "10px" }}
          >
            <div className="form-floating mb-3">
              <p>To Register</p>
              <button
                type="button"
                className="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/register";
                }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logins;
