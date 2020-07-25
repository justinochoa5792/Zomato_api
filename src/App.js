import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./component/home.jsx";
import Restaurant from "./component/Restaurant.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => <Home {...props} />}
          ></Route>
          <Route
            exact
            path="/restaurant"
            component={(props) => <Restaurant {...props} />}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;