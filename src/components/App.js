import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
    foundMessage: ''
  }

   onSearchSubmit = async (term) => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            query: term,
          },
          headers: {
            Authorization:
              "Client-ID 8EjyvMwSklYrEd1YqP_uxltqPjimDJOHMQHhVuFOnQ8",
          },
        }
      );

      this.setState({ images: response.data.results });
      this.setState({
        foundMessage: `Found ${this.state.images.length} Images`
      });
    }
    catch (error) {
      console.log(error.message);
    }
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.foundMessage}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
