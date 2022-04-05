import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function NavbarsAdmin() {
  let history = useHistory();

  const logout = () => {
    localStorage.removeItem("currentUserId");
    localStorage.removeItem("userName");
    window.location.href = "/auth/login";
  };

  return (
    //https://getbootstrap.com/docs/4.3/components/navbar/
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a className="navbar-brand" href="/">
        {localStorage.getItem("userName") != null
          ? localStorage.getItem("userName")
          : "Home"}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <a className="nav-link" href="/inventory">
              Inventories <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/guns">
              Guns
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/armors">
              Armors
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/bombs">
              Bombs
            </a>
          </li>
        </ul>

        {localStorage.getItem("currentUserId") == null ? (
          <a
            className="nav-link mr-3"
            href="/auth/login"
            style={{ color: "white", fontSize: "15px", borderStyle: "solid" }}
          >
            Login
          </a>
        ) : (
          <button onClick={logout} className="btn btn-primary">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavbarsAdmin;
