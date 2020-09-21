import React from "react";
import "./ImageCard.css";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 1 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
    window.addEventListener("resize", this.debounce(this.setSpans, 50));
  }

  setSpans = () => {
    const spans = this.imageRef.current.clientHeight;
    this.setState({ spans: spans });
  };

  debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
