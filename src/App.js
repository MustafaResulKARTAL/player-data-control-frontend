import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Users from "./component/Users/Users";
import Bombs from "./component/Bombs/Bombs";
import Armor from "./component/Armors/Armors";
import Guns from "./component/Guns/Guns";
import Inventorty from "./component/Inventory/Inventory";
import Register from "./component/Register/Register";
import Logins from "./component/Logins/Logins";
import BombCreate from "./component/Bombs/BombCreate";
import GunCreate from "./component/Guns/GunCreate";
import { Redirect } from "react-router-dom";
import UserInventory from "./component/Inventory/UserInventory";
import ArmorCreate from "./component/Armors/ArmorCreate";
import UserHome from "./component/UserHome/UserHome";
import Unauthorized from "./component/Unauthorized/Unauthorized";
import ForUserBomb from "./component/Bombs/ForUserBomb";
import GunsForUser from "./component/Guns/GunsForUser";
import ArmorsForUser from "./component/Armors/ArmorsForUser";
import Armors from "./component/Armors/Armors";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/register" component={Register}></Route>

          <Route exact path="/" component={UserHome}>
            {localStorage.getItem("currentUserId") == null ? (
              <Redirect to="/auth/login" />
            ) : (
              <UserHome />
            )}
          </Route>

          <Route exact path="/admin/users" component={Users}>
            {localStorage.getItem("role") != "ADMIN" ? (
              <Unauthorized />
            ) : (
              <Users />
            )}
          </Route>

          <Route exact path="/bombs" component={Bombs}>
            {localStorage.getItem("role") == "ADMIN" ? (
              <Bombs />
            ) : (
              <Redirect to="/bombsforuser" />
            )}
          </Route>

          <Route exact path="/armors" component={Armor}>
            {localStorage.getItem("role") == "ADMIN" ? (
              <Armors />
            ) : (
              <Redirect to="/armorsforuser" />
            )}
          </Route>

          <Route exact path="/guns" component={Guns}>
            {localStorage.getItem("role") == "ADMIN" ? (
              <Guns />
            ) : (
              <Redirect to="/gunsforuser" />
            )}
          </Route>

          <Route exact path="/guns/create" component={GunCreate}>
            {localStorage.getItem("role") != "ADMIN" ? (
              <Unauthorized />
            ) : (
              <GunCreate />
            )}
          </Route>

          <Route exact path="/inventory" component={Inventorty}>
            {localStorage.getItem("role") != "ADMIN" ? (
              <UserInventory />
            ) : (
              <Inventorty />
            )}
          </Route>

          <Route exact path="/userinventory" component={UserInventory}></Route>

          <Route exact path="/armors/create" component={ArmorCreate}>
            {localStorage.getItem("role") != "ADMIN" ? (
              <Unauthorized />
            ) : (
              <ArmorCreate />
            )}
          </Route>

          <Route exact path="/auth/login">
            {localStorage.getItem("currentUserId") != null ? (
              <Redirect to="/" />
            ) : (
              <Logins />
            )}
          </Route>

          <Route exact path="/bombs/create" component={BombCreate}>
            {localStorage.getItem("role") != "ADMIN" ? (
              <Unauthorized />
            ) : (
              <BombCreate />
            )}
          </Route>

          <Route exact path="/bombsforuser" component={ForUserBomb}></Route>
          <Route exact path="/gunsforuser" component={GunsForUser}></Route>
          <Route exact path="/armorsforuser" component={ArmorsForUser}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
