import React, { Component } from 'react';

export class Events extends Component {
    constructor() {
        super()
        this.state = {
            isToggleOn: true
        }
        
    }
    clickMe = () => {
        alert('you clicked me man!')
    
    }
    handleKeyPress = (e) => {
        if(e.key == 'Enter') {
            alert(`you entered enter ${e.target.value} `)
        }
        

    }
    handleClick = ()=>{
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
          }));
    }
    
  render() {
      
    return <div>
        <button onClick={this.clickMe}>click me</button>
        <input onKeyPress={this.handleKeyPress} type="text" placeholder="hey rosi"></input>
        <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>;
  }
}

export default Events;
