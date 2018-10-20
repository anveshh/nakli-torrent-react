import React, { Component } from 'react';
import MovieCard from './MovieCard';
import './../scss/Main.scss';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies : [],
      error: ''
    }
  }

  componentWillMount() {
    fetch('https://yts.am/api/v2/list_movies.json?limit=50').
    then(res => {
      if(res.status === 200) {
        console.log('fetch')
        return res.json();
      } else {
        throw new Error("API Not Fetched");
      }
    }).then(json => this.setState({
      movies : json.data.movies
    }));
  }

  render() {
    const {movies} = this.state
    return (
      <main>
        <h2 className="Movie">Movies All The Time</h2>
        <div className="movie-container">
          {
            movies.map((movie,key) => (
              <MovieCard details={movie} key={key}/>
            ))
          }
        </div>
      </main>
    );
  }
}

export default Main;