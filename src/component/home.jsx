import React, { Component } from "react";
import { Link } from "react-router-dom";

class home extends Component {
  render() {
    return (
      <section>
        <h1>Home</h1>
        <div>
          <button>
            <Link to="./restaurant">Top-rated Restaurants</Link>{" "}
          </button>
        </div>
      </section>
    );
  }
}

export default home;
