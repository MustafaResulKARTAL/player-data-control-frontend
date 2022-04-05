import React, { useState } from "react";
import NavbarsAdmin from "../Navbars/NavbarsAdmin";
import { useHistory } from "react-router-dom";

function GunCreate() {
  const [gunName, setGunName] = useState([]);
  const [gunType, setGunType] = useState([]);
  const [gunClipCapasity, setGunClipCapasity] = useState([]);

  let history = useHistory();

  const handleGunName = (value) => {
    setGunName(value);
  };
  const handleGunType = (value) => {
    setGunType(value);
  };
  const handleGunClipCapasity = (value) => {
    setGunClipCapasity(value);
  };
  const handleSubmit = () => {
    saveGun();
    history.go(0);
  };
  const saveGun = () => {
    fetch("/guns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    <div>
      <NavbarsAdmin></NavbarsAdmin>
      <div
        className="container"
        style={{ padding: "150px", backgroundColor: "#EDFCFE" }}
      >
        <h2 style={{ marginTop: "-50px", marginBottom: "50px" }}>Gun Create</h2>
        <form>
          <div className="" style={{ paddingInline: "150px" }}>
            <div className="form-group">
              <div
                className="row align-items-start"
                style={{ width: "100%", marginTop: "10px" }}
              >
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="gunName"
                    placeholder="example"
                    onChange={(i) => handleGunName(i.target.value)}
                  />
                  <label htmlFor="gunName" style={{ marginLeft: "15px" }}>
                    Gun Name
                  </label>
                </div>
              </div>

              <div
                className="row align-items-center  "
                style={{ width: "100%", marginTop: "10px" }}
              >
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="gunType"
                    placeholder="example"
                    onChange={(i) => handleGunType(i.target.value)}
                  />
                  <label htmlFor="gunType" style={{ marginLeft: "15px" }}>
                    Gun Type
                  </label>
                </div>
              </div>
              <div
                className="row align-items-center  "
                style={{ width: "100%", marginTop: "10px" }}
              >
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="gunClipCapasity"
                    placeholder="example"
                    onChange={(i) => handleGunClipCapasity(i.target.value)}
                  />
                  <label
                    htmlFor="gunClipCapasity"
                    style={{ marginLeft: "15px" }}
                  >
                    Gun Clip Capasity (exampe : 14)
                  </label>
                </div>
              </div>
              <div
                className="row align-items-center  "
                style={{ width: "100%", marginTop: "10px" }}
              >
                <div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GunCreate;
