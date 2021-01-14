import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './components/search_bar';
import GifList from './components/gif_list';
import Gif from './components/gif';



const GIPHY_API_KEY = 'JgXfsVbkw3S5iQ4tYLD0U9HdoXysIdFL';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs : [],
      selectedGifId: 'xT9IgDEI1iZyb2wqo8',
    };
  }


  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, res) => {
        this.setState({
          gifs: res.data
        });
      });
  }

  selector = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        {console.log(`selected gif id: ${this.state.selectedGifId}`)}
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selector}/>
        </div>
      </div>
    );
  }
}

export default App;
