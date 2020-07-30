import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class Restaurant extends Component {
  state = {
    restaurant: [],
  };
  async componentDidMount() {
    await Axios.get(
      "https://developers.zomato.com/api/v2.1/location_details?entity_id=291&entity_type=city",
      {
        headers: {
          "user-key": "1d4a49f074a882ca0016e5d98a8da6fb",
        },
      }
    ).then((response) => {
      console.log(response.data.best_rated_restaurant);
      this.setState({ restaurant: response.data.best_rated_restaurant });
    });
  }
  listRestaurants() {
    return this.state.restaurant.map((eachRestaurant) => {
      return (
        <ul>
          <li style={{ textDecoration: "underline", fontWeight: "bold" }}>
            {eachRestaurant.restaurant.name}
          </li>
          <li>{eachRestaurant.restaurant.cuisines}</li>
          <li>{eachRestaurant.restaurant.timings}</li>
          <li>{eachRestaurant.restaurant.location.address}</li>
        </ul>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="miami">
          <h1>Zomato Best Rated Restaurants in Miami</h1>
          {this.listRestaurants()}
        </div>
      </div>
    );
  }
}

export default Restaurant;
