import React, { Component } from 'react';


export class Garage extends Component {
  render() {
    return <div>
        <h1>Who lives in my {this.props.size} Garage?</h1>

    </div>;
  }
}

export default Garage;
