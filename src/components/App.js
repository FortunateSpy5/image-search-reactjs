import React from "react";
import unsplash from '../api/unsplash'
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
    foundMessage: ''
  }

   onSearchSubmit = async (term) => {
    try {
      const response = await unsplash.get( '/search/photos', {
        params: { query: term }
      });

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
      <div className="ui container" style={{ paddingTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <p>{this.state.foundMessage}</p>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
