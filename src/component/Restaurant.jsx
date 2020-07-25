import React, { Component } from "react";
import Axios from "axios";

class Restaurant extends Component {
  state = {
    restaurant: [],
  };
  async componentDidMount() {
    await Axios.get(
      "https://developers.zomato.com/api/v2.1/collections?city_id=291",
      {
        headers: {
          "user-key": "1d4a49f074a882ca0016e5d98a8da6fb",
        },
      }
    ).then((response) => {
      this.setState({ restaurant: response.data.collections });
    });
  }
  listRestaurants() {
    return this.state.restaurant.map((eachRestaurant) => {
      return (
        <ul>
          <img
            src={eachRestaurant.collection.image_url}
            alt={eachRestaurant.title}
          />
          <li>{eachRestaurant.collection.title}</li>
          <li>{eachRestaurant.collection.description}</li>
          <a href={eachRestaurant.collection.url}>
            {eachRestaurant.collection.url}
          </a>
        </ul>
      );
    });
  }
  render() {
    return (
      <div>
        <h1>Zomato Restaurant Collections</h1>
        {this.listRestaurants()}
      </div>
    );
  }
}

export default Restaurant;
