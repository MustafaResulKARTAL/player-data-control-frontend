import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import NavbarsAdmin from "../Navbars/NavbarsAdmin";

function GunsForUser() {
  const [searchValue, setSearchValue] = useState("");
  const [gunList, setGunList] = useState([]);

  useEffect(() => {
    fetch("/guns")
      .then((res) => res.json())
      .then((result) => {
        setGunList(result);
      });
  }, []);

  return (
    <div>
      <NavbarsAdmin></NavbarsAdmin>
      <div className="d-flex justify-content-center">
        <div style={{ margin: "50px" }}>
          <div className="form-group">
            <input
              type="search"
              className="form-control"
              id="search"
              aria-describedby="emailHelp"
              placeholder="Search ..."
              onChange={(i) => setSearchValue(i.target.value)}
            />
          </div>

          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Gun Name</th>
                <th>Gun Type</th>
                <th>Gun Clip Capasity</th>
              </tr>
            </thead>
            <tbody>
              {gunList
                .filter((value) => {
                  if (searchValue === "") {
                    return value;
                  } else if (
                    value.gunName
                      .toString()
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    value.gunType
                      .toString()
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    value.gunClipCapasity
                      .toString()
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  ) {
                    return value;
                  }
                })

                .map((guns) => (
                  <tr>
                    <td>{guns.gunName}</td>
                    <td>{guns.gunType}</td>
                    <td>{guns.gunClipCapasity}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default GunsForUser;
