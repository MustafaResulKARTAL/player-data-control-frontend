import { button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Navbar, Table } from "react-bootstrap";
import Navbars from "../Navbars/NavbarsAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarsAdmin from "../Navbars/NavbarsAdmin";

function Users() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((result) => {
        setPostList(result);
      });
  }, []);

  return (
    <div>
      <NavbarsAdmin></NavbarsAdmin>
      <div className="d-flex align-content-end flex-wrap">
        {postList.map((users) => (
          <div
            style={{
              width: "400px",
              marginLeft: "140px",
              marginRight: "140px",
              marginTop: "40px",
            }}
          >
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>User No : {users.id} </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>User Name : {users.userName} </td>
                </tr>
                <tr>
                  <td>User Email : {users.userEmail} </td>
                </tr>
                <tr>
                  <td>User Location : {users.userLocation} </td>
                </tr>
                <tr>
                  <td>User Role : {users.role} </td>
                </tr>
                <tr>
                  <td>User Inventorty No :{users.inventory.id} </td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
