import React, { useEffect, useState } from "react";
import { Table, Accordion } from "react-bootstrap";
import NavbarsAdmin from "../Navbars/NavbarsAdmin";

function Inventory() {
  const [inventoryList, setInventoryList] = useState([]);

  useEffect(() => {
    fetch("/inventory")
      .then((res) => res.json())
      .then((result) => {
        setInventoryList(result);
        console.log(inventoryList);
      });
  }, []);

  return (
    <div>
      <NavbarsAdmin></NavbarsAdmin>

      <div className="d-flex align-content-end flex-wrap">
        {inventoryList.map((inventorys) => (
          <div
            style={{
              width: "400px",
              marginLeft: "140px",
              marginRight: "140px",
              marginTop: "40px",
            }}
          >
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Inventory No : {inventorys.id}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Accordion style={{ color: "#080000" }}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Used Gun No: {inventorys.gun.id}
                        </Accordion.Header>
                        <Accordion.Body>
                          <Table striped bordered hover variant="dark">
                            <thead>
                              <tr>
                                <th>Gun</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Gun Name : {inventorys.gun.gunName} </td>
                              </tr>
                              <tr>
                                <td>Gun Type : {inventorys.gun.gunType} </td>
                              </tr>
                              <tr>
                                <td>
                                  Gun Clip Capasity :{" "}
                                  {inventorys.gun.gunClipCapasity}
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Used Armor No:{inventorys.armor.id}
                        </Accordion.Header>
                        <Accordion.Body>
                          <Table striped bordered hover variant="dark">
                            <thead>
                              <tr>
                                <th>Armor</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  Armor Name : {inventorys.armor.armorName}{" "}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Armor Weight : {inventorys.armor.armorWeight}{" "}
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Used Bomb No:{inventorys.bomb.id}
                        </Accordion.Header>
                        <Accordion.Body>
                          <Table striped bordered hover variant="dark">
                            <thead>
                              <tr>
                                <th>Bomb</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Bomb Type : {inventorys.bomb.bombType} </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inventory;
