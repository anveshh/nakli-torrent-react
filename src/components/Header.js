import React, { Component } from 'react';
import './../scss/base.scss';
import './../scss/Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="wrapper grid-2">
          <div className="logo-container">
            <a href="/home" className="logo inline">Nakli Torrents</a>
          </div>
          <div className="search-container">
            <input type="text" placeholder="Search Movies" className="search-bar" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;