import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import NavbarsAdmin from "../Navbars/NavbarsAdmin";

function ArmorsForUser() {
  const [armorList, setArmorList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("/armors")
      .then((res) => res.json())
      .then((result) => {
        setArmorList(result);
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
                <th>Armor Name</th>
                <th>Armor Weight</th>
              </tr>
            </thead>
            <tbody>
              {armorList
                .filter((value) => {
                  if (searchValue === "") {
                    return value;
                  } else if (
                    value.armorName
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    value.armorWeight
                      .toString()
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((armors) => (
                  <tr>
                    <td>{armors.armorName}</td>
                    <td>{armors.armorWeight}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ArmorsForUser;
