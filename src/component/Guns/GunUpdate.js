import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function GunUpdate(props) {
  let history = useHistory();
  const [updateGunName, setUpdateGunName] = useState("");
  const [updateGunType, setUpdateGunType] = useState("");
  const [updateGunClipCapasity, setUpdateGunClipCapasity] = useState("");

  const handleGunName = (value) => {
    setUpdateGunName(value);
  };
  const handleGunType = (value) => {
    setUpdateGunType(value);
  };
  const handleGunClipCapasity = (value) => {
    setUpdateGunClipCapasity(value);
  };
  const handleUpdate = () => {
    gunUpdateFunc(
      props.gunId,
      updateGunName,
      updateGunType,
      updateGunClipCapasity
    );
    refleshPage();
  };
  const refleshPage = () => {
    history.go(0);
  };
  const gunUpdateFunc = (gunId, gunName, gunType, gunClipCapasity) => {
    fetch("/guns/" + gunId, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        gunName: gunName,
        gunType: gunType,
        gunClipCapasity: gunClipCapasity,
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
        <h6>Gun Update</h6>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="gunName"
            placeholder="example"
            defaultValue={props.gunName}
            onChange={(i) => handleGunName(i.target.value)}
          />
          <label htmlFor="gunName"> Gun Name </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="gunType"
            placeholder="example"
            defaultValue={props.gunType}
            onChange={(i) => handleGunType(i.target.value)}
          />
          <label htmlFor="gunType"> Gun Type </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="gunClipCapasity"
            placeholder="example"
            defaultValue={props.gunClipCapasity}
            onChange={(i) => handleGunClipCapasity(i.target.value)}
          />
          <label htmlFor="gunClipCapasity"> Gun Clip Capasity </label>
        </div>

        <button className="btn btn-warning" onClick={() => handleUpdate()}>
          Update
        </button>
      </div>
    </div>
  );
}
export default GunUpdate;
