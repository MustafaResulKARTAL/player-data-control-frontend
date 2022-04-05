import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import NavbarsAdmin from "../Navbars/NavbarsAdmin";

function ForUserBomb() {
  const [searchValue, setSearchValue] = useState("");
  const [bombList, setBombList] = useState([]);

  useEffect(() => {
    fetch("/bombs")
      .then((res) => res.json())
      .then((result) => {
        setBombList(result);
      });
  }, []);
  return (
    <div>
      <NavbarsAdmin></NavbarsAdmin>

      <div className="d-flex justify-content-center">
        <div style={{ width: "400px", margin: "50px" }}>
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
                <th>Bombs</th>
              </tr>
            </thead>
            <tbody>
              {bombList
                .filter((value) => {
                  if (searchValue === "") {
                    return value;
                  } else if (
                    value.bombType
                      .toString()
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((bombs) => (
                  <tr>
                    <td key={bombs.id}>{bombs.bombType}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ForUserBomb;
