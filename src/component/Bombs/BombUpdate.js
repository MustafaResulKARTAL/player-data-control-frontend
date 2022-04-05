import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function BombUpdate(props) {
  let history = useHistory();
  const [updateBombType, setUpdateBombType] = useState("");

  const handleUpdate = () => {
    updateBombTypeFunc(props.bombId, updateBombType);
    refleshPage();
  };
  const refleshPage = () => {
    history.go(0);
  };
  const handleBombType = (value) => {
    setUpdateBombType(value);
  };
  const updateBombTypeFunc = (bombId, bombType) => {
    fetch("/bombs/" + bombId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bombType: bombType,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        width: "500px",
        marginLeft: "520px",
        backgroundColor: "#F4F9EB",
        padding: "20px",
      }}
    >
      <h6>Bomb Update</h6>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="bombType"
          placeholder="example"
          defaultValue={props.bombType}
          onChange={(i) => handleBombType(i.target.value)}
        />
        <label htmlFor="bombType">Bomb Type</label>
      </div>
      <button className="btn btn-warning" onClick={() => handleUpdate()}>
        Update
      </button>
    </div>
  );
}

export default BombUpdate;
