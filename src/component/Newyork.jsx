import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class Newyork extends Component {
  state = {
    ny: [],
  };
  async componentDidMount() {
    await Axios.get(
      "https://developers.zomato.com/api/v2.1/location_details?entity_id=280&entity_type=city",
      {
        headers: { "user-key": "1d4a49f074a882ca0016e5d98a8da6fb" },
      }
    ).then((res) => {
      console.log(res.data.best_rated_restaurant);
      this.setState({ ny: res.data.best_rated_restaurant });
    });
  }
  getRestaurants() {
    return this.state.ny.map((nyRest) => {
      return (
        <ul>
          <img
            src={nyRest.restaurant.featured_image}
            alt={nyRest.restaurant.name}
            style={{ height: "40vh" }}
          />
          <li style={{ textDecoration: "underline", fontWeight: "bold" }}>
            {nyRest.restaurant.name}
          </li>
          <li>{nyRest.restaurant.cuisines}</li>
          <li>{nyRest.restaurant.timings}</li>
          <li>{nyRest.restaurant.location.address}</li>
        </ul>
      );
    });
  }
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>Zomato Best Rated Restaurants in New York</h1>
        {this.getRestaurants()}
      </div>
    );
  }
}

export default Newyork;
