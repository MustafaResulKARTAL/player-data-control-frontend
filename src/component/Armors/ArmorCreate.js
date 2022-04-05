import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NavbarsAdmin from "../Navbars/NavbarsAdmin";

function ArmorCreate() {
  const [armorName, setArmorName] = useState([]);
  const [armorWeight, setArmorWeight] = useState([]);
  let history = useHistory();

  const handleArmorName = (value) => {
    setArmorName(value);
  };
  const handleArmorWeight = (value) => {
    setArmorWeight(value);
  };
  const handleSubmit = () => {
    saveArmor();
    history.push("/armors");
  };

  const saveArmor = () => {
    fetch("/armors", {
      method: "POST",
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
    <div>
      <NavbarsAdmin></NavbarsAdmin>

      <div
        className="container"
        style={{
          padding: "150px",
          backgroundColor: "#EDFCFE",
          height: "700px",
        }}
      >
        <h2 style={{ marginTop: "-50px", marginBottom: "50px" }}>
          Armor Create
        </h2>
        <form>
          <div style={{ paddingInline: "150px" }}>
            <div className="form-group">
              <div
                className="row align-items-start"
                style={{ width: "100%", marginTop: "10px" }}
              >
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="armorName"
                    placeholder="name@example.com"
                    onChange={(i) => handleArmorName(i.target.value)}
                  />
                  <label htmlFor="armorName" style={{ marginLeft: "15px" }}>
                    Armor Name
                  </label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="armorWeight"
                    placeholder="name@example.com"
                    onChange={(i) => handleArmorWeight(i.target.value)}
                  />
                  <label htmlFor="armorWeight" style={{ marginLeft: "15px" }}>
                    Armor Weight
                  </label>
                </div>
              </div>
              <div
                className="row align-items-end"
                style={{ width: "100%", marginTop: "10px" }}
              >
                <div className="form-floating mb-3">
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

export default ArmorCreate;
