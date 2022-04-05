import React, { useEffect, useState } from "react";
import { Table, Accordion } from "react-bootstrap";
import NavbarsAdmin from "../Navbars/NavbarsAdmin";

function UserInventory() {
  const [userInventoryList, setUserInventoryList] = useState([]);
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    fetch("/users/" + localStorage.getItem("currentUserId"))
      .then((res) => res.json())
      .then((result) => {
        setUserInventoryList(result);
        setLoading(1);
      });
  }, []);

  return (
    <div>
      <NavbarsAdmin></NavbarsAdmin>

      <div className="d-flex align-content-end flex-wrap">
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
                <th>
                  My Inventory No :{" "}
                  {loading == 1 ? userInventoryList.inventory.id : ""}{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Accordion style={{ color: "#080000" }}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Used Gun No:
                        {loading == 1
                          ? userInventoryList.inventory.gun.id
                          : ""}{" "}
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
                              <td>
                                Gun Name :{" "}
                                {loading == 1
                                  ? userInventoryList.inventory.gun.gunName
                                  : ""}{" "}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Gun Type :{" "}
                                {loading == 1
                                  ? userInventoryList.inventory.gun.gunType
                                  : ""}{" "}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Gun Clip Capasity :
                                {loading == 1
                                  ? userInventoryList.inventory.gun
                                      .gunClipCapasity
                                  : ""}{" "}
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Used Armor No:{" "}
                        {loading == 1
                          ? userInventoryList.inventory.armor.id
                          : ""}
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
                                Armor Name :
                                {loading == 1
                                  ? userInventoryList.inventory.armor.armorName
                                  : ""}{" "}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Armor Weight :{" "}
                                {loading == 1
                                  ? userInventoryList.inventory.armor
                                      .armorWeight
                                  : ""}
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Used Bomb No:
                        {loading == 1
                          ? userInventoryList.inventory.bomb.id
                          : " "}{" "}
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
                              <td>
                                Bomb Type :{" "}
                                {loading == 1
                                  ? userInventoryList.inventory.bomb.bombType
                                  : ""}{" "}
                              </td>
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
      </div>
    </div>
  );
}

export default UserInventory;
