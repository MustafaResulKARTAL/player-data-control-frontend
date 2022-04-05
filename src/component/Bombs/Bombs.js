import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import NavbarsAdmin from "../Navbars/NavbarsAdmin";
import { useHistory } from "react-router-dom";
import BombUpdate from "./BombUpdate";

function Bomb() {
  const [bombList, setBombList] = useState([]);
  const [updateButton, setUpdateButton] = useState(0);
  const [bombType, setBombType] = useState("");
  const [bombId, setBombId] = useState("");
  const [searchValue, setSearchValue] = useState("");
  let history = useHistory();

  useEffect(() => {
    fetch("/bombs")
      .then((res) => res.json())
      .then((result) => {
        setBombList(result);
      });
  }, []);

  const deleteBomb = (value) => {
    console.log(value);

    fetch("/bombs/" + value, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    history.go(0);
  };

  const updateBomb = (bombId, bombTypeValue) => {
    console.log(bombId);
    console.log(bombTypeValue);
    setBombId(bombId);
    setBombType(bombTypeValue);
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
                <th>Bombs</th>
                <th>Update / Delete</th>
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
                    <td>
                      <button
                        onClick={() => updateBomb(bombs.id, bombs.bombType)}
                      >
                        <FaEdit></FaEdit>
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <button onClick={() => deleteBomb(bombs.id)}>
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
        <BombUpdate bombType={bombType} bombId={bombId}></BombUpdate>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Bomb;
