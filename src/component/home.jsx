import React, { Component } from "react";
import { Link } from "react-router-dom";

class home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Zomato Top Rated Restaurants</h1>
        <div>
          <button className="btn">
            <Link to="/restaurant">Top-rated in Miami</Link>{" "}
          </button>
          <button className="btn">
            <Link to="/Newyork">Top-rated in New York</Link>{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default home;
