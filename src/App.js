import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeFeed from "./screens/homefeedScreen/HomeFeed";
import UserOnBoarding from "./screens/userOnBoarding/UserOnBoarding";
import Signin from "./screens/signin/Signin";
import UserSignIn from "./components/userSignIn/UserSignIn";
import SamplePage from './screens/samplePage/SamplePage'


function App() {
  return (
    <div className="App">
      <Router>

      
      <Switch>
        <Route path="/" exact component={UserOnBoarding} />
        <Route path="/homepage" exact component={HomeFeed} />
        <Route path='/samplepage' exact component={SamplePage} />
        <Route path="/usersignin" exact>
          <Signin>
            <UserSignIn />
          </Signin>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
