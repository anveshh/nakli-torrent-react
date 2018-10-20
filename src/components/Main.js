import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies : []
    }
  }

  componentWillMount() {
    fetch('https://gist.githubusercontent.com/nnnkit/84a2e3ad069128604614fd5e1c728d94/raw/4a2593181e54ed3d90ab8dc8017f0242641cd98d/data.json').
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
    // console.log(this.state)
    return (
      <main>
        {/* <h2 className="Mov"></h2> */}
      </main>
    );
  }
}

export default Main;