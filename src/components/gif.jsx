import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Gif extends Component {

  handleClick = () => {
    // change the state
    this.props.selectGif(this.props.id);
  }

  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/200w.gif`;
    return (
        <img className="gif" src={src} onClick={this.handleClick}/>
      );
  }
}

export default Gif;
