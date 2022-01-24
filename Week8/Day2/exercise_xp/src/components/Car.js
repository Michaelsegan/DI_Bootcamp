import React from 'react';
import Garage from './Garage';




class Car extends React.Component {
    constructor(){
        super()   
        this.state = {
            color: 'blue'

        }
    }
    render() {
      return(
          <>
          <h1>This car is {this.props.carinfo.model} {this.state.color}</h1>
          <Garage size='small'/>

          </>
      ) 
      
    }
  }

export default Car;