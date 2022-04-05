import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import NavbarsAdmin from "../Navbars/NavbarsAdmin";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import ArmorUpdate from "./ArmorUpdate";

function Armors() {
  const [armorList, setArmorList] = useState([]);
  const [updateButton, setUpdateButton] = useState(0);
  const [armorId, setArmorId] = useState("");
  const [armorName, setArmorName] = useState("");
  const [armorWeight, setArmorWeight] = useState("");
  const [searchValue, setSearchValue] = useState("");

  let history = useHistory();

  useEffect(() => {
    fetch("/armors")
      .then((res) => res.json())
      .then((result) => {
        setArmorList(result);
      });
  }, []);

  const deleteArmor = (value) => {
    fetch("/armors/" + value, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    history.go(0);
  };
  const updateArmor = (exarmorId, exarmorName, exarmorWeight) => {
    console.log(exarmorName);
    console.log(exarmorId);
    console.log(exarmorWeight);
    setArmorId(exarmorId);
    setArmorName(exarmorName);
    setArmorWeight(exarmorWeight);
    setUpdateButton(1);
  };

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
                <th>Update / Delete</th>
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
                    <td>
                      <button
                        onClick={() =>
                          updateArmor(
                            armors.id,
                            armors.armorName,
                            armors.armorWeight
                          )
                        }
                      >
                        <FaEdit></FaEdit>
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <button onClick={() => deleteArmor(armors.id)}>
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
        <ArmorUpdate
          armorId={armorId}
          armorName={armorName}
          armorWeight={armorWeight}
        ></ArmorUpdate>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Armors;
