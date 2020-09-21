import React from "react";
import ImageCard from './ImageCard'
import "./ImageList.css";

class ImageList extends React.Component {
  state = { display: {display: 'none'}}
  
  getImages() {
  
    return this.props.images.map((image) => {
      return <ImageCard key={image.id} image={image} />
    })
  }

  componentDidUpdate () {
    if (this.props.images.length > 0 && this.state.display.display === 'none') {
      this.setState({display: {}});
    }
  }

  render() {
    return (
      <div className="image-list" style={this.state.display}>
        {this.getImages()}
      </div>
    );
  }
}

export default ImageList;
