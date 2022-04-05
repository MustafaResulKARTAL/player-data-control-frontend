import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import NavbarsAdmin from "../Navbars/NavbarsAdmin";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import GunUpdate from "./GunUpdate";

function Guns() {
  const [gunList, setGunList] = useState([]);

  const [updateButton, setUpdateButton] = useState(0);
  const [gunId, setGunId] = useState("");
  const [gunName, setGunName] = useState("");
  const [gunType, setGunType] = useState("");
  const [gunClipCapasity, setGunClipCapasity] = useState("");
  const [searchValue, setSearchValue] = useState("");

  let history = useHistory();

  useEffect(() => {
    fetch("/guns")
      .then((res) => res.json())
      .then((result) => {
        setGunList(result);
      });
  }, []);

  const deleteGun = (value) => {
    console.log(value);

    fetch("/guns/" + value, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    history.go(0);
  };

  const updateGun = (
    gunIdValue,
    gunNameValue,
    gunTypeValue,
    gunClipCapasityValue
  ) => {
    setGunId(gunIdValue);
    setGunName(gunNameValue);
    setGunType(gunTypeValue);
    setGunClipCapasity(gunClipCapasityValue);
    setUpdateButton(1);
  };

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
                <th>Update / Delete</th>
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
                    <td>
                      {" "}
                      <button
                        onClick={() =>
                          updateGun(
                            guns.id,
                            guns.gunName,
                            guns.gunType,
                            guns.gunClipCapasity
                          )
                        }
                      >
                        <FaEdit></FaEdit>
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <button onClick={() => deleteGun(guns.id)}>
                        <AiFillDelete></AiFillDelete>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
      {updateButton == 1 ? (
        <GunUpdate
          gunId={gunId}
          gunName={gunName}
          gunType={gunType}
          gunClipCapasity={gunClipCapasity}
        ></GunUpdate>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Guns;
