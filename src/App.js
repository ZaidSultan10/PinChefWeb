import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomeFeed from "./screens/homefeedScreen/HomeFeed";
import UserOnBoarding from "./screens/userOnBoarding/UserOnBoarding";
import Signin from "./screens/signin/Signin";
import UserSignIn from "./components/userSignIn/UserSignIn";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={UserOnBoarding} />
        <Route path="/homepage" exact component={HomeFeed} />
        <Route path="/usersignin" exact>
          <Signin>
            <UserSignIn />
          </Signin>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
