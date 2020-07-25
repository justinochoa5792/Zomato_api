import React, { Component } from "react";
import { Link } from "react-router-dom";

class home extends Component {
  render() {
    return (
      <div>
        <Link to="./restaurant">Restaurant</Link>
        <h1>Home</h1>
      </div>
    );
  }
}

export default home;
