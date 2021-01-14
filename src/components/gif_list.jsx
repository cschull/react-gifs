import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {

  renderList = () => {
    const gif_array = this.props.gifs.map( gif =>
    <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif}/>);
    return (gif_array);
  }

  render() {
    return (
      <div className='gif-list'>
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
