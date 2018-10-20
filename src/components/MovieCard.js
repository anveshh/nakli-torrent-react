  import React, { Component } from 'react';

export default class MovieCard extends Component {
  render() {
    const {title_english, medium_cover_image, year, rating} = this.props.details;

    return (
      <div className="MovieCard">
        <div className="MovieCard-cover">
          <img src={medium_cover_image} alt={title_english}/>
        </div>
        <div className="MovieCard-title-container">
          <h3 className="MovieCard-title">{title_english}</h3>
        </div>
        <div className="MovieCard-info">
          <p>Year : <span className="movie-year">{year}</span></p>
          <p>Rating : <span className="movie-year">{rating}</span></p>
        </div> 
      </div>
    );
  }
}