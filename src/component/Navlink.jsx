import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navlink extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Navlink;
