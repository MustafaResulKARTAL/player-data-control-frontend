import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NavbarsAdmin from "../Navbars/NavbarsAdmin";

function BombCreate() {
  const [bombType, setBombType] = useState("");
  let history = useHistory();

  const saveBomb = () => {
    fetch("/bombs", {
      method: "POST",
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

  const handleBombType = (value) => {
    setBombType(value);
  };

  const handleSubmit = () => {
    saveBomb();
    history.push("/bombs");
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
          Bomb Create
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
                    id="bombType"
                    placeholder="name@example.com"
                    onChange={(i) => handleBombType(i.target.value)}
                  />
                  <label htmlFor="bombType" style={{ marginLeft: "15px" }}>
                    Bomb Type
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

export default BombCreate;
