import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navlink extends Component {
  render() {
    return (
      <div className="nav">
        <h4
          style={{ color: " white", fontSize: "x-large", fontWeight: "bold" }}
        >
          ZTRR
        </h4>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Navlink;
