import React from 'react';
import './App.css';
import Quotes from './Quotes';
// import React, {useState} from 'react'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      qoute: Quotes[10],
      rgb:''
    }
    
  }
  getRandomNumber = () =>{
    return Math.floor(Math.random()*Quotes.length)
  }
  handleClick = () =>{
    const num = this.getRandomNumber()
    this.setState({qoute:Quotes[num]},rgb:this.)
  }

  getRandomColor = () => {
    return `rgb(
      ${Math.round(Math.random()*155)}
      ${Math.round(Math.random()*155)}
      ${Math.round(Math.random()*155)}

      
  //   )`
    }
  // }
  render(){
    return (
      <div className="App">
        <h1>{this.state.qoute.quote} {this.state.qoute.author}</h1>
        <button onClick={this.handleClick}>Change quote</button>
      </div>
    )
  }
}





export default App;
