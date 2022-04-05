import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ArmorUpdate(props) {
  let history = useHistory();
  const [updateArmorName, setUpdateArmorName] = useState("");
  const [updateArmorWeight, setUpdateArmorWeight] = useState("");

  const handleArmorName = (value) => {
    setUpdateArmorName(value);
  };
  const handleArmorWeight = (value) => {
    setUpdateArmorWeight(value);
  };
  const handleUpdate = () => {
    updateArmorFunc(props.armorId, updateArmorName, updateArmorWeight);
    refleshPage();
  };
  const refleshPage = () => {
    history.go(0);
  };
  const updateArmorFunc = (armorId, armorName, armorWeight) => {
    fetch("/armors/" + armorId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        armorName: armorName,
        armorWeight: armorWeight,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ marginBottom: "150px" }}>
      <div
        style={{
          width: "500px",
          marginLeft: "520px",
          backgroundColor: "#F4F9EB",
          padding: "20px",
        }}
      >
        <h6>Armor Update</h6>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="armorName"
            placeholder="example"
            defaultValue={props.armorName}
            onChange={(i) => handleArmorName(i.target.value)}
          />
          <label htmlFor="armorName"> Armor Name </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="armorWeight"
            placeholder="example"
            defaultValue={props.armorWeight}
            onChange={(i) => handleArmorWeight(i.target.value)}
          />
          <label htmlFor="armorWeight"> Armor Weight </label>
        </div>
        <button className="btn btn-warning" onClick={() => handleUpdate()}>
          Update
        </button>
      </div>
    </div>
  );
}

export default ArmorUpdate;
